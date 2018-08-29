const {expect} = require('chai')
const {treeCreator} = require('../../tools/tree')
const {linkListFromArray} = require('../../tools/linkList')

describe('Linked List', () => {
  it('craetes a linked list in the right order', () => {
    const answer = linkListFromArray([5,2,3,7])
    expect(answer.val).to.equal(5)
    expect(answer.next.val).to.equal(2)
    expect(answer.next.next.val).to.equal(3)
    expect(answer.next.next.next.val).to.equal(7)
  })
})
