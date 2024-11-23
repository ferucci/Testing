import { reduceStringToNumber } from "../helpers.js";

export class ExpensesAnim {
  constructor(options) {
    this.options = options
    this.className = this.options.className

    if (!this.className) return;

    this.#init()
    this.start()
  }

  #init() {
    this.box = document.querySelector(`.${this.className}`)
    this.wrapper = this.box.querySelector('.rev__image')

    this.canvas = document.getElementById(`${this.className}__output`)
    this.ctx = this.canvas.getContext('2d')

    this.height = this.wrapper.getBoundingClientRect().height
    this.width = this.wrapper.getBoundingClientRect().width

    this.grayColor = '#f0f4f7';
  }

  start() {
    this.setSizes()
    this.drawArc()
    this.updateDynamicArc()
  }

  setSizes() {

    this.canvas.width = this.width
    this.canvas.height = this.height
    this.currentAngle = Math.PI
    this.targetAngle = Math.PI * 2

    this.centerX = this.ctx.canvas.width / 2
    this.centerY = this.ctx.canvas.height
    this.radius = this.ctx.canvas.width / 2.8
    this.startAngle = Math.PI
    this.endAngle = this.currentAngle
    this.lineThickness = 58
  }

  drawArc = (currentAngle = this.endAngle, color = this.grayColor) => {
    this.ctx.lineWidth = this.lineThickness;
    this.ctx.strokeStyle = color;
    this.ctx.beginPath();
    // this.ctx.lineCap = 'round'
    this.ctx.arc(this.centerX, this.centerY, this.radius, this.startAngle, currentAngle, false);
    this.ctx.stroke();
  }

  drawArrow = () => {
    // Стрелка, указывающая на продвижение дуги
    this.ctx.beginPath()
    this.resetBoxShadow()

    this.ctx.moveTo(
      this.centerX + (this.radius / 2) * Math.cos(this.currentAngle),
      this.centerY + (this.radius / 2) * Math.sin(this.currentAngle)
    );
    this.ctx.lineTo(
      0.5 + this.centerX + .5 * Math.cos(this.targetAngle),
      0.5 + this.centerY + .5 * Math.sin(this.targetAngle)
    );

    this.ctx.strokeStyle = `rgb(${this.options.color})`;
    this.ctx.lineWidth = 10;
    this.ctx.lineCap = 'round';
    this.ctx.stroke();
  }

  boxShadow = () => {
    this.ctx.shadowColor = `rgba(${this.options.color},0.5)`
    this.ctx.shadowOffsetX = 15
    this.ctx.shadowOffsetY = 8
    this.ctx.shadowBlur = 15
  }
  resetBoxShadow = () => {
    this.ctx.shadowColor = `rgba(${this.options.color},0.5)`
    this.ctx.shadowOffsetX = 0
    this.ctx.shadowOffsetY = 0
    this.ctx.shadowBlur = 0
  }

  getSumValues() {
    const amountCash = this.box.querySelector('.cash > span');
    const amountNonCash = this.box.querySelector('.non-cash > span');
    const amountVal = reduceStringToNumber(amountCash.textContent);
    const amountNVal = reduceStringToNumber(amountNonCash.textContent);
    const amount = amountVal + amountNVal
    return amount
  }

  updateDynamicArc = () => {
    const maxValue = 200000;
    const amount = this.getSumValues()

    if (!isNaN(amount)) {
      // Формула с расчётом на то, что максимальное число 100000
      // Если max-число больше, тогда нужно увеличивать делитель
      this.targetAngle = (1 + amount / maxValue) * Math.PI;
      if (this.targetAngle >= Math.PI * 2) {
        this.targetAngle = Math.PI * 2
      }
      // Запуск анимации
      requestAnimationFrame(this.animateDynamicArc);
    } else {
      console.log('Пожалуйста, передайте корректное число!');
    }

  };

  animateDynamicArc = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.save()

    // Перерисовка статической дуги
    this.drawArc(Math.PI * 2)

    this.boxShadow()

    // Динамическая дуга
    this.drawArc(this.currentAngle, `rgb(${this.options.color})`)

    this.drawArrow()

    this.ctx.restore(); // Восстанавливаем предыдущее состояние контекста

    // Обновление текущего угла
    if (this.currentAngle < this.targetAngle) {
      this.currentAngle += 0.02;
      requestAnimationFrame(this.animateDynamicArc);
    }
  };
}