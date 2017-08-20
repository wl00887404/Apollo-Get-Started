export const todos = (state = [], action) => {
    switch (action.type) {
        case "getTodos":
            return action.todos
        case "addTodo":
            {
                let {
                    todo
                } = action
                return [...state, todo]
            }
        case "removeTodo":
            {
                let { id } = action
                id = id || state[state.length - 1].id

                return state.filter(el => id !== el.id)

            }

        case "toggleFinished":
            {
                let { id } = action

                return state.map(el => Object.assign({}, el))
                    .map(el => {
                        if (el.id === id) {
                            el.finished = !el.finished
                        }
                        return el
                    })
            }
        default:
            return state
    }
}

export const visibilityFilter = (state = "all", action) => {
    switch (action.type) {
        case "setVisibilityFilter":
            return action.filter
        default:
            return state
    }
}

export const loading = (state = false, action) => {
    switch (action.type) {
        case "startLoading":
            return true
        case "fisishLoading":
            return false
        default:
            return state
    }
}