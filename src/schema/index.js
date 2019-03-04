const { GraphQLObjectType, GraphQLSchema } = require('graphql');

const pokemon = require('./fields/pokemon/pokemon');
const ability = require('./fields/pokemon/ability');

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ability,
    pokemon,
  }
});

module.exports = new GraphQLSchema({
  query
});
