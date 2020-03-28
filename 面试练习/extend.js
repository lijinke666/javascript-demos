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
C.prototype.constructor = C
const c = new C()
c.sayName()


function extend(A, B) {
  function F() { }
  F.prototype = B.prototype
  A.prototype = new F()
  A.prototype.constructor = A
}

extend(B, C)


class E extends C {

}
