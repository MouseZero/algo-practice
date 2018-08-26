const {expect} = require('chai')
const {treeCreator} = require('../../tools/tree')

var minDepth = function(root) {
  if (!root) return 0
  let queue = [root]
  let nextQueue
  let level = 1
  while(queue.length > 0) {
    nextQueue = []
    for (let i=0; i<queue.length; i++) {
      if (!queue[i].left && !queue[i].right) return level
      if (queue[i].left) nextQueue.push(queue[i].left)
      if (queue[i].right) nextQueue.push(queue[i].right)
    }
    level++
    queue = nextQueue
  }
}

describe('Minimum Depth of Binary Tree', () => {
  it('should count on a unbalanced tree', () => {
    const root = treeCreator([3,9,20,null,null,15,7])
    const depth = minDepth(root)
    expect(depth).to.equal(2)
  })
})
