/**
 * @description 将多个函数组合成一个函数, 依次执行
 * @param  {...any} fns
 */

function compose(...fns) {
  return (...args) => fns.reduce((currentArgs, fn) => fn(currentArgs), ...args)
}

function a(param) {
  return `${param}-李`
}
function b(param) {
  return `${param}-金`
}
function c(param) {
  return `${param}-珂`
}
const fn = compose(
 a,b,c
)
console.log(fn('骚猪'));  // 骚猪-李-金-珂
