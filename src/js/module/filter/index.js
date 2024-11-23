
import { reduceStringToNumber } from "../helpers.js";

class DateFilter {
  constructor(options = {}) {
    this.table = document.querySelector(options.tableSelector);
    this.filter = document.querySelector(options.filterSelector);
    this.datePicker = document.getElementById(options.datePickerSelector);
    this.expenses = options.amountsClasses.expenses;
    this.income = options.amountsClasses.income;
    this.currentDate = new Date();

    this.patterns = [
      {
        pattern: /(\d{2})\.(\d{2})\.(\d{4}) (\d{2}):(\d{2})/,
        toDate: (matches) => new Date(matches[3], matches[2] - 1, matches[1], matches[4], matches[5]),
      },
      {
        pattern: /(\d{4}),(\d{2}),(\d{2})/,
        toDate: (matches) => new Date(matches[1], matches[2] - 1, matches[3]),
      },
      {
        pattern: /(\d{2}):(\d{2}) (\d{2})\.(\d{2})\./,
        toDate: (matches) =>
          new Date(new Date().getFullYear(), matches[4] - 1, matches[3], matches[1], matches[2]), // Предполагается текущий год
      },
      {
        pattern: /(\d{2})\/(\d{2})\/(\d{4})/,
        toDate: (matches) => new Date(matches[3], matches[2] - 1, matches[1]),
      },
    ];

    this.handlers = {
      '.date-switch.prev': () => this.changeDate('dec'),
      '.date-switch.next': () => this.changeDate('inc'),
      '#today': () => {
        this.updateDisplayedDate((this.currentDate = new Date()));
        this.filterData(this.currentDate);
      },
      '#yesterday': () => {
        this.updateDisplayedDate((this.currentDate = new Date()))
        this.changeDate('dec')
      },
      '#month': () => this.filterData(this.currentDate, 'month'),
      '#year': () => this.filterData(this.currentDate, 'year'),
    };

    this.delay = 300;

    this.outputCash = []
    this.outputNonCash = []

    this.isClickBlocked = false;
    this.debouncedResizeHandler = this.debounce(this.onWindowResize.bind(this), this.delay);

    window.addEventListener('resize', this.debouncedResizeHandler); // Подписка на событие resize

    // ОПТИМИЗИРОВАТЬ КОД!
    this.init();
  }

  init() {
    this.updateDisplayedDate(this.currentDate);
    this.attachEvents();
  }

  attachEvents() {
    this.filter.addEventListener('click', (e) => {
      const target = e.target;
      // Очищаю массив с общей суммой
      this.outputCash = [];
      this.outputNonCash = [];
      const handlerKey = Object.keys(this.handlers).find(key => target.closest(key));
      if (handlerKey && !this.isClickBlocked) {
        this.isClickBlocked = true;
        setTimeout(() => {
          this.isClickBlocked = false;
        }, this.delay);
        this.handlers[handlerKey]();
      }
    });
  }

  parseAnyDate(dateString) {
    for (const { pattern, toDate } of this.patterns) {
      const matches = dateString.match(pattern);
      if (matches) {
        return toDate(matches);
      }
    }

    throw new Error(`Не удалось распознать дату: ${dateString}`);
  }

  // получаю отфильтрованные элементы
  getAllVisibleElems(item) {
    const itemType = item.querySelector('.type').dataset.type
    const itemAction = item.querySelector('.action').dataset.action
    const itemValue = item.querySelector('.sum').textContent

    if (itemType === 'cash') this.outputCash.push({
      type: itemType,
      action: itemAction,
      value: reduceStringToNumber(itemValue)
    })

    if (itemType === 'non-cash') this.outputNonCash.push({
      type: itemType,
      action: itemAction,
      value: reduceStringToNumber(itemValue)
    })

  }

  filterAndCalcValue(typeMoney, action) {
    return typeMoney
      .filter(item => item.action === action)
      .reduce((acc, item) => acc + item.value, 0);
  }

  // общее количество и вывожу на экран
  setTotalAmountAndView(totalAmountsCash, totalAmountsNonCash, item) {
    const amountCash = item.box.querySelector('.cash > span');
    const amountNonCash = item.box.querySelector('.non-cash > span');

    amountCash.innerHTML = totalAmountsCash
    amountNonCash.innerHTML = totalAmountsNonCash
  }

  compareAndSetDisplay(item, ItemDate, date, comparator) {
    if (comparator(ItemDate, date)) {

      this.getAllVisibleElems(item)

      this.setTotalAmountAndView(
        this.filterAndCalcValue(this.outputCash, 'sale'),
        this.filterAndCalcValue(this.outputNonCash, 'sale'),
        this.income
      )
      this.setTotalAmountAndView(
        this.filterAndCalcValue(this.outputCash, 'buy'),
        this.filterAndCalcValue(this.outputNonCash, 'buy'),
        this.expenses
      )

      this.income.start()
      this.expenses.start()

      item.style.display = 'revert';
    } else {
      item.style.display = 'none';
    }
  }

  filterData(date, flag = undefined) {
    const itemsTable = this.table.querySelectorAll('.row');

    itemsTable.forEach((item) => {
      try {
        const itemDate = this.parseAnyDate(item.textContent);
        switch (flag) {
          case 'month':
            this.compareAndSetDisplay(item, itemDate, date, (d1, d2) => d1.getMonth() === d2.getMonth());
            break;
          case 'year':
            this.compareAndSetDisplay(item, itemDate, date, (d1, d2) => d1.getFullYear() === d2.getFullYear());
            break;
          default:
            this.compareAndSetDisplay(item, itemDate, date, (d1, d2) => d1.toDateString() === d2.toDateString());
            break
        }
      } catch (error) {
        console.error(error.message);
      }
    });
  }

  changeDate(action) {
    if (action === 'dec') {
      this.currentDate.setDate(this.currentDate.getDate() - 1);
    } else {
      this.currentDate.setDate(this.currentDate.getDate() + 1);
    }

    this.updateDisplayedDate(this.currentDate);
    this.filterData(this.currentDate);
  }

  formatDate(date) {
    const day = date.getDate();
    const month = date.toLocaleString('ru', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }

  updateDisplayedDate(date) {
    const formattedDate = this.formatDate(date);
    this.datePicker.querySelector('input').value = formattedDate;
  }

  onWindowResize() {
    console.log('Window resized!');
  }

  debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
}
export default DateFilter;
