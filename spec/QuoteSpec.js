describe("Quote", function() {
  beforeEach(function() {
    var quoteText = "Be excellent to each other.";
    quote = new Quote(quoteText);
  });

  /* 1. User story: As a user,
   * I want to be able to 'shout' a quote
   *
   * Expected result: quote text is all caps */
  describe("#shouted", function() {
    it("shouts the quote", function() {
      expect(quote.shouted()).toEqual("BE EXCELLENT TO EACH OTHER.");
    });
  });


  /* 2. User story: As a user,
   * I want to be able to see a quote and its author
   *
   * Expected result: "As the wise Jane Doe once said, 'Here is a quote.'"
   * If author is blank or unknown, instead display "Someone once said, 'Here is a quote.'" */
  xdescribe("#toDisplay", function() {
    // Complete this test and remove the "x" before the it function
    it("prints the author name and quote text in a sentence", function() {

    });

    // Fill me out and remove the "x" before the it function
    it("[fill me out]", function() {

    });

  });


  /* 3. User story: As a user,
   * I want to know how many words are in a quote
   *
   * Expected result: number of words in quote, assuming words
   * are separated by whitespace
   *
   * Helpful links:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
   * https://www.w3schools.com/jsref/jsref_regexp_whitespace.asp                        */
  xdescribe("#wordCount", function() {

  });


  /* 4. User story: As a user,
   * I want to get a random word from the quote
   *
   * Expected result: a random word from the quote
   *
   * Helpful link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
   * How do you guarantee a certain random value?
   * Check out spyOn - https://jasmine.github.io/2.0/introduction.html#section-Spies */
  xdescribe("#randomWord", function() {

  });


  /* 5. Before moving on to the next test suite, is there some refactoring
   *  you could do at this point? Check for any repeated functionality
   *  used in randomWord and another function.
   *
   *  As you refactor, remember to stay one undo away from green! */


  /* 6. User story: As a user,
   * I want to abbreviate quotes longer than 20 characters
   *
   * Expected result: quotes longer than 20 characters are truncated at 20 characters
   * and followed by an ellipsis. Quotes of 20 characters or fewer are left as is. */

  xdescribe("#abbreviated", function() {

  });


  /* 6. As a user, I want to be able to see any quote written
   * as a question.

   * Expected result:
   * - periods and exclamation points are changed to question marks
   * - if there's no punctuation at the end --> add question mark
   * - other periods or exclamation points throughout are changed to question mark

   * Note: try to come with at least 4 test cases */
  xdescribe("#withDoubt", function() {

  });


  /* 7. Time to get more creative! Think of another function that
   * might be useful or fun to have for quotes. Gather requirements
   * from a partner. Follow the same TDD practice as above. */
  xdescribe("your own method!", function() {
    //add tests (one at a time) here
  })

});