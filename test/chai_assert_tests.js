/*
    Test using Mocha with Chai.
    Style using chai Assert eg:
        assert.typeOf(foo, 'string');
        assert.equal(foo, 'bar');
        assert.lengthOf(foo, 3)
        assert.property(tea, 'flavors');
        assert.lengthOf(tea.flavors, 3);
*/
const assert = require('assert'); // New comment
const Suminator = require('../libs/suminator');

const suminator = new Suminator();
describe('Mocha buildin assert', () => {
  describe('Array', () => {
    describe('#indexOf()', () => {
      it('should return -1 when the value is not present', () => {
        assert.equal(-1, [1, 2, 3].indexOf(4));
      });
    });
  });
  describe('suminator tests', () => {
    describe('getSum', () => {
      it('2 + 2 should return 4', () => {
        assert.equal(suminator.getSum(2, 2), 4);
      });
      it('2 + (-3) should return -1', () => {
        assert.equal(suminator.getSum(2, -3), -1);
      });
    });
    describe('getSumPlusOne', () => {
      it('2 + 2 + 1 should return 5', () => {
        assert.equal(suminator.getSumPlusOne(2, 2), 5);
      });
      it('2 + (-3) + 1 should return 0', () => {
        assert.equal(suminator.getSumPlusOne(2, -3), 0);
      });
    });
    describe('getSumTimesTwo', () => {
      it('2 + 2 times 2 should return 8', () => {
        assert.equal(suminator.getSumTimesTwo(2, 2), 8);
      });
      it('2 + (-3) + 1 should return -2', () => {
        assert.equal(suminator.getSumTimesTwo(2, -3), -2);
      });
    });
  });
});
