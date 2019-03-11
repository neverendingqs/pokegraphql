const { GraphQLObjectType, GraphQLSchema } = require('graphql');

const version = require('./fields/games/version');
const versionGroup = require('./fields/games/versionGroup');

const item = require('./fields/items/item');

const move = require('./fields/moves/move');
const moveLearnMethod = require('./fields/moves/moveLearnMethod');

const ability = require('./fields/pokemon/ability');
const form = require('./fields/pokemon/form');
const pokemon = require('./fields/pokemon/pokemon');

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    version,
    versionGroup,

    item,

    move,
    moveLearnMethod,

    ability,
    form,
    pokemon,
  }
});

module.exports = new GraphQLSchema({
  query
});
