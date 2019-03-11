const {
  GraphQLInt,
  GraphQLObjectType
} = require('graphql');

const version = require('../../fields/games/version');

module.exports = new GraphQLObjectType({
  name: 'VersionGameIndex',
  fields: () => ({
    game_index: { type: GraphQLInt },
    version: {
      type: version.type,
      resolve(parents, args) {
        return version.resolve(null, parents.version);
      }
    },
  })
})
