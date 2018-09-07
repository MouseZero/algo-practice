const {expect} = require('chai')

const letterMap = {
  '1': [],
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
}
function pushLetterToExisting(num, array) {
  const newArray = []
  for (let i=0; i<array.length; i++) {
    for (let k=0; k<letterMap[num].length; k++) {
      newArray.push([...array[i], letterMap[num][k]])
    }
  }
  return newArray
}

function letterCombinations(digits) {
  if (!digits) return []
  let array = letterMap[digits.charAt(0)].map(letter => [letter])
  for (let i=1; i<digits.length; i++) {
    array = pushLetterToExisting(digits.charAt(i), array)
  }
  for (let i=0; i<array.length; i++) {
    array[i] = array[i].join('')
  }
  return array
}

describe('Letter Combinations of a Phone Number', () => {
  it('should find all combos for a mall string', () => {
    const answer = letterCombinations('23')
    expect(answer).to.have.all.members(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
  })
  it('should be able to handle a single number', () => {
    const answer = letterCombinations('2')
    expect(answer).to.have.all.members(['a', 'b', 'c'])
  })
})
