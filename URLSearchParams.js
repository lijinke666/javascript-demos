
const str = 'name=ljk&age=18'

const url = new URLSearchParams(str)

console.log(url.get("name"));   // ljk
console.log(url.has("name"));   // true
console.log(url.delete('age'))
console.log(url.append('text', 123))
console.log(url.set('text', 22222))

console.log(url.toString())   // name=ljk&text=22222
