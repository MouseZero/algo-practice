const {expect} = require('chai')

var climbStairs = function(n) {
  if (n < 3) return n
  let steps = 0
  let last = 2
  let lastLast = 1
  for (let i=3; i<=n; i++) {
    steps = last + lastLast
    lastLast = last
    last = steps
  }
  return steps
};

describe('Climb Stairs', () => {
  it('climbs 1 stair', () => {
    let answer = climbStairs(1)
    expect(answer).to.equal(1)
  })
  it('climbs 2 stair', () => {
    let answer = climbStairs(2)
    expect(answer).to.equal(2)
  })
  it('climbs 3 stair', () => {
    let answer = climbStairs(4)
    expect(answer).to.equal(5)
  })
})
