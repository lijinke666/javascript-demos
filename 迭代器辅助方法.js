const arr = ['a', '', 'b', '', 'c', '', 'd', '', 'e'];

 arr.values() // creates an iterator
    .filter(x => x.length > 0)
    .drop(1)
    .take(3)
    .map(x => `=${x}=`)
    .toArray()
