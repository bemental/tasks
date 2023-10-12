// CycleHoliday.tsx
import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "DRAGON_BOAT" | "HALLOWEEN" | "DIWALI" | "CHRISTMAS" | "EASTER";

const holidayData: Record<
    Holiday,
    { emoji: string; orderInYear: number; name: string }
> = {
    DRAGON_BOAT: { emoji: "🎏", orderInYear: 1, name: "Dragon Boat Festival" },
    DIWALI: { emoji: "🪔", orderInYear: 2, name: "Diwali" },
    HALLOWEEN: { emoji: "🎃", orderInYear: 3, name: "Halloween" },
    CHRISTMAS: { emoji: "🎄", orderInYear: 4, name: "Christmas" },
    EASTER: { emoji: "🐣", orderInYear: 5, name: "Easter" }
};

function nextHolidayAlphabetically(current: Holiday): Holiday {
    const sortedHolidays = Object.keys(holidayData).sort((a, b) =>
        holidayData[a as Holiday].name.localeCompare(
            holidayData[b as Holiday].name
        )
    ) as Holiday[];
    const currentIndex = sortedHolidays.indexOf(current);
    return sortedHolidays[(currentIndex + 1) % sortedHolidays.length];
}

function nextHolidayByYear(current: Holiday): Holiday {
    const sortedHolidays = Object.keys(holidayData).sort(
        (a, b) =>
            holidayData[a as Holiday].orderInYear -
            holidayData[b as Holiday].orderInYear
    ) as Holiday[];
    const currentIndex = sortedHolidays.indexOf(current);
    return sortedHolidays[(currentIndex + 1) % sortedHolidays.length];
}

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] =
        useState<Holiday>("DRAGON_BOAT");

    return (
        <div>
            Holiday: {holidayData[currentHoliday].emoji}
            <div>
                <Button
                    onClick={() =>
                        setCurrentHoliday(
                            nextHolidayAlphabetically(currentHoliday)
                        )
                    }
                >
                    Advance by Alphabet
                </Button>
                <Button
                    onClick={() =>
                        setCurrentHoliday(nextHolidayByYear(currentHoliday))
                    }
                >
                    Advance by Year
                </Button>
            </div>
        </div>
    );
}
