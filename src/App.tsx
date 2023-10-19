import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Counter } from "./components/Counter";
import { RevealAnswer } from "./components/RevealAnswer";
import { ChangeType } from "./components/ChangeType";
import { StartAttempt } from "./components/StartAttempt";
import TwoDice from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ShoveBox } from "./bad-components/ShoveBox";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>This is header text</h1>
            <img
                src="https://greglnelson.github.io/react-hooks-typescript-tome/images/logo.png"
                alt="typescript image"
            ></img>
            <p>
                Counter: <Counter></Counter>
            </p>
            <RevealAnswer />
            <ChangeType />
            <StartAttempt />
            <TwoDice />
            <CycleHoliday />
            {/* <DoubleHalf /> */}

            {/* Inserting the list here */}
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>

            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            First column.
                            <div id="rectangle"></div>
                        </Col>
                        <Col>
                            Second column.
                            <div id="rectangle"></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <p>Andrew Bement Was Here</p>
            <p>Hello World!</p>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
