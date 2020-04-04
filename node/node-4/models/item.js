const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    order: {
        type: Schema.Types.ObjectId,
        ref: "Order",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Item", ItemSchema);
