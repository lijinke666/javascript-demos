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