class EventEmitter {
  constructor () {
    this.listeners = {}
  }

  on(name, cb) {
    if (!this.listeners[name]) {
      this.listeners[name] = []
    }
    this.listeners[name].push(cb)
  }

  emit(name, ...args) {
    if (this.listeners[name]) {
      this.listeners[name].forEach((cb) => cb(...args))
    }
  }

  off(name) {
    delete this.listeners[name]
  }

  once(name, cb) {
    this.on(name, (...args) => {
      cb(...args)
      this.off(name)
    })
  }
}

const event = new EventEmitter()

event.on('test', (...args) => {
  console.log('test1....',...args)
})
event.on('test', (...args) => {
  console.log('test2....',...args)
})

event.emit('test', 1,2,3)
event.emit('test', 'ljk')
event.emit('test', 'hahah')

event.once('once', (...args) => {
  console.log('once....',...args)
})

event.emit('once', 1,2,3)
event.emit('once', 'ljk')
event.emit('once', 'hahah')
