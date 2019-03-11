const {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const NameType = require('../../types/name');

const { get } = require('../../../pokeapi');

module.exports = {
  type: new GraphQLObjectType({
    name: 'VersionGroup',
    fields: () => ({
      // TODO
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      order: { type: GraphQLInt }
    })
  }),
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  },
  resolve(parent, { id, name }) {
    return get(`version-group/${id || name}`);
  }
}
