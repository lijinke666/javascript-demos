/**
 * 自动柯里化
 */

const curry = (fn) => {
  const _curry = (restNum = 0, args = []) => {
    if (restNum === 0) {      // 如果只有一个参数 就直接调用
      return fn(...args)
    }
    // 如果有多个参数 递归调用 直到 参数为 0
    return (params) => _curry(restNum - 1, [...args, params])
  }
  return _curry(fn.length)    // 传入函数的参数的长度 觉得执行几次
}

const test = curry((a, b, c) => a + b + c)
const test2 = curry((a, b) => a ** b)

console.log(test(1)(2)(3));  // 6
console.log(test2(1)(2));   // 1
console.log(test2(3)(3));   // 3 * 3 * 3  = 27
