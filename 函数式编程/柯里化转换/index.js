/**
 * @description
 * const add => (x,y) => x + y
 * => const add = (x)=>(y) => x + y
 */

const add = (x, y) => x + y;


// const add = (x)=> (y)=> x + y
const trans = (fn = () => {}) => {
  const params = fn.toString().replace(/\((.*)\).*/i, "$1").replace(/\s/,"").split(',');
  const data = params.reduce((prev,next,i)=>{
    return `(${prev}) => (${next}) => ${prev} + ${next}`
  })
  return eval(data)
};

const _add = trans(add);

console.log(_add(1)(2));
