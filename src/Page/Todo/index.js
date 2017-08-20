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
            addTodo
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
                            todos={todos} />
                </Container>
            </div>
        )
    }
}

const qTodos = {
    query: gql `
        query {
            todos{
                id
                name
                createAt
                finished
            }
        }
    `
}

const mAddTodo ={
    query:gql `
        mutation{
            addTodo(name:"我不在的時候，是否有想起我？"){
                id
                name
                createAt
                finished
            }
        }    
    `,
    config:{
        props: ({ mutate }) => {
            return {
                addTodo: () => mutate(),
            }
        }
    }
}

export default compose(
    graphql(qTodos.query),
    graphql(mAddTodo.query,mAddTodo.config),
)(Page)