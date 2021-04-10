const express = require('express');
const { graphqlHTTP } = require('express-graphql');

require('./db/mongoose')
const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolver');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
}))

const port = 5000;
app.listen(port, () => console.log(`server is in session on port ${port}`));