function ListNode(val) {
    this.val = val;
    this.next = null;
}

function linkListFromArray(array) {
  let previous = undefined
  let node
  for (let i=array.length-1; i>=0; i--) {
    node = new ListNode(array[i])
    node.next = previous

    previous = node
  }
  return node
}

function listToArray(head) {
  let node = head
  const array = []
  while(node) {
    array.push(node.val)
    node = node.next
  }
  return array
}

module.exports = {
  linkListFromArray,
  ListNode,
  listToArray
}
