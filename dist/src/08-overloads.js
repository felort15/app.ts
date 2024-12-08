"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseStr = parseStr;
function parseStr(input) {
    if (Array.isArray(input)) {
        return input.join(''); // if input is string[], join it to return string
    }
    else {
        return input.split(''); // if input is string, split it to return string[]
    }
}
const rtaArray = parseStr('nico');
rtaArray.reverse();
console.log('rtaArray', rtaArray);
const rtaString = parseStr(['n', 'i', 'c', 'o']);
console.log('rtaString', rtaString);
// Additional test cases
const test1 = parseStr('hello'); // ['h','e','l','l','o']
const test2 = parseStr(['h', 'i']); // 'hi'
