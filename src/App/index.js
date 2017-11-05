import React, {Component} from 'react';
// eslint-disable-next-line
import bulma from "bulma/css/bulma.css"
import {ApolloProvider} from 'react-apollo'
import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-client-preset'
import {Todo} from '../Page'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import {visibilityFilter} from '../Reducer'

const client = new ApolloClient({
    link: new HttpLink({uri: 'http://localhost:8081/graphql'}),
    cache: new InMemoryCache()
})

let store = createStore(combineReducers({visibilityFilter}), {}, compose((typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined')
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f,))

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ApolloProvider client={client}>
                    <Todo/>
                </ApolloProvider>
            </Provider>
        )
    }
}

export default App