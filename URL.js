const url = new URL('https://www.lijinke.cn?s=1')
const relativeUrl = new URL('/test', 'https://www.lijinke.cn')

console.log(url.host) // www.lijinke.cn
console.log(url)

console.log(relativeUrl.href) // www.lijinke.cn
