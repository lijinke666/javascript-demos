const arr1 = [1, 2, 3]
const arr2 = [3, 4, 5];

//数组并集
console.log([...new Set([...arr1, ...arr2])]);
//输出：[1, 2, 3, 4, 5]

//数组交集
console.log(arr1.filter((v) => new Set(arr2).has(v)));
//输出：[3]

//数组差集
console.log(arr1.filter((v) => !new Set(arr2).has(v)));
//输出：[1, 2]
console.log(arr2.filter((v) => !new Set(arr1).has(v)));
//输出：[4, 5]
