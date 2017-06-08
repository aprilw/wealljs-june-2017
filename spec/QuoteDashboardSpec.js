describe("QuoteDashboard", function() {
  beforeEach(function() {
    quoteDashboard = new QuoteDashboard([new Quote('my quote')]);
  });

  describe("#firstQuote", function() {
    it("returns the first quote", function() {
      expect(quoteDashboard.firstQuote().quoteText).toEqual("my quote");
    });
  });

  describe("#showQuoteAt", function() {
    beforeEach( function() {
      loadFixtures("quote.html");
    })
    it("shows the quote", function() {
      quoteDashboard.showQuoteAt(0);
      expect($("#quote").html()).toContain('my quote');
    })
  });
});