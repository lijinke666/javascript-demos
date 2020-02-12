console.log(1 + "");

// 在隐式转换时，会触发内部的 valueOf

// 实际 1 =>  new Number(1)

const a = new Number(1);

a.valueOf = () => {
  return "ljk";
};

console.log(a + ""); // ljk

const obj = {
  toString() {
    return "ljk";
  },
  valueOf() {
    return "我是你爹";
  }
};

console.log(obj + ""); // 我是你爹

// 用 String 强制类型转换时  会触发内部的 toString 方法
console.log(String(obj)); // ljk
