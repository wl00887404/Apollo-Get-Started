import React, { Component } from 'react'
import { Hero, Tabs, InputHasAddons, Container, TodosTable } from '../../Component'
import { connect } from 'react-redux'
import { fetchTodos, addTodo, removeTodo, toggleFinished, setVisibilityFilter } from '../../Action'

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
    componentDidMount(){
        this.props.fetchTodos()
    }

    onChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        let {
            addTodo,
            visibilityFilter,
            todos,
            setVisibilityFilter,
            removeTodo,
            toggleFinished
        } = this.props

        let {
            name,
        } = this.state

        todos = todos
            .filter(({
                finished
            }) => {
                switch (visibilityFilter) {
                    case "all":
                        return true
                    case "finished":
                        return finished === true
                    case "unfinished":
                        return finished === false
                    default:
                        return true
                }
            })

        return (
            <div>
                <Hero title={"Lovely Todo List"} subtitle={"事情永遠做不完"}>
                    <Tabs
                        items={filter}
                        selected={visibilityFilter}
                        onClick={setVisibilityFilter}/>
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


const mapStore = ({
    todos,
    visibilityFilter
}) => {
    return {
        todos,
        visibilityFilter
    }
}
const mapDispatch = (dispatch) => {
    return {
        fetchTodos:()=>{
            dispatch(fetchTodos()) 
        },
        addTodo: (name) => {
            dispatch(addTodo(name))
        },

        setVisibilityFilter: (filter) => {
            dispatch(setVisibilityFilter(filter))
        },

        removeTodo: (id) => {
            dispatch(removeTodo(id))
        },

        toggleFinished: (id) => {
            dispatch(toggleFinished(id))
        }
    }
}

export default connect(mapStore, mapDispatch)(Page)