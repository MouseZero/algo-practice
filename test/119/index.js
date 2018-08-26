const {expect} = require('chai')

var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1]
  let lastRow = [1]
  let row = lastRow
  let level = 1
  let left, right
  while (row.length < rowIndex + 1) {
    row = []
    for(let i=0; i<lastRow.length+1; i++) {
      left = lastRow[i-1] ? lastRow[i-1] : 0
      right = lastRow[i] ? lastRow[i] : 0
      row[i] = left + right
    }
    lastRow = row
  }
  return row
}

describe('Pascal\'s Triangle II', () => {
  it('should return the last row of the triangle', () => {
    const row = getRow(4)
    expect(row).to.deep.equal([1, 4, 6, 4, 1])
  })
})
