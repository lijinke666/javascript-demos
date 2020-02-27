function isURL(value) {
  return /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?$/.test(
    value
  )
}

console.log(isURL('http://www.baidu.com'))
console.log(isURL('http://www.baidu.com/v1'))
console.log(isURL('http://www.baidu.com/v1.')) // false
console.log(isURL('http://www.c-c-1.com'))
console.log(isURL('https://www.c-c-1.com'))
console.log(isURL('www.baidu.com'))
console.log(isURL('www.baidu.com/v1'))
