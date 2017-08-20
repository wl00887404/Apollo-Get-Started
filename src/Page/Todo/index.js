import React, { Component } from 'react'
import { Hero, Tabs, InputHasAddons, Container, TodosTable } from '../../Component'

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
            name
        } = this.state

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
                            value={name} />
                        <TodosTable />
                </Container>
            </div>
        )
    }
}

export default Page