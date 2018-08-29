const {expect} = require('chai')

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var getIntersectionNode = function(headA, headB) {
  let common = null
  let node = headA
  while(node) {
    node.aList = true
    node = node.next
  }

  node = headB
  while(node) {
    if (node.aList === true) return node
    node = node.next
  }
  return common
}

describe('Intersection of Two Linked Lists', () => {
  it('should find first node that is common', () => {
    const a1 = new ListNode(5)
    const a2 = new ListNode(5)
    const a3 = new ListNode(5)
    const c1 = new ListNode(5)
    const c2 = new ListNode(5)
    const b1 = new ListNode(5)
    const b2 = new ListNode(5)

    a1.next = a2
    a2.next = a3
    a3.next = c1
    c1.next = c2
    b1.next = b2
    b2.next = c1

    const answer = getIntersectionNode(a1, b1)
    expect(answer).to.equal(c1)
  })

  it('should return null for no match', () => {
    const a1 = new ListNode(5)
    const a2 = new ListNode(5)
    const a3 = new ListNode(5)
    const c1 = new ListNode(5)
    const c2 = new ListNode(5)
    const b1 = new ListNode(5)
    const b2 = new ListNode(5)

    a1.next = a2
    a2.next = a3
    a3.next = c1
    c1.next = c2
    b1.next = b2

    const answer = getIntersectionNode(a1, b1)
    expect(answer).to.equal(null)
  })

  it('should return null if nodes are null', () => {
    const answer = getIntersectionNode(null, null)
    expect(answer).to.equal(null)
  })
})
