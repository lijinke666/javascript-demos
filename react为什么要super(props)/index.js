class Component {
  constructor(props){
    this.props = props
    console.log(this.state);
  }
}

class B extends Component {
  // 如果 使用 类 属性 就可以避免这种 问题
  state = {
    name: ''
  }
  constructor(props){
    // this.test()
    // 如果未 使用 super() 使用 this 会报错, 是因为 要等父类 constructor 完成
    //  Must call super constructor in derived class before accessing 'this' or returning from derived constructor

    // 使用 super 传值 给父 类

    // 如果 super 没传值
    // super()

    // console.log(props);    // 李金珂
    // console.log(this.props); // undefined


    super(props)

    console.log(props);    // 李金珂
    console.log(this.props); // 李金珂
  }
  test(){
    console.log('test');
  }
}

new B('李金珂')