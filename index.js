const Calculator = (function() {
  let state = 0;

  return {
    add(x = 0) {
      state += x;
      return Calculator.add;
    },
    subtract(x = 0) {
      state -= x;
      return Calculator.subtract;
    },
    divide(x = 0) {
      state /= x;
      return Calculator.divide;
    },
    multiply(x = 0) {
      state *= x;
      return Calculator.multiply;
    },
    getResult() {
      return state;
    },
    reset() {
      state = 0;
    },
  };
})();
