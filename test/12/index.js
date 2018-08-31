const {expect} = require('chai')

function intToRoman(num) {
  const lookUp = [
    {number: 1000, char: 'M'},
    {number: 900, char: 'CM'},
    {number: 500, char: 'D'},
    {number: 400, char: 'CD'},
    {number: 100, char: 'C'},
    {number: 90, char: 'XC'},
    {number: 50, char: 'L'},
    {number: 40, char: 'XL'},
    {number: 10, char: 'X'},
    {number: 9, char: 'IX'},
    {number: 5, char: 'V'},
    {number: 4, char: 'IV'},
    {number: 1, char: 'I'}
  ]
  const romans = []
  for (let i=0; i<lookUp.length; i++) {
    while (Math.floor(num / lookUp[i].number)) {
      romans.push(lookUp[i].char)
      num -= lookUp[i].number
    }
  }
  return romans.join('')
}

describe('Integer to Roman', () => {
  it('can convert 1', () => {
    const answer = intToRoman(1)
    expect(answer).to.equal('I')
  })
  it('can convert 3', () => {
    const answer = intToRoman(3)
    expect(answer).to.equal('III')
  })
  it('can convert 4', () => {
    const answer = intToRoman(4)
    expect(answer).to.equal('IV')
  })
  it('can convert 58', () => {
    const answer = intToRoman(58)
    expect(answer).to.equal('LVIII')
  })
  it('can convert 1994', () => {
    const answer = intToRoman(1994)
    expect(answer).to.equal('MCMXCIV')
  })
})
