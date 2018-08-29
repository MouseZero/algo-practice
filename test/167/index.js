const {expect} = require('chai')

var twoSum = function(numbers, target) {
  answer = []
  const lookUp = {}
  for (let i=0; i<numbers.length; i++) {
    let numb = numbers[i]
    let match = lookUp[target-numb]
    if (match || match === 0) {
      return [match + 1, i + 1]
    }
    lookUp[numbers[i]] = i
  }
  return answer
}

describe('Two Sum II - Input array is sorted', () => {
  it('should get the correct answer', () => {
    const answer = twoSum([2,7,11,15], 9)
    expect(answer).to.deep.equal([1,2])
  })
})
