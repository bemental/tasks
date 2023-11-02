import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState(10); // Move state into the component

    const Doubler = (): JSX.Element => (
        <Button onClick={() => setDhValue((prev) => 2 * prev)}>Double</Button>
    );

    const Halver = (): JSX.Element => (
        <Button onClick={() => setDhValue((prev) => 0.5 * prev)}>Halve</Button>
    );

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            {Doubler()}
            {Halver()}
        </div>
    );
}
