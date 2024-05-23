"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RoundShape {
    constructor(radius) {
        this.radius = radius;
        this.radiusSquared = radius * radius;
        this.circumference = 2 * RoundShape.PI * radius;
        this.volume = (4 / 3) * RoundShape.PI * this.radiusSquared * radius;
        this.surfaceArea = 4 * RoundShape.PI * this.radiusSquared;
    }
    calculateArea() {
        return this.radiusSquared;
    }
    calculateCircumference() {
        return this.circumference;
    }
    calculateVolume() {
        return this.volume;
    }
    calculateSurfaceArea() {
        return this.surfaceArea;
    }
}
RoundShape.PI = Math.PI;
exports.default = RoundShape;
