class Axios {
  constructor () {
    // 请求拦截器
    this.requestInterceptors = []
    // 响应拦截器
    this.responseInterceptors = []
    // ajax请求
    this.requestQueen = []

    this.config = {
      baseURL: '/',
      timeout: 5000
    }
  }

  static create() {
    return new Axios()
  }

  useRequestInterceptor(res, rej) {
    this.requestInterceptors.push({ res, rej })
  }

  useResponseInterceptor(res, rej) {
    this.responseInterceptors.push({ res, rej })
  }

  get(url) {
    // 模拟一个请求
    const request = new Promise((res) => {
      setTimeout(() => {
        res(url)
      }, 500)
    })

    this.requestQueen.push(request)
    return this.runQueen()
  }

  runQueen() {
    // 请求拦截器放在队首
    this.requestInterceptors.forEach((interceptor) => {
      this.requestQueen.unshift(interceptor)
    })
    // 响应拦截器放在队尾
    this.responseInterceptors.forEach((interceptor) => {
      this.requestQueen.push(interceptor)
    })

    // 初始化一个 Promise, 这样每个拦截器 resolve 的值 就是config
    const requestP = Promise.resolve(this.config)
    // 依次取出一个
    while (this.requestQueen.length) {
      const { res, rej } = this.requestQueen.shift()
      requestP.then(res,rej)
    }

    return requestP
  }
}

// create 方法就是个单例
const instance = Axios.create()

// 拦截器的两个参数 其实就对应 Promise 的 两个参数 res, rej
instance.useRequestInterceptor(
  (config) => {
    console.log('request', config)
    config.name = 'ljk'
    return config
  },
  () => {}
)

instance.useRequestInterceptor(
  (config) => {
    console.log('response', config)
  },
  () => {

  }
)


;(async () => {
  const data = await instance.get('/test')
  console.log('data: ', data);
})()
