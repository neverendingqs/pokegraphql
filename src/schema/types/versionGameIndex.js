const {
  GraphQLInt,
  GraphQLObjectType
} = require('graphql');

const VersionType = require('../fields/games/version').type;

module.exports = new GraphQLObjectType({
  name: 'VersionGameIndex',
  fields: () => ({
    game_index: { type: GraphQLInt },
    version: { type: VersionType },
  })
})
