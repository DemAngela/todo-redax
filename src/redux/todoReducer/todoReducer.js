const initialState = {
    todos: [],
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TODOS':
            return {...state, todos: action.payload}
        case 'ADD_TODO':
            return {...state, todos: [...state.todos, action.payload]}
        case 'DELETE_TODO':
            return {...state, todos: state.todos.filter((todo) => todo.id !== action.payload)}
        case 'EDIT_TODO':
            const {id, newTitle} = action.payload
            const updatedTodos = state.todos.map((todo) => todo.id === id ? {...todo, title: newTitle} : todo)
            return {...state, todos: updatedTodos}
        case 'UPDATE_TODOS':
            return {...state, todos: action.payload}
        default:
            return state

    }
}