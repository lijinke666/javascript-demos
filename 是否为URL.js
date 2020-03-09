function isURL(value) {
  return /^((https?):\/\/)[\w-]*(\.[\w-]+|localhost)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?$/.test(
    value
  )
}

console.log(isURL('http://www.baidu.com'))
console.log(isURL('http://www.baidu.com:80'))
console.log(isURL('http://www.baidu.com/v1'))
console.log(isURL('http://www.baidu.com/v1.')) // false
console.log(isURL('http://www.c-c-1.com'))
console.log(isURL('https://www.c-c-1.com'))
console.log(isURL('www.baidu.com'))
console.log(isURL('www.baidu.com/v1'))
console.log('===')
console.log(isURL('http://localhost'))
console.log(isURL('http://localhost:80'))
console.log(isURL('http://localhost/v1'))
console.log(isURL('http://localhost.'))
console.log(isURL('http'))
console.log(isURL('https'))
console.log(isURL('http://'))
console.log(isURL('http://www'))
console.log(isURL('11'))
console.log(isURL(1))
