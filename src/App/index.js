import React, {Component} from 'react';
// eslint-disable-next-line 
import bulma from "bulma/css/bulma.css"
import {ApolloProvider, ApolloClient, createNetworkInterface} from 'react-apollo'
import {Todo} from '../Page'

const networkInterface = createNetworkInterface({
    uri:'http://localhost:8081/graphql'
})

const client = new ApolloClient({
    networkInterface
})

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}> 
				<Todo />
            </ApolloProvider> 
        )
    }
}

export default App