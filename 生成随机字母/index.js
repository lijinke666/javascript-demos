console.log(String.fromCharCode(65))   //A
console.log(String.fromCharCode(66))   //`B


const randomStr = ()=>{
  const min = 65
  const max = 89

  return String.fromCharCode(
    Math.round(Math.random() * (max - min)) + min
  )
}

console.log(randomStr());