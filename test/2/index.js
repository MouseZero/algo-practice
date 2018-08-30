const {expect} = require('chai')
const {linkListFromArray, ListNode} = require('../../tools/linkList')

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  return add(l1, l2, 0, null, 1)
};

function add (l1, l2, carry, lastNode) {
  let n1 = 0
  let n2 = 0
  if (l1) {
    n1 = l1.val
    l1 = l1.next
  } else {
    n1 = 0
  }
  if (l2) {
    n2 = l2.val
    l2 = l2.next
  } else {
    n2 = 0
  }
  let num = n1 + n2 + carry
  console.log(num)
  const node = new ListNode((num % 10))
  if (lastNode) lastNode.next = node
  carry = Math.floor(num/10)
  if (l1 || l2 || carry) add(l1, l2, carry, node)
  return node
}

describe('Add Two Numbers Linked List', () => {
  it('adds 2 numbers of the same length', () => {
    const l1 = linkListFromArray([2,4,3])
    const l2 = linkListFromArray([5,6,4])
    const answer = addTwoNumbers(l1, l2)
    expect(answer.val).to.equal(7)
    expect(answer.next.val).to.equal(0)
    expect(answer.next.next.val).to.equal(8)
  })
  it('A carried number should recurse even if both nodes are null', () => {
    const l1 = linkListFromArray([5])
    const l2 = linkListFromArray([5])
    const answer = addTwoNumbers(l1, l2)
    expect(answer.val).to.equal(0)
    expect(answer.next.val).to.equal(1)
  })
  it.only('can add 81 and 0', () => {
    const l1 = linkListFromArray([1, 8])
    const l2 = linkListFromArray([0])
    const answer = addTwoNumbers(l1, l2)
    expect(answer.val).to.equal(1)
    expect(answer.next.val).to.equal(8)
  })
})
