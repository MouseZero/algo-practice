const {expect} = require('chai')

function divide(dividend, divisor) {
  const isDivisorNegative = (divisor < 0) ? true : false
  const isDividendNegative = (dividend < 0) ? true : false
  divisor = Math.abs(divisor)
  dividend = Math.abs(dividend)
  let count = 0
  let acum = 0

  while (acum + divisor <= dividend) {
    acum += divisor
    count++
  }
  count = isDividendNegative ? (~count + 1) : count
  count = isDivisorNegative ? (~count + 1) : count
  if (count > 2147483647) count = 2147483647
  if (count < -2147483648) count = -2147483648
};

describe('Divide two integers (no division or multiplication)', () => {
  it('should divide positive numbers', () => {
    const answer = divide(10, 3)
    expect(answer).to.equal(3)
  })

  it('should divide with negative divisor numbers', () => {
    const answer = divide(7, -3)
    expect(answer).to.equal(-2)
  })

  it('should divide with negative dividend', () => {
    const answer = divide(-23, 5)
    expect(answer).to.equal(-4)
  })

  it('should work with ones only', () => {
    const answer = divide(1, 1)
    expect(answer).to.equal(1)
  })

  it('should work with 2 negatives', () => {
    const answer = (divide(-8, -2))
    expect(answer).to.equal(4)
  })
})
