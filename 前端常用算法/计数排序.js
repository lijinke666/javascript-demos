
/**
 * @name 计数排序
 * @description 适用于一定长度的 整数数组排序, 找到数组中的最大值, 生成相应长度的空数组 每个下标代表对应整数出现的次数
 * @param {*} arr
 */
const countSort = (arr) => {
  const max = Math.max(...arr)
  const countArray = new Array(max + 1)

  for(let i=0; i< arr.length; i++) {
    const value = arr[i]
    countArray[value]++
  }

  const sortedArray = []
  let index = 0

  for(let i =0; i< countArray.length; i ++){
    for(let j=0; j< countArray[i]; j ++) {
      sortedArray[index++] = i
    }
  }

  return sortedArray
}

console.log(countSort([1,2,3,4,5, 2,3,4]));
