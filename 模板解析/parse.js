/**
 * @param {*} template 
 * @description 模板 {内容}
 */

const parseTemplate = (template = '') => {
  return template
  .replace(
    /(\{)([^\{]+)(\})/g,
    `$1<span class='template'>$2</span>$3`,
  )
  .replace(/<\/script/g,'<\\/script')
  .replace(/<!--/g,'<\\!--')
}


const template = '你是一条 {name} 吧!'
const template2 = '你是一条 {name} 吧! 不对是 {text}!'

console.log(parseTemplate(template));  // 你是一条 {<span class='template'>name</span>} 吧!
console.log(parseTemplate(template2));  // 你是一条 {<span class='template'>name</span>} 吧! 不对是 {<span class='template'>text</span>}!