const o = {
  a: 1,
  b: {
    c: 2
  }
}

const a = Object.assign({}, o)

a.b.c = 3

// o 也被修改到了 应为 Object.assign 是浅拷贝
console.log(o);


// 使用递归实现

function cloneDeep(data) {
  if (typeof data !== 'object') {
    return data
  }
  const o = {}
  Object.keys(data).forEach((key) => {
    o[key] = cloneDeep(data[key])
  })
  return o
}


const oo = {
  a: 1,
  b: {
    c: 2
  }
}

const ooo = cloneDeep(oo)
console.log('ooo: ', ooo);
ooo.b.c = 3

console.log(oo);

