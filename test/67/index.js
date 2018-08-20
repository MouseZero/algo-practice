var addBinary = function(a, b) {
  const newNumber = []
  const maxLength = Math.max(a.length, b.length)
  a = '0'.repeat(maxLength - a.length) + a
  b = '0'.repeat(maxLength - b.length) + b

  let carry = 0
  let sum
  for (let i=maxLength-1; i>=0; i--) {
    sum = parseInt(a.charAt(i)) + parseInt(b.charAt(i)) + carry
    newNumber[i] = sum % 2
    carry = Math.floor(sum / 2)
  }
  if (carry) newNumber.unshift('1')

  return newNumber.join('')
};

const {expect} = require('chai')

describe('addBinary', () => {
  it('adds a simple number', () => {
    const answer = addBinary("10", "111")
    expect(answer).to.equal('1001')

  })
  it('should add a extreamly large numbers', () => {
    const answer = addBinary(
      "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
      "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
    )
    expect(answer).to.equal("110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000")
  })
})

