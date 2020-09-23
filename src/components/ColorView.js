import React from 'react';

import './ColorView.css';

const ColorView = ({title, color, clickHandler}) => {
    return (
        <div className="viewContainer" onClick={clickHandler}>
            <div className="demo" style={{backgroundColor: color}}/>
            <h3 className="txt">{
                title
                .split('_')
                .join(' ')
            }
            </h3>
        </div>
    );
}

export default ColorView;