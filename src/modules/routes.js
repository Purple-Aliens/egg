const loadRoutes = () => {
  const routesFiles = require.context('./', true, /router.js$/)
  const modulesRoutes = []

  routesFiles.keys().map((path) => {
    const contentRouter = routesFiles(path)
    modulesRoutes.push(...contentRouter.default)
  }, {})

  return modulesRoutes
}

export default loadRoutes
