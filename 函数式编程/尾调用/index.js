/**
 * 尾调用
 * @url http://www.ruanyifeng.com/blog/2015/04/tail-call.html
 * 指某个函数的最后一步是调用另一个函数。
 */

//尾调用
const log = (...text) => console.log(...text)

function mylog(...text) {
    log(...text)
}

mylog('哈哈', '嘻嘻')     //哈哈 嘻嘻


//
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

const num1 = factorial(3)
console.log(num1);        //6

{
    function factorial(n, total = 1) {
        if (n === 1) return total;
        return factorial(n - 1, n * total);
    }
    factorial(5) // 120
}