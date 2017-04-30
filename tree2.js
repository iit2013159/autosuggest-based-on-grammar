var pos = require('pos');
var Autocomplete = require('./autocomplete');

var noun =['ball','bat','bed','book','boy','bun','can','cake','cap','car','cat','cow','cub','cup','dad','day','dog','doll','dust','fan','feet','girl','gun','hall','hat','hen','jar','kite','man','map','men','mom','pan','pet','pie','pig','pot','rat','son','sun','toe','tub','van','apple','arm','banana','bike','bird','book','chin','clam','class','clover',
	'club','corn','crayon','crow','crown','crowd','crib','desk','dime','dirt','dress','fang ','field','flag','flower','fog','game','heat','hill','home','horn','hose','joke','juice','kite','lake','maid','mask','mice','milk','mint','meal','meat','moon','mother','morning','name','nest','nose','pear','pen','pencil','plant','rain','river','road','rock','room',
	'rose','seed','shape','shoe','shop','show','sink','snail','snake','snow','soda','sofa','star','step','stew','stove','straw','string','summer','swing','table','tank','team','tent','test','toes','tree','vest','water','wing','winter','woman','women','alarm','animal','aunt','bait','balloon','bath','bead','beam','bean','bedroom','boot','bread','brick',
	'brother','camp','chicken','children','crook','deer','dock','doctor','downtown','drum','dust','eye','family','father','fight','flesh','food','frog','goose','grade','grandfather','grandmother','grape','grass','hook','horse','jail','jam','kiss','kitten','light','loaf','lock','lunch','lunchroom','meal','mother','notebook','owl','pail','parent','park',
	'plot','rabbit','rake','robin','sack','sail','scale','sea','sister','soap','song','spark','space','spoon','spot','spy','summer','tiger','toad','town','trail','tramp','tray','trick','trip','uncle','vase','winter','water','week','wheel','wish','wool','yard','zebra','actor','airplane','airport','army','baseball','beef','birthday','boy',
	'brush','bushes','butter ','cast','cave','cent','cherries','cherry','cobweb','coil','cracker','dinner','eggnog','elbow','face','fireman','flavor','gate','glove','glue','goldfish','goose','grain','hair','haircut','hobbies','holiday','hot','jellyfish','ladybug','mailbox','number','oatmeal','pail','pancake','pear','pest','popcorn','queen','quicksand',
	'quiet','quilt','rainstorm','scarecrow','scarf','stream','street','sugar','throne','toothpaste','twig','volleyball','wood','wrench','advice','anger','answer','apple','arithmetic','badge','basket','basketball','battle','beast','beetle','beggar','brain','branch','bubble','bucket','cactus','cannon','cattle','celery','cellar','cloth','coach','coast',
	'crate','cream','daughter','donkey','drug','earthquake','feast','fifth','finger','flock','frame','furniture','geese','ghost','giraffe','governor','honey','hope','hydrant','icicle','income','island','jeans','judge','lace','lamp','lettuce','marble','month','north','ocean','patch','plane','playground','poison','riddle','rifle','scale','seashore',
	'sheet','sidewalk','skate','slave','sleet','smoke','stage','station','thrill','throat','throne','title','toothbrush','turkey','underwear','vacation','vegetable','visitor','voyage','year','able','achieve','acoustics','action','activity','aftermath','afternoon','afterthought','apparel','appliance','beginner','believe','bomb','border','boundary',
	'breakfast','cabbage','cable','calculator','calendar','caption','carpenter','cemetery','channel','circle','creator','creature','education','faucet','feather','friction','fruit','fuel','galley','guide','guitar','health','heart','idea','kitten','laborer','language','lawyer','linen','locket','lumber','magic','minister','mitten','money','mountain',
	'music','partner','passenger','pickle','picture','plantation','plastic','pleasure','pocket','police','pollution','railway','recess','reward','route','scene','scent','squirrel','stranger','suit','sweater','temper','territory','texture','thread','treatment','veil','vein','volcano','wealth','weather','wilderness','wren','wrist','writer'
];
var Determiner =['a','an','the','this', 'that', 'these' , 'those', 'my' ,'your', 'its', 'our', 'their', 'fewer', 'few', 'little', 'all',  'much', 'more','some', 'any','one', 'two', 'three','four', 'five','six', 'seven' ];

