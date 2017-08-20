import fetch from './fetch'

const startLoading = () => {
    return {
        type: "startLoading"
    }
}

const finishLoading = () => {
    return {
        type: "finishLoading"
    }
}
const getTodos = (todos) => {
    return {
        type: "getTodos",
        todos
    }
}

export const fetchTodos = () => {
    return (dispatch, getState) => {
        dispatch(startLoading())
        fetch.getTodos()
            .then((res) => {
                if(res.errors){
                    throw res
                }
                else{
                    dispatch(getTodos(res.data.todos))
                    dispatch(finishLoading())
                }
            })
            .catch(e=>{
                console.error(e)
                dispatch(finishLoading())
            })
    }
}

export const addTodo = (name) => {
    return (dispatch, getState) => {
        let id = "#"+Math.round(Math.random()*1000)
        let createAt = `${(new Date()).getFullYear()}/${(new Date()).getMonth()+1}/${(new Date()).getDate()}`
        let finished=false
        let todo={id, createAt, finished, name}

        dispatch({
            type: "addTodo",
            todo
        })

        fetch.addTodo(name)
            .then((res) => {
                if(res.errors){
                    throw res
                }
                else {
                    dispatch({
                        type: "updateTodoId",
                        oddId:id,
                        newId:res.data.addTodo.id
                    })
                    dispatch(finishLoading())
                }
            })
            .catch(e => {
                dispatch({
                    type: "removeTodo",
                    id
                })
                dispatch(finishLoading())
            })
    }
}

export const removeTodo = (id) => {
    return (dispatch, getState) => {
        let todo = getState().todos.filter(todo => todo.id === id)[0]

        dispatch({
            type: "removeTodo",
            id
        })

        fetch.removeTodo(id)
            .then((res) => {
                if (res.errors) {
                    throw res
                } else {
                    dispatch(finishLoading())
                }
            })
            .catch(e => {
                dispatch({
                    type: "addTodo",
                    todo
                })
                dispatch(finishLoading())
            })
    }
}

export const toggleFinished = (id) => {
    return (dispatch, getState) => {
        fetch.toggleFinished(id)
            .then((res) => {
                if(res.errors){
                    throw res
                }
                else {
                    dispatch({
                        type: "toggleFinished",
                        id
                    })
                    dispatch(finishLoading())
                }
            })
            .catch(e => {
                dispatch(finishLoading())
            })
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: "setVisibilityFilter",
        filter
    }
}