const getPathSnippets = (pathSnippets = location.hash ) => (
  (pathSnippets.match(/\/\w*/g) || [])
  .reduce((paths, value) => {
    paths.push(paths + value)
    return paths
  }, [])
  .map((path) => path.substr(path.lastIndexOf(',') + 1))
)


console.log(getPathSnippets('#/test/a/b'));

//[ '/test', '/test/a', '/test/a/b' ]