var Helpingverb =['am','is','is being','are','are being','was','has', 'has been', 'have been', 'will have been', 'had been', 'are being','might have been',
	'become', 'becomes', 'became', 'has become', 'had become', 'have become', 'will have become',
	'seems', 'seeming', 'has seem', 'have seem', 'had seem', 'will seem',
	'grow', 'look', 'prove', 'remain','smell', 'sound', 'taste', 'turn', 'stand', 'feel', 'appear', 'feel'
 ];
var verb =[	'get','see','need','know','would','find','take','want','does','learn','become','come','include','thank','provide','create','add','understand','consider','choose','develop','remember','determine','grow','allow','supply','bring','improve','maintain','begin','exist','tend','enjoy','perform','decide','identify','continue','protect','require',
	'occur','write','approach','avoid','prepare','build','achieve','believe','receive','seem','discuss','realize','contain','follow','refer','solve','describe','prefer','prevent','discover','ensure','expect','invest','reduce','speak','appear','explain','explore','involve','lose','afford','agree','hear','remain','represent','apply','forget','recommend',
	'rely','vary','generate','obtain','accept','communicate','complain','depend','enter','happen','indicate','suggest','survive','appreciate','compare','imagine','manage','differ','encourage','expand','prove','react','recognize','relax','replace','borrow','earn','emphasize','enable','operate','reflect','send','anticipate','assume','engage','enhance',
	'examine','install','participate','intend','introduce','relate','settle','assure','attract','distribute','overcome','owe','succeed','suffer','throw','acquire','adapt','adjust','argue','arise','confirm','encouraging','incorporate','justify','organize','ought','possess','relieve','retain','shut','calculate','compete','consult','deliver','extend',
	'investigate','negotiate','qualify','retire','rid','weigh','arrive','attach','behave','celebrate','convince','disagree','establish','ignore','imply','insist','pursue','remaining','specify','warn','accuse','admire','admit','adopt','announce','apologize','approve','attend','belong','commit','criticize','deserve','destroy','hesitate','illustrate',
	'inform','manufacturing','persuade','pour','propose','remind','shall','submit','suppose','translate'
];
var pronoun =['all','another','any','anybody','anyone','anything','both','each','each other','either','everybody','everyone','everything','few','he','her','hers','herself','him','himself','his','i','it','its','itself','many','me','mine','more','most','much','myself','neither','no one','nobody','none','nothing','one','one another','other','others','ours',
	'ourselves','several','she','some','somebody','someone','something','that','their','themselves','these','they','this','those','us','we','what','whatever','which','whichever','who','whoever','whom','whomever','whose','you','your','yours','yourself','yourselves'
];

 var preposition = ['aboard','about','above','across','after','against','along','amid','among','anti','around','as','at','before','behind','below','beneath','beside','besides','between','beyond','but','by','concerning','considering','despite','down','during','except','excepting','excluding','following','for','from','in','inside','into','like','minus',
 	'near','of','off','on','onto','opposite','outside','over','past','per','plus','regarding','round','save','since','than','through','to','toward','towards','under','underneath','unlike','until','up','upon','versus','via','with','within','without'
 ];

 var adverb =['not','also','very','often','however','too','usually','really','early','never','always','sometimes','together','likely','simply','generally','instead','actually','again','rather','almost','especially','ever','quickly','probably','already','below','directly','therefore','else','thus','easily','eventually','exactly','certainly','normally',
	 'currently','extremely','finally	','constantly','properly','soon	','specifically','ahead','daily','highly','immediately','relatively','slowly','fairly	','primarily','completely','ultimately','widely','recently','seriously','frequently','fully','mostly','naturally','nearly','occasionally','carefully','clearly','essentially','possibly','slightly',
	 'somewhat','equally','greatly','necessarily','personallyvrarely','regularly','similarly','basically','closely','effectively','initially','literally','mainly','merely','gently','hopefully','originally','roughly','significantly','totally','twice','elsewhere','everywhere','obviously','perfectly','physically','successfully','suddenly','truly','virtually',
	 'altogether','anyway','automatically','deeply','definitely','deliberately','hardly','readily	','terribly','unfortunately','forth','briefly','moreover','strongly','honestly	','previously','as','there','when','how','so','up','out','no','only','well','then','first','where','why','now','around','once	','down','off','here','tonight','away','today',
	 'far','quite','later','above','yet','maybe','otherwise','near','forward','somewhere','anywhere','please','forever','somehow','absolutely','abroad','yeah','nowhere','tomorrow','yesterday','the','to','in','on','by','more','about','such','through','new','just','any','each','much','before','between','free','right','best','since','both','sure	','without',
	 'back','better','enough','lot','small','though','less','little','under','next','hard	','real','left','least','short','last','within','along','lower','true','bad','across','clear','easy','full','close','late','proper','fast','wide','item	','wrong','ago','behind','quick','ok','pray','weekly'
];

