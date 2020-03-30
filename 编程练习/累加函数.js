function sum(...args) {
  const inner = (...innerArgs) => {
    if (!innerArgs[innerArgs.length - 1]) {
      return [...args, ...innerArgs].reduce((n, v) => n + v)
    }
    return (...newArgs) => {
      const lastArgs = newArgs.length ? newArgs : [false]
      return inner(...innerArgs, ...lastArgs)
    }
  }

  return inner
}

const f = sum(1, 2)

console.log(f(3, 4)())
console.log(f(1, 2)(3, 4, 5)(6)())
console.log(f())
console.log(f(1,2,3,4,5,6)())
