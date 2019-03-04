const {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const pokemonAbility = require('./pokemonAbility');

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
      abilities: {
        type: new GraphQLList(pokemonAbility.type),
        resolve(parents, args) {
          return Promise.all(
            parents.abilities
              .map(({ ability: { name } }) =>  pokemonAbility.resolve(null, { name }))
          );
        }
      },
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
