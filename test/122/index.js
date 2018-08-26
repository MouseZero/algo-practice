const {expect} = require('chai')

var maxProfit = function(prices) {
  let profit = 0
  for (let i=1; i<prices.length; i++) {
    if (prices[i-1] < prices[i]) {
      profit += prices[i] - prices[i-1]
    }
  }
  return profit
};

describe('Best Time to Buy and Sell Stock II', () => {
  it('should get the max price', () => {
    const profit = maxProfit([7,1,5,3,6,4])
    expect(profit).to.equal(7)
  })
  it('shows zero profit for an array with 1 number', () => {
    const profit = maxProfit([3])
    expect(profit).to.equal(0)
  })
})
