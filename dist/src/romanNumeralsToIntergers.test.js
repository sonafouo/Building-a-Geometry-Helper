"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const romanNumeralsToIntergers_1 = require("./romanNumeralsToIntergers");
const romanToInt = new romanNumeralsToIntergers_1.romanNumeralsToIntergers().romanToInt;
describe('romanNumeralsToIntergers', () => {
    it('should return 1 for I', () => {
        expect(romanToInt('I')).toBe(1);
    });
    it('should return 4 for IV', () => {
        expect(romanToInt('IV')).toBe(4);
    });
    it('should return 9 for IX', () => {
        expect(romanToInt('IX')).toBe(9);
    });
    it('should return 40 for XL', () => {
        expect(romanToInt('XL')).toBe(40);
    });
    it('should return 90 for XC', () => {
        expect(romanToInt('XC')).toBe(90);
    });
    it('should return 400 for CD', () => {
        expect(romanToInt('CD')).toBe(400);
    });
    it('should return 900 for CM', () => {
        expect(romanToInt('CM')).toBe(900);
    });
    it('should return 1994 for MCMXCIV', () => {
        expect(romanToInt('MCMXCIV')).toBe(1994);
    });
    it('should return 3999 for MMMCMXCIX', () => {
        expect(romanToInt('MMMCMXCIX')).toBe(3999);
    });
    it('should return 0 for an empty string', () => {
        expect(romanToInt('')).toBe(0);
    });
    it('should return 0 for an invalid Roman numeral', () => {
        expect(romanToInt('IIII')).toBe(0);
    });
});
