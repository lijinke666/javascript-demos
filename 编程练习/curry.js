function curry(fn) {
  const self = this
  function inner(...args) {
    if (args.length === fn.length) {
      return fn.apply(self, args)
    }
    return (...innerArgs) => inner.call(self, ...innerArgs, ...args)
  }
  return inner
}

function a(n, m, c) {
  return n + m + c
}
const f = curry(a)
console.log(' f: ',  f(1)(2,3));
console.log(' ff: ',  f(1)(2)(3));
console.log(' fff: ', f(1, 2, 3));
