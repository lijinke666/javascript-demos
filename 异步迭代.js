const arr = [1,2,3]

const get = () => new Promise((res)=>{
  setTimeout(()=>{
    res(1)
  })
})

const a = arr.map(async (number)=> {
  const n = await get()
  return number + n
})

console.log(a);

// 异步迭代

const b = await arr.map(async (number)=> {
  const n = await get()
  return number + n
})

console.log(b);
