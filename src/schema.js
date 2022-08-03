const { gql } = require("apollo-server");

exports.typeDefs = gql`
	type Query {
		products: [Product!]!
		findProduct(id: String!): Product!
	}

	type Mutation {
		addProduct(input: AddProductInput!): Product!
		removeProduct(id: String!): String
	}

	type Product {
		id: ID!
		name: String!
		slug: String!
		description: String!
		price: Float!
		image: String!
		ingredients: [String]
		addOns: [String]
	}

	input AddProductInput {
		name: String!
		description: String!
		price: Float!
		image: String!
		ingredients: [String]
		addOns: [String]
	}
`;
