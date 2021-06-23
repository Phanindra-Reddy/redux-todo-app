

import {ACTIONS} from './actionTypes';


export const addTodo = (todoname) => {
    return {
        type:ACTIONS.ADD_TODO,
        todoname
    }
}

export const deleteTodo = (id) => {
    return {
        type:ACTIONS.DELETE_TODO,
        id
    }
}

export const toggleTodo = (id) => {
    return {
        type:ACTIONS.TOGGLE_TODO,
        id
    }
}

export const editTodo = (id,todoname) => {
    return {
        type:ACTIONS.EDIT_TODO,
        id,
        todoname,
    }
}