const {
  GraphQLInt,
  GraphQLObjectType
} = require('graphql');

const version = require('../../fields/games/version');

module.exports = new GraphQLObjectType({
  name: 'PokemonHeldItemVersion',
  fields: () => ({
    version: {
      type: version.type,
      resolve(parents, args) {
        return version.resolve(null, parents.version);
      }
    },
    rarity: { type: GraphQLInt },
  })
})
