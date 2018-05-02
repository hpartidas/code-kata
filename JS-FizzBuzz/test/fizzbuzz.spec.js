'use strict';

const {assert} = require('chai');
const FizzBuzz = require('../FizzBuzz');

describe('FizzBuzz Module', () => {
  describe('Basic Operations', () => {

    it('should not print `fizz` if number is not divisible by 3', () => {
      assert.notEqual(FizzBuzz.fizz(5), 'Fizz');
    });

    it('should print `fizz` if number is divisible by 3', () => {
      assert.equal(FizzBuzz.fizz(3), 'Fizz');
    });

    it('should not print `buzz` if number is not divisible by 5', () => {
      assert.notEqual(FizzBuzz.buzz(9), 'Buzz');
    });

    it('should print `buzz` if number is divisible by 5', () => {
      assert.equal(FizzBuzz.buzz(5), 'Buzz');
    });

    it('should not print `fizz buzz` if number is not divisible by 3 and 5', () => {
      assert.notEqual(FizzBuzz.fizzBuzz(10), 'FizzBuzz');
    });

    it('should print `fizzbuzz` if number is divisible by 3 and 5', () => {
      assert.equal(FizzBuzz.fizzBuzz(30), 'FizzBuzz');
    });

    it('should not return a number', () => {
      assert.notEqual(FizzBuzz.run(3), 3);
    });

    it('should return a number', () => {
      assert.equal(FizzBuzz.run(1), 1);
    });
  });
});

