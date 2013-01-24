// tQuery
// ------
// A minimal jQuery-like library written for my on-site interview with Bocoup
//  on January 24th, 2013 ~Darren Torpey
(function(window, undefined) {
  function tQuery(selector, context) {
    if (!(this instanceof tQuery)) {
      return new tQuery(selector, context);
    }

    context || (context = window.document)

    this.results = context.querySelectorAll(selector);
    for (var i = 0; i < this.results.length; ++i) {
      this[i] = this.results[i];
    }
    this.length = this.results.length;

    return this;
  }
  tQuery.prototype.forEach = function(callback) {
    for (var i = 0; i < this.results.length; ++i) {
      var result = this.results[i];
      callback.apply(result, [result, i]);
    }
  };

  window.tQuery = window.$$ = tQuery;
})(window);