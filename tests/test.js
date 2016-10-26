var assert = require('assert');
var Suminator = require('../libs/suminator');
var suminator = new Suminator();
describe('Mocha buildin assert', function() {
    describe('Array', function() {
        describe('#indexOf()', function() {
            it('should return -1 when the value is not present', function() {
                assert.equal(-1, [1,2,3].indexOf(4));
            });
        });
    })
    describe('suminator tests', function() {
        describe('getSum', function() {
            it('2 + 2 should return 4', function() {
                assert.equal(suminator.getSum(2,2), 4);
            });
            it('2 + (-3) should return -1', function() {
                assert.equal(suminator.getSum(2,-3),-1);
            });
        });
        describe('getSumPlusOne', function() {
            it('2 + 2 + 1 should return 5', function() {
                assert.equal(suminator.getSumPlusOne(2,2), 5);
            });
            it('2 + (-3) + 1 should return 0', function() {
                assert.equal(suminator.getSumPlusOne(2,-3),0);
            });
        });
        describe('getSumTimesTwo', function() {
            it('2 + 2 times 2 should return 8', function() {
                assert.equal(suminator.getSumTimesTwo(2,2), 8);
            });
            it('2 + (-3) + 1 should return -2', function() {
                assert.equal(suminator.getSumTimesTwo(2,-3),-2);
            });
        });
    })
});