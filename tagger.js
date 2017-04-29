var pos = require('pos');
var tree = require('./tree');
var Autocomplete = require('./autocomplete');
var dat = tree.noun;
console.log(dat);
/*for(var j = 0; j < dat.length;j++){
	console.log(dat[j]);
}*/
var words = new pos.Lexer().lex('I');
var tagger = new pos.Tagger();
var taggedWords = tagger.tag(words);
for (i in taggedWords) {
    var taggedWord = taggedWords[i];
    var word = taggedWord[0];
    var tag = taggedWord[1];
    console.log(word + " /" + tag);
}
 