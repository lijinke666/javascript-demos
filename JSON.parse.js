const obj = {
    id:1,
    name:"lijinke"
}

//通常使用 JSON.parse 的场景
const str = JSON.stringify(obj)

console.log(JSON.parse(str));  //{ id: 1, name: 'lijinke' }

//第二个参数 可以接收一个函数 返回 key 和value

const newObj = JSON.parse(str,(key,value)=>{
    return (typeof value === "string") ?  value.toUpperCase() : value
})

console.log(newObj);//{ id: 1, name: 'LIJINKE' }