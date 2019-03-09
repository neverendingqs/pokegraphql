const {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const { get } = require('../../../pokeapi');

module.exports = {
  type: new GraphQLObjectType({
    name: 'Item',
    fields: () => ({
      // TODO
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      cost: { type: GraphQLInt },
      fling_power: { type: GraphQLInt },
    })
  }),
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  },
  resolve(parent, { id, name }) {
    return get(`item/${id || name}`);
  }
}
