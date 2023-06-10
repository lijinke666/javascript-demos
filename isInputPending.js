// chorme 提供的 调度器 Api, 适用于 Fiber

console.log(navigator.scheduling.isInputPending())

// 连续事件也包含在内 : mousemove
console.log(navigator.scheduling.isInputPending({includeContinuous: true}))

// 指定某些事件
console.log(navigator.scheduling.isInputPending(['mousemove','pointermove']))


// https://web.dev/isinputpending/
const DEADLINE = performance.now() + QUANTUM;
while (workQueue.length > 0) {
  if (navigator.scheduling.isInputPending() || performance.now() >= DEADLINE) {
    // Yield if we have to handle an input event, or we're out of time.
    setTimeout(processWorkQueue);
    return;
  }
  let job = workQueue.shift();
  job.execute();
}
