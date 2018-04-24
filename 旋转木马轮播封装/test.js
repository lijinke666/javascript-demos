
// @@  代表没回答上

(function (x) {
    delete x
    return x
})(3)         //3  delete 删除一个对象 delete x 无效


var arr = [1, 2, 3]
arr.length = 0           //清空数组
arr.push('aa')           //加一个下标
arr.splice(0, 1, 2, 3, 4)    //从0开始删除1个 变成 [] 然后添加2,3,4
console.log(arr);     //[2,3,4]


var a = { n: 1 }
var b = a        //b 对 a保持引用  共享内存
a.x = 2          //a 新增一个 key x=2  此时 b 也会有 x=2
b.x = "3"        //同理 b.x = "3" a也会有 x = 3
console.log(typeof a.x, a.x);     //string 3


var foo = "test1";
(function () {
    if (typeof foo === "undefined") {
        var foo = 'test22'
        console.log(foo);
    } else {
        console.log(foo);
    }
})()

// test22 应为 自执行函数 独立作用域 此时 foo undefined


console.log('one');
setTimeout(() => {
    console.log('two');
})
console.log('three');

// one three tow   setTimeOut 为异步函数  会在下一个队列执行



//@@ http 状态码
//302 Found @@找到
//403 禁止访问  @@文件损坏或目录权限
//504 timeout @@网关超时
//304 缓存


console.log(Math.ceil(7 / 2));   // 4 向上取整
console.log(Math.floor(7 / 2)); //3  向下取整
console.log(Math.round(7 / 2));  // 4 四舍五入  
console.log((7 / 2).toFixed(0))   //@@ 3 浮点数取0,向上取整 所以 为4
console.log(parseInt(7 / 2));     //向下取整 3

/**
 * 
 * @param {*} time 秒
 * 如果大于一分钟 就 s/60 求得有多少分钟 s%60 取得剩余秒
 * 如果分钟大于60 同理 /60 求得多少小时 m%60 取得剩余分钟
 */
const format = (time = 60 * 60 + 12 * 60 + 27) => {
    let m = 0
    let h= 0
    let s = time
    if (s > 60) {
         m = ~~(s / 60)
         s = ~~(s % 60)
        if (m > 60) {
             h = ~~(m / 60)
             m = ~~(m % 60)
        }
    }
    return `${h}时${m}分${s}秒`
}
const date = format()

console.log(date);   //1时12分27秒


//跨域可以 jsonp 或者 fetch mode="cors" 或者走代理都可以

//xss 是跨域脚本攻击,如 提交评论 提交一句 alert('xx')

//@@ CSRF 跨站请求伪造

//事件代理(委托) 就是找到 事件源 比如把事件 绑定在 父级元素 通过 e.target.nodeName 判断是不是要委托的元素 来实现