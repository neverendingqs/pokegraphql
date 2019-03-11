const {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const NameType = require('../../types/utility/name');

const { get } = require('../../../pokeapi');

module.exports = {
  type: new GraphQLObjectType({
    name: 'Move',
    fields: () => ({
      // TODO
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      accuracy: { type: GraphQLInt },
      effect_chance: { type: GraphQLInt },
      pp: { type: GraphQLInt },
      priority: { type: GraphQLInt },
      power: { type: GraphQLInt },
      names: { type: new GraphQLList(NameType) },
    })
  }),
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  },
  resolve(parent, { id, name }) {
    return get(`move/${id || name}`);
  }
}
