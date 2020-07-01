/**
 * @name 斐波那契数列：
 * @description 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ... 求第n个数是多少
 * 第一个数: 1
    第二个数: 1
    第三个数: 1+1
    第三个数: 2+1+1
    第四个数: 3+2+1+1
    第五个数: 4+3+2+1+1
 */

 //第n个数  就是 第n个数 第 前两个数之和 通过递归就算出来
const fibonacci = (number) => {
    if (number <= 2) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2)
}

console.log(fibonacci(5));      //5
console.log(fibonacci(2));      //1
console.log(fibonacci(10));      //55
console.log(fibonacci(30));      //10
