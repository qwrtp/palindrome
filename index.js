// Reverses a string

// function reverse(string) {
//   return Array.from(string).reverse().join("");
// }

// Adds `reverse` to all strings
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Adds `blank` to all Strings: returns true if string is empty or
//   consists solely of whitespace
String.prototype.blank = function() {
  r = new RegExp(/^\s*$/g);
  return !!this.match(r);
}

// Adds a `last` method to `Array` that returns the last element of the Array
Array.prototype.last = function() {
  return this.slice(-1);
}


// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
      return string.toLowerCase();
  }

  // Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns true for a palindrome, false otherwise
  this.palindrome = function palindrome() {
    // return this.processedContent() === reverse(this.processedContent());
    return this.processedContent() === this.processedContent().reverse();
  }
}

// Defines a TranslatedPhrase object
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();
