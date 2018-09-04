const {excpect} = require('chai')

const letterMap = {
  1: [],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
}
function letterCombinations(digits) {

}

describe('Letter Combinations of a Phone Number', () => {
  it('should find all combos for a mall string', () => {
    const answer = letterCombinations('23')
    excpect(answer).to.have.all.members(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
  })
})
