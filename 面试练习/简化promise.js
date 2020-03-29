class MyPromise {
  constructor(handler) {
    this.listeners = []
    this.handlers = []
    this.errorHandlers = []
    handler.call(this, this.resolve.bind(this), this.reject.bind(this))
  }

  static resolve(data) {
    return new MyPromise((res) => {
      res(data)
    })
  }

  then(handler) {
    this.handlers.push(handler)
    return this
  }

  catch(handler) {
    this.errorHandlers.push(handler)
    return this
  }

  resolve(...args) {
    this.handlers.forEach((handler) => {
      handler(...args)
    })
  }

  reject(...args) {
    this.errorHandlers.forEach((handler) => {
      handler(...args)
    })
  }

  static race(tasks) {
    return new MyPromise((resolve, reject) => {
      tasks.forEach(() => {
        tasks.then(resolve, reject)
      })
    })
  }
}

const promise1 = new MyPromise((resolve) => {
  setTimeout(() => {
    console.log('promise1')
    resolve('resolve promise1')
  }, 1000)
})

const promise2 = new MyPromise((resolve) => {
  setTimeout(() => {
    console.log('promise2')
    resolve('resolve promise2')
  }, 2000)
})

// MyPromise.race([promise1, promise2])

promise1.then((data) => {
  console.log('promise1 data: ', data)
})

promise2
  .then((data) => {
    console.log('promise2 data: ', data)
    return 1
  })
  .then((data) => {
    console.log('data',data)
  })


MyPromise.resolve(1).then((data) => console.log('MyPromise.resolve:', data))

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject('-reject-')
  },1000)
})

p.catch((data) => {
  console.log('catch data: ', data);
})
