function distinct(string) {
  return string.replace(/(.)\1+/g, '$1')
}

console.log(distinct('aaaabbbbccc'));  // abc