const trim = (target, fullTrim = false) => {
  if (!fullTrim) {
    return target.trim()
  }
  return target.replace(/\s/gm, '')
}

console.log(trim('  trim  '))
console.log(trim('  tri  m  ', true))
console.log(trim('  tri  m  ', false))
