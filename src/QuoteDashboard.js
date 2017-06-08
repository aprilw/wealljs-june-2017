function QuoteDashboard(quotes=[]) {
  this.quotes = quotes;
}

QuoteDashboard.prototype.firstQuote = function() {
  return this.quotes[0];
};

QuoteDashboard.prototype.showQuoteAt = function(index) {
  $('#quote').html("Quote: " + this.quotes[index].quoteText);
}
