const {expect} = require('chai')

var maxProfit = function(prices) {
  let boughtPrice = prices[0]
  let testProfit
  let max = 0
  for (let i=1; i<prices.length; i++) {
    testProfit = prices[i] - boughtPrice
    max = Math.max(testProfit, max)
    if (testProfit < 0) {
      boughtPrice = prices[i]
    }
  }
  return max
};

describe('Best Time to Buy and Sell Stock', () => {
  it('should get the max', () => {
    const answer = maxProfit([7,1,5,3,6,4])
    expect(answer).to.equal(5)
  })
  it('should work with an empty array', () => {
    const answer = maxProfit([])
    expect(answer).to.equal(0)
  })
  it('shoudl work with a single day', () => {
    const answer = maxProfit([4])
    expect(answer).to.equal(0)
  })
})
