class PubSub {
  constructor() {
    this.events = {};
  }
  //取消订阅
  off(name) {
    Reflect.deleteProperty(this.events, name);
  }
  //订阅
  on(name, handle = () => {}) {
    //如果是第一次注册 初始化为一个空数组 否则push
    const eventHandle = this.events[name];
    if (!eventHandle) {
      this.events[name] = [];
    }
    this.events[name].push(handle);
  }
  //广播
  emit(name, ...params) {
    this.events[name] && this.events[name].forEach(handle => handle(...params));
  }
}

const events = new PubSub();

//注册一个test 事件
events.on("test", (...params) => {
  console.log("李金珂牛批", ...params); //李金珂牛批 params1 params2 params3
});

//广播一个test 事件  别携带参数
events.emit("test", "params1", "params2", "params3");


//取消注册
events.off('test')        

events.emit("test");       //这次就不会触发了


