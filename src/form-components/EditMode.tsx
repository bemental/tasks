import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <div className="form-switch">
                <label>
                    Edit Mode
                    <input
                        type="checkbox"
                        checked={isEditMode}
                        onChange={() => setIsEditMode(!isEditMode)}
                        aria-label="Edit mode switch"
                    />
                </label>
            </div>

            {isEditMode ? (
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            role="textbox"
                        />
                    </label>
                    <label>
                        Is a student?
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={() => setIsStudent(!isStudent)}
                        />
                    </label>
                </div>
            ) : (
                <div>
                    {userName} is {isStudent ? "" : "not "}a student.
                </div>
            )}
        </div>
    );
}
