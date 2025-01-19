// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

function solution(roman) {
    // complete the solution by transforming the
    // string roman numeral into an integer
    let result = 0;
    const numbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    for (let i = 0; i < roman.length; i++) {
        if ( i + 1 < roman.length && numbers[roman[i]] < numbers[roman[i + 1]]) {
            result += numbers[roman[i + 1]] - numbers[roman[i]];
            i++;
        } else {
            result += numbers[roman[i]];
        }
    }
    return result
}

console.log(solution("XXI"));
console.log(solution("I"));
console.log(solution("IV"));
console.log(solution("MMVIII"));
console.log(solution("MDCLXVI"));
