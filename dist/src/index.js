"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.romanNumeralsToIntergers2 = exports.romanNumeralsToIntergers = exports.SquareShape = exports.RoundShape = void 0;
const RoundShape_1 = __importDefault(require("./RoundShape"));
exports.RoundShape = RoundShape_1.default;
const SquareShape_1 = require("./SquareShape");
Object.defineProperty(exports, "SquareShape", { enumerable: true, get: function () { return SquareShape_1.SquareShape; } });
const romanNumeralsToIntergers_1 = require("./romanNumeralsToIntergers");
Object.defineProperty(exports, "romanNumeralsToIntergers", { enumerable: true, get: function () { return romanNumeralsToIntergers_1.romanNumeralsToIntergers; } });
Object.defineProperty(exports, "romanNumeralsToIntergers2", { enumerable: true, get: function () { return romanNumeralsToIntergers_1.romanNumeralsToIntergers2; } });
require("./2D/types");
require("./2D/calculations");
__exportStar(require("./2D/types"), exports);
__exportStar(require("./2D/calculations"), exports);
