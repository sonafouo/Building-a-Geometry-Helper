"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPoint = exports.LineType = void 0;
var LineType;
(function (LineType) {
    LineType["Horizontal"] = "Horizontal";
    LineType["Vertical"] = "Vertical";
    LineType["Sloped"] = "Sloped(Diagonal)";
})(LineType || (exports.LineType = LineType = {}));
function isPoint(obj) {
    return (obj &&
        typeof obj.x === 'number' &&
        typeof obj.y === 'number' &&
        !isNaN(obj.x) &&
        !isNaN(obj.y));
}
exports.isPoint = isPoint;
