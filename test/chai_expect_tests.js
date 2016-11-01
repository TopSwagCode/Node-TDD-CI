/*
    Test using Mocha with Chai.
    Style using chai Expect eg:
        expect(foo).to.be.a('string');
        expect(foo).to.equal('bar');
        expect(foo).to.have.length(3);
        expect(tea).to.have.property('flavors').with.length(3);
*/
const chai = require('chai');

const expect = chai.expect;
const number1 = 1;
const number2 = 2;
const sum = number1 + number2;

describe('Mocha with chai using expect syntax', () => {
  describe('Simple sum', () => {
    it('Simple sum should return 3 for number1 and number2', () => {
      expect(sum).to.equal(3);
    });
    it('Number1 should be 1', () => {
      expect(number1).to.equal(1);
    });
    it('Number2 should be 2', () => {
      expect(number2).to.equal(2);
    });
  });
});
