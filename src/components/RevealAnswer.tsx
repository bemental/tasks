import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <Button onClick={toggleVisibility}>
            {isVisible ? "42" : "Reveal Answer"}
        </Button>
    );
}
