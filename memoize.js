// 缓存函数计算结果

function memoize(fn) {
  const cache = new Map();
  return (num) => {
    if (cache.has(num)) {
      console.log('cache', num);
      return cache.get(num);
    }
    console.log('new', num);
    const result = fn.call(this, num);
    cache.set(num, result);
    return result;
  };
}

function add(n) {
  return n + 1;
}

const fn = memoize(add);

fn(1);
fn(2);
fn(1);
