const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

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