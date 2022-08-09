const { gql } = require("apollo-server");

exports.typeDefs = gql`
	type Query {
		products: [Product!]!
		findProduct(id: String!): Product
	}

	type Mutation {
		addProduct(input: AddProductInput!): Product!
		removeProduct(id: String!): String
		updateProduct(input: UpdateProductInput!): Product
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
		rating: Float
		calories: Int
		duration: String
	}

	input AddProductInput {
		name: String!
		description: String!
		price: Float!
		image: String!
		ingredients: [String]
		addOns: [String]
		rating: Float!
		calories: Int!
		duration: String!
	}

	input UpdateProductInput {
		id: ID!
		name: String
		description: String
		price: Float
		image: String
		ingredients: [String]
		addOns: [String]
		rating: Float
		calories: Int
		duration: String
	}
`;
