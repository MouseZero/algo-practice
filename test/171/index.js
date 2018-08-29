const {expect} = require('chai')

const asciiOffset = 64
const base = 26

var titleToNumber = function(s) {
  let answer = 0
  answer = s.charCodeAt(0) - asciiOffset
  return s.charCodeAt(0) - asciiOffset
}

describe('Excel Sheet Column Number', () => {
  it('converts a single letter', () => {
    const answer = titleToNumber('S')
    expect(answer).to.equal(19)
  })

  it('can convert multiple letters', () => {
    const answer = titleToNumber('AB')
    expect(answer).to.equal(28)
  })
})
