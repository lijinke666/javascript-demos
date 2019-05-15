const instanceOf = (left) => (right)=> {
  const RP = right.prototype; // 构造函数的原型
  while(true) {
    if (left === null) {
      return false;
    }
    if (left === RP) { // 一定要严格比较
      return true;
    }
    left = left.__proto__; // 沿着原型链重新赋值
  }
}

console.log(instanceOf("1")(String))
console.log(instanceOf(1)(String))
console.log(instanceOf(true)(Boolean))
console.log(instanceOf([])(Array))
console.log(instanceOf({})(Object))

