var assert = require('assert');
var Suminator = require('C:/Users/Bruger/projects/TDD-CI/libs/suminator');
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
        });
    })
});

