import React, {Component} from 'react';
// eslint-disable-next-line 
import bulma from "bulma/css/bulma.css"
import {ApolloProvider, ApolloClient, createNetworkInterface} from 'react-apollo'
import {Todo} from '../Page'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {visibilityFilter} from '../Reducer'

const networkInterface = createNetworkInterface({
    uri:'http://localhost:8081/graphql'
})

const client = new ApolloClient({
    networkInterface
})

let store = createStore(
    combineReducers({
        visibilityFilter,
        apollo: client.reducer()
    }),
    {},
    compose(
        applyMiddleware(client.middleware()),
        (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    )
)

class App extends Component {
    render() {
        return (
            <ApolloProvider store={store} client={client}> 
				<Todo />
            </ApolloProvider> 
        )
    }
}

export default App