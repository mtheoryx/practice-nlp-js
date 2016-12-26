const natural = require('natural');

let testString1 = `close`;
let testString2 = `closer`;
let testString3 = `ffgghhiijjkk`;

/*
* JaroWinklerDistance tests similarity of 2 strings on a range of 0 - 1
* by, basically, measuring how many characters 2 strings have in common
*
* It also weights characters at the beginning of a word more heaviliy
* than characters at the end.
*
* It is best for short strings, names, and deleting duplicates
*
* 0 meaning not at all alike
* 1 meaning exactly the same
* */

console.log(natural.JaroWinklerDistance(testString1, testString2)); // 0.9666666666666667
console.log(natural.JaroWinklerDistance(testString2, testString3)); // 0

/*
* LevenshteinDistance the minimum edits needed to turn one one string into another
* where an edit is defined as an insertion, deletion, or substitution of a character.
*
* */

console.log(natural.LevenshteinDistance(testString1, testString2)); // 1
console.log(natural.LevenshteinDistance(testString2, testString3)); // 12


/*
* DiceCoefficient
*
* Each word is divided into bigrams
*
* The number of bigrams in common divided by the total number of bigrams
*
* The threshold is 0.2. Anything below the threshold is discarded, and anything above
* 0.2 is considered pretty similar.
* */

console.log(natural.DiceCoefficient(testString1, testString2)); // 0.8888888888888888
//close -> cl, lo, os, se
//closer -> cl, lo, os, se, er

// 8/9 -> 0.8888888888888888

console.log(natural.DiceCoefficient(testString2, testString3)); // 0
console.log(natural.DiceCoefficient(testString2, testString3)); // 0
