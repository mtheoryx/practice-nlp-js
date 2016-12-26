const natural = require('natural');

const nounInflector = new natural.NounInflector();

console.log(nounInflector.pluralize('mouse'));
console.log(nounInflector.singularize('tomatoes'));

const countInflector = natural.CountInflector; //no new needed

[1, 2, 3, 4, 5].forEach(i => console.log(countInflector.nth(i)));
