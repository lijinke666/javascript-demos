var a = {}

var b = Object.create(a)

// es6 语法
// Object.setPrototypeOf(a, b)

console.log(a.isPrototypeOf(b)) // true
