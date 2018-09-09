const {expect} = require('chai')
const {linkListFromArray, listToArray} = require('../../tools/linkList')

function removeNthFromEnd(head, n) {
  let length = -1
  let node = head
  while(node) {
    length++
    node = node.next
  }
  let nth = length - (n-1)

  node = head
  i = -1
  if (nth === 0 && length === 0) {
    return null
  }
  if (nth ===0) {
    return head.next
  }
  while(node) {
    i++
    if (i === nth-1) {
      node.next = (node.next) ? node.next.next : null
    }
    node = node.next
  }
  return head
}

describe('Remove Nth Node From End of List', () => {
  it('Should remove nth form the end', () => {
    const head = linkListFromArray([5,4,3,7,8,9,7,5,56,3,4])
    const answer = removeNthFromEnd(head, 3)
    expect(listToArray(head)).to.deep.equal([5,4,3,7,8,9,7,5,3,4])
  })
  it.only('Should delete a single item', () => {
    const head = linkListFromArray([1])
    const answer = removeNthFromEnd(head, 1)
    expect(answer).to.deep.equal(null)
  })
})
