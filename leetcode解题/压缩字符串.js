/**
 * @name 压缩字符串
 * @description aaaabcccaaa => a4bc3a3
 */

const reduceString = str => {
  const len = str.length;
  let [index, num, temp] = [0, 1, ""];

  while (index < len) {
    //如果前后两个值一样 数量+1
    if (str.charAt(index) === str.charAt(index + 1)) {
      num++;
    } else {
      //如果不一样 就 加上当前的数量  数量 设为初始值 1
      temp += str.charAt(index);
      if(num>1){
        temp += num;
      }
      num = 1;
    }
    index++;
  }
  return temp;
};


console.log(reduceString("aaaabcccaaa"));      //a4bc3a3