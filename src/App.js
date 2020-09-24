import React, { useState } from 'react';
import { HexColorPicker } from "react-colorful";
import { Fab, Modal, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import "react-colorful/dist/index.css";
import "./App.css";

import DefaultColors from './DefaultColors';
import Keys from './Keys';
import ColorView from './components/ColorView';
import TerminalView from './components/TerminalView';
import saveFile from './saveFile';

const removeWhitespace = str => str.replace(/\s+/g, '');
const checkIfEmpty = str => removeWhitespace(str) === '';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: 'black',
    border: '2px solid white',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const App = () => {
  const [colors, setColors] = useState(DefaultColors);
  const [key, setKey] = useState('bg');
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('UserTheme');

  const classes = useStyles();

  return (
    <div className="app">
      <Fab color="primary" size="large" aria-label="save" onClick={() => setOpen(true)}>
        <SaveIcon />
      </Fab>
      <Modal
      open={open}
      onClose={() => setOpen(false)}
      className={classes.modal}
      aria-labelledby="save-modal"
      aria-describedby="save-file-with-name">
        <div className={classes.paper}>
          <h3 style={{color: "white"}}>Enter theme name:</h3>
          <div className="text-btn">
          <TextField
          color="primary"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
          error={checkIfEmpty(text)}
          id="name-text"
          label="Name"
          variant="outlined" />
          <Button
          size='large'
          disabled={checkIfEmpty(text)}
          onClick={() => saveFile(colors, text.trim())}>
            Save
          </Button>
          </div>
        </div>
      </Modal>
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
