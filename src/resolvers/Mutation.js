const { v4: uuid } = require("uuid");
const slugify = require("slugify");

exports.Mutation = {
	addProduct: async (parent, { input }, { Product }) => {
		const {
			name,
			description,
			price,
			image,
			ingredients,
			addOns,
			rating,
			calories,
			duration,
		} = input;
		const newProduct = new Product({
			id: uuid(),
			slug: slugify(name, { lower: true }),
			name,
			description,
			price,
			image,
			ingredients,
			addOns,
			rating,
			calories,
			duration,
		});

		await newProduct.save(); //save the product to mongoDB
		return newProduct;
	},

	updateProduct: async (parent, { input }, { Product }) => {
		const {
			id,
			name,
			description,
			price,
			image,
			ingredients,
			addOns,
			rating,
			calories,
			duration,
		} = input;
		const filter = { id };
		const update = {
			name,
			description,
			price,
			image,
			ingredients,
			addOns,
			rating,
			calories,
			duration,
		};
		let product = await Product.findOneAndUpdate(filter, update, { new: true });
		return product;
	},

	removeProduct: async (parent, { id }, { Product }) => {
		await Product.deleteOne({ id }); //remove a product from mongodb
		return true;
	},
};
