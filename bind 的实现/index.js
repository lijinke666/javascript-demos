const max = (arr) => Math.max(...arr)
//bind 返回一个 函数 用于 改变上下文
const max_bind = max.bind(this,[1,2,3])
console.log(max_bind());


//第二种
const obj = {
  name:"李金珂",
  sayName(text = "我是"){
    console.log(`${text}:${this.name}`)
  }
}

obj.sayName()   //我是:李金珂

obj.sayName.bind({name:'盲僧'})('我不是')   //我不是:盲僧 改变了 this 指针



//通过 apply  改变上下文
Function.prototype._bind = function(ctx,...args){
  return (...applyArgs)=> this.apply(ctx,[...args,...applyArgs])
}

obj.sayName._bind({name:"石头人"})('test')   //test:石头人