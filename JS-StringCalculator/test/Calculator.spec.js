'use strict';

const { expect } = require('chai');
const Calculator = require('../modules/Calculator');
const c = new Calculator();

describe("Calculator", () => {
  describe("#add", () => {
    describe("when input is empty", () => {
      it("is expected to be 0", () => {
        expect(c.add("")).to.equal(0);
      });
    });

    describe("when input is 1 number", () => {
      it("is expected to be the same number", () => {
        expect(c.add("5")).to.equal(5);
      });
    });

    describe("when input has an unknown number of numbers", () => {
      it("is expected to succeed", () => {
        expect(c.add("1,2,3,4,5,6,7,8,9,10,11,12,13")).to.equal(91);
      });
    });

    describe("when input has 2 numbers", () => {
      it("is expected to return the sum of the input", () => {
        expect(c.add("2,10")).to.equal(12);
      });
    });

    describe("when input contains new line as delimiter", () => {
      it("is expected to return the sum of the input", () => {
        expect(c.add("2\n10,13")).to.equal(25);
      });
    });

    describe("when input contains different delimiters", () => {
      it("is expected to return the sum of the input", () => {
        expect(c.add("1|2|3,4;\n5\n6")).to.equal(21);
      });
    });
  });
});