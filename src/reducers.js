//import { combineReducers } from 'redux';
import { ADD_NOTE, DELETE_NOTE } from './action';


function notes(state = [], action) {
    switch (action.type) {
        case ADD_NOTE:
            return [{
                notes: action.note,
            }, ...state];
        /*{
                ...state,
                notes: [...state.notes, action.note]
            };*/
            /**/
        case DELETE_NOTE:
            return [];
        default:
            return state;
    }
}

export default notes;