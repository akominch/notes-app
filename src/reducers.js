//import { combineReducers } from 'redux';
import { ADD_NOTE, DELETE_NOTE, ADD_LIST_NOTE } from './action';

const initialState = {
    notes: []
};

function notes(state = initialState, action) {
    switch (action.type) {
        case ADD_NOTE:
            return {...state,
                notes: [...state.notes, action.notes],
            };
        case DELETE_NOTE:
            return [];
        case ADD_LIST_NOTE:
            return {...state,
                notes: action.notes,
            };
        default:
            return state;
    }
}

export default notes;