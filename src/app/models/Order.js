const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
/**
 * @swagger
 * components:
 *  schemas:
 *      Order:
 *        type: object
 *        properties:
 *          user:
 *              $ref: '#/components/schemas/User'
 *          provider:
 *              $ref: '#/components/schemas/Provider'
 *          service:
 *              type: string
 *          createdAt:
 *              type: string
 * 
 *        required:
 *          - user
 *          - provider
 *          - service
 *      
 *      Provider:
 *        type: object
 *        properties:
 *          name:
 *              type: string
 *          phone:
 *              type: string
 *          email:
 *              type: string
 *          services:
 *              type: array
 * 
 *        required:
 *          - name
 *          - phone
 *          - email
 *          - services    
 * 
 *      User:
 *        type: object
 *        properties:
 *          name:
 *              type: string
 *          phone:
 *              type: string
 *          email:
 *              type: string
 * 
 *        required:
 *          - name
 *          - phone
 *          - email
 */
const OrderSchema = new mongoose.Schema({
    user:{
        type: String,
        required: true,
    },
    provider:{
        type: String,
        required: true,
    },
    service:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
})

// Registrando o mongoose paginate da Aplicação
OrderSchema.plugin(mongoosePaginate)

// Registrando o schema
mongoose.model('Order', OrderSchema)