'use strict';

class Calculator {
  constructor() {}

  add(input) {
    if (input === "") {
      return 0;
    }

    let numbers = input.split(",");

    let sum = numbers.reduce((a, b)=>{ return parseInt(a) + parseInt(b)});

    return parseInt(sum);
  }
}

module.exports = Calculator;