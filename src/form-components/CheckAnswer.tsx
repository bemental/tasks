import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    // State to handle the user's given answer
    const [givenAnswer, setGivenAnswer] = useState("");

    // Function to handle input change
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGivenAnswer(event.target.value);
    };

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={givenAnswer}
                onChange={handleInputChange}
                aria-label="Answer Input"
            />
            {/* Display ✔️ if the given answer matches the expected answer, otherwise display ❌ */}
            {givenAnswer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
