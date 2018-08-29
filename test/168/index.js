const {expect} = require('chai')

let map = "0ABCDEFGHIJKLMNOPQRSTUVWXYZ"
map = map.split('')

var convertToTitle = function(n) {
  if (n <= 26) {
    return map[n]
  } else {
    const carry = Math.ceil(n / 26) - 1
    let string = ''
    if (carry) {
      string = convertToTitle(carry)
    }
    let temp = (n - carry * 26)
    return string + map[temp]
  }
}

describe('Excel Sheet Column Title', () => {
  it('should work on a single char column', () => {
    const answer = convertToTitle(19)
    expect(answer).to.equal('S')
  })

  it('should work on a single char column', () => {
    const answer = convertToTitle(26)
    expect(answer).to.equal('Z')
  })

  it('should be able to create 2 letters', () => {
    const answer = convertToTitle(27)
    expect(answer).to.equal('AA')
  })

  it('should 52 should be BA', () => {
    const answer = convertToTitle(52)
    expect(answer).to.equal('AZ')
  })

  it('should be able to create AB', () => {
    const answer = convertToTitle(28)
    expect(answer).to.equal('AB')
  })

  it('should convert multiple numbers', () => {
    const answer = convertToTitle(701)
    expect(answer).to.equal('ZY')
  })
})
