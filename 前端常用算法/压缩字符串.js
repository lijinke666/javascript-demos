/**
 * @name 压缩字符串
 * @description aaaabcccaaa => a4bc3a3
 */

const reduceString = (str)=>{
  let num = 0
  return Array(str.length).fill().reduce((temp,v,i,arr)=>{
    if(str.charAt(i) === str.charAt(i+1)){
      num++
    }else{
      temp+= str.charAt(i);    //如果前后不一样 就加上当前字符
      num >0 && (temp+=num)    //如果有重复的就加上重复的数字
      num = 0                  //还原,重新开始计算
    }
    return temp
  },"")
}

console.log(reduceString("aaaabcccaaa"));
console.log(reduceString("aabbbbbbbbcccaaa"));
console.log(reduceString("fffaccccdd"));