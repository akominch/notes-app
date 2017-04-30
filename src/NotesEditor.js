import React from 'react';
import ColorPicker from './ColorPicker';


class NotesEditor extends React.Component {

   constructor(props) {
       super(props);
       this.state = {
           text: '',
           name: '',
           color: '#fff400',
       };
   }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    };
    handleTextChange = (event) => {
        this.setState({ text: event.target.value });
    };
    handleColorChange = (color) => {
        this.setState({ color });
    };

    handleNoteAdd = () => {
        var newNote = {
            text: this.state.text,
            name: this.state.name,
            color: this.state.color,
            id: Date.now()
        };
        this.props.onNoteAdd(newNote);
        this.setState({ 
            name: '',
            text: '',
            color: '#fff400'
        }); 
    };

    render() {
        return(
            <div className="note-editor">
                <input
                    placeholder="Название заметки"
                    value={this.state.name}
                    className="inputname"
                    onChange={this.handleNameChange}
                />
                <textarea 
                    placeholder="Введите заметку здесь..." 
                    rows={5} 
                    className="textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <div className="NoteEditor__footer"> 
                    <ColorPicker
                        value={this.state.color}
                        onChange={this.handleColorChange}
                    />
                    <button className="add-button" onClick={this.handleNoteAdd}>Добавить</button>
                </div>
            </div>    
        );
    }
}
export default NotesEditor;