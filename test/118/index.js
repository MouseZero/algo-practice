const {expect} = require('chai')

var generate = function(numRows) {
  if (numRows === 0) return []
  const triangle = [[1]]
  if (numRows === 1) return [[1]]
  let left, right
  for (let i=1; i<numRows; i++) {
    let newRow = []
    for (let p=0; p<triangle[i-1].length + 1; p++) {
      left =  (triangle[i-1][p-1])? triangle[i-1][p-1] : 0
      right = (triangle[i-1][p])  ? triangle[i-1][p]   : 0
      newRow.push(left + right)
    }
    triangle.push(newRow)
  }
  return triangle
};

describe('Pascal\'s Triangle', () => {
  it('should create the correct triangle', () => {
    const triangle = generate(5)
    expect(triangle).to.deep.equal([
           [1],
          [1, 1],
         [1, 2, 1],
        [1, 3, 3, 1],
       [1, 4, 6, 4, 1]
    ])
  })
  it('works with 1 as an input', () => {
    const triangle = generate(1)
    expect(triangle).to.deep.equal([
      [1]
    ])
  })
  it('works with 0 passed', () => {
    const triangle = generate(0)
    expect(triangle).to.deep.equal([])
  })
  it('works with 2 as the input', () => {
    const triangle = generate(2)
    expect(triangle).to.deep.equal([[1], [1, 1]])
  })
})
