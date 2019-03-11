const {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const NameType = require('../../types/utility/name');

const { get } = require('../../../pokeapi');

module.exports = {
  type: new GraphQLObjectType({
    name: 'Version',
    fields: () => ({
      // TODO
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      names: { type: new GraphQLList(NameType) }
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
