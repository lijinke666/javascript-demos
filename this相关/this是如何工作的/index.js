/**
 * 
 * this 永远指向函数运行时所在的对象，而不是函数创建时所在的对象
  匿名函数和不处于任何对象中的函数，This指向window
  call, apply, with指的This是谁就是谁。
  普通函数调用，函数被谁调用，This就指向谁
 */

var a = 0;

var obj = {
  a: 1,
  test() {
    console.log(this.a);
  }
};

obj.test(); // 1.  this指向函数运行时所在的对象 当前this 是 obj

var b = obj.test;

b();
