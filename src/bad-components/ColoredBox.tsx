import React, { useState } from "react";

export function ColoredBox(): JSX.Element {
    const colors = ["red", "blue", "green"];
    const [currentIndex, setCurrentIndex] = useState(0);

    function handleButtonClick() {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }

    return (
        <div>
            <button onClick={handleButtonClick}>Next Color</button>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: colors[currentIndex],
                    width: "100px",
                    height: "100px",
                    display: "inline-block",
                    marginLeft: "20px"
                }}
            ></div>
        </div>
    );
}
