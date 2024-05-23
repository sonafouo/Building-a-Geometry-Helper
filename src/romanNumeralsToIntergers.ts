// debugger
export class romanNumeralsToIntergers {
	romanToInt(s: string): number {
		const myDict: {[key: string]: number} = {
			I: 1,
			V: 5,
			X: 10,
			L: 50,
			C: 100,
			D: 500,
			M: 1000,
		};

		let temp: string = '';
		let tempList: string[] = [];
		let total: number = 0;
		let calcBigNumeralFirst_Result: number = 0;
		let calcSmallNumeralFirst_Result: number = 0;
		let firstVal: string = '';
		let remainder: string = '';

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
					} else {
						calcSmallNumeralFirst_Result += myDict[tempVal[idx + 1]] - myDict[tempVal[idx]];
						console.log('smallNumeralFirstResult insight ', calcSmallNumeralFirst_Result);
					}
				}
			}
			total = calcBigNumeralFirst_Result + calcSmallNumeralFirst_Result + myDict[firstVal];
			console.log('new Total', total);
		} else {
			console.log('Odd List Check');
			const n = 2;
			for (let i = 0; i < temp.length; i += n) {
				tempList.push(temp.slice(i, i + n));
			}
			console.log(tempList);
			remainder = tempList.pop() as string;
			console.log(remainder);

			if (tempList.length === 0) {
				if (myDict[remainder] > myDict[firstVal]) {
					total = myDict[remainder] - myDict[firstVal];
				} else {
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
					} else {
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


export class romanNumeralsToIntergers2 {
	romanToInt(s: string): number {
		const romanMap: {[key: string]: number} = {
			I: 1,
			V: 5,
			X: 10,
			L: 50,
			C: 100,
			D: 500,
			M: 1000,
		};

		let total: number = 0;
		let prevValue: number = 0;

		for (let i = s.length - 1; i >= 0; i--) {
			const currentValue = romanMap[s[i]];

			if (currentValue < prevValue) {
				total -= currentValue;
			} else {
				total += currentValue;
			}

			prevValue = currentValue;
		}

		return total;
	}
}

// debugger
export class romanNumeralsToIntergers3 {
    romanToInt(s: string): number {
        // Define a dictionary (object) to map Roman numerals to their corresponding integer values
        const myDict: {[key: string]: number} = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
        };

        // Initialize variables
        let temp: string = '';
        let tempList: string[] = [];
        let total: number = 0;
        let calcBigNumeralFirst_Result: number = 0;
        let calcSmallNumeralFirst_Result: number = 0;
        let firstVal: string = '';
        let remainder: string = '';

        // Check if the first character of the input string is a valid Roman numeral
        if (s[0] in myDict) {
            // Store the first character in the 'firstVal' variable
            firstVal = s[0];
            console.log('First numeral removed from value s:', firstVal);
            // Remove the first character from the input string and store the remaining part in 'temp'
            temp = s.slice(1);
            console.log('Temp List to replace string:', temp);
        }

        // Check if the length of the remaining string ('temp') is even
        if (temp.length % 2 === 0) {
            console.log('Even List Check');
            // Split the remaining string into pairs of two characters
            const n = 2;
            for (let i = 0; i < temp.length; i += n) {
                tempList.push(temp.slice(i, i + n));
            }
            console.log('tempList Values as pairs:', tempList);

            // Iterate over each pair in the 'tempList'
            for (const tempVal of tempList) {
                // Iterate over each character in the pair
                for (let idx = 0; idx < tempVal.length - 1; idx++) {
                    // Check if the current character's value is greater than or equal to the next character's value
                    if (myDict[tempVal[idx]] >= myDict[tempVal[idx + 1]]) {
                        // If true, add the sum of their values to 'calcBigNumeralFirst_Result'
                        calcBigNumeralFirst_Result += myDict[tempVal[idx]] + myDict[tempVal[idx + 1]];
                        console.log('bigNumeralFirstResult insight ', calcBigNumeralFirst_Result);
                    } else {
                        // If false, subtract the current character's value from the next character's value and add it to 'calcSmallNumeralFirst_Result'
                        calcSmallNumeralFirst_Result += myDict[tempVal[idx + 1]] - myDict[tempVal[idx]];
                        console.log('smallNumeralFirstResult insight ', calcSmallNumeralFirst_Result);
                    }
                }
            }
            // Calculate the total by adding 'calcBigNumeralFirst_Result', 'calcSmallNumeralFirst_Result', and the value of 'firstVal'
            total = calcBigNumeralFirst_Result + calcSmallNumeralFirst_Result + myDict[firstVal];
            console.log('new Total', total);
        } else {
            console.log('Odd List Check');
            // Split the remaining string into pairs of two characters
            const n = 2;
            for (let i = 0; i < temp.length; i += n) {
                tempList.push(temp.slice(i, i + n));
            }
            console.log(tempList);
            // Store the last remaining character (if any) in the 'remainder' variable
            remainder = tempList.pop() as string;
            console.log(remainder);

            // If there are no pairs left in 'tempList'
            if (tempList.length === 0) {
                // Check if the value of 'remainder' is greater than the value of 'firstVal'
                if (myDict[remainder] > myDict[firstVal]) {
                    // If true, subtract the value of 'firstVal' from the value of 'remainder' and store it in 'total'
                    total = myDict[remainder] - myDict[firstVal];
                } else {
                    // If false, add the values of 'remainder' and 'firstVal' and store it in 'total'
                    total = myDict[remainder] + myDict[firstVal];
                }
                console.log(total);
                return total;
            }

            // Iterate over each pair in the 'tempList'
            for (const tempVal of tempList) {
                // Iterate over each character in the pair
                for (let idx = 0; idx < tempVal.length - 1; idx++) {
                    // Check if the current character's value is greater than or equal to the next character's value
                    if (myDict[tempVal[idx]] >= myDict[tempVal[idx + 1]]) {
                        // If true, add the sum of their values to 'calcBigNumeralFirst_Result'
                        calcBigNumeralFirst_Result += myDict[tempVal[idx]] + myDict[tempVal[idx + 1]];
                        console.log('bigNumeralFirstResult insight ', calcBigNumeralFirst_Result);
                    } else {
                        // If false, subtract the current character's value from the next character's value and add it to 'calcSmallNumeralFirst_Result'
                        calcSmallNumeralFirst_Result += myDict[tempVal[idx + 1]] - myDict[tempVal[idx]];
                        console.log('smallNumeralFirstResult insight ', calcSmallNumeralFirst_Result);
                    }
                }
            }
            // Calculate the total by adding 'calcBigNumeralFirst_Result', 'calcSmallNumeralFirst_Result', the value of 'firstVal', and the value of 'remainder'
            total = calcBigNumeralFirst_Result + calcSmallNumeralFirst_Result + myDict[firstVal] + myDict[remainder];
            console.log('new Total', total);
        }

        return total;
    }
}


// debugger
export class romanNumeralsToIntergers4 {
    romanToInt(s: string): number {
        // Define a dictionary (object) to map Roman numerals to their corresponding integer values
        const myDict: {[key: string]: number} = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
        };

        // Initialize variables
        let temp: string = '';
        let tempList: string[] = [];
        let total: number = 0;
        let calcBigNumeralFirst_Result: number = 0;
        let calcSmallNumeralFirst_Result: number = 0;
        let firstVal: string = '';
        let remainder: string = '';

        // Check if the first character of the input string is a valid Roman numeral
        if (s[0] in myDict) {
            // Store the first character in the 'firstVal' variable
            firstVal = s[0];
            console.log('First numeral removed from value s:', firstVal);
            // Remove the first character from the input string and store the remaining part in 'temp'
            temp = s.slice(1);
            console.log('Temp List to replace string:', temp);
        }

        // Check if the length of the remaining string ('temp') is even
        if (temp.length % 2 === 0) {
            console.log('Even List Check');
            // Split the remaining string into pairs of two characters
            const n = 2;
            for (let i = 0; i < temp.length; i += n) {
                tempList.push(temp.slice(i, i + n));
            }
            console.log('tempList Values as pairs:', tempList);

            // Iterate over each pair in the 'tempList'
            for (const tempVal of tempList) {
                // Iterate over each character in the pair
                for (let idx = 0; idx < tempVal.length - 1; idx++) {
                    // Check if the current character's value is greater than or equal to the next character's value
                    if (myDict[tempVal[idx]] >= myDict[tempVal[idx + 1]]) {
                        // If true, add the sum of their values to 'calcBigNumeralFirst_Result'
                        calcBigNumeralFirst_Result += myDict[tempVal[idx]] + myDict[tempVal[idx + 1]];
                        console.log('bigNumeralFirstResult insight ', calcBigNumeralFirst_Result);
                    } else {
                        // If false, subtract the current character's value from the next character's value and add it to 'calcSmallNumeralFirst_Result'
                        calcSmallNumeralFirst_Result += myDict[tempVal[idx + 1]] - myDict[tempVal[idx]];
                        console.log('smallNumeralFirstResult insight ', calcSmallNumeralFirst_Result);
                    }
                }
            }
            // Calculate the total by adding 'calcBigNumeralFirst_Result', 'calcSmallNumeralFirst_Result', and the value of 'firstVal'
            total = calcBigNumeralFirst_Result + calcSmallNumeralFirst_Result + myDict[firstVal];
            console.log('new Total', total);
        } else {
            console.log('Odd List Check');
            // Split the remaining string into pairs of two characters
            const n = 2;
            for (let i = 0; i < temp.length; i += n) {
                tempList.push(temp.slice(i, i + n));
            }
            console.log(tempList);
            // Store the last remaining character (if any) in the 'remainder' variable
            remainder = tempList.pop() as string;
            console.log(remainder);

            // If there are no pairs left in 'tempList'
            if (tempList.length === 0) {
                // Check if the value of 'remainder' is greater than the value of 'firstVal'
                if (myDict[remainder] > myDict[firstVal]) {
                    // If true, subtract the value of 'firstVal' from the value of 'remainder' and store it in 'total'
                    total = myDict[remainder] - myDict[firstVal];
                } else {
                    // If false, add the values of 'remainder' and 'firstVal' and store it in 'total'
                    total = myDict[remainder] + myDict[firstVal];
                }
                console.log(total);
                return total;
            }

            // Iterate over each pair in the 'tempList'
            for (const tempVal of tempList) {
                // Iterate over each character in the pair
                for (let idx = 0; idx < tempVal.length - 1; idx++) {
                    // Check if the current character's value is greater than or equal to the next character's value
                    if (myDict[tempVal[idx]] >= myDict[tempVal[idx + 1]]) {
                        // If true, add the sum of their values to 'calcBigNumeralFirst_Result'
                        calcBigNumeralFirst_Result += myDict[tempVal[idx]] + myDict[tempVal[idx + 1]];
                        console.log('bigNumeralFirstResult insight ', calcBigNumeralFirst_Result);
                    } else {
                        // If false, subtract the current character's value from the next character's value and add it to 'calcSmallNumeralFirst_Result'
                        calcSmallNumeralFirst_Result += myDict[tempVal[idx + 1]] - myDict[tempVal[idx]];
                        console.log('smallNumeralFirstResult insight ', calcSmallNumeralFirst_Result);
                    }
                }
            }
            // Calculate the total by adding 'calcBigNumeralFirst_Result', 'calcSmallNumeralFirst_Result', the value of 'firstVal', and the value of 'remainder'
            total = calcBigNumeralFirst_Result + calcSmallNumeralFirst_Result + myDict[firstVal] + myDict[remainder];
            console.log('new Total', total);
        }

        return total;
    }
}


export class romanNumeralsToIntergers5 {
    romanToInt(s: string): number {
        // Define a dictionary (object) to map Roman numerals to their corresponding integer values
        const romanMap: {[key: string]: number} = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
        };

        // Initialize variables
        let total: number = 0;
        let prevValue: number = 0;

        // Iterate over the input string from right to left
        for (let i = s.length - 1; i >= 0; i--) {
            // Get the integer value of the current Roman numeral character
            const currentValue = romanMap[s[i]];

            // Check if the current value is less than the previous value
            if (currentValue < prevValue) {
                // If true, subtract the current value from the total
                total -= currentValue;
            } else {
                // If false, add the current value to the total
                total += currentValue;
            }

            // Update the previous value for the next iteration
            prevValue = currentValue;
        }

        return total;
    }
}

