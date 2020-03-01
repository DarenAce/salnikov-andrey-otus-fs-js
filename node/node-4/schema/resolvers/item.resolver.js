const Order = require("../../models/order");
const Item = require("../../models/item");
const Product = require("../../models/product");

module.exports = {
    Query: {
        allItems: async (parent, args, context, info) => await Item.find(),
        getItem: async (parent, { id }, context, info) => await Item.findById(id)
    },
    Mutation: {
        createItem: async (parent, { item }, context, info) => await Item.create(item),
        updateItem: async (parent, { id, item }, context, info) => await Item.findByIdAndUpdate(id, item, {new: true}),
        deleteItem: async (parent, { id }, context, info) => await Item.findByIdAndRemove(id)
    },
    Item: {
        product: async item => await Product.findById(item.product),
        order: async item => await Order.findById(item.order)
    }
};
