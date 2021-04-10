const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Address{
        _id: ID!
        address:String!
        city:String!
        zipcode:Int!
        country:String!
    }

    type User{
        _id: ID!
        emailId:String!
        firstName:String!
        lastName:String!
        address:Address!
    }

    input UserInputData{
        emailId:String!
        firstName:String!
        lastName:String!   
    }

    input AddressInputData{
        address:String!
        city:String!
        zipcode:Int!
        country:String!
        userId:String!  
    }

    type RootQuery{
        findUser(_id:String!):User!
        user:User!
        address:Address!
    }
    type RootMutation{
        createUser(userInput:UserInputData):User!
        createAddress(addressInput:AddressInputData):Address!
    }
    schema{
        query:RootQuery
        mutation:RootMutation
    }
`)
