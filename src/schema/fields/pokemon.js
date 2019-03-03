const fetch = require('node-fetch');
const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const prefix = 'https://pokeapi.co/api/v2';

const PokemonType = new GraphQLObjectType({
  name: 'Pokemon',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  })
});

module.exports = {
  type: new GraphQLObjectType({
    name: 'Pokemon',
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString }
    })
  }),
  args: { id: { type: GraphQLID } },
  resolve(parent, args){
    return fetch(`${prefix}/pokemon/${args.id}`)
      .then(resp => resp.json())
      .then(({ id, name }) => ({ id, name }))
  }
}
