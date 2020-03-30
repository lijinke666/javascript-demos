function render(template, data = {}) {
  return template.replace(/{{(\w+?)}}/gm, ($1, $2) => {
    return data[$2]
  })
}

console.log(render('你好: 我是 {{name}}, 今年 {{age}} !', {
  name: '李金珂',
  age: 18
}))
