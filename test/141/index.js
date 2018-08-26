const {expect} = require('chai')

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var hasCycle = function(head) {
  console.log('got here')
  if (!head || !head.next) return false
  console.log('didn\'tget here')
  let slow = head
  let fast = head.next
  while (fast) {
    if (fast === slow) return true
    slow = slow.next
    if (!fast.next) return false
    fast = fast.next.next
  }
  return false
}

describe('Linked List Cycle', () => {
  it('should find a cycle', () => {
    const n5 = new ListNode('n5')
    const n4 = new ListNode('n4')
    const n3 = new ListNode('n3')
    const n2 = new ListNode('n2')
    const n1 = new ListNode('n1')
    const n0 = new ListNode('n0')

    n0.next = n1
    n1.next = n2
    n2.next = n3
    n3.next = n4
    n4.next = n5
    n5.next = n2
    const answer = hasCycle(n0)
    expect(answer).to.equal(true)
  })

  it('should return false for a non cycle', () => {
    const n5 = new ListNode('')
    const n4 = new ListNode('')
    const n3 = new ListNode('')
    const n2 = new ListNode('')
    const n1 = new ListNode('')
    const n0 = new ListNode('')

    n0.next = n1
    n1.next = n2
    n2.next = n3
    n3.next = n4
    n4.next = n5
    const answer = hasCycle(n0)
    expect(answer).to.equal(false)
  })

  it('should be false for a single node', () => {
    const n0 = new ListNode('')
    const answer = hasCycle(n0)
    expect(answer).to.equal(false)
  })
})
