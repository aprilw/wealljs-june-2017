function Quote(text, author="unknown") {
  this.text = text;
  this.author = author;
}


Quote.prototype.shouted = function() {
  return this.text.toUpperCase();
};


Quote.prototype.toDisplay = function() {
  return "As the wise " + this.author + " once said, '" + this.text + "'";

}

// Assume words are separated by a space
Quote.prototype.wordCount = function () {
  var words = this.text.split(/\s+/);
  return words.length;
}

Quote.prototype.randomWord = function() {
  var words = this.text.split(/\s+/);
  return words[Math.floor(Math.random() * words.length)];
}

Quote.prototype.words = function() {
  return this.text.split(/\s+/);
}

Quote.prototype.abbreviated = function() {
  if(this.text.length > 20) {
    return this.text.substring(0, 20) + "...";
  } else {
    return this.text;
  }
}

Quote.prototype.withDoubt = function() {
  // if(this.text[this.text.length - 1] == "." ||
  //    this.text[this.text.length - 1] == "!") {
  //   return this.text.substring(0, this.text.length - 1) + "?";
  // }
  // return this.text += "?";

  var updatedtext = this.text.replace(/!|\./g, "?");
  if(updatedtext[updatedtext.length - 1] != "?") {
    return updatedtext += "?";
  } else {
    return updatedtext;
  }
};

