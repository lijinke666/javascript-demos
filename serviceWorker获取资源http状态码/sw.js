self.addEventListener('fetch', (event) => {
  event.waitUntil(
    (async function() {
      if (!event.clientId) return

      const client = await clients.get(event.clientId)
      if (!client) return

      return fetch(event.request.url).then((res) =>
        // 发送状态码给 客户端
        client.postMessage(res.status)
      )
    })()
  )
})
