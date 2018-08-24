const {expect} = require('chai')
const {treeCreator} = require('../../tools/tree')

var isSymmetric = function(root) {
  if (root === null) true
  return compare(root.left, root.right)
};

function compare (node1, node2) {
  if (node1 === null && node2 === null) {
    return true
  } else if (node1 === null) {
    return false
  } else if (node2 === null) {
    return false
  }
  return node1.val === node2.val
    && compare(node1.left, node2.right)
    && compare(node1.right, node2.left)
}

describe('Symmetric Tree', () => {
  it('should test', () => {
    const root = treeCreator([1,2,2,3,4,4,3])
    const answer = isSymmetric(root)
    expect(answer).to.equal(true)
  })

  it('should detect non symmetrical but same numbers on both sides', () => {
    const root = treeCreator([1,2,2,3,4,3,4])
    expect(isSymmetric(root)).to.equal(false)
  })

  it('false if one side is to long', () => {
    const root = treeCreator([1,2,2,3,4,3,4,5])
    expect(isSymmetric(root)).to.equal(false)
  })
})
