const data = {
  a: 1,
  b: 2
}


Object.keys(data).forEach((key) => {
  Object.defineProperty(data, key, {
    set(value) {
      console.log('value: ', value);
    }
  })
})

data.a

data.b = 3
