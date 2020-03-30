function debounce(fn, interval) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, interval)
  }
}

const a = debounce(() => console.log(1), 1000)

a()
a()
