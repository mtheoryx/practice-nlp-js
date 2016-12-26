const natural = require('natural');

const NGrams = natural.NGrams; //no new needed

const testBiGramString = `Jane Smith, along with Mary Adams and John Black, created the project.`;

console.log(NGrams.bigrams(testBiGramString));

/*
* [ [ 'Jane', 'Smith' ],
  [ 'Smith', 'along' ],
  [ 'along', 'with' ],
  [ 'with', 'Mary' ],
  [ 'Mary', 'Adams' ],
  [ 'Adams', 'and' ],
  [ 'and', 'John' ],
  [ 'John', 'Black' ],
  [ 'Black', 'created' ],
  [ 'created', 'the' ],
  [ 'the', 'project' ] ]
* */

const testTriGramsString = `
This little piggy went to the market, this little piggy stayed home,
this little piggy had roast beef, this little piggy had none.
This little piggy went wee wee wee all the way home!
`;

console.log(NGrams.trigrams(testTriGramsString));

/*
* [ [ 'This', 'little', 'piggy' ],
  [ 'little', 'piggy', 'went' ],
  [ 'piggy', 'went', 'to' ],
  [ 'went', 'to', 'the' ],
  [ 'to', 'the', 'market' ],
  [ 'the', 'market', 'this' ],
  [ 'market', 'this', 'little' ],
  [ 'this', 'little', 'piggy' ],
  [ 'little', 'piggy', 'stayed' ],
  [ 'piggy', 'stayed', 'home' ],
  [ 'stayed', 'home', 'this' ],
  [ 'home', 'this', 'little' ],
  [ 'this', 'little', 'piggy' ],
  [ 'little', 'piggy', 'had' ],
  [ 'piggy', 'had', 'roast' ],
  [ 'had', 'roast', 'beef' ],
  [ 'roast', 'beef', 'this' ],
  [ 'beef', 'this', 'little' ],
  [ 'this', 'little', 'piggy' ],
  [ 'little', 'piggy', 'had' ],
  [ 'piggy', 'had', 'none' ],
  [ 'had', 'none', 'This' ],
  [ 'none', 'This', 'little' ],
  [ 'This', 'little', 'piggy' ],
  [ 'little', 'piggy', 'went' ],
  [ 'piggy', 'went', 'wee' ],
  [ 'went', 'wee', 'wee' ],
  [ 'wee', 'wee', 'wee' ],
  [ 'wee', 'wee', 'all' ],
  [ 'wee', 'all', 'the' ],
  [ 'all', 'the', 'way' ],
  [ 'the', 'way', 'home' ] ]
* */

const otherSequencesString = `The monkey ate all of the bananas.`;

console.log(NGrams.ngrams(otherSequencesString, 5)); //pass in the number you want to group by

/*
* [ [ 'The', 'monkey', 'ate', 'all', 'of' ],
  [ 'monkey', 'ate', 'all', 'of', 'the' ],
  [ 'ate', 'all', 'of', 'the', 'bananas' ] ]
* */

console.log(NGrams.ngrams(otherSequencesString, 2)); //also works with bigrams and trigrams

/*
* [ [ 'The', 'monkey' ],
  [ 'monkey', 'ate' ],
  [ 'ate', 'all' ],
  [ 'all', 'of' ],
  [ 'of', 'the' ],
  [ 'the', 'bananas' ] ]
* */

console.log(NGrams.ngrams(otherSequencesString, 3, '[S]', '[E]')); //Can also add padding to start and end

/*
* [ [ '[S]', '[S]', 'The' ],
  [ '[S]', 'The', 'monkey' ],
  [ 'The', 'monkey', 'ate' ],
  [ 'monkey', 'ate', 'all' ],
  [ 'ate', 'all', 'of' ],
  [ 'all', 'of', 'the' ],
  [ 'of', 'the', 'bananas' ],
  [ 'the', 'bananas', '[E]' ],
  [ 'bananas', '[E]', '[E]' ] ]
* */
