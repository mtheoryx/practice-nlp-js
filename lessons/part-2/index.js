const natural = require('natural');

const porterStemmer = natural.PorterStemmer;

/*
* Other Stemmers:
* natural.PorterStemmerRu //Russian
* natural.PorterStemmerEs //Spanish
* */

// Works decently
console.log(porterStemmer.stem('mangoes')); // mango
console.log(porterStemmer.stem('hearing')); // hear
console.log(porterStemmer.stem('sadness')); // sad

// Does not work perfectly
console.log(porterStemmer.stem('cupcakes')); // cupcak
console.log(porterStemmer.stem('awaking')); // awak
console.log(porterStemmer.stem('wrongly')); // wrongli


// Stem a lot of words?

const myString = `I am baking cakes in the ovens.`;

console.log(porterStemmer.tokenizeAndStem(myString)); // [ 'bake', 'cake', 'oven' ]

// A second stemmer, LancasterStemmer, agressive and used less frequently

const lancasterStemmer = natural.LancasterStemmer;

console.log(lancasterStemmer.tokenizeAndStem(myString)); // [ 'bak', 'cak', 'ov' ]

