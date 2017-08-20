const express = require('express')
const cors = require('cors')

const chalk = require('chalk');

const graphqlHTTP = require('express-graphql')
const {
    schema,
    rootValue
} = require('./GraphQL')


const app = express();

app.use(express.static('./public'))
    .use('/graphql', cors(), graphqlHTTP({
        schema,
        rootValue,
        graphiql: true,
    }))

app.listen(8081, () => console.log(`GraphiQL started on ${chalk.yellowBright("http://localhost:8081/graphql")}`))