
export const getTodos = (todos) => {
    return {type: 'GET_TODOS', payload: todos}
}

export const addTodo = (todo) => {
    return {type: 'ADD_TODO', payload: todo}
}

export const deleteTodo = (id) => {
    return {type: 'DELETE_TODO', payload: id}
}

export const editTodo = (id, newTitle) => {
    return {type: 'EDIT_TODO', payload: id, newTitle}
}

export const updateTodos = (updatedTodos) => {
    return { type: 'UPDATE_TODOS', payload: updatedTodos,}
}