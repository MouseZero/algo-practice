const {expect} = require('chai')
const {treeCreator} = require('../../tools/tree')

var levelOrderBottom = function(root) {
  if (!root) return []
  let queue = [root]
  let nextQueue
  let backwordsAnswer = []
  let row
  while(queue.length > 0) {
    nextQueue = []
    row = []
    for (let i=0; i<queue.length; i++) {
      row.push(queue[i].val)
      if (queue[i].left && queue[i].left.val !== null) nextQueue.push(queue[i].left)
      if (queue[i].right && queue[i].right.val !== null) nextQueue.push(queue[i].right)
    }
    queue = nextQueue
    backwordsAnswer.push(row)
  }
  console.log(backwordsAnswer)
  return backwordsAnswer.reverse()
};

describe('Binary Tree Level Order Traversal II', () => {
  it('give you a matrix with bottom first', () => {
    const root = treeCreator([3,9,20,null,null,15,7])
    expect(levelOrderBottom(root)).to.deep.equal([
      [15,7],
      [9,20],
      [3]
    ])
  })
})
