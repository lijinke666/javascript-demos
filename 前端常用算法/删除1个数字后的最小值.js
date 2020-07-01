const deleteNumber = (number) => {
  // 如果 第一位 比 第 二位  大 那就删除第一位 否则相反
  const first = number.charAt(0)
  const second = number.charAt(1)

  if(first >= second) {
    return number.substring(1)
  }

  return number.substr(0,1) + number.substr(2, number.length)
}

console.log(deleteNumber("541270936"));  //41270936
console.log(deleteNumber("451270936"));  //41270936
