const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const { get } = require('../../pokeapi');

module.exports = {
  type: new GraphQLObjectType({
    name: 'Pokemon',
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString }
    })
  }),
  args: { id: { type: GraphQLID } },
  resolve(parent, { id }){
    return get(`pokemon/${id}`)
      .then(({ id, name }) => ({ id, name }))
  }
}
