import {SquareShape, RoundShape, romanNumeralsToIntergers, romanNumeralsToIntergers2} from './src/index';

function createAndLogCircle(circleRadius) {
	const circle = new RoundShape(circleRadius);

	console.log(`A circle with radius ${circleRadius} has an area of ${circle.calculateArea()} and a circumference of ${circle.calculateCircumference()}
    \nA sphere with a radius of ${circleRadius} has a volume of ${circle.calculateVolume()} and a surface area of ${circle.calculateSurfaceArea()}\n`);
}

function createAndLogSquare(squareLength) {
	const square = new SquareShape(squareLength);

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
  const result1 = new romanNumeralsToIntergers().romanToInt(romanNumeral);
  console.log(`The integer value of the Roman numeral ${romanNumeral} is ${result1}.`);
	const result2 = new romanNumeralsToIntergers2().romanToInt(romanNumeral);
  console.log(`The integer value of the Roman numeral ${romanNumeral} is ${result2}.`);
  

}

main();
