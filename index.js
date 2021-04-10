const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');


const Schema = require('./graphQL/schema');
const resolver = require('./graphQL/resolver');



app.use('/graphql', graphqlHTTP({
    schema: Schema,
    rootValue: resolver,
    graphiql: true
}));
app.listen(PORT, () => {
    mongoose.connect('mongodb+srv://abhi:abhi@1996@cluster0.ej6e8.mongodb.net/user?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        }, (err) => {
            if (err) {
                console.log('connection failed', err)
            }
            else {
                console.log('Connection working')
            }
        });
    
    console.log('server started.')
});
