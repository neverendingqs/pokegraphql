const {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const ability = require('./ability');
const form = require('./form');
const version = require('../games/version');

const VersionGameIndex = require('../../types/versionGameIndex');

const { get } = require('../../../pokeapi');

module.exports = {
  type: new GraphQLObjectType({
    name: 'Pokemon',
    fields: () => ({
      // TODO
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      base_experience: { type: GraphQLInt },
      height: { type: GraphQLInt },
      is_default: { type: GraphQLBoolean },
      order: { type: GraphQLInt },
      weight: { type: GraphQLInt },
      abilities: {
        type: new GraphQLList(ability.type),
        resolve(parents, args) {
          return Promise.all(
            parents.abilities
              .map(({ ability: { name } }) =>  ability.resolve(null, { name }))
          );
        }
      },
      forms: {
        type: new GraphQLList(form.type),
        resolve(parents, args) {
          return Promise.all(
            parents.forms
              .map(({ name }) =>  form.resolve(null, { name }))
          );
        }
      },
      game_indices: {
        type: new GraphQLList(VersionGameIndex),
        resolve(parents, args) {
          return Promise.all(
            parents.game_indices.map(gi =>
              version
                .resolve(null, gi.version)
                .then(version => ({
                  game_index: gi.game_index,
                  version
                }))
            )
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
