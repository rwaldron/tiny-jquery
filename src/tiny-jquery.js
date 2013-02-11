// tQuery
// ------
// A minimal jQuery-like library written for my on-site interview with Bocoup
//  on January 24th, 2013 ~Darren Torpey
(function(window, undefined) {
  function tQuery(selector, context) {
    if (!(this instanceof tQuery)) {
      return new tQuery(selector, context);
    }

    var results = (context || window.document).querySelectorAll(selector);
    for (var i = 0; i < results.length; ++i) {
      this[i] = results[i];
    }
    this.length = results.length;
  }
  tQuery.prototype.forEach = function(callback) {
    for (var i = 0; i < this.length; ++i) {
      callback.apply(this[i], [this[i], i]);
    }
  };

  window.tQuery = window.$$ = tQuery;
})(window);