

const add = (num)=>{
  let n = 0
  return ((num,n)=>{
    return num + n
  })(num,n)
}

console.log(add(2));
console.log(add(3));
console.log(add(4));