const testObj = {
  name: "李金珂",
  info: ["屌丝", "码畜"]
};

const shallowCopy = (src) => {
  var dst = {};
  for (var prop in src) {
    if (src.hasOwnProperty(prop)) {
      dst[prop] = src[prop];
    }
  }
  return dst;
};

//第一种 使用内置的 Object.assign
console.log(Object.assign({}, testObj)); //{ name: '李金珂', info: [ '屌丝', '码畜' ] }

//第二种 js存储的是地址  每个属性复制后 指向的地址还是同一个
const copyObj = shallowCopy(testObj)
console.log(copyObj);     //{ name: '李金珂', info: [ '屌丝', '码畜' ] }

copyObj.name = "改变"
console.log(copyObj.name)     //改变
console.log(testObj.name);     //李金珂

//由于是指向同一个地址  所以其中一个修改 拷贝的也改变了
copyObj.info[0] = "码农"
console.log(copyObj.info);     //[ '码农', '码畜' ]
console.log(testObj.info);     //[ '码农', '码畜' ]