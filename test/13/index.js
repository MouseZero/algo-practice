const {expect} = require('chai')

function threeSumClosest(nums, target) {
  nums = nums.sort((a, b) => a - b)
  let bestSum, sum
  for (let i=0; i<nums.length-2; i++) {
    if (i>0 && nums[i] === nums[i-1]) {
      continue
    } else {
      for (let s=i+1, e=nums.length-1; s<e; ) {
        sum = nums[i] + nums[s] + nums[e]
        diff = target-sum
        if (bestSum === undefined || Math.abs(diff) < Math.abs(target-bestSum)) {
          bestSum = sum
          result = [nums[i], nums[s], nums[e]]
        }
        if (diff < 0) {
          e--
        } else {
          s++
        }
      }
    }
  }
  return bestSum
}

describe('3Sum Closest', () => {
  it('can find the 3 that sum to a number', () => {
    const answer = threeSumClosest([3, 9, 1, 1], 5)
    expect(answer).to.deep.equal(5)
  })
  it('can find a sum that is close to the target', () => {
    const answer = threeSumClosest([3, 9, 1, 2], 5)
    expect(answer).to.deep.equal(6)
  })
})
