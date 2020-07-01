const str = " 李 金 珂  "

console.log(str.trim());

String.prototype._trim = function(){
  return this.replace(/\s/g,"")
}

console.log(str._trim());