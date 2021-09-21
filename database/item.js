const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
    itemId: Number,
    extra: String,
    title: String,
    print: String,
    rating: Number,
    purchase: String,
    details: String,
    price: Number,
    currency: String,
    description: String
});

module.exports = mongoose.model('Item', itemSchema);
