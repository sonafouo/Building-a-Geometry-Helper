"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLineType = exports.calculateLineEquation = exports.calculateDistance = exports.calculateMidpoint = exports.calculateSlope = void 0;
const types_1 = require("./types");
function calculateSlope(p1, p2) {
    if (p1.x === p2.x) {
        return undefined; // Vertical lines have undefined slope
    }
    return (p2.y - p1.y) / (p2.x - p1.x);
}
exports.calculateSlope = calculateSlope;
function calculateMidpoint(p1, p2) {
    const midX = (p1.x + p2.x) / 2;
    const midY = (p1.y + p2.y) / 2;
    return `(${midX}, ${midY})`;
}
exports.calculateMidpoint = calculateMidpoint;
function calculateDistance(p1, p2) {
    const deltaX = p2.x - p1.x;
    const deltaY = p2.y - p1.y;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}
exports.calculateDistance = calculateDistance;
function calculateLineEquation(p1, p2) {
    const slope = calculateSlope(p1, p2);
    if (slope === undefined) {
        return `x = ${p1.x}`; // Vertical line
    }
    const yIntercept = p1.y - slope * p1.x;
    return slope != 0 ? `y = ${slope.toFixed(2)}x + ${yIntercept.toFixed(2)}` : `y = ${yIntercept}`;
}
exports.calculateLineEquation = calculateLineEquation;
function getLineType(p1, p2) {
    if (p1.x === p2.x) {
        return types_1.LineType.Vertical;
    }
    if (p1.y === p2.y) {
        return types_1.LineType.Horizontal;
    }
    return types_1.LineType.Sloped;
}
exports.getLineType = getLineType;
