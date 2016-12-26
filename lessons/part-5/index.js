const natural = require('natural');
const Tagger = natural.BrillPOSTagger; //no new needed

const testString = `Lys soldered the beautiful jewelry pieces`;


//Config for the tagger's requirements
const baseFolder = '../../node_modules/natural/lib/natural/brill_pos_tagger';
const rules = `${baseFolder}/data/English/tr_from_posjs.txt`;
const lexicon = `${baseFolder}/data/English/lexicon_from_posjs.json`;
const defaultCategory = `N`;

const tagger = new Tagger(lexicon, rules, defaultCategory, err => {
    err ? console.log(err) : console.log(tagger.tag(testString.split(' ')));
});

/*
* [ [ 'Lys', 'NNP' ],       NN = noun, P = Proper Noun
  [ 'soldered', 'VBN' ],    Verb
  [ 'the', 'DT' ],          Determiner
  [ 'beautiful', 'JJ' ],    Adjective
  [ 'jewelry', 'NN' ],      Noun
  [ 'pieces', 'NNS' ] ]     Plural noun
* */
