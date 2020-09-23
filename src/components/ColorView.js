import React from 'react';

import './ColorView.css';

const ColorView = ({title, color, clickHandler, isSel}) => {
    return (
        <div className="viewContainer" onClick={clickHandler}>
            <div className="demo" style={{backgroundColor: color}}/>
            <h3 className="txt" style={isSel === title ? {color: 'cyan'} : {}}> {
                title
                .padEnd(10, ' ')
            }
            </h3>
        </div>
    );
}

export default ColorView;