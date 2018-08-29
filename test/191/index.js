const {expect} = require('chai')

var hammingWeight = function(n) {
  let answer = 0
  while (n) {
    answer += n & 1
    n = n >>> 1
  }
  return answer
}

describe('Number of 1 Bits', () => {
  it('should return 0 for n = 0', () => {
    const answer = hammingWeight(0)
    expect(answer).to.equal(0)
  })
  it('should count first bit', () => {
    const answer = hammingWeight(1)
    expect(answer).to.equal(1)
  })
  it('should count bits after the first one', () => {
    const answer = hammingWeight(2)
    expect(answer).to.equal(1)
  })
  it('should count the 1 in 2147483648', () => {
    const answer = hammingWeight(2147483648)
    expect(answer).to.equal(1)
  })
})
