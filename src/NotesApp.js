import React from 'react';
import NotesEditor from './NotesEditor';
import NotesGrid from './NotesGrid';
import { connect } from 'react-redux';
import { addNote, addListNote, deleteNote } from './action';

import api from './api';

class NotesApp extends React.Component{

    componentDidMount = () => {
        api.listNotes()
            .then(({ data }) => this.props.onAddListNote(data))
            .catch(err => console.log(err));

    };

    handlerNoteDelete = (note) => {
      /*  var noteId = note.id;
        var newNotes = this.state.notes.filter(function(note){
            return note.id !== noteId;
        });
        this.setState({ notes: newNotes });*/
        // this.props.onDeleteNote(note._id);
        api.deleteNote(note._id)
            .then(() => api.listNotes()
                .then(({ data }) => this.props.onAddListNote(data))
                .catch(err => console.log(err)))
            .catch(err => console.log(err));
        //Надо сделать нормальный редьюсер для удаления заметки
    };

    componentDidUpdate = () => {
        //this._updateLocalStorage();
    };

    handleNoteAdd = (newNote) => {
        api.createNote(newNote)
            .then(() => this.props.onAddNote(newNote))
            .catch(err => console.log(err));
    };

    render() {

        return(
            <div className="notes-app">
                <h2 className="app-header">Notes App</h2>
                <NotesEditor onNoteAdd={this.handleNoteAdd}/>
                <NotesGrid notes={this.props.notesStore} onNoteDelete={this.handlerNoteDelete} />
            </div>    
        );
    };

    // _updateLocalStorage = () => {
    //     var notes = JSON.stringify(this.props.notesStore);
    //     localStorage.setItem('notes', notes);
    // }
}
export default connect(
    state => ({
        notesStore: state.notes,
    }),
    dispatch => ({
        onAddNote: (newNote) => {
            dispatch(addNote(newNote));
        },
        onAddListNote: (listNotes) => {
            dispatch(addListNote(listNotes));
        },
        onDeleteNote: (note) => {
            dispatch(deleteNote(note));
        }
    })
)(NotesApp);