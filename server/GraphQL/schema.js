const {
    buildSchema
} = require('graphql')


        // author(name:String):Author
module.exports = buildSchema(`
    type Todo{
        id:Int!
        createAt: String!
        name: String!
        finished: Boolean!
    }

    type Query{
        hello:String!
        todos:[Todo]!
    }

    type Mutation{
        addTodo(name:String!):Todo!
        removeTodo(id:Int!):Todo
        toggleFinished(id:Int!):Todo
    }
`)