var Adjective =['able','bad','best','better','big','black','certain','clear','different','early','easy','economic','federal','free','full','good','great','hard','high','human','important','international','large','late','little','local',
	'long','low','major','military','national','new','old','only','other','political','possible','public','real','recent','right','small','social','special','strong','sure','true','white','whole','young',
];

var conjunction =['both','and','either','or','neither','nor','not only','but also','whether',' orafter', 'although', 'as', 'as if', 'as long as', 'as much as', 'as soon as', 'as though','because', 'before', 'by the time','even if', 'even though','if', 'in order that', 'in case','lest','once, only if','provided that','since', 'so that','than', 'that', 
	'though', 'till','unless', 'until','when', 'whenever', 'where', 'wherever', 'while','And','Or','But','Nor','So','For','Yet','After','Although','As','As If','As Long As','Because','Before','Even If','Even Though','Once','Since','So That','Though','Till','Unless','Until','What','When','Whenever','Wherever','Whether','While'
];

var interjection =['aha', 'ahem', 'ahh', 'ahoy', 'alas', 'arg', 'aw','bam', 'bingo', 'blah', 'boo', 'bravo', 'brrr','cheers', 'congratulations','dang', 'drat', 'darn', 'duh','eek', 'eh', 'encore', 'eureka','fiddlesticks','gadzooks', 'gee', 'gee whiz', 'golly', 'goodbye', 'goodness', 'good grief', 'gosh','ha-ha', 'hallelujah', 'hello', 'hey', 'hmm', 'holy buckets', 'holy cow'
];
var number =['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifiteen','sixteen','seventeen','eighteen','nineteen','twenty','twenty five','thirty','thirty five','fourty','fifty','sixty','seventy','eighty','ninty','hundred','thousand','lakh','lac','crore','million','billion'];
var to =['to'];
var foreignword =['unknown language'];


