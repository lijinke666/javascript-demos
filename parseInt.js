const arr = ["1", "2", "3"]

console.log( arr.map(parseInt)  )    // [1, NaN, NaN]

// parseInt(1, 0)
// parseInt(2, 1)
// parseInt(3, 2)

arr.map((n,i)=>{
  return parseInt(n, i)
})

console.log(arr.map(Number))    // [1,2,3]
