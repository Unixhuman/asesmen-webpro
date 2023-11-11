class Calculator {
    constructor(bil1, bil2) {
      this.bil1 = parseInt(bil1);
      this.bil2 = parseInt(bil2);
    }
    static result = 0;

    add() {
      Calculator.result = this.bil1 + this.bil2;
      return "Result : " + Calculator.result;
    }

    subtract() {
      Calculator.result = this.bil1 - this.bil2;
      return "Result : " + Calculator.result;
    }

    multiply() {
      Calculator.result = this.bil1 * this.bil2;
      return "Result : " + Calculator.result;
    }

    divide() {
      Calculator.result = this.bil1 / this.bil2;
      return "Result : " + Calculator.result;
    }
  }

  const add = document.getElementById('add');
  const subtract = document.getElementById('subtract');
  const multiply = document.getElementById('multiply');
  const divide = document.getElementById('divide');
  const bil1 = document.getElementById('bil1');
  const bil2 = document.getElementById('bil2');
  const hasil = document.getElementById('result');

  add.addEventListener('click', () => {
    const calculator = new Calculator(bil1.value, bil2.value);
    hasil.value = calculator.add();
  });

  subtract.addEventListener('click', () => {
    const calculator = new Calculator(bil1.value, bil2.value);
    hasil.value = calculator.subtract();
  });

  multiply.addEventListener('click', () => {
    const calculator = new Calculator(bil1.value, bil2.value);
    hasil.value = calculator.multiply();
  });

  divide.addEventListener('click', () => {
    const calculator = new Calculator(bil1.value, bil2.value);
    hasil.value = calculator.divide();
  });