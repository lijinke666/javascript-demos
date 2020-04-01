class Koa {
  constructor() {
    this.middlewares = []
  }

  use(handler) {
    // 和 express 一样 use 只是将每个中间件 放入 数组 最后依次执行
    // 只是 Koa 是基于 Promise的
    this.middlewares.push(handler)
  }

  start() {
    const fn = this.compose(this.middlewares)
    const ctx = {
      req: {
        name: 'ljk',
      },
      res: {
        send: () => console.log('res'),
      },
    }
    fn(ctx)
  }

  // 和redux类似 将所有 middleware 使用函数式编程的 compose 思想包裹
  compose(middleware) {
    // 利用闭包 维护一个 当前 middleware 的下标 每次+1
    return (ctx) => {
      let index = -1
      function dispatch(i) {
        index = i
        const currentMiddleware = middleware[i]

        // 处理最后一个middleware的情况
        if (!currentMiddleware) {
          return Promise.resolve()
        }

        // 给每个中间件传入当前的 context, 和一个 next 方法
        // next 其实就是 dispatch的引用 这次每次调用 next
        // index ++ 就很巧妙的实现了中间件的不断调用
        const next = () => dispatch(i + 1)
        return Promise.resolve(currentMiddleware(ctx, next))
      }
      return dispatch(0)
    }
  }
}

const app = new Koa()

app.use(async (ctx, next) => {
  console.log('a--start', ctx)
  await next()
  console.log('a--end')
})

app.use(async (ctx, next) => {
  console.log('b--start', ctx)
  await next()
  console.log('b--end')
})

app.start()
