"use strict";
// debugger
Object.defineProperty(exports, "__esModule", { value: true });
exports.romanNumeralsToIntergers2 = exports.romanNumeralsToIntergers = void 0;
class romanNumeralsToIntergers {
    romanToInt(s) {
        const myDict = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
        };
        let temp = '';
        let tempList = [];
        let total = 0;
        let calcBigNumeralFirst_Result = 0;
        let calcSmallNumeralFirst_Result = 0;
        let firstVal = '';
        let remainder = '';
        if (s[0] in myDict) {
            firstVal = s[0];
            console.log('First numeral removed from value s:', firstVal);
            temp = s.slice(1);
            console.log('Temp List to replace string:', temp);
        }
        if (temp.length % 2 === 0) {
            console.log('Even List Check');
            const n = 2;
            for (let i = 0; i < temp.length; i += n) {
                tempList.push(temp.slice(i, i + n));
            }
            console.log('tempList Values as pairs:', tempList);
            for (const tempVal of tempList) {
                for (let idx = 0; idx < tempVal.length - 1; idx++) {
                    if (myDict[tempVal[idx]] >= myDict[tempVal[idx + 1]]) {
                        calcBigNumeralFirst_Result += myDict[tempVal[idx]] + myDict[tempVal[idx + 1]];
                        console.log('bigNumeralFirstResult insight ', calcBigNumeralFirst_Result);
                    }
                    else {
                        calcSmallNumeralFirst_Result += myDict[tempVal[idx + 1]] - myDict[tempVal[idx]];
                        console.log('smallNumeralFirstResult insight ', calcSmallNumeralFirst_Result);
                    }
                }
            }
            total = calcBigNumeralFirst_Result + calcSmallNumeralFirst_Result + myDict[firstVal];
            console.log('new Total', total);
        }
        else {
            console.log('Odd List Check');
            const n = 2;
            for (let i = 0; i < temp.length; i += n) {
                tempList.push(temp.slice(i, i + n));
            }
            console.log(tempList);
            remainder = tempList.pop();
            console.log(remainder);
            if (tempList.length === 0) {
                if (myDict[remainder] > myDict[firstVal]) {
                    total = myDict[remainder] - myDict[firstVal];
                }
                else {
                    total = myDict[remainder] + myDict[firstVal];
                }
                console.log(total);
                return total;
            }
            for (const tempVal of tempList) {
                for (let idx = 0; idx < tempVal.length - 1; idx++) {
                    if (myDict[tempVal[idx]] >= myDict[tempVal[idx + 1]]) {
                        calcBigNumeralFirst_Result += myDict[tempVal[idx]] + myDict[tempVal[idx + 1]];
                        console.log('bigNumeralFirstResult insight ', calcBigNumeralFirst_Result);
                    }
                    else {
                        calcSmallNumeralFirst_Result += myDict[tempVal[idx + 1]] - myDict[tempVal[idx]];
                        console.log('smallNumeralFirstResult insight ', calcSmallNumeralFirst_Result);
                    }
                }
            }
            total = calcBigNumeralFirst_Result + calcSmallNumeralFirst_Result + myDict[firstVal] + myDict[remainder];
            console.log('new Total', total);
        }
        return total;
    }
}
exports.romanNumeralsToIntergers = romanNumeralsToIntergers;
class romanNumeralsToIntergers2 {
    romanToInt(s) {
        const romanMap = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
        };
        let total = 0;
        let prevValue = 0;
        for (let i = s.length - 1; i >= 0; i--) {
            const currentValue = romanMap[s[i]];
            if (currentValue < prevValue) {
                total -= currentValue;
            }
            else {
                total += currentValue;
            }
            prevValue = currentValue;
        }
        return total;
    }
}
exports.romanNumeralsToIntergers2 = romanNumeralsToIntergers2;
