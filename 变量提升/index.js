console.log(a) // 这里不会报错 而是 undefined

var a = 1

// 因为实际 js 引擎会转换成

var a

console.log(a);

a = 1
