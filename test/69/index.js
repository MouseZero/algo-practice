function mid (high, low) {
  return Math.floor((high-low)/2) + low
}
function mySqrtRecurse (x, high, low) {
  let middle = mid(high, low)
  let k = middle * middle
  if (k === x) {
    return middle
  } else if (k > x) {
    if (low === middle) return middle - 1
    return mySqrtRecurse(x, middle - 1, low)
  } else {
    if (high === middle) return middle
    return mySqrtRecurse(x, high, middle + 1)
  }
}
var mySqrt = function(x) {
  let high = x
  let low = 1
  return mySqrtRecurse(x, high, low)
};

const {expect} = require('chai')

describe('square root', () => {
  it('should square 2', () => {
    expect(mySqrt(4)).to.equal(2)
  })
  it('should round sqare numbers', () => {
    expect(mySqrt(8)).to.equal(2)
  })
  // TODO test for decimal answer
})
