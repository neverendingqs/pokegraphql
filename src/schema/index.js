const { GraphQLObjectType, GraphQLSchema } = require('graphql');

const pokemon = require('./fields/pokemon');
const pokemonAbility = require('./fields/pokemonAbility');

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    pokemon,
    pokemonAbility
  }
});

module.exports = new GraphQLSchema({
  query
});
