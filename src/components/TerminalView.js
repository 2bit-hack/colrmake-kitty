import React from 'react';

import './TerminalView.css';

const TerminalView = ({colors}) => {
    return (
    <div style={{width: '100%', backgroundColor: colors['bg']}}>
        <h4 className="term-txt">
            <span style={{color: colors['color0']}}>
                Color 0
            </span>
            <span className="sec-span" style={{color: colors['selFg'], backgroundColor: colors['selBg']}}>
                Color 0 selected
            </span>
        </h4>
        <h4 className="term-txt">
            <span style={{color: colors['color8']}}>
                Color 8
            </span>
            <span className="sec-span" style={{color: colors['selFg'], backgroundColor: colors['selBg']}}>
                Color 8 selected
            </span>
        </h4>
        <h4 className="term-txt">
            <span style={{color: colors['color1']}}>
                Color 1
            </span>
            <span className="sec-span" style={{color: colors['selFg'], backgroundColor: colors['selBg']}}>
                Color 1 selected
            </span>
        </h4>
        <h4 className="term-txt">
            <span style={{color: colors['color9']}}>
                Color 9
            </span>
            <span className="sec-span" style={{color: colors['selFg'], backgroundColor: colors['selBg']}}>
                Color 9 selected
            </span>
        </h4>
        <h4 className="term-txt">
            <span style={{color: colors['color2']}}>
                Color 2
            </span>
            <span className="sec-span" style={{color: colors['selFg'], backgroundColor: colors['selBg']}}>
                Color 2 selected
            </span>
        </h4>
        <h4 className="term-txt">
            <span style={{color: colors['color10']}}>
                Color 10
            </span>
            <span className="sec-span" style={{color: colors['selFg'], backgroundColor: colors['selBg']}}>
                Color 10 selected
            </span>
        </h4>
        <h4 className="term-txt">
            <span style={{color: colors['color3']}}>
                Color 3
            </span>
            <span className="sec-span" style={{color: colors['selFg'], backgroundColor: colors['selBg']}}>
                Color 3 selected
            </span>
        </h4>
        <h4 className="term-txt">
            <span style={{color: colors['color11']}}>
                Color 11
            </span>
            <span className="sec-span" style={{color: colors['selFg'], backgroundColor: colors['selBg']}}>
                Color 11 selected
            </span>
        </h4>
        <h4 className="term-txt">
            <span style={{color: colors['color4']}}>
                Color 4
            </span>
            <span className="sec-span" style={{color: colors['selFg'], backgroundColor: colors['selBg']}}>
                Color 4 selected
            </span>
        </h4>
        <h4 className="term-txt">
            <span style={{color: colors['color12']}}>
                Color 12
            </span>
            <span className="sec-span" style={{color: colors['selFg'], backgroundColor: colors['selBg']}}>
                Color 12 selected
            </span>
        </h4>
        <h4 className="term-txt">
            <span style={{color: colors['color5']}}>
                Color 5
            </span>
            <span className="sec-span" style={{color: colors['selFg'], backgroundColor: colors['selBg']}}>
                Color 5 selected
            </span>
        </h4>
        <h4 className="term-txt">
            <span style={{color: colors['color13']}}>
                Color 13
            </span>
            <span className="sec-span" style={{color: colors['selFg'], backgroundColor: colors['selBg']}}>
                Color 13 selected
            </span>
        </h4>
        <h4 className="term-txt">
            <span style={{color: colors['color6']}}>
                Color 6
            </span>
            <span className="sec-span" style={{color: colors['selFg'], backgroundColor: colors['selBg']}}>
                Color 6 selected
            </span>
        </h4>
        <h4 className="term-txt">
            <span style={{color: colors['color14']}}>
                Color 14
            </span>
            <span className="sec-span" style={{color: colors['selFg'], backgroundColor: colors['selBg']}}>
                Color 14 selected
            </span>
        </h4>
        <h4 className="term-txt">
            <span style={{color: colors['color7']}}>
                Color 7
            </span>
            <span className="sec-span" style={{color: colors['selFg'], backgroundColor: colors['selBg']}}>
                Color 7 selected
            </span>
        </h4>
        <h4 className="term-txt">
            <span style={{color: colors['color15']}}>
                Color 15
            </span>
            <span className="sec-span" style={{color: colors['selFg'], backgroundColor: colors['selBg']}}>
                Color 15 selected
            </span>
        </h4>
    </div>
    );
}

export default TerminalView;