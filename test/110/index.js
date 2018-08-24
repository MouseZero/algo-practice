const {expect} = require('chai')
const {treeCreator} = require('../../tools/tree')

var isBalanced = function(root) {
  if(root === null) return true
  return testDepth(root).bal
};

function testDepth (root) {
  const left =  (root.left)  ? testDepth(root.left)  : {bal: true, left: 0, right: 0}
  const right = (root.right) ? testDepth(root.right) : {bal: true, left: 0, right: 0}
  // console.log('---------------')
  // console.log(root.val)
  // console.log(left)
  // console.log(right)
  const leftCount = Math.max(left.left, left.right)
  const rightCount = Math.max(right.left, right.right)
  return {
    bal: Math.abs(leftCount - rightCount) <= 1 && left.bal && right.bal,
    left: leftCount + 1,
    right: rightCount + 1
  }
}

describe('Balanced Binary Tree', () => {
  it('returns true with a tree no more then 1 off in length', () => {
    const root = treeCreator([3,9,20,null,null,15,7])
    expect(isBalanced(root)).to.equal(true)
  })
})
