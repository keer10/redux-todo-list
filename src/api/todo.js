const URL = 'http://localhost:5000/todos'


export const getTodoItems = () =>  fetch(URL).then(res => res.json());

export const addTodoItem = (todo) => {
    return fetch(URL, {
        method: 'POST', 
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify(todo)
    }).then(res => res.json())
}

export const removeItem = (id) => {
    return fetch(`${URL}/${id}`, {
        method: 'DELETE'
    })
}