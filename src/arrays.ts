// * YOU MAY NOT USE for LOOPS, while LOOPS, or recursion!
// * You MUST use the array methods we have taught you.
// * You must also avoid mutating the original arrays - all changes must be immutable!

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    //console.log(`Numbers Array Contains: ${numbers.join(", ")}`);
    const bookEndArray: number[] = [];
    //
    // check if numbers array is empty first
    if (numbers.length != 0) {
        bookEndArray.push(numbers[0]);
        bookEndArray.push(numbers[numbers.length - 1]);
        //
        console.log(`Bookend Array Contains: ${bookEndArray.join(", ")}`);

        return bookEndArray;
        //
        // empty array detected, return empty bookend array
    } else {
        console.log(`Bookend Array Contains: ${bookEndArray.join(", ")}`);
        return bookEndArray;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripledNumbers = numbers.map((number) => number * 3);
    //
    return tripledNumbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const integersFromStringArray = numbers.map((str) => {
        const value = parseInt(str, 10);
        return isNaN(value) ? 0 : value;
    });
    //
    return integersFromStringArray;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const numbersWithDollarSignsRemoved = amounts.map((str) => {
        const sanitizedString = str.replace(/^\$/, ""); // Remove '$' at the beginning if it exists
        const valueAsInt = parseInt(sanitizedString, 10);
        return isNaN(valueAsInt) ? 0 : valueAsInt;
    });
    //
    return numbersWithDollarSignsRemoved;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const processedMessages = messages
        .filter((msg) => !msg.endsWith("?"))
        .map((msg) => (msg.endsWith("!") ? msg.toUpperCase() : msg));
    return processedMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const wordsLessThanFourCharacters = words.filter(
        (word) => word.length < 4
    ).length;
    return wordsLessThanFourCharacters;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const validColors = ["red", "blue", "green"];
    return colors.every((color) => validColors.includes(color));
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) return "0=0";

    const stringRepresentation = addends.join("+");
    const totalSum = addends.reduce((acc, num) => acc + num, 0);

    return `${totalSum}=${stringRepresentation}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    // console.log(`originalArray; Array Contains: ${values.join(", ")}`);
    //
    const negativeIndex = values.findIndex((num) => num < 0);
    // console.log(`negativeIndex: ${negativeIndex}`);
    //
    let numbersToSum = values;
    const beforeSummingNumbers = values;
    let summationOfNumbers = 0;
    //
    if (negativeIndex == -1) {
        numbersToSum.reduce((acc, num) => acc + num, 0);
        // console.log(`numbers to sum: ${numbersToSum}`);
        summationOfNumbers = numbersToSum
            .slice(0, values.length)
            .reduce((acc, val) => acc + val, 0);

        if (summationOfNumbers != 0) {
            numbersToSum.push(summationOfNumbers);
            // console.log(`summation: ${summationOfNumbers}`);
        } else {
            // console.log(`summation: ${summationOfNumbers}`);
            // console.log("not inserting summation because no numbers to sum");
        }

        //
        if (numbersToSum.length == 0) {
            // console.log(
            //     "empty array detected, returning array with a single element of zero ([0])"
            // );
            numbersToSum = [0];
        }

        // console.log(`final array: ${numbersToSum}`);
        return numbersToSum;

        // summation of numbers up to the negative index, no further
    } else {
        // determines which numbers to sum
        numbersToSum = numbersToSum.slice(0, negativeIndex);
        // console.log(`numbers to sum: ${numbersToSum}`);
        // summates all of the numbers together
        summationOfNumbers = numbersToSum
            .slice(0, negativeIndex + 1)
            .reduce((acc, val) => acc + val, 0);
        // console.log(`summation: ${summationOfNumbers}`);
        // insert the summated numbers into the location of the negative index
        // TODO: - currently borked
        const finalArray = values;
        finalArray.splice(negativeIndex + 1, 0, summationOfNumbers);
        // console.log(`final array: ${finalArray}`);
        return finalArray;
    }
}
// function slice(arg0: number, arg1: number) {
//     throw new Error("Function not implemented.");
// }

// function reduce(arg0: (acc: any, num: any) => any, arg1: number) {
//     throw new Error("Function not implemented.");
// }
