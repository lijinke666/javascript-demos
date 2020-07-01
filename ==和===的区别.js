// 往往一问到 == 和 === 的区别，就会说 == 不比较类型 === 会比较类型

console.log( 1 == "1")
console.log( 1 === "1" )

// 看了你不知道的javascript才知道 原来唯一的区别是 === 不会做隐式转换

// 1 == "1" 内部会做 所以相等， 我曹，好有道理

// 转换规则：会把字符串转成数字

// 1 == "1" =》 1 == Number("1")


console.log( true == "1")

// 转换规则

// true == "1" => Number(true) == "1" => 1 == "1"  true

console.log( true == "13")

// 转换规则

// true == "13" => Number(true) == "13" => 1 == "13"  false
