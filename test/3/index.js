const {expect} = require('chai')

var lengthOfLongestSubstring = function(s) {
  const lookup = {}
  let max = 0
  let i=0
  let j=0
  while(i<s.length && j<s.length) {
    const cur = s.charAt(j)
    if (lookup[cur] >= i) {
      i = lookup[cur] + 1
    } else {
      max = Math.max(max, j-i+1)
    }
    lookup[cur] = j
    j++
  }
  return max
}

describe('Longest Substring Without Repeating Characters', () => {
  it('should return 1 for all same chars', () => {
    const answer = lengthOfLongestSubstring('aaaaaaaaaa')
    expect(answer).to.equal(1)
  })
  it('should be able to find multiple chars', () => {
    const answer = lengthOfLongestSubstring('pwwkew')
    expect(answer).to.equal(3)
  })
  it('finds better combo with repeat char', () => {
    const answer = lengthOfLongestSubstring('kewhwabcde')
    expect(answer).to.equal(7)
  })
})
