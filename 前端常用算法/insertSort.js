/**
 * @name 参入排序
 */

const insertSort = (arr = []) => {
  const len = arr.length;
  let temp;
  //第一个默认已经排序 所以 i=1 从第一个开始
  for (let i = 1; i < len; i++) {
    //如果当前元素 大于了 前一个元素 就交换位置
    for (let j = i; j > 0 && arr[j] - arr[j - 1] < 0; j--) {
      temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    }
  }
  return arr;
};

console.log(insertSort([1, 2, 10, 3, 999, 4]));
