'use strict';

class Calculator {
  constructor() {
    //this.read = this.read.bind(this);
  }

  add(input) {
    if (input === "") {
      return 0;
    }

    let numbers = input.split(",");

    if (numbers.length > 2) {
      return false;
    }

    let sum = numbers.reduce((a, b)=>{ return parseInt(a) + parseInt(b)});

    return parseInt(sum);
  }
}

module.exports = Calculator;