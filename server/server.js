const express = require('express');
const graphqlHTTP = require('express-graphql');
const serverless = require('serverless-http');

const schema = require('./schema');

const app = express();
const graphqlMiddleware = graphqlHTTP({
  schema,
  graphiql: true
});

//app.use('/', graphqlMiddleware);
app.use('/.netlify/functions/server', (req, res) => {
  res.send(JSON.stringify(req.get('Content-Type')));
})//, graphqlMiddleware);

module.exports = app;
module.exports.handler = serverless(app);
