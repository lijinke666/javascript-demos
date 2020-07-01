class A {
  #name = 1
  #log() {
    console.log(this.#name)
  }
}

const a = new A()
a.#name
a.#log()

// # 真他妈的丑
