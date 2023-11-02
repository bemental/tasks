import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    // State to represent the number of attempts the user has left
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    // State to represent the number of attempts the user is requesting
    const [requestedAttempts, setRequestedAttempts] = useState("");

    // Function to handle using an attempt
    const useAttempt = () => {
        setAttemptsLeft((prevAttempts) => prevAttempts - 1);
    };

    // Function to handle gaining more attempts
    const gainAttempts = () => {
        const numericAttempts = parseInt(requestedAttempts, 10);
        // Validate if the requested attempts is a number and add to the total attempts
        if (!isNaN(numericAttempts)) {
            setAttemptsLeft((prevAttempts) => prevAttempts + numericAttempts);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts left: {attemptsLeft}</div>
            <input
                type="number"
                value={requestedAttempts}
                onChange={(e) => setRequestedAttempts(e.target.value)}
                aria-label="Amount of attempts to add"
            />
            <button onClick={useAttempt} disabled={attemptsLeft <= 0}>
                Use
            </button>
            <button onClick={gainAttempts}>Gain</button>
        </div>
    );
}
