const {
  GraphQLList,
  GraphQLObjectType
} = require('graphql');

const item = require('../fields/items/item');
const PokemonHeldItemVersion = require('./pokemonHeldItemVersion');

module.exports = new GraphQLObjectType({
  name: 'PokemonHeldItem',
  fields: () => ({
    item: {
      type: item.type,
      resolve(parent, args) {
        return item.resolve(null, parent.item);
      }
    },
    version_details: { type: new GraphQLList(PokemonHeldItemVersion) },
  })
})
