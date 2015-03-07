var Quote = function(author, text, rating) {
	this.author = author;
	this.text = text;
	this.rating = rating || 0;
}

var quote1 = new Quote(
	'Albert Einstein',
	'You have to learn the rules of the game. And then you have to play better than anyone else.');


//=================================================
// Method 1: Object Literal
var Quotes = {
	allQuotes:[]
};

Quotes.addAQuote = function(aQuote) {
	Quotes.allQuotes.push(aQuote);
} 

Quotes.addAQuote(quote1);

//=================================================
// Method 2: Object Constructor
// var Quotes = function() {
//  	this.allQuotes = [];
// } 

// Quotes.prototype.addAQuote = function(aQuote) {
// 	this.allQuotes.push(aQuote);
// }

// var myQuotes = new Quotes();
// myQuotes.addAQuote(quote1);







