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

    describe("when input has more than 2 numbers", () => {
      it("is expected to fail", () => {
        expect(c.add("1,2,3")).to.equal(false);
      });
    });

    describe("when input has 2 numbers", () => {
      it("is expected to return the sum of the input", () => {
        expect(c.add("2,10")).to.equal(12);
      });
    });
  });
});