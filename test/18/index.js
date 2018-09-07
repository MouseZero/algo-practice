const {expect} = require('chai')

var fourSum = function(nums, target) {
  nums = nums.sort((a, b) => a - b)
  let answer = []
  let sum
  for (let p1=0; p1<nums.length-3; p1++) {
    while (p1>0 && nums[p1] === nums[p1-1]) {
      p1++
      continue
    }
    for (let p2=p1+1; p2<nums.length; p2++) {
      while (p2>1 && nums[p2] === nums[p2-1] && p1 != p2-1) {
        p2++
        continue
      }
      for (let p3=p2+1, p4=nums.length-1; p3<p4; ) {
        sum = nums[p1] + nums[p2] + nums[p3] + nums[p4]
        if (sum === target) {
          answer.push([nums[p1], nums[p2], nums[p3], nums[p4]])
          while (p3<p4 && nums[p3] === nums[p3+1]) p3++
          p3++
          while (p3<p4 && nums[p4] === nums[p4-1]) p4--
          p4--
        } else if (sum < target) {
          while (p3<p4 && nums[p3] === nums[p3+1]) p3++
          p3++
        } else {
          while (p3<p4 && nums[p4] === nums[p4-1]) p4--
          p4--
        }
      }
    }
  }
  return answer
};

describe('4Sum', () => {
  it('should be able to find a simple combo', () => {
    const answer = fourSum([1, 0, -1, 0, -2, 2], 0)
    expect(answer).to.deep.equal([
      [-2, -1, 1, 2],
      [-2,  0, 0, 2],
      [-1,  0, 0, 1]
    ])
  })
  it('does not count dup numbers multiple times', () => {
    const answer = fourSum([-3,-2,-1,0,0,1,2,3], 0)
    expect(answer.length).to.equal(8)
  })
  it('make sure there a no dups after a match', () => {
    const answer = fourSum([-1,0,-5,-2,-2,-4,0,1,-2], -9)
    expect(answer.length).to.equal(4)
  })
})
