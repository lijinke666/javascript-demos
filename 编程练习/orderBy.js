const arr = [{
  name: 'aaa',
  age: 18
},{
  name: 'zzz',
  age: 17
},{
  name: 'ddd',
  age: 1
}]

// type: ASC, DESC
function orderBy(arr, key, type) {
  return arr.sort((prev, next) => {
    const prevValue = prev[key]
    const nextValue = next[key]
    if (typeof value === 'string') {
      return type === 'ASC'
        ? prevValue.toLocaleCompare(nextValue)
        : nextValue.toLocaleCompare(prevValue)
    }

    return type === 'ASC'
    ? prevValue > nextValue
    : nextValue > prevValue
  })
}

console.log(orderBy(arr, 'name', 'DESC'));
console.log(orderBy(arr, 'name', 'ASC'));
console.log(orderBy(arr, 'age', 'DESC'));
console.log(orderBy(arr, 'age', 'ASC'));
