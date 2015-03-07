// 02/02 Monday
// instanceof

var Media = function (name) {
    this.name = name;
}

Media.prototype.view = function () {
    console.log("viewing " + this.name);
}


// Test Media class
// var myMedia = new Media("dog pic");
// console.dir(myMedia);
// myMedia.view();

var Picture = function(name, url) {
    Media.call(this, name);
    this.url = url;
}

Picture.prototype = new Media();
Picture.prototype.constructor = Picture;

Picture.prototype.create = function() {
    this.$el = $("<img>")
        .attr('src',this.url);
    return this.$el;
}

// Test Picture class
var pic = new Picture(
    "dog pic",
    "http://animalia-life.com/data_images/dog/dog4.jpg");
console.dir(pic);
var picElement = pic.create();
$('body').append(picElement);
pic.view();


//=====================================
var Quote = function(text, author) {
    // use || instead of if statements
    // if (!text) {
    //     text="defaultText";
    // }

    // if (!author) {
    //     author="defaultAuthor";
    // }

    this.text = text || 'defaultText';
    this.author = author || 'defaultAuthor' ;
};

Quote.prototype.countWords = function() {
    //var strToArray = this.text.split(" ");
    //return console.log(strToArray.length);
    return this.text.split(" ").length;
}

// Quote.prototype.create = function() {
//     var htmlQuote = $('<div>').
//         addClass("quote").
//         html("<p>" + this.text + "</p><p> - " + this.author + "</p>");
//     //$('body').append(htmlQuote);
//     return htmlQuote;    
// }

Quote.prototype.create = function() {
    this.$el = $('<div>')
        .addClass("quote")
        .append('<p class="quote-text">'+ this.text+ "</p>")
        .append('<p class="quote-author">' + this.author + "</p");
        //html("<p>" + this.text + "</p><p> - " + this.author + "</p>");
    //$('body').append(htmlQuote);
    return this.$el;    
}

Quote.prototype.changeColor = function(color){
    this.$el.css('color',color);
}

Quote.prototype.changeText = function(text) {
    this.text = text;
    //this.$el.html("<p>" + this.text + "</p><p> - " + this.author + "</p>");
    this.$el.find('.quote-text').text(this.text);
}

var objQuote1 = new Quote("book", "john");
console.log(objQuote1, 
    objQuote1.text, 
    objQuote1.author);

var objQuote2 = new Quote();
console.log(objQuote2, 
    objQuote2.text, 
    objQuote2.author);

var objQuote3 = new Quote("We are all gifted. That is our inheritance.","Ethel Waters");
console.log("length:", objQuote3.countWords());
$('body').append(objQuote3.create());

objQuote3.changeText("this is a test");
objQuote3.changeText("this is a fun example");
console.log("updated text:",objQuote3.text);



