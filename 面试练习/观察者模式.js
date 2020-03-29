function createObserve() {
  const listeners = []
  function observe(cb) {
    listeners.push(cb)
  }

  function dispatch() {
    listeners.forEach((listener) => listener())
  }
  return {
    observe,
    dispatch
  }
}

const observe = createObserve()

observe.observe(() => {
  console.log('你好');
})

observe.dispatch()
observe.dispatch()
observe.dispatch()
observe.dispatch()
