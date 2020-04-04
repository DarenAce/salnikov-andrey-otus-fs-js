const Customer = require("../../models/customer");

module.exports = {
    Query: {
        allCustomers: async (parent, args, context, info) => await Customer.find(),
        getCustomer: async (parent, { id }, context, info) => await Customer.findById(id)
    },
    Mutation: {
        createCustomer: async (parent, { customer }, context, info) => await Customer.create(customer),
        updateCustomer: async (parent, { id, customer }, context, info) => await Customer.findByIdAndUpdate(id, customer, {new: true}),
        deleteCustomer: async (parent, { id }, context, info) => await Customer.findByIdAndRemove(id)
    },
    Customer: {
        fullName: customer => `${customer.firstName} ${customer.lastName}`
    }
};
