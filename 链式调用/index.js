class Utils {
  constructor(value = 0){
    this.value = value
  }
  add(...attr){
    const data = [...attr,this.value].reduce((num,v)=> {
      num += v
      return num
    },0)
    this.value = data
    return this
  }

  valueOf(){
    return this.value
  }
  toString(){
    return this.value.toString()
  }
}


const u = new Utils(2)

u.add(1,2,3).add(4).add(5)