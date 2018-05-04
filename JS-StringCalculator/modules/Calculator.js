'use strict';

class Calculator {
  constructor() {}

  add(input) {
    if (input === "") {
      return 0;
    }

    let numbers = input.split(/[\n,;|]/);

    let sum = numbers.reduce((a, b) => {
      a = parseInt(a);
      b = parseInt(b);

      if (isNaN(a) && isNaN(b)) {
        return 0;
      }

      if (isNaN(a)) {
        return b;
      }

      if (isNaN(b)) {
        return a;
      }

      if (this.isGreaterThan1000(a) && this.isGreaterThan1000(b)) {
        return 0;
      }

      if (this.isGreaterThan1000(a)) {
        return b;
      }

      if (this.isGreaterThan1000(b)) {
        return a;
      }

      return parseInt(a) + parseInt(b)
    });

    return parseInt(sum);
  }

  isGreaterThan1000(a) {
    return a >= 1000;
  }
}

module.exports = Calculator;