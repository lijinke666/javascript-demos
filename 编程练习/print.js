function print(temp, data) {
  return temp.replace(/\${(\w+)}/gm, ($1,$2) => data[$2])
}

const result = print('my name is ${name}, i am from ${city}', {
  name: 'ljk',
  city: 'cdc'
})
console.log('result: ', result);
