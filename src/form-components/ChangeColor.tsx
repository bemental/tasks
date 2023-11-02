import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "cyan",
        "orange",
        "pink"
    ];
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>
            <form>
                {colors.map((color) => (
                    <div key={color} className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="colorChoice"
                            id={color}
                            value={color}
                            checked={selectedColor === color}
                            onChange={() => setSelectedColor(color)}
                        />
                        <label className="form-check-label" htmlFor={color}>
                            {color}
                        </label>
                    </div>
                ))}
            </form>
            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: selectedColor
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
