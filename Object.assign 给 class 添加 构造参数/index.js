class A {
  constructor(args) {
    this.name = args.name
    this.age = args.age
    this.sex = args.sex
  }
  say() {
    console.log(this.name);
    console.log(this.age);
    console.log(this.sex);
  }
}

const a = new A({
  name: "ljk",
  age: 18,
  sex: '男'
})

a.say()


class B {
  constructor(args) {
    Object.assign(this, args)
  }
  say() {
    console.log(this.name);
    console.log(this.age);
    console.log(this.sex);
  }
}

const b = new B({
  name: "ljk",
  age: 18,
  sex: '男'
})

b.say()
