import { useState } from "react";

function  ColorPicker() {
    const [color, setColor] = useState("#4432432");

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }

    return (
        <div className="color-picker-container">

            <h1>Color Picker</h1>
            <p className="color-continer" style={{ backgroundColor: color }}>Selected Color: {color}</p>
            <p>Choose a color:</p>
            <input type="color" value={color} onChange={handleColorChange} />
            
        </div>
    );
}
export default ColorPicker;