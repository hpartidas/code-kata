'use strict';
const Game = require('../modules/Game');
const {assert} = require('chai');
const g = new Game();

describe('BowlingGameTest', () => {
  describe("testGutterGame", () => {
    it("should equal 0", () => {
      rollMany(20, 0);
      assert.equal(0, g.score());
    });
  });

  describe("testAllOnes", () => {
    it("should be equal to 20", () => {
      rollMany(20, 1);
      assert.equal(20, g.score());
    });
  });

  describe("testOneSpare", () => {
    it("should be equal to 16", () => {
      rollSpare();
      g.roll(3);
      rollMany(17, 0);
      assert.equal(16, g.score());
    });
  });

  describe("testOneStrike", () => {
    it("should be equal to 24", () => {
      rollStrike();
      g.roll(3);
      g.roll(4);
      rollMany(16,0);
      assert.equal(24, g.score());
    });
  });

  describe("testPerfectGame", () => {
    it("should be equal to 300", () => {
      rollMany(12, 10);
      assert.equal(300, g.score());
    });
  });
});

function rollMany(n, pins) {
  for (let i = 0; i < n; i++) {
    g.roll(pins);
  }
}

function rollSpare() {
  g.roll(5);
  g.roll(5);
}

function rollStrike() {
  g.roll(10);
}
