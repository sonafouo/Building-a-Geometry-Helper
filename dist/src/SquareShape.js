"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquareShape = void 0;
class SquareShape {
    constructor(sideLength) {
        this.sideLength = sideLength;
    }
    getArea() {
        return Math.pow(this.sideLength, 2);
    }
    getPerimeter() {
        return 4 * this.sideLength;
    }
    getVolume() {
        return Math.pow(this.sideLength, 3);
    }
    getSurfaceArea() {
        return 6 * Math.pow(this.sideLength, 2);
    }
}
exports.SquareShape = SquareShape;
