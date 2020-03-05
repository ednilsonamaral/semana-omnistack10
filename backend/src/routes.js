const { Router } = require('express')
const routes = Router()

const DevController = require('./controllers/dev.controller')
const SearchController = require('./controllers/search.controller')

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' })
})

routes.get('/devs', DevController.index)
routes.get('/dev/:id', DevController.show)
routes.post('/devs', DevController.store)
routes.put('/dev/:id', DevController.update)
routes.delete('/dev/:id', DevController.delete)

routes.get('/search', SearchController.index)

module.exports = routes