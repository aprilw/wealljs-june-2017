describe("Quote", function() {
  beforeEach(function() {
    var quoteText = "Be excellent to each other.";
    var quoteAuthor = "Bill";
    quote = new Quote(quoteText, quoteAuthor);
  });

  // User story: As a user,
  // I want to be able to 'shout' a quote
  //
  // Expected result: quote text is all caps
  describe("#shouted", function() {
    it("shouts the quote", function() {
      expect(quote.shouted()).toEqual("BE EXCELLENT TO EACH OTHER.");
    });
  });


  describe("#toDisplay", function() {
    it("states the author name and quote text", function() {
      expect(quote.toDisplay()).toContain(quote.author);
      expect(quote.toDisplay()).toContain(quote.text);
    })

  });

  // User story: As a user,
  // I want to know how many words are in a quote
  //
  // Expected result: number of words in quote, assuming words
  // are separated by whitespace
  describe("#wordCount", function() {
    it("returns the word count when there's one word", function() {
      var oneWordQuote = new Quote("hi");
      expect(oneWordQuote.wordCount()).toEqual(1);
    });

    it("returns the word count", function() {
      expect(quote.wordCount()).toEqual(5);
    });
  });

  // User story: As a user,
  // I want to get a random word from the quote
  //
  // Expected result: a random word from the quote
  // Helpful link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
  // How do you guarantee a certain random value?
  // Check out spyOn - link to doc
  describe("#randomWord", function() {
    it("returns a word in the quote", function() {
      expect(quote.text).toContain(quote.randomWord());
    })

    it("returns a random word in the quote", function() {
      spyOn(Math, 'random').and.returnValue(0);
      expect(quote.randomWord()).toEqual("Be");
    });
  });

  // User story: As a user,
  // I want to abbreviate quotes longer than 20 characters
  //
  // Expected result: quotes longer than 20 characters are truncated at 20 characters
  // and followed by an ellipsis. Quotes of 20 characters or fewer are left as is.
  describe("#abbreviated", function() {
    it("shortens quotes greater than 20 characters and adds an ellipsis", function() {
      var long_quote = new Quote('my quote is very long and needs to be shortened');

      expect(long_quote.abbreviated()).toEqual("my quote is very lon...");
    });

    it("leaves quotes less than or equal to 20 character alone", function() {
      var short_quote = new Quote("this one is OK");

      expect(short_quote.abbreviated()).toEqual("this one is OK");
    });

  });

  // changes all periods and exclamation points to question marks
  // no punctuation at end --> add question mark
  // period or exclamation throughout --> change to question mark

  describe("#withDoubt", function() {
    it("adds question mark if there's no punctuation", function() {
      expect(quote.withDoubt()).toEqual("Be excellent to each other?");
    });

    it("changes period at end to question mark", function() {
      var periodQuote = new Quote("This is the quote.");
      expect(periodQuote.withDoubt()).toEqual("This is the quote?");
    })

    it("changes exclamation at end to question mark", function() {
      var exclamationQuote = new Quote("This is the quote!");
      expect(exclamationQuote.withDoubt()).toEqual("This is the quote?");
    })

    it("changes period in the middle to question mark", function() {
      var multipleSentencesQuote = new Quote("This is part one. This is part two.");
      expect(multipleSentencesQuote.withDoubt()).toEqual("This is part one? This is part two?");
    })
  });

});