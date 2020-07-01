const name = 'user_name'

const toHump = (name)=> name.replace(/_(\w)/g,(_,b )=> b.toUpperCase())

console.log(toHump(name));   //userName
console.log(toHump("user_name_pass_word"));   //userNamePassWord


//驼峰 => 下划线

const toUnderLine = (name)=> name.replace(/([A-Z])/g,(_,b)=> `_${b.toLowerCase()}`)

console.log(toUnderLine('userName'));  //user_name
console.log(toUnderLine('userNamePassWord'));  //user_name_pass_word
