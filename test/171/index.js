const {expect} = require('chai')

const asciiOffset = 64
const base = 26

var titleToNumber = function(s) {
  let answer = 0
  for(let i=0; i<s.length; i++) {
    const multiplier = Math.pow(base, i)
    const toAdd = (s.charCodeAt(s.length-1-i) - asciiOffset) * multiplier
    answer += toAdd
  }
  return answer
}

describe('Excel Sheet Column Number', () => {
  it('converts a single letter', () => {
    const answer = titleToNumber('S')
    expect(answer).to.equal(19)
  })

  it('works with AB', () => {
    const answer = titleToNumber('AB')
    expect(answer).to.equal(28)
  })

  it('can convert multiple letters', () => {
    const answer = titleToNumber('AAAA')
    expect(answer).to.equal(18279)
  })
})
