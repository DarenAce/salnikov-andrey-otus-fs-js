const Product = require("../../models/product");

module.exports = {
    Query: {
        allProducts: async (parent, args, context, info) => await Product.find(),
        getProduct: async (parent, { id }, context, info) => await Product.findById(id)
    },
    Mutation: {
        createProduct: async (parent, { product }, context, info) => await Product.create(product),
        updateProduct: async (parent, { id, product }, context, info) => await Product.findByIdAndUpdate(id, product, {new: true}),
        deleteProduct: async (parent, { id }, context, info) => await Product.findByIdAndRemove(id)
    }
};