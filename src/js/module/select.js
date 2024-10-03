


const getTemplate = (data = [], placeholder, selectedId) => {

  let text = placeholder ?? 'Placeholder default';

  const items = data.map(item => {
    let cls = ''
    if (item.id === selectedId) {
      text = item.value
      cls = 'selected'
    }
    return `
    <li class="select__item ${cls}" data-type="item" data-id="${item.id}">
      <span class="select__item-value">${item.value}</span>
    </li>`
  })
  return `
        <div class="select__backdrop" data-type="backdrop"></div>
        <div class="select__input" data-type="input">
            <span data-type="value">${text}</span>
            <span class="triangle-icon-open" data-type="arrow"></span>
          </div>
          <div class="select__dropdown">
            <ul class="select__list">
              ${items.join('')}
            </ul>
        </div>
    `
}

export class Select {
  constructor(selector, options) {
    this.elem = document.querySelector(selector)

    if (!this.elem) {
      return;
    }

    this.options = options
    this.selectedId = options.selectedId

    this.#render()
    this.#setup()

  }

  // # - Приватный метод, доступен только внутри класса Select
  #render() {
    const { placeholder, data } = this.options
    this.elem.classList.add('select');
    this.elem.innerHTML = getTemplate(data, placeholder, this.selectedId);
  }

  #setup() {
    this.clickHandler = this.clickHandler.bind(this)
    this.elem.addEventListener('click', this.clickHandler)
    this.arrow = this.elem.querySelector('[data-type="arrow"]')
    this.value = this.elem.querySelector('[data-type="value"]')
  }

  clickHandler(e) {
    const target = e.target;
    const { type } = target.dataset;

    if (type === 'input' || e.target.closest('.select__input')) {
      const items = document.querySelectorAll('.select');

      items.forEach(item => {
        if (item.closest('.select-open')) {
          item.classList.remove('select-open');
          const arrow = item.querySelector('.triangle-icon-close');
          arrow.classList.remove('triangle-icon-close');
          arrow.classList.add('triangle-icon-open');
        }
      })

      this.toggle()
    } else if (type === 'item' || target.closest(".select__item[data-type='item']")) {
      const id = e.target.dataset.id || target.closest(".select__item[data-type='item']").dataset.id;
      this.select(id)
    } else if (type === 'backdrop') {
      this.close()
    }
  }

  get isOpen() {
    return this.elem.classList.contains('select-open')
  }

  get current() {
    return this.options.data.find(item => item.id === this.selectedId)
  }

  select(id) {
    this.selectedId = id
    this.value.textContent = this.current.value

    this.elem.querySelectorAll('[data-type="item"]').forEach(el => {
      el.classList.remove('selected')
    });
    this.elem.querySelector(`[data-id="${id}"]`).classList.add('selected')

    this.options.onSelect ? this.options.onSelect(this.current) : null
    this.close()
  }

  toggle() {
    this.isOpen ? this.close() : this.open()
  }

  open() {
    this.elem.classList.add('select-open');
    this.arrow.classList.remove('triangle-icon-open');
    this.arrow.classList.add('triangle-icon-close');
  }

  close() {
    this.elem.classList.remove('select-open');
    this.arrow.classList.remove('triangle-icon-close');
    this.arrow.classList.add('triangle-icon-open');
  }

  destroy() {
    this.elem.removeEventListener('click', this.clickHandler)
    this.elem.innerHTML = ''
  }
}