function Node(inp) {
    this.data = inp;
    //this.parent = null;
    this.children = [];
    this.visited = false;
    this.child = function(){
    	for (var i = 0; i < arguments.length; i++){
    		if( (1==2 ) && arguments[i] instanceof Node){
    			var nt = arguments[i];
    			//nt.parent =this;
    			this.children.push(nt);
    		}
    		else{
	    		var rx =new Node(arguments[i]);
	    		//rx.parent = this;
	    		this.children.push(rx);
	    	}
    	}
    }
}
function prnext(inp){
	var re =[];
	if(inp == 'IN'){
		for(var j = 0; j < NP.children.length;j++){
			re.push(NP.children[j].data);
		}
	}
	else if(inp == 'V'){
		for(var j = 0; j < verbtree.children.length;j++){
			re.push(verbtree.children[j].data);
		}
	}
	else{
		for(var i = 0; i < NP.children.length;i++){
			if(inp == NP.children[i].data){
				
				for(var j = 0; j < NP.children[i].children.length;j++){
					re.push(NP.children[i].children[j].data);
				}
			}
		}
	}
	console.log(re);
	return re;
	
}
function allpossiblepath(inp,elem){
	var result =[];
	if(inp != null && inp.visited == false){
		
			//process.stdout.write(inp.data + ' ' );
		
		for(var i = 0;i < inp.children.length;i++){
			if(inp.children[i].data == 'VP' ){
				inp.children[i].visited =true;
				result.push(inp.children[i].data);
				console.log("showing VP tree");
				allpossiblepath(VP);
				if(inp.children[i].children.length > 0){
					for(var j = 0;j < inp.children.length;j++){
						if(inp.children[i].children[j].data == elem){

							inp.children[i].children[j].visited =true;
							result.push(inp.children[i].children[j]);
							return;
						}
						else{
							allpossiblepath(inp.children[i].children[j]);
						}
					}
				}

			}else if(inp.children[i].data == 'NP'){
				inp.children[i].visited =true;
				result.push(inp.children[i].data);
				console.log("showing NP tree");
				allpossiblepath(NP);
				if(inp.children[i].children.length > 0){
					for(var j = 0;j < inp.children.length;j++){
						if(inp.children[i].children[j].data == elem){

							inp.children[i].children[j].visited =true;
							result.push(inp.children[i].children[j]);
							return;
						}
						else{
							allpossiblepath(inp.children[i].children[j]);
						}
					}
				}
			}
			else if(inp.children[i].data == 'AP'){
				inp.children[i].visited =true;
				result.push(inp.children[i].data);
				console.log("showing AP tree");
				allpossiblepath(AP);
				if(inp.children[i].children.length > 0){
					for(var j = 0;j < inp.children.length;j++){
						if(inp.children[i].children[j].data == elem){

							inp.children[i].children[j].visited =true;
							result.push(inp.children[i].children[j]);
							return;
						}
						else{
							allpossiblepath(inp.children[i].children[j]);
						}
					}
				}
			}
			else if(inp.children[i].data == 'NPP'){
				inp.children[i].visited =true;
				result.push(inp.children[i].data);
				console.log("showing NPP tree");
				allpossiblepath(NPP);
				if(inp.children[i].children.length > 0){
					for(var j = 0;j < inp.children.length;j++){
						if(inp.children[i].children[j].data == elem){

							inp.children[i].children[j].visited =true;
							result.push(inp.children[i].children[j]);
							return;
						}
						else{
							allpossiblepath(inp.children[i].children[j]);
						}
					}
				}
			}
			else if(inp.children[i].data == 'VPP'){
				inp.children[i].visited =true;
				result.push(inp.children[i].data);
				console.log("showing VPP tree");
				allpossiblepath(VPP);
				if(inp.children[i].children.length > 0){
					for(var j = 0;j < inp.children.length;j++){
						if(inp.children[i].children[j].data == elem){

							inp.children[i].children[j].visited =true;
							result.push(inp.children[i].children[j]);
							return;
						}
						else{
							allpossiblepath(inp.children[i].children[j]);
						}
					}
				}
			}
			else{
				if(inp.children[i].children[j].data == elem){

					inp.children[i].children[j].visited =true;
					result.push(inp.children[i].children[j]);
					return;
				}
				else{
					allpossiblepath(inp.children[i].children[j]);
				}
			}
			//inp = inp.parent;
		}
	}

}
function show(inp){
	if(inp != null){
		
			process.stdout.write(inp.data + ' ' );
		
		for(var i = 0;i < inp.children.length;i++){
			if(inp.children[i].data == 'VP' ){
				console.log("showing VP tree");
				show(VP);
				if(inp.children[i].children.length > 0){
					for(var j = 0;j < inp.children.length;j++){
						show(inp.children[i].children[j]);
					}
				}

			}else if(inp.children[i].data == 'NP'){
				console.log("showing NP tree");
				show(NP);
				if(inp.children[i].children.length > 0){
					for(var j = 0;j < inp.children.length;j++){
						show(inp.children[i].children[j]);
					}
				}
			}
			else if(inp.children[i].data == 'AP'){
				console.log("showing AP tree");
				show(AP);
				if(inp.children[i].children.length > 0){
					for(var j = 0;j < inp.children.length;j++){
						show(inp.children[i].children[j]);
					}
				}
			}
			else if(inp.children[i].data == 'NPP'){
				console.log("showing NPP tree");
				show(NPP);
				if(inp.children[i].children.length > 0){
					for(var j = 0;j < inp.children.length;j++){
						show(inp.children[i].children[j]);
					}
				}
			}
			else if(inp.children[i].data == 'VPP'){
				console.log("showing VPP tree");
				show(VPP);
				if(inp.children[i].children.length > 0){
					for(var j = 0;j < inp.children.length;j++){
						show(inp.children[i].children[j]);
					}
				}
			}
			else{
				show(inp.children[i]);
			}
			//inp = inp.parent;
		}
	}
}
function showword(inp){
	var dat;
	if(inp =='CC'){
		dat = conjunction;/*'Coordinating conjunction'*/
	} 
	else if(inp == 'CD'){
		dat = number;
	}//new Node('Cardinal number');
	else if(inp == 'DT'){
		dat = Determiner;
	}
	else if(inp == 'IN'){
		dat =  preposition;
	}//new Node('Preposition or subordinating conjunction');
	else if(inp == 'JJ' || inp == 'JJR' || inp == 'JJS'){
		dat = Adjective;
	}
	else if(inp == 'NN' ||inp == 'NNS' || inp == 'NNP' || inp == 'NNPS'){
		dat = noun;
	}
	else if(inp == 'PDT'){
		dat = Determiner;
	}
	else if(inp == 'PRP' || inp == 'PRP$' || inp == 'WP' || inp == 'WP$'){
		dat= pronoun;
	}
	else if(inp == 'RB' ||inp == 'RBR' || inp == 'RBS'){
		dat= adverb;
	}
	else if(inp == 'TO'){
		dat = to;
	}
	else if(inp == 'UH'){
		dat =  interjection;
	}//new Node('Interjection');
	else if(inp == 'VB'||inp == 'VBD' ||inp == 'VBG' ||inp == 'VBN' || inp == 'VBP' || inp == 'VBZ'){
		dat= verb;
	}
	else if(inp == 'WDT'){
		dat = Determiner;
	}
	else if(inp == 'WRB'){
		dat = adverb;
	}
	else{
		dat = foreignword;
	}

	console.log("dictionary showed foxr "+ inp);
	if(dat == undefined){
		return null;
	}
	else if(dat.length >= 7){
		return dat.slice(0,7);
	}
	else{
		return dat;
	}
	

}
function printshow(dat){
	if(dat != null){
		for(var i = 0; i < dat.length;i++){
			process.stdout.write(dat[i] + "  ");
		}
	}
}

