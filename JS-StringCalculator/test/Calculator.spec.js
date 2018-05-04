'use strict';

const { expect } = require('chai');
const Calculator = require('../modules/Calculator');
const c = new Calculator();

describe("Calculator", () => {
  describe("#add", () => {
    let input;

    function theCalculation() {
      c.add(input);
    }

    it('returns a Promose', () => {

    });

    describe('the returned Promise', () => {
      context('given X', () => {
        it('does Y when given X');
      });

      context('given Y', () => {});
    });

    context("when input is empty", () => {
      beforeEach('set input', () => {
        input = "";
      });

      it("is 0", () => {
        const expected = 0;
        expect(theCalculation()).to.equal(expected);
      });
    });

    context("when input is 1 number", () => {
      it("is expected to be the same number", () => {
        expect(c.add("5")).to.equal(5);
      });

      it('something else');
    });

    context("when input has an unknown number of numbers", () => {
      it("is expected to succeed", () => {
        expect(c.add("1,2,3,4,5,6,7,8,9,10,11,12,13")).to.equal(91);
      });
    });

    context("when input has 2 numbers", () => {
      it("is expected to return the sum of the input", () => {
        expect(c.add("2,10")).to.equal(12);
      });
    });

    context("when input contains new line as delimiter", () => {
      it("is expected to return the sum of the input", () => {
        expect(c.add("2\n10,13")).to.equal(25);
      });
    });

    context("when input contains different delimiters", () => {
      it("is expected to return the sum of the input", () => {
        expect(c.add("1|2|3,4;\n5\n6")).to.equal(21);
      });
    });

    context("when input contains numbers greater than 1000", () => {
      it("is expected to return the sum of numbers lesser than 1000", () => {
        expect(c.add("100,200,1001,100,200,1001")).to.equal(600);
      });
    });
  });
});