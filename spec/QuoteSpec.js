describe("Quote", function() {
  beforeEach(function() {
    quote = new Quote('my quote');
  });

  describe("#shout", function() {
    it("shouts the quote", function() {
      expect(quote.asShout()).toEqual("MY QUOTE");
    });
  });

  describe("#sing", function() {
    it("sings the quote", function() {
      expect(quote.asSong()).toEqual("♫ my quote ♫");
    });
  });

  describe("#wordCount", function() {
    it("returns the word count when there's one word", function() {
      var oneWordQuote = new Quote("hi");
      expect(oneWordQuote.wordCount()).toEqual(1);
    });

    it("returns the word count", function() {
      expect(quote.wordCount()).toEqual(2);
    });
  });

  // Helpful link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
  // How do you guarantee a certain random value?
  // Check out spyOn - link to doc
  describe("#randomWord", function() {
    it("returns a word in the quote", function() {
      expect(quote.quoteText).toContain(quote.randomWord());
    })

    it("returns a random word in the quote", function() {
      spyOn(Math, 'random').and.returnValue(0);
      expect(quote.randomWord()).toEqual("my");
    });
  });


  describe("#abbreviate", function() {
    beforeEach(function() {
      long_quote = new Quote('my quote is very long and needs to be shortened');
      short_quote = new Quote("this one is OK");
    });

    it("shortens quotes greater than 20 characters and adds an ellipsis", function() {
      expect(long_quote.abbreviate()).toEqual("my quote is very lon...");
    });

    it("leaves quotes less than or equal to 20 character alone", function() {
      expect(short_quote.abbreviate()).toEqual("this one is OK");
    });

  });

  // changes all periods and exclamation points to question marks
  // no punctuation at end --> add question mark
  // period or exclamation throughout --> change to question mark

  describe("#asQuestion", function() {
    it("adds question mark if there's no punctuation", function() {
      expect(quote.asQuestion()).toEqual("my quote?");
    });

    it("changes period at end to question mark", function() {
      var periodQuote = new Quote("This is the quote.");
      expect(periodQuote.asQuestion()).toEqual("This is the quote?");
    })

    it("changes exclamation at end to question mark", function() {
      var exclamationQuote = new Quote("This is the quote!");
      expect(exclamationQuote.asQuestion()).toEqual("This is the quote?");
    })

    it("changes period in the middle to question mark", function() {
      var multipleSentencesQuote = new Quote("This is part one. This is part two.");
      expect(multipleSentencesQuote.asQuestion()).toEqual("This is part one? This is part two?");
    })
  });

});