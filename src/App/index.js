import React, {Component} from 'react';
// eslint-disable-next-line 
import bulma from "bulma/css/bulma.css"
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {todos,visibilityFilter,loading} from '../Reducer'
import {Todo} from '../Page'

let store = createStore(
    combineReducers({todos, visibilityFilter,loading}),
    {},
    compose(
        applyMiddleware(thunk),
        (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    )
)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Todo />
            </Provider>
        )
    }
}

export default App