function say() {
  setTimeout((...args) => console.log(args), 500, '1',2,3)
}

say()

// ["1", 2, 3]
