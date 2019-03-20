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
})

console.log.after(()=>{
  console.log(111);
})
