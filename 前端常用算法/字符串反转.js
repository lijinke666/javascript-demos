// 传统利用数组
function reverseString(str) {
  return str.split('').reverse().join('')
}

console.log(reverseString('abc')); // cba
console.log(reverseString('李金珂')) // 珂金李

console.log(reverseString('😃👀')) // 一个emoji占两个字符 所以无效


// 利用 Array.from() 规避

console.log('😃'.length); // 2
console.log(Array.from('😃').length) // 1


function reverseString2(str) {
  return Array.from(str).reverse().join('')
}

console.log(reverseString2('abc')); // cba
console.log(reverseString2('李金珂')) // 珂金李

console.log(reverseString2('😃👀')) // 一个emoji占两个字符 所以无效


// 第二种 递归的方式

function reverseString3(str) {
  // 解决 emoji
  const strs = Array.from(str)

  if (strs.length === 1) {
    return str
  }

  // 依次取第一个放在最后面
  return reverseString3(strs.slice(1)) + strs[0]
}

console.log(reverseString3('abc')); // cba
console.log(reverseString3('李金珂')) // 珂金李
console.log(reverseString3('😃👀')) // 一个emoji占两个字符 所以无效
