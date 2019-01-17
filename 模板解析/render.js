const renderTemplate = (template = '', data = {}) => {
  return template && template.replace(
    /(\{)([^\{]+)(\})/g,
    (originTemplate, __, templateName)=> {
      return data && data[templateName] || originTemplate
    },
  )
}

const template = '你是一条 {name} 吧! ({date})'

console.log(renderTemplate(template,{
  name: '帅哥',
  date: "2018-2-3"
}))     // 你是一条 帅哥 吧! (2018-2-3)