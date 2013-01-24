module("API shape");

test("Global functions", 3, function() {
	equal(typeof window.$$, "function", "Defines a global '$$' function");
	equal(typeof window.tQuery, "function", "Defines a global 'tQuery' function");
	strictEqual(window.tQuery, window.$$, "$$ and tQuery are the same function");
});

test("Return value", 3, function() {
	var ret = $$("body");

	equal(typeof ret, "object", "Returns an object");
	equal(typeof ret.length, "number", "Returned object defines a `length` Number property");
	equal(typeof ret.forEach, "function", "Returned object defines a `forEach` method");
});

test("Constructor invocation", 2, function() {
	ok(new $$("body") instanceof tQuery, "Returns an instance of tQuery when called with 'new'");
	ok($$("body") instanceof tQuery, "Returns an instance of tQuery when called without 'new'");
});

module("Selection");

test("Tag names", 1, function() {
	var elems = $$("article");

	equal(elems.length, 1, "Returns the correct number of elements");
});

test("Class names", 1, function() {
	var elems = $$(".test-a");

	equal(elems.length, 2, "Returns the correct number of elements");
});

test("IDs", 1, function() {
	var elem = $$("#test-id");

	equal(elem.length, 1, "Returns the correct number of elements");
});

test("Complex selectors", 3, function() {
	equal($$(".test-a.test-b").length, 1, "Returns the correct number of elements");
	equal($$(".test-a, .test-b").length, 3, "Returns the correct number of elements");
	equal($$(".test-c > span").length, 1, "Returns the correct number of elements");
});

test("Context", 1, function() {
	var emptySpan = document.getElementById("test-id");

	equal($$(".test-c", emptySpan).length, 1, "Retusn the correct number of elements");
});

module("Iteration", {
	setup: function() {
		this.elems = $$(".test-a, .test-b");
	}
});

test("Correctly iterates over the provided selection", 6, function() {
	var counter = 0;
	var elems = this.elems;

	elems.forEach(function(elem, idx) {
		equal(elems[idx], elem, "Supplies the correct element on each iteration");
		equal(idx, counter, "Supplies the correct index");
		counter++;
	});
});

test("Sets the iterator context to the selection", function() {
	var elems = this.elems;

	elems.forEach(function(elem, idx) {
		equal(this, elems[idx], "Correct context");
	});
});
