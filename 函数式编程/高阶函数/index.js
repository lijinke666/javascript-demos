/**
 * @name 高阶函数 
 * @desc 可以把函数当做参数 或者返回值
 */

 //返回值为函数
 const fn = (num)=> ()=> num

 console.log(fn(1)())       //1


 //函数当参数
 const arr = [1,3,4,2]
 arr.sort((a,b)=> a+b)