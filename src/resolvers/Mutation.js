const { v4: uuid } = require("uuid");
const slugify = require("slugify");

exports.Mutation = {
	addProduct: async (parent, { input }, { Product }) => {
		const { name, description, price, image } = input;
		const newProduct = new Product({
			id: uuid(),
			slug: slugify(name, { lower: true }),
			name,
			description,
			price,
			image,
		});

		await newProduct.save(); //save the product to mongoDB
		return newProduct;
	},

	removeProduct: async (parent, { id }, { Product }) => {
		await Product.deleteOne({ id }); //remove a product from mongodb
		return true;
	},
};
