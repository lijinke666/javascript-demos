const add = (a) => a + 2
const subtract = (a) => a - 1

// 普通的 柯里化

subtract(add(1))       // 1

// 这样会有一个问题 , 包裹很多层后 代码不可读

const pipe = (...args) => defaultValue => args.reduce((outputValue, currentFunction) => currentFunction(outputValue), defaultValue)

const num = pipe(
  add,
  subtract
)

console.log(num(10))    // => subtract(add(10))  //11