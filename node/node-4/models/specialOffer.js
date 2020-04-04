const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SpecialOfferSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    appliesTo: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product"
        }
    ],
    discount: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("SpecialOffer", SpecialOfferSchema);
