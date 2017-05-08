import React from 'react'; 

class ColorPicker extends React.Component{
    render() {
        var COLORS = ["#fff400", "#FF751A", "#FF0000", "#FFFFFF", "#2474FF", "#24FF29"];
        return(
            <div className='ColorPicker'>
                {
                    COLORS.map(color =>
                        <div 
                            key={color}
                            className={
                                this.props.value === color
                                ? 'ColorPicker__swatch selected'
                                : 'ColorPicker__swatch'
                            }
                            style={{backgroundColor: color}}
                            onClick={this.props.onChange.bind(null, color)}
                        />
                    )
                }
            </div>
        );
    }
};
export default ColorPicker;