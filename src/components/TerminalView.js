import React from 'react';

import Keys from '../Keys';
import './TerminalView.css';

const TerminalView = ({colors}) => {
    return (
    <div style={{width: '100%', backgroundColor: colors['bg']}}>
        {
            Keys.filter(key => key.includes('color')).map(key => (
                <h4 key={key} className="term-txt">
                    <span style={{color: colors[key]}}>
                        {key.padEnd(10)}
                    </span>
                    <span className="sec-span" style={{color: colors['selFg'], backgroundColor: colors['selBg']}}>
                        {key} selected
                    </span>
                </h4>
            ))
        }
    </div>
    );
}

export default TerminalView;