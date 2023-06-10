/**
 *
 * @param {*} fn
 * @param {*} interval
 * @name 函数防抖
 * @description 任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行。
 */
function debounce(fn, interval) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, interval);
  };
}

const fn = debounce(() => {
  console.log("ljk");
}, 500);

// 只会执行一次
fn();
fn();
fn();

setTimeout(() => {
  fn();
}, 600);
