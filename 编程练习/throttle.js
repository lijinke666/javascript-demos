function throttle(fn, interval) {
  let flag = true
  return (...args) => {
    if(!flag) return
    flag = false
    setTimeout(() => {
      fn.apply(this, args)
      flag = true
    },interval)
  }
}

function throttle2(fn, delay) {
  let lastTime;
  return (...args) => {
    const now = Date.now();
    if (now - lastTime > delay || !lastTime) {
      fn.apply(this, args);
      lastTime = now;
    }
  };
}


setInterval(
  throttle(() => console.log(1), 1000),
  50,
);

setInterval(
  throttle2(() => console.log(2), 1000),
  50,
);

