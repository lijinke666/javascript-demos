const routes = [
  {
    path: '/',
    component: null,
    children: [
      {
        path: '/test',
        component: null,
        children: [
          {
            path: '/:id',
            component: null
          }
        ]
      }
    ]
  },
  {
    path: '/a',
    component: null
  }
]

const flattenRoutes = (routes, mergePath = true) => {
  return routes.reduce((newRoutes, route) => {
    return newRoutes.concat(
      route,
      Array.isArray(route.children)
        ? flattenRoutes(
            mergePath
              ? route.children.map(item => {
                  return {
                    ...item,
                    path: route.path + item.path
                  }
                })
              : route.children
          )
        : []
    )
  }, [])
}

console.log(flattenRoutes(routes))
console.log(flattenRoutes(routes, false))
