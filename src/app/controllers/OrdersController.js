const orderService = require('../services/OrderService');

class OrdersController {
   async index(req, res) {
      const { page = 1 } = req.query;
      const orders = await orderService.findAll(page);
      return res.json(orders);
   }

   async show(req, res) {
      const id = req.params.id;
      let order = await orderService.findOne({_id: id});
      if (!order) {
         return res.status(400).send('Pedido não encontrado');
      }
      return res.json(order);
   }

   async create(req, res) {
      const order = await orderService.createOrder(req.body)
      return res.status(201).json(order);

   }
}

module.exports = new OrdersController()