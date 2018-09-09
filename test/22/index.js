const {expect} = require('chai')

function generateParenthesis(n) {
  return generate([], n, n)
};

function generate(parens, openNeeded, closedNeeded) {
  if (!openNeeded && !closedNeeded) {
    const combo = parens.join('')
    return [combo]
  }

  let closed = []
  if (closedNeeded > openNeeded) {
    closed = generate([...parens, ')'], openNeeded, closedNeeded - 1)
  }
  let open = []
  if (openNeeded) {
    open = generate([...parens, '('], openNeeded-1, closedNeeded)
  }
  return [...closed, ...open]
}

describe('Generate Parentheses', () => {
  it('works with n = 3', () => {
    const answer = generateParenthesis(3)
    console.log(answer)
    expect(answer).to.have.members([
      "((()))",
      "(()())",
      "(())()",
      "()(())",
      "()()()"
    ])
  })
})
