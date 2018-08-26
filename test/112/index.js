const {expect} = require('chai')
const {treeCreator} = require('../../tools/tree')

var hasPathSum = function(root, sum) {
  if (!root) return false
  return leafHasSum(root, 0, sum)
};

function leafHasSum (root, subTotal, lookingFor) {
  const newSum = subTotal + root.val
  if (!root.left && !root.right) {
    if (newSum === lookingFor) return true
    return false
  }
  let left = false
  let right = false
  if (root.left) left = leafHasSum(root.left, newSum, lookingFor)
  if (root.right) right = leafHasSum(root.right, newSum, lookingFor)
  return left || right
}

describe('Path Sum', () => {
  it('returns true when there is a path that adds up to the input', () => {
    const root = treeCreator([5,4,8,11,null,13,4,7,2,null,null,null,1])
    expect(hasPathSum(root, 22)).to.equal(true)
  })

  it('returns false if you cant find a path with the input sum', () => {
    const root = treeCreator([5,4,8,11,null,15,4,15,15,null,null,null,15])
    expect(hasPathSum(root, 22)).to.equal(false)
  })
})
