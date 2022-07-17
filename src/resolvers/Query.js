exports.Query = {
	products: async (parent, args, { Product }) => {
		const products = await Product.find(); //find all products from mongodb
		return products;
	},
};
