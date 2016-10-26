function Suminator() {}

Suminator.prototype.getSum = function(a, b) {
  return a + b;
};

Suminator.prototype.getSumPlusOne = function(a, b) {
  return a + b + 1;
};

Suminator.prototype.getSumTimesTwo = function(a, b) {
  var sum = a + b;
  return sum * 2;
};

module.exports = Suminator;