import {SquareShape, RoundShape} from './src/index';

function main() {
  let radius = Math.floor(Math.random() * 10 + 1);
  let length = Math.floor(Math.random() * 10 + 1);
  let shapeRound = new RoundShape(radius);
  let shapeSquare = new SquareShape(length);

  console.log(`A circle with radius ${radius} has an area of ${shapeRound.calculateArea()} and a circumference of ${shapeRound.calculateCircumference()} 
    \nA sphere with a radius of ${radius} has a volume of ${shapeRound.calculateVolume()} and a surface area of ${shapeRound.calculateSurfaceArea()}\n`);

  console.log(`A square with length ${length} has an area of ${shapeSquare.getArea()} and a circumference of ${shapeSquare.getPerimeter()} 
  \nA cube with a radius of ${length} has a volume of ${shapeSquare.getVolume()} and a surface area of ${shapeSquare.getSurfaceArea()}`);
}

main();
