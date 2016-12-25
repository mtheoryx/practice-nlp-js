const natural = require('natural');

const testString = `I'm surprised! I didn't know you could make it.`;

const wordTokenizer = new natural.WordTokenizer(); // Basic Tokenizer

console.log(wordTokenizer.tokenize(testString));

/*
* [ 'I',
  'm',
  'surprised',
  'I',
  'didn',
  't',
  'know',
  'you',
  'could',
  'make',
  'it' ]
* */

const wordPunctTokenizer = new natural.WordPunctTokenizer(); // Retains punctuation

console.log(wordPunctTokenizer.tokenize(testString));

/*
* [ 'I',
  '\'',
  'm',
  'surprised',
  '!',
  'I',
  'didn',
  '\'',
  't',
  'know',
  'you',
  'could',
  'make',
  'it',
  '.' ]
* */

const treebankWordTokenizer = new natural.TreebankWordTokenizer(); // Splits contractions into respective words

console.log(treebankWordTokenizer.tokenize(testString));

/*
* [ 'I',
  '\'m',
  'surprised',
  '!',
  'I',
  'did',
  'n\'t',
  'know',
  'you',
  'could',
  'make',
  'it',
  '.' ]
* */

const regexTokenizer = new natural.RegexpTokenizer({ pattern: /[!?.]/ }); // Custom tokenizer

console.log(regexTokenizer.tokenize(testString));

/*
* [ 'I\'m surprised', ' I didn\'t know you could make it' ]
* */
