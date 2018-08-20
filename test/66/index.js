var plusOne = function(digits) {
  let carry = 1
  let num
  for (let i=digits.length-1; i>=0; i--) {
    if (!carry) break;
    if (digits[i] !== 9) carry = 0
    digits[i] = (digits[i] + 1) % 10
  }
  if (carry) digits.unshift(1)
  return digits
};

console.log(plusOne([9,9,9]))
console.log(plusOne([2,9,9,9]))
console.log(plusOne([2,4,7,9]))
console.log(plusOne([2,4,5]))

