const {expect} = require('chai')

var deleteDuplicates = function(head) {
  if (head === null) return []
  while (head.next && head.next.val === head.val) {
    head.next = head.next.next
  }
  if (head.next) deleteDuplicates(head.next)
  return head
};

describe('Remove Dup Linked List', () => {
  it('should remove dups', () => {
  })
})
