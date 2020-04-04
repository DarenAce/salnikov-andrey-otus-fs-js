const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: "Customer",
        required: true
    },
    state: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true
    },
    items: [
        {
            type: Schema.Types.ObjectId,
            ref: "OrderItem"
        }
    ],
    totalItems: {
        type: Number
    },
    totalPrice: {
        type: Number
    },
    comment: {
        type: String
    }
});

module.exports = mongoose.model("Order", OrderSchema);
