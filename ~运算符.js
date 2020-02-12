// ~ 是一个隐式转换操作符

// ~42 = -(42+1)

console.log(~42); // -43

// 一个骚操作 用于 indexOf
console.log("a".indexOf("b")); // -1

// 通常是
if ("a".indexOf("b") !== -1) {
  console.log("做一些事");
}

// 可以用 ~

if (~"a".indexOf("a")) {
  console.log("做一些事");
}

// 两个~~ 是元运算 可以用来取整
console.log(~~1.0); // 1
