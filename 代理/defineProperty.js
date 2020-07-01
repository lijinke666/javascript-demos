const obj = {};
Object.defineProperty(obj, "test", {
  configurable: true, //是否可配置
  // writable:true,               //是否可写 false 为只读
  enumerable: true, //是否可枚举
  //get 和 set 相当于代理函数 test 属性更改时  会触发
  set(value) {
    console.log("set:", value);
  }
});

console.log(obj); //{test:1}

obj.test = 2;
console.log(obj.test);


//调用一个 废弃的api时 给出警告
const testAPis = ['apia','apib','apic']
class Test {}

testAPis.forEach((key)=>{
  Object.defineProperty(global,key,{
    configurable:true,
    enumerable:true,
    get(){
      console.warn(`${key} 已经废弃了!`);
    }
  })
})

global.apia
