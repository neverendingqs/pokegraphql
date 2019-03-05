const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const language = require('../fields/language');

module.exports = new GraphQLObjectType({
  name: 'Name',
  fields: () => ({
    name: { type: GraphQLString },
    language: {
      type: language.type,
      resolve(parent, args) {
        return language.resolve(null, parent.language);
      }
    },
  })
})
