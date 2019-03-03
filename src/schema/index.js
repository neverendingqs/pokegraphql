const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const pokemon = require('./fields/pokemon');

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: { pokemon }
});

module.exports = new GraphQLSchema({
  query
});
