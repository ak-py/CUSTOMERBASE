const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

//HardCoded data

const customers = [
    {id:'1', name:'John Doe', email:'jdoe@gmail.com', age:35},
    {id:'1', name:'Steve Smith', email:'steve@gmail.com', age:25},
    {id:'1', name:'Sara Williams', email:'sara@gmail.com', age:32},
];

//Customer Type
const CustomerType = new GraphQLObjectType({
    name:'Customer',
    fields:() => ({
        id: {type:GraphQLString},
        name: {type:GraphQLString},
        email: {type:GraphQLString},
        age: {type:GraphQLInt}
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    customer:{
        type:CustomerType,

    }
});

module.exports = new GraphQLSchema({
    
});
