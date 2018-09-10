const {expect} = require('chai')
const {linkListFromArray, listToArray} = require('../../tools/linkList')

function swapPairs(head) {
  if(!head) return null
  let newHead = (head.next) ? head.next : head
  let node = head
  while(node && node.next) {
    const first = node
    const second = node.next
    const third = (node.next.next) ? node.next.next : null
    const fourth = (third && third.next) ? third.next : null
    second.next = first
    if (fourth) {
      first.next = fourth
    } else if (third) {
      first.next = third
    } else {
      first.next = null
    }
    node = third
  }
  return newHead
};

describe('Swap Nodes in Pairs', () => {
  it('should swap pairs on an even linked list', () => {
    const head = linkListFromArray([1,2,3,4])
    const newHead = swapPairs(head)
    const answerArray = listToArray(newHead)
    expect(answerArray).to.deep.equal([2,1,4,3])
  })

  it('should swap pairs with odd number of items', () => {
    const head = linkListFromArray([5,8,9,2,4])
    const newHead = swapPairs(head)
    const answerArray = listToArray(newHead)
    expect(answerArray).to.deep.equal([8,5,2,9,4])
  })

  it('should be unchanged for single node list', () => {
    const head = linkListFromArray([1])
    const newHead = swapPairs(head)
    const answerArray = listToArray(newHead)
    expect(answerArray).to.deep.equal([1])
  })

  it('should return null for an empty array', () => {
    const head = linkListFromArray([])
    const newHead = swapPairs(head)
    expect(newHead).to.deep.equal(null)
  })
})
