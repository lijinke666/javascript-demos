const testObj = {
  name: "李金珂",
  info: ["屌丝", "码畜"]
};

/**
 * 第一种
 * 缺点: 丢失原型链
 */

 const copyObj = JSON.parse(JSON.stringify(testObj))

 console.log(copyObj);

//由于是深拷贝 指向不同的地址
copyObj.info[0] = "码农"
console.log(copyObj.info);     //[ '码农', '码畜' ]
console.log(testObj.info);     //[ '屌丝', '码畜' ]


const deepClone = (obj)=>{
  const o = Array.isArray(obj) ? [] : {}
  for(let i in obj){
    const current = obj[i]
    //如果value 是对象 就递归
    o[i] =  typeof(current) === 'object' ?  deepClone(current) : obj[i]
  }
  return o
}

console.log('==========')
const copyObj2 = deepClone(testObj)
copyObj2.info[0] = "码农333"
console.log(copyObj2.info);     //[ '码农333', '码畜' ]
console.log(testObj.info);     //[ '屌丝', '码畜' ]
