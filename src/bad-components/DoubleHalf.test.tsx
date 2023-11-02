import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { DoubleHalf } from "./DoubleHalf";

describe("DoubleHalf Component tests", () => {
    beforeEach(() => {
        render(<DoubleHalf />);
    });

    test("The DoubleHalf value is initially 10", () => {
        expect(screen.getByText("10")).toBeInTheDocument();
        expect(screen.queryByText("20")).not.toBeInTheDocument();
        expect(screen.queryByText("5")).not.toBeInTheDocument();
    });

    test("There are Double and Halve buttons", () => {
        expect(
            screen.getByRole("button", { name: /Double/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /Halve/i })
        ).toBeInTheDocument();
    });

    test("You can double the number.", async () => {
        const double = screen.getByRole("button", { name: /Double/i });
        double.click();
        await waitFor(() => expect(screen.getByText("20")).toBeInTheDocument());
        expect(screen.queryByText("10")).not.toBeInTheDocument();
    });

    test("You can halve the number.", async () => {
        const halve = screen.getByRole("button", { name: /Halve/i });
        halve.click();
        await waitFor(() => expect(screen.getByText("5")).toBeInTheDocument());
        expect(screen.queryByText("10")).not.toBeInTheDocument();
    });

    test("You can double AND halve the number.", async () => {
        const double = screen.getByRole("button", { name: /Double/i });
        const halve = screen.getByRole("button", { name: /Halve/i });
        double.click();
        await waitFor(() => expect(screen.getByText("20")).toBeInTheDocument());
        double.click();
        await waitFor(() => expect(screen.getByText("40")).toBeInTheDocument());
        halve.click();
        await waitFor(() => expect(screen.getByText("20")).toBeInTheDocument());
        halve.click();
        await waitFor(() => expect(screen.getByText("10")).toBeInTheDocument());
        halve.click();
        await waitFor(() => expect(screen.getByText("5")).toBeInTheDocument());
        halve.click();
        await waitFor(() =>
            expect(screen.getByText("2.5")).toBeInTheDocument()
        );
    });
});
