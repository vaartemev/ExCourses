class Calculator {
  constructor() {
    this.state = 0;
  }

  getResult() {
    return `Now state is ${this.state}`;
  }

  reset() {
    this.state = 0;
    return `State was reseted. Now state is ${this.state}`;
  }

  calculate = (x, operation) => {
    if (!this.calculation.value) {
      this.calculation.value = this.state;
    }
    switch (operation) {
      case 'add':
        this.calculation.value += x;
        break;
      case 'subtract':
        this.calculation.value -= x;
        break;
      case 'divide':
        this.calculation.value /= x;
        break;
      case 'multiply':
        this.calculation.value *= x;
        break;
      default:
        break;
    }

    this.calculation.toString = () => this.calculation.value;

    this.state = this.calculation;

    return this.calculation;
  };

  add = (x = 0) => {
    this.calculate(x, 'add');
    return this.add;
  };

  subtract = (x = 0) => {
    this.calculate(x, 'subtract');
    return this.subtract;
  };

  divide = (x = 0) => {
    this.calculate(x, 'divide');
    return this.divide;
  };

  multiply = (x = 0) => {
    this.calculate(x, 'multiply');
    return this.multiply;
  };
}

const calc = new Calculator();
