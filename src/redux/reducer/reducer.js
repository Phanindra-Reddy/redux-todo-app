

import {ACTIONS} from '../actions/actionTypes';

const initialState = [
    
        {
            id:1,
            todoname:'Exam Prep for Sem',
            completed:false
        },
        {
            id:2,
            todoname:'Project demo work and ppt',
            completed:false
        },
        {
            id:3,
            todoname:'Get Grociers from Dmart',
            completed:false
        }
    
]

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        
        case ACTIONS.ADD_TODO:
            return [
                ...state,
                {
                    id:  state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    todoname:action.todoname,
                    completed:false
                }
            ]

        case ACTIONS.DELETE_TODO:
            return state.filter(todo =>
                todo.id !== action.id
            )

        case ACTIONS.TOGGLE_TODO:
            return state.map(todo => 
                (todo.id === action.id) 
                    ? {...todo, completed: !todo.completed} 
                    : todo
            )

        case ACTIONS.EDIT_TODO:
            return state.map(todo => 
                (todo.id === action.id) 
                    ? {...todo, todoname:action.todoname}
                    : todo
            )
    
        default:
            return state;
    }
}



