/**
 * @name 偏函数
 * @desc 类似于 工厂函数 封装一层 重复的代码 按给定的 类型 返回对应的工厂函数
 */

 const isType = (type)=> (value)=> Object.is(typeof (value),type)

 const isString = isType('string')
 const isNumber = isType('number')

 console.log(isString("1"));     //true
 console.log(isNumber(1));      //true