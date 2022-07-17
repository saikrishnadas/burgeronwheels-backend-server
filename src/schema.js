const { gql } = require("apollo-server");

exports.typeDefs = gql`
	type Query {
		products: [Product!]!
	}

	type Mutation {
		addProduct(input: AddProductInput!): Product!
	}

	type Product {
		id: ID!
		name: String!
		slug: String!
		description: String!
		price: Float!
		image: String!
	}

	input AddProductInput {
		name: String!
		description: String!
		price: Float!
		image: String!
	}
`;
