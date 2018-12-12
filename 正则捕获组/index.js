const url = 'test.jpg'

//传统方式 
const name = url.replace(/(.*)\..*/,'$1')
console.log(name);  //test

const ext = url.replace(/.*\.(.*)/,'$1')
console.log(ext)    //jpg


//更直观的  es2018
// ?<名字>

const {groups:{name,ext}} = /(?<name>.*)\.(?<ext>.*)/.exec(url)

console.log(name,ext)   // test,jpg
