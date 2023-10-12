import React, { useState, useEffect } from "react";

type GameState = "PLAYING" | "WIN" | "LOSE";

const TwoDice: React.FC = () => {
    const getRandomNumber = () => Math.floor(Math.random() * 6) + 1;
    const [leftDie, setLeftDie] = useState<number>(getRandomNumber());
    const [rightDie, setRightDie] = useState<number>(getRandomNumber());
    const [gameState, setGameState] = useState<GameState>("PLAYING");

    const checkGameStatus = () => {
        if (leftDie === rightDie) {
            setGameState("WIN");
        } else if (leftDie === 1 && rightDie === 1) {
            setGameState("LOSE");
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

    const rollBoth = () => {
        let newLeftDie = getRandomNumber();
        let newRightDie = getRandomNumber();
        while (newLeftDie === leftDie) {
            newLeftDie = getRandomNumber();
        }
        while (newRightDie === rightDie) {
            newRightDie = getRandomNumber();
        }
        setLeftDie(newLeftDie);
        setRightDie(newRightDie);
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
            <button data-testid="roll-button" onClick={rollBoth}>
                Roll Both
            </button>
            {gameState === "WIN" && <div>Win</div>}
            {gameState === "LOSE" && <div>Lose</div>}
        </div>
    );
};

export default TwoDice;
