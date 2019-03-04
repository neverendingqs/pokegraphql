const {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const { get } = require('../../../pokeapi');

module.exports = {
  type: new GraphQLObjectType({
    name: 'PokemonForm',
    fields: () => ({
      // TODO
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      order: { type: GraphQLInt },
      form_order: { type: GraphQLInt },
      is_default: { type: GraphQLBoolean },
      is_battle_only: { type: GraphQLBoolean },
      is_mega: { type: GraphQLBoolean },
      form_name: { type: GraphQLString },
    })
  }),
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  },
  resolve(parent, { id, name }) {
    return get(`pokemon-form/${id || name}`);
  }
}
