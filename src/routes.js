const routes = require('express').Router()
const OrdersController = require('./app/controllers/OrdersController')


/**
 * @swagger
 * path:
 *  /orders/:
 *    get:
 *      tags:
 *          - Orders
 *      summary: Lista de Pedidos
 *           
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Order'
 *               
 */
routes.get('/orders', OrdersController.index)

/**
 * @swagger
 * path:
 *  /orders/{id}:
 *    get:
 *      tags:
 *          - Orders
 *      summary: Pedido por Id
 * 
 *      parameters:
 *          - name: id
 *            in: path
 *            description: Id do Pedido
 *            required: true
 *            schema:
 *              type: string
 *           
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Order'
 */

routes.get('/orders/:id', OrdersController.show)

/**
 * @swagger
 * path:
 *  /orders/:
 *    post:
 *      tags:
 *          - Orders
 *      summary: Adiciona um Pedido
 *
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Order'
 *           
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Order'
 *       
 *        "500":
 *          description: Erro        
 */

routes.post('/orders', OrdersController.create)

module.exports = routes