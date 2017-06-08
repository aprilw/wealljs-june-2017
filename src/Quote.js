function Quote(text) {
  this.quoteText = text;
}

Quote.prototype.asShout = function() {
  return this.quoteText.toUpperCase();
};

Quote.prototype.asSong = function() {
  return "♫ " + this.quoteText + " ♫";
};

// Assume words are separated by a space
Quote.prototype.wordCount = function () {
  var words = this.quoteText.split(/\s+/);
  return words.length;
}

Quote.prototype.randomWord = function() {
  var words = this.quoteText.split(/\s+/);
  return words[Math.floor(Math.random() * words.length)];
}

Quote.prototype.words = function() {
  return this.quoteText.split(/\s+/);
}

Quote.prototype.abbreviate = function() {
  if(this.quoteText.length > 20) {
    return this.quoteText.substring(0, 20) + "...";
  } else {
    return this.quoteText;
  }
}

Quote.prototype.asQuestion = function() {
  // if(this.quoteText[this.quoteText.length - 1] == "." ||
  //    this.quoteText[this.quoteText.length - 1] == "!") {
  //   return this.quoteText.substring(0, this.quoteText.length - 1) + "?";
  // }
  // return this.quoteText += "?";

  var updatedQuoteText = this.quoteText.replace(/!|\./g, "?");
  if(updatedQuoteText[updatedQuoteText.length - 1] != "?") {
    return updatedQuoteText += "?";
  } else {
    return updatedQuoteText;
  }
};



// Quote.prototype.random = function() {
//   var quoteText = "";
//   $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function(data) {
//     quoteText = data.quote;
//   });
//   // return quoteText;
//   return Math.random();
// }
