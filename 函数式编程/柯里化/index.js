/**
 * 柯里化
 * 是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数
 * 并且返回接受余下的参数而且返回结果的新函数的技术
 *  
 */

const add = (num1)=> (num2) => {
    return num1 + num2
}

const num = add(1)(2)
console.log(num);       //3

//等同于

function add2(num1){
    return function(num2){
        return num1 + num2
    }
}


/**
 * 我说用到的 实际场景
 * 输出一段文案 如 createTip() 之前都是 标准的 前x个盲注
 * 后有需求 有 前x个盲注 和 第x个盲注
 */

//  const text = (num=1)=> `第${num}个盲注!`

//后改为
const text = (num)=> `${num}个盲注`


const createTip = (suffix)=> (num)=> suffix + text(num)

const tip1 = createTip('第')(10)
const tip2 = createTip('前')(6)

//可在源代码不变的情况下进行扩充  每一个函数负责独立的单一功能

console.log(tip1,tip2);  //第10个盲注 前6个盲注