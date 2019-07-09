const reg = /^-?(0|[1-9][0-9]*)?$/

console.log(reg.test('1'))   // true
console.log(reg.test('1-'))  // false
console.log(reg.test('-1')) // true
console.log(reg.test('a'))  // false
console.log(reg.test('00')) // false
console.log(reg.test('0'))  // true
