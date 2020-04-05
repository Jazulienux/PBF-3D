import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER
} from 'actionTypes'

let ToDoId = 2;

export const addTodo = text = ({
    type: ADD_TODO,
    id: ToDoId += 1,
    text
})

export const deleteTodo = (id) = ({
    type: REMOVE_TODO,
    id: id
})

export const toggleTodo = (id) = ({
    type: TOGGLE_TODO,
    id: id
})

export const setVisibillityFilter = filter = ({
    type: SET_VISIBILITY_FILTER,
    filter
})
