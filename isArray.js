const testArray = [1,2,3]
console.log(typeof testArray);     //object   :(

//利用 object 的 toString 方法

console.log(testArray.toString());
console.log(Object.prototype.toString.call(testArray)); //[object Array]

const isArray = (arr)=> Object.prototype.toString.call(arr) === "[object Array]"

console.log(isArray(testArray));     //true
console.log(isArray({testArray}));   //false