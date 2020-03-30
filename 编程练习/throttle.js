function throttle(fn, interval) {
  let flag = true
  return (...args) => {
    if(!flag) return
    flag = false
    setTimeout(() => {
      fn.apply(this, args)
      flag = true
    },interval)
  }
}

const fn = throttle(() => console.log(1), 1000)

fn()
fn()
