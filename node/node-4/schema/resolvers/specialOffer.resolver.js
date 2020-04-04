const Product = require("../../models/product");
const SpecialOffer = require("../../models/specialOffer");

module.exports = {
    Query: {
        allSpecialOffers: async (parent, args, context, info) => await SpecialOffer.find(),
        getSpecialOffer: async (parent, { id }, context, info) => await SpecialOffer.findById(id)
    },
    Mutation: {
        createSpecialOffer: async (parent, { specialOffer }, context, info) => await SpecialOffer.create(specialOffer),
        updateSpecialOffer: async (parent, { id, specialOffer }, context, info) => await SpecialOffer.findByIdAndUpdate(id, specialOffer, {new: true}),
        addProductToOffer: async (parent, {id, product}, context, info) => {
            const specialOffer = await SpecialOffer.findById(id);
            specialOffer.appliesTo.push(product);
            return await SpecialOffer.findByIdAndUpdate(id, specialOffer, {new: true});
        },
        removeProductFromOffer: async (parent, {id, product}, context, info) => {
            const specialOffer = await SpecialOffer.findById(id);
            const index = specialOffer.appliesTo.indexOf(product);
            if (index > -1) {
                specialOffer.appliesTo.splice(index, 1);
            }
            return await SpecialOffer.findByIdAndUpdate(id, specialOffer, {new: true});
        },
        deleteSpecialOffer: async (parent, { id }, context, info) => await SpecialOffer.findByIdAndRemove(id)
    },
    SpecialOffer: {
        appliesTo: async specialOffer => {
            const products = [];
            for (const productId of specialOffer.appliesTo) {
                products.push(await Product.findById(productId));
            }
            return products;
        }
    }
};
