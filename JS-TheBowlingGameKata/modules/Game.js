'use strict';

class Game {
  constructor() {
    this.init();
  }

  roll(pins) {
    this.rolls[this.rollIndex++] = pins;
  }

  score() {
    let score = 0;
    let frameIndex = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(frameIndex)) {
        score += 10 + this.strikeBonus(frameIndex);
        frameIndex++;
      } else if (this.isSpare(frameIndex)) {
        score += 10 + this.spareBonus(frameIndex);
        frameIndex += 2;
      } else {
        score += this.sumOfBallsInFrame(frameIndex);
        frameIndex += 2;
      }
    }

    this.reset();

    return score;
  }

  isStrike(frameIndex) {
    return this.rolls[frameIndex] === 10;
  }

  sumOfBallsInFrame(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex+1];
  }

  spareBonus(frameIndex) {
    return this.rolls[frameIndex+2];
  }

  strikeBonus(frameIndex) {
    return this.rolls[frameIndex+1] + this.rolls[frameIndex+2];
  }

  isSpare(frameIndex) {
    return (this.rolls[frameIndex] + this.rolls[frameIndex+1]) === 10;
  }

  init() {
    this.rolls = Array(21).fill(0);
    this.rollIndex = 0;
  }

  reset() {
    this.init();
  }
}

module.exports = Game;