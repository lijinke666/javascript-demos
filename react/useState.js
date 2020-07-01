const render = () => {
  console.log('render...')
}
let v
const useState = value => {
  v = v | value
  const set = newValue => {
    v = newValue
    render()
  }

  return [v, set]
}

const [value, setValue] = useState(1)
console.log('value: ', value)
setValue(2)
console.log('value: ', value)
