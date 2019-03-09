const { GraphQLObjectType, GraphQLSchema } = require('graphql');

const version = require('./fields/games/version');

const ability = require('./fields/pokemon/ability');
const form = require('./fields/pokemon/form');
const pokemon = require('./fields/pokemon/pokemon');

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    version,

    ability,
    form,
    pokemon,
  }
});

module.exports = new GraphQLSchema({
  query
});
