const {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const { get } = require('../../pokeapi');

module.exports = {
  type: new GraphQLObjectType({
    name: 'Pokemon',
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      base_experience: { type: GraphQLInt },
      height: { type: GraphQLInt },
      is_default: { type: GraphQLBoolean },
      order: { type: GraphQLInt },
      weight: { type: GraphQLInt },
      location_area_encounters: { type: GraphQLString },
    })
  }),
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  },
  resolve(parent, { id, name }) {
    return get(`pokemon/${id || name}`);
  }
}
