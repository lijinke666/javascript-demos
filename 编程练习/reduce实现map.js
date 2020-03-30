function map(arr, cb) {
  return arr.reduce((a, v, i) => {
    a[i] = cb(v)
    return a
  },[])
}

console.log(map([1,2,3], (v) => v + 1));  // [2,3,4]
