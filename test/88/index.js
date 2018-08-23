const {expect} = require('chai')

var merge = function(nums1, m, nums2, n) {
  m = m+n
  for (let i=m-1; i>=n-1; i--) {
    nums1[i] = nums1[i-n]
  }
  let mp = n
  let np = 0
  let pointer = 0
  while (mp < m && np < n) {
    if (nums1[mp] <= nums2[np]) {
      nums1[pointer] = nums1[mp]
      mp ++
    } else {
      nums1[pointer] = nums2[np]
      np++
    }
    pointer++
  }
  if (np < n) {
    for (let i=np; i<n; i++) {
      nums1[pointer] = nums2[i]
      pointer++
    }
  }
};

describe('Merge Sorted Arrays', () => {
  it('should be able to sort 2 lists', () => {
    let nums1 = [2, 4, 6, 0, 0, 0, 0]
    let nums2 = [2, 2, 5, 12]
    merge(nums1, 3, nums2, 4)
    expect(nums1).to.deep.equal([2, 2, 2, 4, 5, 6, 12])
  })
  it.only('should be able to sort highly ordered array', () => {
    let nums1 = [1,2,4,5,6,0]
    let nums2 = [3]
    merge(nums1, 5, nums2, 1)
    expect(nums1).to.deep.equal([1,2,3,4,5,6])

  })
})
