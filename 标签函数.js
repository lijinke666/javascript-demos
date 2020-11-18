function log(a,...args) {
  console.log(a, args)
  console.log(a.raws)
}

log`你好 ${1} ${2} ${3} 哈哈`

