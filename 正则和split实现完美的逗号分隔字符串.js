const str = "a,b,  c, d" 

// 以逗号分隔 字符串
// 传统方式 中间会有空格
console.log(str.split(','))  // ["a", "b", "  c", " d"]

// split 支持一个正则
console.log(str.split(/\s*,\s*/)) // ["a", "b", "c", "d"]
