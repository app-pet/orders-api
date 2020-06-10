const mongoose = require('mongoose')
const Order = mongoose.model('Order');
const SlackService = require('./SlackService')

class OrderService {
    constructor(){
        
    }

    async findAll(page) {
        return await Order.paginate({}, { page, limit:10 })
    }

    async findOne(query) {
        return await Order.findOne(query)
    }

    async createOrder(order){
        SlackService.sendMessage(`Novo pedido: ${JSON.stringify(order)}`)
        return await Order.create(order)
    }
}

module.exports = new OrderService()