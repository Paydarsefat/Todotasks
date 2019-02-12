let nextTodoId = 0;

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const toggleTodoAction = id => ({
    type: 'TOGGLE_TODO',
    id
})