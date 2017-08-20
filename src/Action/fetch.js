let uri = 'http://localhost:8081/graphQL'
let method="POST"
let headers={"Content-Type":"application/json; charset=utf-8"}
const getTodos = () => {
    let query = `
        {
            todos{
                id
                createAt
                name
                finished
            }
        }
    `
    let operationName=``
    let variables={}
    let body=JSON.stringify({query,operationName,variables})

    return fetch(uri, {method, headers, body})
        .then(res => res.json())
}

const addTodo = (name) => {
    let query = `
        mutation{
            addTodo(name:"${name}"){
                id
                createAt
                name
                finished
            }
        }
    `
    let operationName=``
    let variables={}
    let body=JSON.stringify({query,operationName,variables})

    return fetch(uri, {method, headers, body})
        .then(res => res.json())
}

const removeTodo = (id) => {
    let query = `
        mutation{
            removeTodo(id:${id}){
                id
                createAt
                name
                finished
            }
        }
    `
    let operationName=``
    let variables={}
    let body=JSON.stringify({query,operationName,variables})

    return fetch(uri, {method, headers, body})
        .then(res => res.json())
}

const toggleFinished = (id) => {
    let query = `
        mutation{
            toggleFinished(id:${id}){
                id
                createAt
                name
                finished
            }
        }
    `
    let operationName=``
    let variables={}
    let body=JSON.stringify({query,operationName,variables})

    return fetch(uri, {method, headers, body})
        .then(res => res.json())
}

export default {
    getTodos,
    addTodo,
    removeTodo,
    toggleFinished
}