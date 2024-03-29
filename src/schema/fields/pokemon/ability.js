const {
  GraphQLBoolean,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const { get } = require('../../../pokeapi');

module.exports = {
  type: new GraphQLObjectType({
    name: 'Ability',
    fields: () => ({
      // TODO
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      is_main_series: { type: GraphQLBoolean },
    })
  }),
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  },
  resolve(parent, { id, name }) {
    return get(`ability/${id || name}`);
  }
}
