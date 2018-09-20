const citys = ['资阳','成都','武汉','北京']

const newCitys = citys.sort((a,b)=> a.localeCompare(b))

console.log(newCitys)  //['北京', '成都', '武汉', '资阳' ]


//localeCompare 方法返回一个数字来指示一个参考字符串是否在排序顺序前面或之后或与给定字符串相同

console.log('a'.localeCompare('c'));  //-1
console.log('c'.localeCompare('a'));  //1
console.log('hello'.localeCompare('test'));  //-1