/**
 * 复制粘贴 会产生 有 style  我们项目游戏端不支持 style 行内样式
 * 需要手动替换掉
 */

 const test = `
    <font color="#444444" size="16" style="font-size: -webkit-xxx-large;">尊:</font><br style="font-size: -webkit-xxx-large;"><font color="#444444" size="17" style="font-size: -webkit-xxx-large;">即</font>
`

 const a = test.replace(/<([a-z]+)[^>]*>/igm, "<$1>")

//  console.log(a);


//之前 /style="(.*)"/gmi            没把 > 排除 所以只能匹配到一组
 const b = test.replace(/style="([^>]*)"/gmi,"")

 console.log(b)


//这种也可以
 const c = test.replace(/([^>]*)(style="[^>]*")([^>]*)/ig,"$1$3")

 console.log(c);