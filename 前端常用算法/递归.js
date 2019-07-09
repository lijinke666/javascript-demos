/**
 * @name 递归
 */

const recursion = (num) => {
    if (num === 1) return num
    return num * recursion(num - 1)
}

console.log(recursion(4));     //24   4 * 3 * 2 * 1