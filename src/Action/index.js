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
        fetch.addTodo(name)
            .then((res) => {
                if(res.errors){
                    throw res
                }
                else {
                    dispatch({
                        type: "addTodo",
                        todo:res.data.addTodo
                    })
                    dispatch(finishLoading())
                }
            })
            .catch(e => {
                dispatch(finishLoading())
            })
    }
}

export const removeTodo = (id) => {
    return (dispatch, getState) => {
        fetch.removeTodo(id)
            .then((res) => {
                if(res.errors){
                    throw res
                }
                else {
                    dispatch({
                        type: "removeTodo",
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