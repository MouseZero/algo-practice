const {expect} = require('chai')

function maxArea(height) {
  let max =0
  let l = 0
  let r = height.length-1
  while (l < r) {
    max = Math.max(max, Math.min(height[l], height[r]) * (r-l))
    if (height[l] < height[r]) {
      l++
    } else {
      r--
    }
  }
  return max
}

describe('Container With Most Water', () => {
  it('should find the max area', () => {
    const answer = maxArea([1,8,6,2,5,4,8,3,7])
    expect(answer).to.equal(49)
  })
})