export class RomanNumeralToIntegerConverter {
    romanToInteger(romanNumeral: string): number {
        const romanNumeralValues: { [key: string]: number } = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
        };

        let remainingRomanNumeral: string = '';
        let romanNumeralPairs: string[] = [];
        let integerValue: number = 0;
        let largerNumeralFirstSum: number = 0;
        let smallerNumeralFirstSum: number = 0;
        let firstRomanNumeral: string = '';
        let lastRomanNumeral: string = '';

        if (romanNumeral[0] in romanNumeralValues) {
            firstRomanNumeral = romanNumeral[0];
            remainingRomanNumeral = romanNumeral.slice(1);
        }

        if (remainingRomanNumeral.length % 2 === 0) {
            const pairLength = 2;
            for (let i = 0; i < remainingRomanNumeral.length; i += pairLength) {
                romanNumeralPairs.push(remainingRomanNumeral.slice(i, i + pairLength));
            }

            for (const pair of romanNumeralPairs) {
                for (let idx = 0; idx < pair.length - 1; idx++) {
                    if (romanNumeralValues[pair[idx]] >= romanNumeralValues[pair[idx + 1]]) {
                        largerNumeralFirstSum += romanNumeralValues[pair[idx]] + romanNumeralValues[pair[idx + 1]];
                    } else {
                        smallerNumeralFirstSum += romanNumeralValues[pair[idx + 1]] - romanNumeralValues[pair[idx]];
                    }
                }
            }
            integerValue = largerNumeralFirstSum + smallerNumeralFirstSum + romanNumeralValues[firstRomanNumeral];
        } else {
            const pairLength = 2;
            for (let i = 0; i < remainingRomanNumeral.length; i += pairLength) {
                romanNumeralPairs.push(remainingRomanNumeral.slice(i, i + pairLength));
            }
            lastRomanNumeral = romanNumeralPairs.pop() as string;

            if (romanNumeralPairs.length === 0) {
                if (romanNumeralValues[lastRomanNumeral] > romanNumeralValues[firstRomanNumeral]) {
                    integerValue = romanNumeralValues[lastRomanNumeral] - romanNumeralValues[firstRomanNumeral];
                } else {
                    integerValue = romanNumeralValues[lastRomanNumeral] + romanNumeralValues[firstRomanNumeral];
                }
                return integerValue;
            }

            for (const pair of romanNumeralPairs) {
                for (let idx = 0; idx < pair.length - 1; idx++) {
                    if (romanNumeralValues[pair[idx]] >= romanNumeralValues[pair[idx + 1]]) {
                        largerNumeralFirstSum += romanNumeralValues[pair[idx]] + romanNumeralValues[pair[idx + 1]];
                    } else {
                        smallerNumeralFirstSum += romanNumeralValues[pair[idx + 1]] - romanNumeralValues[pair[idx]];
                    }
                }
            }
            integerValue = largerNumeralFirstSum + smallerNumeralFirstSum + romanNumeralValues[firstRomanNumeral] + romanNumeralValues[lastRomanNumeral];
        }

        return integerValue;
    }
}

export class RomanNumeralToIntegerConverterSimple {
    romanToInteger(romanNumeral: string): number {
        const romanNumeralValues: { [key: string]: number } = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
        };

        let integerValue: number = 0;
        let previousValue: number = 0;

        for (let i = romanNumeral.length - 1; i >= 0; i--) {
            const currentValue = romanNumeralValues[romanNumeral[i]];

            if (currentValue < previousValue) {
                integerValue -= currentValue;
            } else {
                integerValue += currentValue;
            }

            previousValue = currentValue;
        }
        return integerValue;
    }
}
