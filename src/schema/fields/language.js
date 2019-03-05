const {
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const LanguageType = new GraphQLObjectType({
  name: 'Language',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    official: { type: GraphQLBoolean },
    iso639: { type: GraphQLString },
    iso3166: { type: GraphQLString },
    names: {
      type: new GraphQLList(LanguageType),
      resolve(parent, args) {
        return Promise.all(
          parent.names.map(({ language: { name } }) => get(`language/${name}`))
        );
      }
    },
  })
});

const { get } = require('../../pokeapi');

module.exports = {
  type: LanguageType,
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  },
  resolve(parent, { id, name }) {
    return get(`language/${id || name}`);
  }
}
