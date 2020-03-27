function A() {
  this.name = "ljk"
}

function B() {
  A.call(this)
  this.sayName = function () {
    console.log(this.name);
  }
}

const b = new B()
b.sayName()

function C() {

}

C.prototype = new B()
const c = new C()
c.sayName()
