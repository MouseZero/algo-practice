const {expect} = require('chai')

var MinStack = function() {
  this.stack = []
  this.min = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack[this.stack.length] = x
  const lastMin = (this.min.length > 0) ? this.min[this.min.length-1] : Number.MAX_SAFE_INTEGER
  this.min[this.min.length] = Math.min(lastMin, x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const lastIndex = this.stack.length - 1
  const numb = this.stack[lastIndex]
  this.stack.splice(lastIndex, 1)
  this.min.splice(lastIndex, 1)
  return numb
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min[this.min.length-1]
};

describe('Min Stack', () => {
  it('should be able to push', () => {
    const minStack = new MinStack()
    minStack.push(5)
    minStack.push(3)
    minStack.push(9)
    expect(minStack.min[minStack.min.length-1]).to.equal(3)
    expect(minStack.stack).to.deep.equal([5,3,9])
  })

  it('should allow for poping', () => {
    const minStack = new MinStack()
    minStack.stack = [5,3,9]
    minStack.min = [5,3,3]

    const pop1 = minStack.pop()
    expect(pop1).to.equal(9)
    expect(minStack.stack).to.deep.equal([5,3])
    expect(minStack.min[minStack.min.length-1]).to.equal(3)

    const pop2 = minStack.pop()
    expect(pop2).to.equal(3)
    expect(minStack.stack).to.deep.equal([5])
    expect(minStack.min[minStack.min.length-1]).to.equal(5)
  })

  it('should be able to getMin', () => {
    const minStack = new MinStack()
    minStack.stack = [5,3,9]
    minStack.min = [5,3,3]

    expect(minStack.getMin()).to.equal(3)
  })

  it('should be able to use "top"', () => {
    const minStack = new MinStack()
    minStack.stack = [5,3,9]
    minStack.min = [5,3,3]

    expect(minStack.top()).to.equal(9)

  })
})
