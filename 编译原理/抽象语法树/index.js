const {transform} = require('@babel/core')

const code = `
  const copy = (arr)=>{
    return [...arr]
  }
`

const options = {
  ast:true    //生成抽象语法树
}

transform(code,options,(err,{code,map,ast})=>{
  console.log(code);
  console.log(map);
  console.log(ast);
})