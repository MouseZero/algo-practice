const {expect} = require('chai')

var isPalindrome = function(s) {
  let k
  const string = s.replace(/[^0-9a-zA-Z]/gi, '').toLowerCase()
  for (let i=0; i<=Math.ceil(string.length/2); i++) {
    k = string.length - 1 - i
    if (string[i] !== string[k]) return false
  }
  return true
}

describe('Valid Palindrome', () => {
  it('should find a basic palindrome', () => {
    const answer = isPalindrome("aracecara")
    expect(answer).to.equal(true)
  })
  it('should return false for non palindrome', () => {
    const answer = isPalindrome('arba')
    expect(answer).to.equal(false)
  })
  it('should match palindrome ignoring all but alpha numeric', () => {
    const answer = isPalindrome('A man, a plan, a canal: Panama')
    expect(answer).to.equal(true)
  })
})
