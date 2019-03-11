const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const NameType = require('../../types/utility/name');

const { get } = require('../../../pokeapi');

module.exports = {
  type: new GraphQLObjectType({
    name: 'MoveLearnMethod',
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
    return get(`move-learn-method/${id || name}`);
  }
}
