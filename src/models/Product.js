const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	slug: {
		type: String,
		unique: true,
	},
	id: {
		type: String,
		unique: true,
	},
	description: {
		type: String,
	},
	price: {
		type: Number,
	},
	image: {
		type: String,
	},
	ingredients: [
		{
			type: String,
		},
	],
	addOns: [
		{
			type: String,
		},
	],
	rating: {
		type: Number,
	},
	calories: {
		type: Number,
	},
	duration: {
		type: String,
	},
});

const Product = mongoose.model("product", productSchema);
module.exports = { Product };
