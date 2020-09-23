import React, { useState } from 'react';
import { HexColorPicker } from "react-colorful";
import { Fab } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import "react-colorful/dist/index.css";
import "./App.css";

import DefaultColors from './DefaultColors';
import Keys from './Keys';
import ColorView from './components/ColorView';
import TerminalView from './components/TerminalView';
import saveFile from './saveFile';

const App = () => {
  const [colors, setColors] = useState(DefaultColors);
  const [key, setKey] = useState('bg');

  return (
    <div className="app">
      <Fab color="primary" size="large" aria-label="save" onClick={() => saveFile(colors)}>
        <SaveIcon />
      </Fab>
      <div className="container">
        <div className="picker">
          <HexColorPicker color={colors[key]} onChange={(color) => {
            // deep copy
            const newColors = Object.assign({}, colors);
            newColors[key] = color;
            setColors(newColors);
          }}/>
        </div>
        <div className="containers">
        {
          Array(Math.floor(Keys.length / 3)).fill(0).map((_, x) => (
            <div className="containerRow">
            {
              Array(3).fill(0).map((_, y) =>
              <ColorView
                isSel={key}
                key={Keys[x * 3 + y]}
                title={Keys[x * 3 + y]}
                color={colors[Keys[x * 3 + y]]}
                clickHandler={() => setKey(Keys[x * 3 + y])}
              />)
            }
          </div>
          ))
        }
        </div>
      </div>
      <div className="terminal">
      <TerminalView colors={colors}/>
      </div>
    </div>
  );
}

export default App;
