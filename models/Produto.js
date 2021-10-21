const mongoose = require('mongoose');
const { Db } = require('mongoose/node_modules/mongodb');

const Produto = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    }
},
{//create at - update at
    timestamps: true,
}

);

mongoose.model('produto', Produto);