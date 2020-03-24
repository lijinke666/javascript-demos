/**
 * @name 生成 store
 * @param {*} reducer
 * @param {*} initialState
 */
const createStore = (reducer, initialState) => {
  const store = {
    state: initialState, // 全局的 state
    listeners: [] // 监听器 state 更新后触发
  };

  // 调用 subscribe 本质上就是 就是更新 store listeners 的数组
  store.subscribe = listener => {
    store.listeners.push(listener);
  };

  store.dispatch = action => {
    // 通过reducer 更新 state
    store.state = reducer(store.state, action);
    store.listeners.forEach(listener => listener());
  };

  store.getState = () => store.state;

  return store;
};

const COUNTER_ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT"
};

function counter(state = 0, action) {
  switch (action.type) {
    case COUNTER_ACTIONS.INCREMENT:
      return state + 1;
    case COUNTER_ACTIONS.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);

store.subscribe(() => {
  console.log("11");
  // store.getState() 通过闭包 拿到 内部的 state
  console.log(store.getState());
});

store.subscribe(() => {
  console.log("22");
});

// 每次 dispatch 调用 reducer 更新state
// 然后循环执行 subscribe 的函数
store.dispatch({ type: COUNTER_ACTIONS.INCREMENT });
store.dispatch({ type: COUNTER_ACTIONS.INCREMENT });
store.dispatch({ type: COUNTER_ACTIONS.DECREMENT });
