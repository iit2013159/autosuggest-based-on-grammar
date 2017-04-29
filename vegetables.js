/**
 * Module dependencies.
 */

var Autocomplete = require('./autocomplete');

var VEGETABLES = ['arugula', 'beet', 'broccoli', 'cauliflower', 'corn', 'cabbage', 'carrot'];
 
 var adverb =['not','also','very','often','however','too','usually','really','early','never','always','sometimes','together','likely','simply','generally','instead','actually','again','rather','almost','especially','ever','quickly','probably','already','below','directly','therefore','else','thus','easily','eventually','exactly','certainly','normally',
	 'currently','extremely','finally	','constantly','properly','soon	','specifically','ahead','daily','highly','immediately','relatively','slowly','fairly	','primarily','completely','ultimately','widely','recently','seriously','frequently','fully','mostly','naturally','nearly','occasionally','carefully','clearly','essentially','possibly','slightly',
	 'somewhat','equally','greatly','necessarily','personallyvrarely','regularly','similarly','basically','closely','effectively','initially','literally','mainly','merely','gently','hopefully','originally','roughly','significantly','totally','twice','elsewhere','everywhere','obviously','perfectly','physically','successfully','suddenly','truly','virtually',
	 'altogether','anyway','automatically','deeply','definitely','deliberately','hardly','readily	','terribly','unfortunately','forth','briefly','moreover','strongly','honestly	','previously','as','there','when','how','so','up','out','no','only','well','then','first','where','why','now','around','once	','down','off','here','tonight','away','today',
	 'far','quite','later','above','yet','maybe','otherwise','near','forward','somewhere','anywhere','please','forever','somehow','absolutely','abroad','yeah','nowhere','tomorrow','yesterday','the','to','in','on','by','more','about','such','through','new','just','any','each','much','before','between','free','right','best','since','both','sure	','without',
	 'back','better','enough','lot','small','though','less','little','under','next','hard	','real','left','least','short','last','within','along','lower','true','bad','across','clear','easy','full','close','late','proper','fast','wide','item	','wrong','ago','behind','quick','ok','pray','weekly'
];
// Create the autocomplete object
var autocomplete = Autocomplete.connectAutocomplete();

// Initialize the autocomplete object and define a 
// callback to populate it with data
autocomplete.initialize(function(onReady) {
    onReady(adverb);
});

// Later...  When it's time to search:
var matches = autocomplete.search('al');
for(var i = 0; i< matches.length;i++){
	console.log(matches[i].value);
}


// this will print:
// ['cabbage', 'carrot']


