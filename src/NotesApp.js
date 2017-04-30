import React from 'react';
import NotesEditor from './NotesEditor';
import NotesGrid from './NotesGrid';
import { connect } from 'react-redux';
import { addNote } from './action';

class NotesApp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            notes: [],
        };
    }


    componentDidMount = () => {
        var localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes) {
            this.setState({ notes: localNotes });
        }

    };

    handlerNoteDelete = (note) => {
        var noteId = note.id;
        var newNotes = this.state.notes.filter(function(note){
            return note.id !== noteId;
        });
        this.setState({ notes: newNotes });
    };

    componentDidUpdate = () => {
        this._updateLocalStorage();
    };

    handleNoteAdd = (newNote) => {
        var newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({ notes: newNotes });
        this.props.onAddNote(newNote);
    };

    render() {
        return(
            <div className="notes-app">
                <h2 className="app-header">Notes App</h2>
                <NotesEditor onNoteAdd={this.handleNoteAdd}/>
                <NotesGrid notes={this.state.notes} onNoteDelete={this.handlerNoteDelete} />
            </div>    
        );
    };

    _updateLocalStorage = () => {
        var notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }
}
export default connect(
    state => ({
        notesStore: state,
    }),
    dispatch => ({
        onAddNote: (newNote) => {
            dispatch(addNote(newNote));
        }
    })
)(NotesApp);