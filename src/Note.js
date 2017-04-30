import React from 'react';

class Note extends React.Component{

    render() {
        var style = {
            backgroundColor: this.props.color,
        };
        return(
            <div className="note" style={style}>
                <span className="delete-note" onClick={this.props.onDelete}> x </span>
                {
                    this.props.name
                    ?
                        <h2>{this.props.name}</h2>
                    :
                        null
                }

                {this.props.children}

            </div>    
        );
    }
};
export default Note;