class Calculator {
  constructor() {
    this.state = 0;
  }

  getResult() {
    return this.state;
  }

  reset() {
    this.state = 0;
    return `State was reseted. Now state is ${this.state}`;
  }

  add = (x = 0) => {
    if (!this.add.value) {
      this.add.value = this.state;
    }
    this.add.value += x;
    this.add.toString = () => this.add.value;
    this.state = this.add;
    return this.add;
  };

  subtract = (x = 0) => {
    if (!this.subtract.value) {
      this.subtract.value = this.state;
    }
    this.subtract.value -= x;
    this.subtract.toString = () => this.subtract.value;
    this.state = this.subtract;
    return this.subtract;
  };

  divide = (x = 0) => {
    if (!this.divide.value) {
      this.divide.value = this.state;
    }
    this.divide.value /= x;
    this.divide.toString = () => this.divide.value;
    this.state = this.divide;
    return this.divide;
  };

  multiply = (x = 0) => {
    if (!this.multiply.value) {
      this.multiply.value = this.state;
    }
    this.multiply.value *= x;
    this.multiply.toString = () => this.multiply.value;
    this.state = this.multiply;
    return this.multiply;
  };
}

const calc = new Calculator();
