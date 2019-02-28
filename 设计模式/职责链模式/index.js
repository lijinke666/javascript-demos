Function.prototype.after = function(fn) {
  const self = this
  return function(...attr) {
    const result = self.apply(this, attr)
    if(result) {
      return fn.apply(this, attr)
    }
    return result
  }
}

const func1 = (a) => a
const func2 = (a) => a
const func3 = (a) => a

const test = func1.after(func2).after(func3) 
test(1)
test(true)
test(false)