function next(inp,it = 0){
	var showpoint = [];
	if(it == 0){
		showpoint =['Hii','Hello','My name is','how are you'];
		for(i in sentencetree.children){
			for(j in sentencetree.children[i]){
				showpoint += showword(sentencetree.children[i].children[j]);
			}
		}
	}
	else{
		if(inp =='NP' || inp =='AP' || inp =='NPP' || inp =='VPP' || inp =='VP'){
			for(i in inp){

			}
		}
	}
	for(i in showpoint){
		console.log(showpoint[i]);
	}
}
function search(inp){
	var ar=[];
	console.log(ar.length)
	ar.push(inp);
	while(ar.length > 0){
		process.stdout.write(ar[0].data + ' ' );
		if(inp.children.length > 0){
			console.log(inp.children);
			for(i in inp.children){
				ar.push(inp.children[i]);			
			}
		}
		ar.splice(0,1);
	}
}
function checknext(inp,history){
	var last =sentencetree;
	for(var i = 0;i < history.length -1;i++){
		search(last,history[i]);
		
	}
}
var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 
    checktaging(d.toString().trim());
  });
function checktaging(inp){
	//inp ='i need to write a sentence'
	var words = new pos.Lexer().lex(inp);
	var tagger = new pos.Tagger();
	var taggedWords = tagger.tag(words);

	var history = [];
	for (i in taggedWords) {
	    var taggedWord = taggedWords[i];
	    var word = taggedWord[0];
	    var tag = taggedWord[1];
	    /*history.push(tag);
	    var possible = checknext(tag,history);
	    for(j in possible){
	    	process.stdout.write(possible[j] +" ");
	    }*/
	    console.log(word + " /" + tag);
	    var r = prnext(tag);
	    for(var j = 0; j < r.length;j++){
	    	printshow(showword(r[j]));
	    }
	    
	}
}


