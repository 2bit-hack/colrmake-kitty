import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import "react-colorful/dist/index.css";
import "./ColorPick.css";

const ColorPick = ({originalColor}) => {
  const [color, setColor] = useState(originalColor);

  return (
    <div>
        <div className="picker">
            <HexColorPicker color={color} onChange={setColor} />
        </div>
        <div className="value" style={{ borderLeftColor: color }}>
            <h2 className="txt">{color}</h2>
        </div>
    </div>
  );
}

export default ColorPick;