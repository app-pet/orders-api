const mongoose = require('mongoose')
const Order = mongoose.model('Order');

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
        return await Order.create(order)
    }
}

module.exports = new OrderService()