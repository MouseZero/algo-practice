const {expect} = require('chai')

function convert(s, numRows) {
  const matrix = []
  let direction = 1
  let mi = 0
  for (let i=0; i<s.length; i++) {
    if (!matrix[mi]) matrix.push([])
    matrix[mi].push(s.charAt(i))
    if (numRows > 1) {
      if (mi + direction < 0){
        direction = 1
      } else if (mi + direction >= numRows) {
        direction = -1
      }
      mi += direction
    }
  }
  let answer = []
  for (let y=0; y<matrix.length; y++) {
    for (let x=0; x<matrix[y].length; x++) {
      answer.push(matrix[y][x])
    }
  }
  return answer.join('')
}

describe('ZigZag Conversion', () => {
  it('can take a zigzag of 1', () => {
    const answer = convert('AB', 1)
    expect(answer).to.equal('AB')
  })
  it('can calcluate the order correctly', () => {
    const answer = convert('PAYPALISHIRING', 4)
    expect(answer).to.equal('PINALSIGYAHRPI')
  })
})
