exports.Query = {
	products: async (parent, args, { Product }) => {
		const products = await Product.find(); //find all products from mongodb
		return products;
	},
	findProduct: async (parent, { id }, { Product }) => {
		const product = await Product.findOne({ id }); //find one product from mongodb
		return product;
	},
};
