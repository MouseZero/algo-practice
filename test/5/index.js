const {expect} = require('chai')

var longestPalindrome = function(s) {
  const counts = []
  for (let b=0; b<s.length; b++) {
    counts[b] = []
    for (let e=0; e<=b; e++) {
      let prevB = b-1
      let prevE = e+1
      let previous = 0
      if (counts[prevB] && counts[prevB][prevE] !== undefined) {
        previous = counts[prevB][prevE]
      }
      if (previous === -1) {
        counts[b][e] = -1
      } else if (s.charAt(b) === s.charAt(e)) {
        let current = (b === e) ? 1 : 2
        counts[b][e] = previous + current
      } else {
        counts[b][e] = -1
      }
    }
  }
  // for (let i=0; i<counts.length; i++) {
  //   console.log(counts[i])
  // }
  let max = 0
  let cords = []
  for (let b=0; b<counts.length; b++) {
    for (let e=0; e<counts[b].length; e++) {
      if (max < counts[b][e]) {
        max = counts[b][e]
        cords = [b, e]
      }
    }
  }
  if (!max) return ''
  let answer = []
  for (let i=cords[1]; i<=cords[0]; i++) {
    answer.push(s.charAt(i))
  }
  return answer.join('')
}

describe('Longest Palindromic Substring', () => {
  it('should find only palindrom in string', () => {
    const answer = longestPalindrome("sbbd")
    expect(answer).to.equal('bb')
  })
  it('finds first palindrom thats not on the ends', () => {
    const answer = longestPalindrome("isababadis")
    expect(answer).to.equal('ababa')
  })
  it('finds large palindrom at the end', () => {
    const answer = longestPalindrome('swbcabacwbgimmigbw')
    expect(answer).to.equal('wbgimmigbw')
  })
  it('should find palindrom at the start', () => {
    const answer = longestPalindrome('gimigklmnbkasjdfiomn')
    expect(answer).to.equal('gimig')
  })
  it('find full string thats a palindrom', () => {
    const answer = longestPalindrome('ccc')
    expect(answer).to.equal('ccc')
  })
  it('find full long string thats palindrom', () => {
    const answer = longestPalindrome('abcda')
    expect(answer).to.equal('a')
  })
})
