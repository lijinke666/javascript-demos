const compose = require('./compose')

/**
 * @name 生成 store
 * @param {*} reducer
 * @param {*} initialState
 */
const createStore = (reducer, initialState, middleware = []) => {
  const store = {
    state: initialState, // 全局的 state
    listeners: [], // 监听器 state 更新后触发,
    getState() {
      return this.state
    },
    // 调用 subscribe 本质上就是 就是更新 store listeners 的数组
    subscribe(listener) {
      this.listeners.push(listener)
    }
  }

  function dispatch(action) {
    store.state = reducer(store.state, action)
    store.listeners.forEach((listener) => listener())
  }

  // redux 的中间件 本质上就是通过 compose 一层层包裹 得到一个增强后的 dispatch
  let enhanceDispatch = compose(...middleware)(dispatch)

  store.dispatch = enhanceDispatch

  return store
}

const COUNTER_ACTIONS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
}

function counter(state = 0, action) {
  switch (action.type) {
    case COUNTER_ACTIONS.INCREMENT:
      return state + 1
    case COUNTER_ACTIONS.DECREMENT:
      return state - 1
    default:
      return state
  }
}

const middleware1 = (dispatch) => {
  console.log('dispatch: ', dispatch);
  // 这里中间件拿到的 dispatch 就是 原始未增强的 引用
  // 因为 被compose 包裹了所以返回了一个新的函数, 这个匿名函数其实就是 增强后的 dispatch
  return (action) => {
    console.log('middleware1: ', action);
    dispatch(action)
  }
}

const middleware2 = (dispatch) => {
  return (action) => {
    console.log('middleware2: ', action);
    dispatch(action)
  }
}

const initialState = 0

const store = createStore(counter, initialState, [
  middleware1,
  middleware2
])

store.subscribe(() => {
  // store.getState() 通过闭包 拿到 内部的 state
  console.log(store.getState())
})

// 每次 dispatch 调用 reducer 更新state
// 然后循环执行 subscribe 的函数
store.dispatch({ type: COUNTER_ACTIONS.INCREMENT, payload: 1 })
store.dispatch({ type: COUNTER_ACTIONS.DECREMENT, payload: 1 })
