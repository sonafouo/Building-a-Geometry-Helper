"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./src/index");
function createAndLogCircle(circleRadius) {
    const circle = new index_1.RoundShape(circleRadius);
    console.log(`A circle with radius ${circleRadius} has an area of ${circle.calculateArea()} and a circumference of ${circle.calculateCircumference()}
    \nA sphere with a radius of ${circleRadius} has a volume of ${circle.calculateVolume()} and a surface area of ${circle.calculateSurfaceArea()}\n`);
}
function createAndLogSquare(squareLength) {
    const square = new index_1.SquareShape(squareLength);
    console.log(`A square with length ${squareLength} has an area of ${square.getArea()} and a circumference of ${square.getPerimeter()}
  \nA cube with a radius of ${squareLength} has a volume of ${square.getVolume()} and a surface area of ${square.getSurfaceArea()}`);
}
function main() {
    // const circleRadius = Math.floor(Math.random() * 10 + 1);
    // const squareLength = Math.floor(Math.random() * 10 + 1);
    // createAndLogCircle(circleRadius);
    // createAndLogSquare(squareLength);
    // const romanNumeral = 'MCMXCIV';
    const romanNumeral = 'MMCDXXV';
    const result1 = new index_1.romanNumeralsToIntergers().romanToInt(romanNumeral);
    console.log(`The integer value of the Roman numeral ${romanNumeral} is ${result1}.`);
    const result2 = new index_1.romanNumeralsToIntergers2().romanToInt(romanNumeral);
    console.log(`The integer value of the Roman numeral ${romanNumeral} is ${result2}.`);
}
main();
