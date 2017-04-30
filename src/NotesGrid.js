import React from 'react';
import Note from './Note';
import Masonry from 'masonry-layout';

class NotesGrid extends React.Component {

    componentDidMount() {
        var grid = this.refs.grid;
// eslint-disable-next-line
       this.msnry = new Masonry( grid, { 
            itemSelector: '.note',
            columnWidth: 200,
            gutter: 10,
            isFitWidth: true
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.notes.length !== prevProps.notes.length) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    }

    render() {
        var onNoteDelete = this.props.onNoteDelete;
        //var Notes = JSON.parse(this.props.notes);
        return(
            <div className="notes-grid" ref="grid" >
                {
                    this.props.notes.map(function(note) {

                        return (
                            <Note 
                                key={note.id}
                                onDelete={onNoteDelete.bind(null, note)}
                                color={note.color}
                                name={note.name}>
                                {note.text}
                            </Note>
                            );
                    })
                }
            </div>    
        );
    }
};
export default NotesGrid;