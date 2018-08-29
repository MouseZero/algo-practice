const {expect} = require('chai')

var majorityElement = function(nums) {
  const counts = {}
  for (let i=0; i<nums.length; i++) {
    counts[nums[i]] = (counts[nums[i]]) ? counts[nums[i]] + 1 : 1
  }
  const countKeys = Object.keys(counts)
  for (let i=0; i<countKeys.length; i++) {
    const key = countKeys[i]
    const count = counts[key]
    if (count >= Math.ceil(nums.length / 2)) return parseInt(key)
  }
  return null
}

describe('Majority Element', () => {
  it('should find the majority', () => {
    const answer = majorityElement([2,2,1,1,1,2,2])
    expect(answer).to.equal(2)
  })
})
