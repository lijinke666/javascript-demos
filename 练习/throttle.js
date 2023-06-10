function throttle(fn, interval) {
  let canRun = true;
  return function(...args) {
    if (!canRun) {
      return;
    }
    canRun = false;
    setTimeout(() => {
      fn.apply(this, args);
      canRun = true;
    }, interval);
  };
}

const fn = throttle(() => {
  console.log("ljk");
}, 500);

fn();
fn();

setTimeout(() => {
  fn();
}, 600);
