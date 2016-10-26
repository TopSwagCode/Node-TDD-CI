var chai = require('chai');
var expect = chai.expect;

var number1 = 1;
var number2 = 2;
var sum = number1 + number2;

describe('Mocha with chai using expect syntax', function() {
    describe('Simple sum', function() {
        it('Simple sum should return 3 for number1 and number2', function() {
            expect(sum).to.equal(3);
        });
        it('Number1 should be 1', function() {
            expect(number1).to.equal(1);
        });
        it('Number2 should be 2', function() {
            expect(number2).to.equal(2);
        });
    })
});