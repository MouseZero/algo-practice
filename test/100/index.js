const {expect} = require('chai')

var isSameTree = function(p, q) {
  if (p === null && q === null) {
    return true
  } else if (p === null) {
    return false
  } else if (q === null) {
    return false
  }
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

describe('Same Tree', () => {
})
