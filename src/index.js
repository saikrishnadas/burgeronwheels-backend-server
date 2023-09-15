const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const dbConnect = require("./config/mongo");
const { Product } = require("./models/Product");

//Create the Apollo Server
const server = new ApolloServer({
	typeDefs,
	resolvers: { Query, Mutation },
	context: {
		Product,
	},
	cors: {
		origin: ["https://calm-heliotrope-536826.netlify.app/"]
	}
});


//Connect to MongoDB
dbConnect();

//Listen the graphQL server
server
	.listen({ port: process.env.PORT || 4000 })
	.then(({ url }) => {
		console.log("Server started at " + url);
	})
	.catch((err) => {
		console.log(err);
	});
