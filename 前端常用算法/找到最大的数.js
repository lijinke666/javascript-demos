
/**
 * @description 一组整数, 找到最大的数  类似 Math.max()
 * @param  {...number} num
 */
const max = (...num) => {
  if(num === 1) {
    return num[0]
  }
  let result = num[0]
  for(let i = 0; i<= num.length; i++) {
    if(num[i] > result) {
      result = num[i]
    }
  }
  return result
}


console.log(max(1, 100, 20, 99, 3))
console.log(max(3))
console.log(max(200,100))
