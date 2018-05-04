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

      return parseInt(a) + parseInt(b)
    });

    return parseInt(sum);
  }
}

module.exports = Calculator;