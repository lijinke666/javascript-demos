function MyNew(fn ,...args) {
  const o = {}
  Object.setPrototypeOf(o, fn.prototype)
  // 两种写法一样
  // Object.create(fn.prototype)
  // o.__proto__ = fn.prototype
  const result = fn.call(this, ...args)
  return result instanceof Object ? result : o
}

function User(name) {
  this.name = name
  this.sayName = function () {
    console.log(this.name);
  }
}

const user = MyNew(User, 'ljk')
console.log('user: ', user);
