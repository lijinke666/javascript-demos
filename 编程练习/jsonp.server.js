const http = require('http')
const url = require('url')

http.createServer((req, res) => {
  const { query } = url.parse(req.url)
  if (query.callback) {
    const data = {
      name: 'test'
    }
    return res.end(`${query.callback}(${data})`)
  }
  return res.end()
})
.listen(8080, () => console.log('listen 8080'))
