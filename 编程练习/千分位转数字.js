function numberFormat(str) {
  return str.replace(/,/g,'')
}

console.log(numberFormat('1,000'));
console.log(numberFormat('1,000,00'));

function numberFormat2(str) {
  return str.replace(/[^\d\,]/g, '')
}
console.log(numberFormat2('￥1,000,00'));
