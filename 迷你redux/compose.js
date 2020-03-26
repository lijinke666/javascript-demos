function compose(...fns) {
  return (...args) => fns.reduce((arg, fn) => fn(arg), ...args)
}

const fn = compose(
  (n) =>  n + 1,
  (n) =>  n + 2,
  (n) =>  n + 3,
)

console.log(fn(4));
