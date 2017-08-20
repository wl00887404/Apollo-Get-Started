let todos = require('./mockData.js')

const query = {
    hello: () => "hello",
    todos: () => todos
}

const mutation = {
    addTodo: ({
        name
    }) => {
        let id = todos[todos.length - 1].id + 1
        let createAt = `${(new Date()).getFullYear()}/${(new Date()).getMonth()+1}/${(new Date()).getDate()}`

        let newTodoIndex = todos.push({
            id,
            name,
            createAt,
            finished: false
        })
        return new Promise((res, req) => {
            setTimeout(() => {
                res(todos[newTodoIndex - 1])
            }, 2000)
        })
    },
    removeTodo: ({
        id
    }) => {
        let target = todos.filter(el => id === el.id)[0]
        todos = todos.filter(el => id !== el.id)
        return new Promise((res, req) => {
            setTimeout(() => {
                res(target)
            }, 2000)
        })

    },
    toggleFinished: ({
        id
    }) => {
        let target
        todos.forEach(el => {
            if (el.id === id) {
                target = el
                el.finished = !el.finished
            }
            return el
        })
        return target
    }
}
module.exports = Object.assign({}, query, mutation)