//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Session = Package.session.Session;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var _ = Package.underscore._;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var Helpers;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/raix_handlebar-helpers/common.js                                                                         //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// Helper scope                                                                                                      // 1
if (typeof Helpers === 'undefined') {                                                                                // 2
  Helpers = {};                                                                                                      // 3
}                                                                                                                    // 4
                                                                                                                     // 5
var languageText = {};                                                                                               // 6
                                                                                                                     // 7
// expects an array: languageText['say.hello.to.me']['en'] = 'Say hello to me:)';                                    // 8
// ex.:                                                                                                              // 9
// getText('Say.Hello.To.Me') == 'say hello to me:)'; // lowercase                                                   // 10
// getText('SAY.HELLO.TO.ME') == 'SAY HELLO TO ME:)'; // uppercase                                                   // 11
// getText('Say.hello.to.me') == 'Say hello to me:)'; // uppercase first letter, rest lowercase                      // 12
// getText('Say.Hello.To.Me') == 'Say Hello To Me:)'; // camelCase                                                   // 13
// getText('SAy.hello.to.me') == 'Say hello To me:)'; // ignore case sensitivity                                     // 14
                                                                                                                     // 15
var _languageDeps = (Meteor.isClient) ? new Deps.Dependency() : null;                                                // 16
var currentLanguage = 'en';                                                                                          // 17
                                                                                                                     // 18
// language = 'en'                                                                                                   // 19
Helpers.setLanguage = function (language) {                                                                          // 20
  if (language && language !== currentLanguage) {                                                                    // 21
    currentLanguage = language;                                                                                      // 22
    if (Meteor.isClient) _languageDeps.changed();                                                                    // 23
  }                                                                                                                  // 24
};                                                                                                                   // 25
                                                                                                                     // 26
Helpers.language = function () {                                                                                     // 27
  if (Meteor.isClient) _languageDeps.depend();                                                                       // 28
  return currentLanguage;                                                                                            // 29
};                                                                                                                   // 30
                                                                                                                     // 31
Helpers.setDictionary = function(dict) {                                                                             // 32
  languageText = dict;                                                                                               // 33
};                                                                                                                   // 34
                                                                                                                     // 35
Helpers.addDictionary = function(dict) {                                                                             // 36
  _.extend(languageText, dict);                                                                                      // 37
};                                                                                                                   // 38
                                                                                                                     // 39
// handleCase will mimic text Case making src same case as text                                                      // 40
var handleCase = function (text, src) {                                                                              // 41
  // Return lowercase                                                                                                // 42
  if (text == text.toLowerCase())                                                                                    // 43
    return src.toLowerCase();                                                                                        // 44
  // Return uppercase                                                                                                // 45
  if (text == text.toUpperCase())                                                                                    // 46
    return src.toUpperCase();                                                                                        // 47
  // Return uppercase first letter, rest lowercase                                                                   // 48
  if (text.substr(1) == text.substr(1).toLowerCase())                                                                // 49
    return src.substr(0, 1).toUpperCase() + src.substr(1).toLowerCase();                                             // 50
  // Return src withour changes                                                                                      // 51
  if (text.substr(0, 2) == text.substr(0, 2).toUpperCase())                                                          // 52
    return src;                                                                                                      // 53
  // Return CamelCase                                                                                                // 54
  return src.replace(/( [a-z])/g, function ($1) {                                                                    // 55
    return $1.toUpperCase();                                                                                         // 56
  });                                                                                                                // 57
};                                                                                                                   // 58
                                                                                                                     // 59
/**                                                                                                                  // 60
 *                                                                                                                   // 61
 * @param {string} text                                                                                              // 62
 * @param {string} [lang]                                                                                            // 63
 * @return {string}                                                                                                  // 64
 */                                                                                                                  // 65
Helpers.getText = function (text, lang) {                                                                            // 66
  var txt = text.toLowerCase();                                                                                      // 67
  var langText = languageText && languageText[txt];                                                                  // 68
  var langKey = (typeof lang === 'string') ? lang : Helpers.language();                                              // 69
  return handleCase(text, (langText) ? ( (langText[langKey]) ? langText[langKey] : langText.en) : '[' + text + ']');
};                                                                                                                   // 71
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/raix_handlebar-helpers/helpers.operators.js                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// Forward compability                                                                                               // 1
if (typeof UI === 'undefined' || typeof UI.registerHelper !== 'function') {                                          // 2
  UI = {                                                                                                             // 3
    registerHelper: function(name, f) {                                                                              // 4
      if (typeof Handlebars !== 'undefined') {                                                                       // 5
        return Handlebars.registerHelper(name, f);                                                                   // 6
      } else {                                                                                                       // 7
        throw new Error('No UI or Handlebars found');                                                                // 8
      }                                                                                                              // 9
    }                                                                                                                // 10
  };                                                                                                                 // 11
}                                                                                                                    // 12
                                                                                                                     // 13
