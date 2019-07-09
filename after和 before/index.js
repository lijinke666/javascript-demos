Function.prototype.before = function(fn) {
  const self = this
  return function(...attr) {
    fn.apply(this, attr)
    return self.apply(this, attr)
  }
}

Function.prototype.after = function(fn) {
  const self = this
  return function(...attr) {
    const result = self.apply(this, attr)
    fn.apply(this, attr)
    return result
  }
}

console.log.before(()=>{
  console.log('before....');
})('log....')

console.log.after(()=>{
  console.log('after....');
})('log...')

const fn = () => {
  console.log('start...');
}

const f = fn.after(()=>{
  console.log('after');
})

f()
