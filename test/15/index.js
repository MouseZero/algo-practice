const {expect} = require('chai')

function threeSum(nums) {
  let total
  const array = []
  nums = nums.sort((a, b) => a - b)
  for (let i=0; i<nums.length-2; i++) {
    if (nums[i] > 0 || (i > 0 && nums[i-1] === nums[i])) {
      continue
    } else {
      for( let s=i+1, e=nums.length-1; s<e; ) {
        total = nums[i] + nums[s] + nums[e]
        if (total === 0) {
          array.push([nums[i], nums[s], nums[e]])
          while (e > 0 && nums[e] === nums[e-1])
          e--
          while (s < nums.length-1 && nums[s] === nums[s+1]) s++
          s++
        } else if (total > 0) {
          while (e > 0 && nums[e] === nums[e-1]) e--
          e--
        } else {
          while (s < nums.length-1 && nums[s] === nums[s+1]) s++
          s++
        }
      }
    }
  }
  return array
}

describe('3Sum', () => {
  it('should be able to find all combos for a small array', () => {
    const answer = threeSum([-1, 0, 1, 2, -1, -4])
    expect(answer).to.deep.equal([
      [-1, -1, 2],
      [-1, 0, 1]
    ])
  })
  it('works with 3 zeros', () => {
    const answer = threeSum([0,0,0])
    expect(answer).to.deep.equal([
      [0, 0, 0]
    ])
  })
  it('should not return match for 2 zeros', () => {
    const answer = threeSum([0,0])
    expect(answer).to.deep.equal([])
  })
  it('should work', () => {
    const answer = threeSum([-1,2,-1,-7,8,9])
    expect(answer).to.deep.equal([
      [-7,-1,8],[-1,-1,2]
    ])
  })
})
