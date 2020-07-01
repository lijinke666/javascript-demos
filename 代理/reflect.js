const obj = {}
//和 Object.defineProperty 基本一样
Reflect.defineProperty(obj,'$vue',{
  configurable: true, //是否可配置
  enumerable: true, //是否可枚举

  set(value) {
    console.log("set:", value);
  }
})

obj.$vue

obj.$vue = 'test'
