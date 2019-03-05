const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const { get } = require('../../../pokeapi');

module.exports = {
  type: new GraphQLObjectType({
    name: 'Version',
    fields: () => ({
      // TODO
      id: { type: GraphQLID },
      name: { type: GraphQLString },
    })
  }),
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  },
  resolve(parent, { id, name }) {
    return get(`version/${id || name}`);
  }
}
