import React, { Component } from 'react'
import { Hero, Tabs, InputHasAddons, Container, TodosTable } from '../../Component'

import {
    gql,
    graphql,
    compose
} from 'react-apollo'

let filter = [{
        id: "all",
        name: "全部"
    },
    {
        id: "finished",
        name: "已完成"
    },
    {
        id: "unfinished",
        name: "未完成"
    }
]

class Page extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
    }
    
    onChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        let {
            addTodo,
            removeTodo,
            toggleFinished
        } = this.props

        let {
            name
        } = this.state

        let {
            todos
        } = this.props.data

        return (
            <div>
                <Hero title={"Lovely Todo List"} subtitle={"事情永遠做不完"}>
                    <Tabs 
                        items={filter} 
                        selected={"all"} />
                </Hero>
                <Container>
                        <InputHasAddons
                            onChange={this.onChange.bind(this)}
                            value={name}
                            onSubmit={addTodo}/>
                        <TodosTable 
                            todos={todos} 
                            remove={removeTodo}
                            toggle={toggleFinished} />
                </Container>
            </div>
        )
    }
}

const fAllAttr=gql `
    fragment allAttr on Todo{
        id
        createAt
        name
        finished
    }
`

const qTodos = {
    query: gql `
        query {
            todos{
                ...allAttr
            }
        }
        ${fAllAttr}
    `
}

const mAddTodo ={
    query:gql `
        mutation ($name:String!){
            addTodo(name:$name){
                ...allAttr                
            }
        }
        ${fAllAttr}               
    `,
    config:{
        props: ({ mutate }) => {
            return {
                addTodo: (name) => mutate({
                    variables: {
                        name
                    },
                    update: (store, response) => {
                        let data = store.readQuery({
                            query: qTodos.query
                        })
                        data.todos.push(response.data.addTodo)
                        store.writeQuery({
                            query: qTodos.query,
                            data
                        })
                    },
                }),
            }
        }
    }
}

const mRemovewTodo = {
    query: gql `
        mutation ($id:Int!){
            removeTodo(id:$id){
                id
            }
        }  
    `,
    config:{
        props: ({ mutate }) => {
            return {
                removeTodo: (id) => mutate({
                    variables: {
                        id
                    },
                    update: (store, response) => {
                        let data = store.readQuery({
                            query: qTodos.query
                        })
                        data.todos = data.todos.filter(todo => todo.id !== response.data.removeTodo.id)
                        store.writeQuery({
                            query: qTodos.query,
                            data
                        })
                    },
                }),
            }
        }
    }
}

const mToggleFinished = {
    query: gql `
        mutation ($id:Int!){
            toggleFinished(id:$id){
                id
                finished
            }
        }
    `,
    config:{
        props: ({ mutate }) => {
            return {
                toggleFinished: (id) => mutate({
                    variables: {
                        id
                    },
                }),
            }
        }
    }
}


export default compose(
    graphql(qTodos.query),
    graphql(mAddTodo.query,mAddTodo.config),
    graphql(mRemovewTodo.query,mRemovewTodo.config),
    graphql(mToggleFinished.query,mToggleFinished.config),    
)(Page)