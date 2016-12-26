const natural = require('natural');

const classifier = new natural.BayesClassifier();
/**
 * It is a good practice to chunk up training and test data
 * by 80/20 or at worst 60/40
 *
 * Note: This is insufficient data to really use a classifier
 * but it illustrates the point
*/

const trainingData = [
    {text: 'RE: Canadian drugs now on sale', label: 'spam'},
    {text: 'Earn more from home', label: 'spam'},
    {text: 'Information now available!!!', label: 'spam'},
    {text: 'Earn easy cash', label: 'spam'},
    {text: 'Your business trip is confirmed for Monday the 4th', label: 'notspam'},
    {text: 'Project planning - next steps', label: 'notspam'},
    {text:'Birthday party next weekend', label: 'notspam'},
    {text: 'Drinks on Monday?', label: 'notspam'}
];

const testData = [
    {text: 'Drugs for cheap', label: 'spam'},
    {text: 'Next deadline due Monday', label: 'notspam'},
    {text: 'Meet me at home?', label: 'notspam'},
    {text: 'Hang out with someone near you', label: 'spam'}
];

trainingData.forEach(i => classifier.addDocument(i.text, i.label));

// Train the classifier
classifier.train();

testData.forEach( i => {
    const labelGuess = classifier.classify( i.text );

    console.log( i.text );
    console.log( `Label: ${labelGuess}` );
    console.log( classifier.getClassifications( i.text ) );
});


/*
Drugs for cheap
Label: spam
[ { label: 'spam', value: 0.22222222222222224 },
  { label: 'notspam', value: 0.11111111111111112 } ]

Next deadline due Monday
Label: notspam
[ { label: 'notspam', value: 0.19999999999999998 },
  { label: 'spam', value: 0.022222222222222227 } ]

Meet me at home?
Label: spam
[ { label: 'spam', value: 0.22222222222222224 },
  { label: 'notspam', value: 0.11111111111111112 } ]

Hang out with someone near you
Label: spam
[ { label: 'spam', value: 0.5555555555555556 },
  { label: 'notspam', value: 0.5555555555555556 } ]
* */
