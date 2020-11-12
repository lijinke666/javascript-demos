function deepClone(object) {
  if (typeof object !== 'object') {
    return object;
  }

  let n;
  // 数组
  if (Array.isArray(object)) {
    n = new Array(object.length);
    object.forEach((value, i) => {
      n[i] = deepClone(value);
    });
  } else {
    n = {};
    Object.keys(object).forEach((key) => {
      n[key] = deepClone(object[key]);
    });
  }

  return n;
}

const o = {
  a: 1,
  b: [2],
  c: {
    d: [1],
  },
};

const deepO = deepClone(o);
console.log('deepO: ', deepO);

const b = o;

b.b = 1;

console.log(o.b);
console.log(b.b);
console.log(deepO.b);