if (typeof UI !== 'undefined') {                                                                                     // 14
    UI.registerHelper('getLength', function (a) {                                                                    // 15
      return a && a.length;                                                                                          // 16
    });                                                                                                              // 17
                                                                                                                     // 18
    UI.registerHelper('isSelected', function (a, b) {                                                                // 19
      return (a === b) ? { selected: 'selected' } : null;                                                            // 20
    });                                                                                                              // 21
                                                                                                                     // 22
    UI.registerHelper('isChecked', function (a, b) {                                                                 // 23
      return (a === b) ? { checked: 'checked' } : null;                                                              // 24
    });                                                                                                              // 25
                                                                                                                     // 26
    UI.registerHelper('cutString', function (str, len) {                                                             // 27
      return (str.length > len)?str.substr(0, Math.max(len-3, 0))+'...':str;                                         // 28
    });                                                                                                              // 29
                                                                                                                     // 30
    UI.registerHelper('$eq', function (a, b) {                                                                       // 31
      return (a === b); //Only text, numbers, boolean - not array & objects                                          // 32
    });                                                                                                              // 33
                                                                                                                     // 34
    UI.registerHelper('$neq', function (a, b) {                                                                      // 35
      return (a !== b); //Only text, numbers, boolean - not array & objects                                          // 36
    });                                                                                                              // 37
                                                                                                                     // 38
    UI.registerHelper('$in', function (a, b, c, d) {                                                                 // 39
      return ( a === b || a === c || a === d);                                                                       // 40
    });                                                                                                              // 41
                                                                                                                     // 42
    UI.registerHelper('$nin', function (a, b, c, d) {                                                                // 43
      return ( a !== b && a !== c && a !== d);                                                                       // 44
    });                                                                                                              // 45
                                                                                                                     // 46
    UI.registerHelper('$exists', function (a) {                                                                      // 47
      return ( a !== undefined);                                                                                     // 48
    });                                                                                                              // 49
                                                                                                                     // 50
    UI.registerHelper('$lt', function (a, b) {                                                                       // 51
      return (a < b);                                                                                                // 52
    });                                                                                                              // 53
                                                                                                                     // 54
    UI.registerHelper('$gt', function (a, b) {                                                                       // 55
      return (a > b);                                                                                                // 56
    });                                                                                                              // 57
                                                                                                                     // 58
    UI.registerHelper('$lte', function (a, b) {                                                                      // 59
      return (a <= b);                                                                                               // 60
    });                                                                                                              // 61
                                                                                                                     // 62
    UI.registerHelper('$gte', function (a, b) {                                                                      // 63
      return (a >= b);                                                                                               // 64
    });                                                                                                              // 65
                                                                                                                     // 66
                                                                                                                     // 67
    UI.registerHelper('$and', function (a, b) {                                                                      // 68
      return (a && b);                                                                                               // 69
    });                                                                                                              // 70
                                                                                                                     // 71
    UI.registerHelper('$or', function (a, b) {                                                                       // 72
      return (a || b);                                                                                               // 73
    });                                                                                                              // 74
                                                                                                                     // 75
    UI.registerHelper('$not', function (a) {                                                                         // 76
      return (!a);                                                                                                   // 77
    });                                                                                                              // 78
                                                                                                                     // 79
    UI.registerHelper('nl2br', function (text) {                                                                     // 80
        var nl2br = (text + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br>' + '$2');                      // 81
        return new Spacebars.SafeString(nl2br);                                                                      // 82
    });                                                                                                              // 83
                                                                                                                     // 84
    UI.registerHelper('getText', function (text, lang) { // Deprecating                                              // 85
      var langKey = lang || null;                                                                                    // 86
      return Helpers.getText(text, langKey);                                                                         // 87
    });                                                                                                              // 88
                                                                                                                     // 89
  UI.registerHelper("$mapped", function(arr) {                                                                       // 90
    if(!Array.isArray(arr)){                                                                                         // 91
      try {                                                                                                          // 92
        arr = arr.fetch()                                                                                            // 93
      }                                                                                                              // 94
      catch (e){                                                                                                     // 95
        console.log("Error in $mapped: perhaps you aren't sending in a collection or array.")                        // 96
        return [];                                                                                                   // 97
      }                                                                                                              // 98
    }                                                                                                                // 99
                                                                                                                     // 100
    var $length = arr.length;                                                                                        // 101
                                                                                                                     // 102
    var mappedArray = arr.map(function(item,index) {                                                                 // 103
      item.$length = $length;                                                                                        // 104
      item.$index = index;                                                                                           // 105
      item.$first = index === 0;                                                                                     // 106
      item.$last  = index === $length-1;                                                                             // 107
      return item;                                                                                                   // 108
    });                                                                                                              // 109
                                                                                                                     // 110
    return mappedArray || [];                                                                                        // 111
  });                                                                                                                // 112
                                                                                                                     // 113
    // UI.registerHelper('userRole', function ( /* arguments */) {                                                   // 114
    //   var role = Session.get('currentRole');                                                                      // 115
    //   return _.any(arguments, function(value) { return (value == role); });                                       // 116
    // });                                                                                                           // 117
                                                                                                                     // 118
    /*                                                                                                               // 119
        Then $uper helper - Credit goes to @belisarius222 aka Ted Blackman for sparking an idear for a solution      // 120
    */                                                                                                               // 121
    Helpers.superScope = {};                                                                                         // 122
                                                                                                                     // 123
    Helpers.addScope = function(name, obj) {                                                                         // 124
      // TODO: Get rid of underscore                                                                                 // 125
      Helpers.superScope[name] = _.bind(function() { return this; }, obj);                                           // 126
    };                                                                                                               // 127
                                                                                                                     // 128
    Helpers.removeScope = function(name) {                                                                           // 129
      delete UI._globalHelpers[name];                                                                                // 130
      delete Helpers.superScope[name];                                                                               // 131
    };                                                                                                               // 132
                                                                                                                     // 133
    Helpers.addScope('Session', Session);                                                                            // 134
    Helpers.addScope('Meteor', Meteor);                                                                              // 135
                                                                                                                     // 136
    UI.registerHelper('$', function() {                                                                              // 137
      return Helpers.superScope;                                                                                     // 138
    });                                                                                                              // 139
}                                                                                                                    // 140
                                                                                                                     // 141
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['raix:handlebar-helpers'] = {}, {
  Helpers: Helpers
});

})();
