'use strict';

class FizzBuzz {
  static fizz (a) {
    if ((a % 3) === 0) {
      return 'Fizz';
    } else {
      return false;
    }
  }

  static buzz (a) {
    if ((a % 5) === 0) {
      return 'Buzz';
    } else {
      return false;
    }
  }

  static fizzBuzz (a) {
    if (
      ((a % 3) === 0) &&
      ((a % 5) === 0)
    ){
      return 'FizzBuzz';
    } else {
      return false;
    }
  }

  static run (a) {
    let fb = FizzBuzz.fizzBuzz(a);

    if (fb !== false) {
      return fb;
    }

    fb = FizzBuzz.fizz(a);

    if (fb !== false) {
      return fb;
    }

    fb = FizzBuzz.buzz(a);

    if (fb !== false) {
      return fb;
    }

    return a;
  }
}

module.exports = FizzBuzz;