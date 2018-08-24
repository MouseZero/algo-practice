const {expect} = require('chai')

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null
  return setupNode (nums, 0, nums.length-1)
};

function setupNode (nums, start, end) {
  console.log(start, ', ', end)
  const center = Math.floor(start + (end-start)/2)
  console.log('center', center)
  if (nums[center] === null) return null
  const node = new TreeNode(nums[center])
  node.left = (center-1 >= start) ? setupNode(nums, start, center-1) : null,
  node.right = (center+1 <= end) ? setupNode(nums, center+1, end) : null
  return node
}

describe('Convert Sorted Array to Binary Search Tree', () => {
  it('should create a balenced tree', () => {
    const root = sortedArrayToBST([0,1,2,3,4,5])
    console.log(root)
  })
})
