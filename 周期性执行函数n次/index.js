const create = (fn, n) => {
  let i = 0;
  const inner = (...args) => {
    i++
    if (i > n) {
      return
    }
    inner.call(this, ...args)
    fn.call(this,...args)
  }
  return inner
}

function log() {
  console.log('log');
}
const fn = create(log, 4)

fn()
