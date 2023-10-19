import React, { useState, useEffect } from "react";

type GameState = "PLAYING" | "WIN" | "LOSE";

const TwoDice: React.FC = () => {
    const getRandomNumber = (excluding?: number): number => {
        let result: number;
        do {
            result = Math.floor(Math.random() * 6) + 1;
        } while (result === excluding); // Loop until we get a number different than 'excluding'
        return result;
    };
    const [leftDie, setLeftDie] = useState<number>(getRandomNumber());
    const [rightDie, setRightDie] = useState<number>(getRandomNumber(leftDie));
    const [gameState, setGameState] = useState<GameState>("PLAYING");

    const checkGameStatus = () => {
        if (leftDie === 1 && rightDie === 1) {
            setGameState("LOSE");
        } else if (leftDie === rightDie) {
            setGameState("WIN");
        } else {
            setGameState("PLAYING");
        }
    };

    const rollLeft = () => {
        let newNumber = getRandomNumber();
        while (newNumber === leftDie) {
            newNumber = getRandomNumber();
        }
        setLeftDie(newNumber);
    };

    const rollRight = () => {
        let newNumber = getRandomNumber();
        while (newNumber === rightDie) {
            newNumber = getRandomNumber();
        }
        setRightDie(newNumber);
    };

    useEffect(() => {
        checkGameStatus();
    }, [leftDie, rightDie]);

    return (
        <div>
            <div data-testid="left-die">{leftDie}</div>
            <button data-testid="left-button" onClick={rollLeft}>
                Roll Left
            </button>
            <div data-testid="right-die">{rightDie}</div>
            <button data-testid="right-button" onClick={rollRight}>
                Roll Right
            </button>
            {gameState === "WIN" && <div>Win</div>}
            {gameState === "LOSE" && <div>Lose</div>}
        </div>
    );
};

export default TwoDice;
