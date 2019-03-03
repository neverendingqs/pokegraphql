const { GraphQLObjectType, GraphQLSchema } = require('graphql');

const query = new GraphQLObjectType({
  name: 'RootQueryType'
});

module.exports = new GraphQLSchema({
  query
});
