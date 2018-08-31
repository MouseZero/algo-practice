const {expect} = require('chai')

const MIN = -2147483648
const MAX = 2147483647

function myAtoi(str) {
  const s = str.match(/^[ ]*[\+\-]*[0-9]+/g)
  let number = parseInt(s)
  if (number < MIN) number = MIN
  if (number > MAX) number = MAX
  return (number) ? number : 0
}

describe('String to Integer (atoi)', () => {
  it('should convert a number string', () => {
    const answer = myAtoi("55")
    expect(answer).to.equal(55)
  })
  it('should convert a negative number with spaces before and letters after', () => {
    const answer = myAtoi("     -559lkajsdlfkj5")
    expect(answer).to.equal(-559)
  })
  it('should be 0 if words come before numbers', () => {
    const answer = myAtoi("words and 987")
    expect(answer).to.equal(0)
  })
  it('returns lowest 32 bit int if to low', () => {
    const answer = myAtoi('-91283472332')
    expect(answer).to.equal(-2147483648)
  })
  it('returns max 32 bit int if to high', () => {
    const answer = myAtoi('980238849823094823')
    expect(answer).to.equal(2147483647)
  })
  it('does not crash with a extremely high number', () => {
    const answer = myAtoi('90823409283598089273459820375928347529384572980345723980457324980732985723409857234985723490587234985723485972345890236458923645982345623897508923475892347589237598234759028347598024375982375827349857234985723498572340985')
    expect(answer).to.equal(2147483647)
  })
  it('minus with no number doesn\'t brake the function', () => {
    const answer = myAtoi('-')
    expect(answer).to.equal(0)
  })
  it('ignores starting 0\'s', () => {
    const answer = myAtoi("  0000000000012345678")
    expect(answer).to.equal(12345678)
  })
})
