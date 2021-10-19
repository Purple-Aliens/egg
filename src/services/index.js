import { inject } from 'vue'

const loadServices = () => {
  const serviceFiles = require.context('./', true, /service.js$/)
  const services = []

  serviceFiles.keys().map((path) => {
    const contentServices = serviceFiles(path)
    services[contentServices.default.config.name] = contentServices.default
  }, {})

  return services
}

const useServices = () => {
  return inject('service')
}

export default {
  install(app) {
    app.provide('service', loadServices())
  }
}

export {
  useServices,
}
