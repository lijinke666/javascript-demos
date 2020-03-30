Function.prototype._bind = function (ctx, ...args) {
  return (...innerArgs) => this.call(ctx, ...args, ...innerArgs)
}

let name = 'name'
function fn(...args) {
  console.log('args: ', ...args);
  console.log(this.name);
}
const n = fn._bind({ name: 'ljk' }, 'test', 'test2')

n()