var deter = new Node('DT');
deter.child('N','JJ');
deter.children[0].child('.','N');
deter.children[1].child('N','JJ');
deter.children[1].children[0].child('.','N','PRP');
deter.children[1].children[1].child('N');


var nountree = new Node('N');
nountree.child('.','CC');
nountree.children[1].child('N');

var pronountree = new Node('PRP');
pronountree.child('.','N','JJ');
pronountree.children[1].child('.','N');
pronountree.children[2].child('N');

var numbertree = new Node('CD');
numbertree.child('N');
numbertree.children[0].child('.','N');
numbertree.children[0].children[1].child('.','CC');
numbertree.children[0].children[1].children[1].child('N'); 

var adjectivetree = new  Node('JJ');
adjectivetree.child('N','PRP');
adjectivetree.children[1].child('N');

var verbtree = new Node('V');
verbtree.child('.','V','RB','CC');
verbtree.children[1].child('.','RB','V');
verbtree.children[1].children[2].child('.','V');
verbtree.children[2].child('.','CC','V');
verbtree.children[2].children[1].child('RB');
verbtree.children[3].child('V');

//var NP = new Node('NP');
//NP.child(deter,nountree,pronountree,numbertree,adjectivetree);

var AP = new Node('AP');
AP.child('JJ');
AP.children[0].child('.','JJ','CC');
AP.children[0].children[2].child('JJ');

var NPP = new Node('NPP');
NPP.child('IN');
NPP.children[0].child(NP);

var VPP =new Node('VPP');
VPP.child('IN');
VPP.children[0].child(verbtree);


var NP = new Node('NP');
NP.children.push(deter);
NP.children.push(nountree);
NP.children.push(pronountree);
NP.children.push(numbertree);
NP.children.push(numbertree)
NP.children.push(adjectivetree);

var VP = new Node('VP');
VP.child('V');
VP.children[0].child('.','NP','VPP','NPP','AP');

VP.children[0].children[1].child('.','AP','VPP',verbtree,'NPP','NP');
VP.children[0].children[1].children[1].child('.','NPP','VPP');
VP.children[0].children[1].children[2].child('NP');
VP.children[0].children[1].children[2].children[0].child('.','NPP');
VP.children[0].children[1].children[3].child('.','NPP');
VP.children[0].children[1].children[4].child('.',verbtree,'NPP');
VP.children[0].children[1].children[4].children[1].child('NP');
VP.children[0].children[1].children[4].children[2].child('NPP');
VP.children[0].children[1].children[5].child('VPP');

VP.children[0].children[2].child('.','NP','NPP','AP');
VP.children[0].children[2].children[1].child('.','AP','NP','NPP');
VP.children[0].children[2].children[3].child('NPP');
VP.children[0].children[2].children[3].children[0].child('NPP');

VP.children[0].children[3].child('.','NP','AP','VPP');
VP.children[0].children[3].children[2].child('.','NPP');
VP.children[0].children[3].children[3].child('NP');

VP.children[0].children[4].child('.','NPP');
VP.children[0].children[4].children[1].child('.','NPP');


var sentencetree = new Node('Start');
sentencetree.child(VP,NP,NPP);
sentencetree.children[0].child('VP','NPP');
sentencetree.children[0].children[1].child('VP');
sentencetree.children[1].child('VP','NPP');
sentencetree.children[1].children[1].child('NP');
sentencetree.children[1].children[1].children[0].child('VP');


//NP.child(deter,nountree,pronountree,numbertree,adjectivetree);

//show(sentencetree);
//search('NPP');
/*var r = prnext('DT');
	    for(var j = 0; j < r.length;j++){
	    	printshow(showword(r[j]));
	    }
*/
