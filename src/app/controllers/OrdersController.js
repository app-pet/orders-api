

class OrdersController {
    async index(req, res) {
       return res.status(200).json({ message: "ok" })
    }

    async create(req, res){
       return res.status(201).json({ message: "ok" })

    }
}

module.exports = new OrdersController()