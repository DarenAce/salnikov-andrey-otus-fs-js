const Customer = require("../../models/customer");
const Order = require("../../models/order");
const Item = require("../../models/item");
const Product = require("../../models/product");

module.exports = {
    Query: {
        allOrders: async (parent, {customer}, context, info) => {
            if (customer) {
                return await Order.find({customer});
            }
            return await Order.find();
        },
        getOrder: async (parent, { id }, context, info) => await Order.findById(id)
    },
    Mutation: {
        createOrder: async (parent, { order }, context, info) => {
            order.created = new Date();
            order.state = "Prepare";
            return await Order.create(order);
        },
        updateOrder: async (parent, { id, order }, context, info) => await Order.findByIdAndUpdate(id, order, {new: true}),
        changeOrderState: async (parent, {id, state}, context, info) => await Order.findByIdAndUpdate(id, {state}, {new: true}),
        deleteOrder: async (parent, { id }, context, info) => await Order.findByIdAndRemove(id)
    },
    Order: {
        customer: async order => await Customer.findById(order.customer),
        items: async order => await Item.find({ order: order.id }),
        totalItems: async order => {
            const items = await Item.find({ order: order.id });
            return items.reduce((previous, current) => previous + current.quantity, 0);
        },
        totalPrice: async order => {
            const items = await Item.find({ order: order.id });
            return items.reduce(async (previous, current) => {
                const product = await Product.findById(current.product);
                return previous + current.quantity * product.price;
            }, 0.0);
        }
    }
};
