import React from 'react'
// eslint-disable-next-line 
import styles from "./styles.css"

const TodosTable = ({
    todos,
    remove,
    toggle
}) => {
    todos = todos.map(({
        id,
        createAt,
        name,
        finished
    }) => (<Todos 
                key={id} 
                createAt={createAt} 
                name={name} 
                finished={finished} 
                remove={remove.bind(null,id)} 
                toggle={toggle.bind(null,id)}/>))

    return (
        <div  className="todos">
            <table className="table is-fullwidth is-striped">
                <thead>
                    <tr>
                        <th>日期</th>
                        <th>項目</th>
                        <th>完成</th>
                    </tr>
                </thead>
                <tbody>
                    {todos}
                </tbody>
            </table>
        </div>
    )
}

TodosTable.defaultProps = {
    todos: [],
    remove: () => console.warn("remove() in TodoTable is triggered without assigned a remove props"),
    toggle: () => console.warn("toggle() in TodoTable is triggered without assigned a toggle props")
}

const Todos = ({
    createAt,
    name,
    finished,
    remove,
    toggle
}) => {
    finished = (<Finished finished={finished} onClick={toggle}/>)
    return (
        <tr>
            <td><span>{createAt}</span></td>
            <td><span className="tag is-medium">{name}<button className="delete is-small" onClick={remove}></button></span></td>
            <td><span>{finished}</span></td>                    
        </tr>
    )
}

const Finished = ({
    finished,
    onClick
}) => {
    if (finished) {
        return (
            (<a className="button is-info is-outlined" onClick={onClick}>已完成</a>)
        )
    } else {
        return (
            (<a className="button is-danger is-outlined" onClick={onClick}>未完成</a>)
        )
    }

}

export default TodosTable