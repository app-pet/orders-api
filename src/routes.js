const routes = require('express').Router()
const OrdersController = require('./app/controllers/OrdersController')

routes.get('/orders', OrdersController.index)
routes.get('/orders/:id', OrdersController.show)
routes.post('/orders', OrdersController.create)

module.exports = routes