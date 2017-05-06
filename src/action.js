export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const ADD_LIST_NOTE = 'ADD_LIST_NOTE';

export function addNote(note) {
    return { type: ADD_NOTE, notes: note };
}

export function deleteNote(id) {
    return { type: DELETE_NOTE, id };
}

export function addListNote(notes) {
    return { type: ADD_LIST_NOTE, notes: notes };
}