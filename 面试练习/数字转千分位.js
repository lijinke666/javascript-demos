function numberFormat(n) {
  return String(n).replace(/\d{1,3}(?=(\d{3})+$)/g, ($1) => `${$1},`)
}

console.log(numberFormat(1000000));
console.log(numberFormat(100));
console.log(numberFormat(1000));
