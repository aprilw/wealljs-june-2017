describe("Quote", function() {
  beforeEach(function() {
    quote = new Quote('my quote');
  });


  // if it ends in an exclamation point, shout it out

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



  it("can return the word count", function() {
    expect(quote.wordCount()).toEqual(2);
  });

  // Helpful link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
  // How do you guarantee a certain random value?
  // Check out spyOn - link to doc
  it("can return a random word", function() {
    spyOn(Math, 'random').and.returnValue(0);
    expect(quote.randomWord()).toEqual("my");
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



  // it("can be random", function () {
  //   $.getJSON("quotes.json")
  //   spyOn(Math, 'random').and.returnValue(0.1);
  //   expect(quote.random()).toEqual(0.1);

  //   // spyOn($, "getJSON").and.returnValue({success: function(c){c(data)}}


  //   //   {quote: "Moral indignation is jealousy with a halo.", author: "H. G. Wells (1866-1946)"})

  //   // expect(quote.random()).toBe("Moral indignation is jealousy with a halo.");
  // });
});