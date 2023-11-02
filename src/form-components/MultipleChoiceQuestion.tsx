import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                role="combobox"
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {selectedOption === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
