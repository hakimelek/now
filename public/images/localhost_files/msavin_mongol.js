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
var Template = Package.templating.Template;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Mongo = Package.mongo.Mongo;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var MeteorToysDict, Mongol, updData, newId, self, MongolEditingStatus, Mongol_InlineEditor, current, content, DocumentPosition, CurrentCollection, a, b, colorized, MeteorToys_Sub, thisishack, sessionKey, CollectionName, CollectionCount, CurrentDocument, DocumentID, ValidatedCurrentDocument, list, docID, docIndex, currentDoc, newPosition;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/lib/common.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Grab the Dict                                                                                                       // 1
if (Meteor.isClient) {                                                                                                 // 2
  Meteor.startup(function () {                                                                                         // 3
    MeteorToysDict = Package["meteortoys:toykit"].MeteorToys;                                                          // 4
  })                                                                                                                   // 5
}                                                                                                                      // 6
                                                                                                                       // 7
// Create object and reserve name across the package                                                                   // 8
if (Mongol === undefined) {                                                                                            // 9
  Mongol = {};                                                                                                         // 10
}                                                                                                                      // 11
                                                                                                                       // 12
Mongol = {                                                                                                             // 13
  'getDocumentUpdate': function (data) {                                                                               // 14
    var elementID = 'MongolDoc_' + data,                                                                               // 15
      newData = false;                                                                                                 // 16
      updData = document.getElementById(elementID);                                                                    // 17
      if (updData) {                                                                                                   // 18
        newData = updData.textContent;                                                                                 // 19
      }                                                                                                                // 20
                                                                                                                       // 21
    return newData;                                                                                                    // 22
  },                                                                                                                   // 23
  'error': function (data) {                                                                                           // 24
    switch (data) {                                                                                                    // 25
      case "json.parse":                                                                                               // 26
        alert("There is an error with your JSON syntax.\n\nNote: keys and string values need double quotes.");         // 27
        break;                                                                                                         // 28
      case "duplicate":                                                                                                // 29
        alert("Strange, there was an error duplicating your document.");                                               // 30
        break;                                                                                                         // 31
      case "remove":                                                                                                   // 32
        alert("Strange, there was an error removing your document.");                                                  // 33
        break;                                                                                                         // 34
      case "insert":                                                                                                   // 35
        alert("Strange, there was an error inserting your document.");                                                 // 36
        break;                                                                                                         // 37
      case "update":                                                                                                   // 38
        alert("There was an error updating your document. Please review your changes and try again.");                 // 39
        break;                                                                                                         // 40
      default:                                                                                                         // 41
        return "Unknown Error";                                                                                        // 42
        break;                                                                                                         // 43
    }                                                                                                                  // 44
  },                                                                                                                   // 45
  'parse': function (data) {                                                                                           // 46
      var newObject = null;                                                                                            // 47
      try {                                                                                                            // 48
        var reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;                // 49
        var dateParser = function (key, value) {                                                                       // 50
          if (_.isString(value)) {                                                                                     // 51
            var a = reISO.exec(value);                                                                                 // 52
            if (a) {                                                                                                   // 53
              return new Date(value);                                                                                  // 54
            }                                                                                                          // 55
          }                                                                                                            // 56
          return value;                                                                                                // 57
        }                                                                                                              // 58
        newObject = JSON.parse(data, dateParser);                                                                      // 59
      }                                                                                                                // 60
      catch (error) {                                                                                                  // 61
        Mongol.error("json.parse");                                                                                    // 62
      }                                                                                                                // 63
      return newObject;                                                                                                // 64
  },                                                                                                                   // 65
  'detectCollections': function () {                                                                                   // 66
    if (MeteorToysDict.get('Mongol') === undefined) {                                                                  // 67
        // Note: this returns the actual mongo collection name                                                         // 68
        var collections = _.map(Mongo.Collection.getAll(), function (collection) {                                     // 69
        return collection.name;                                                                                        // 70
      });                                                                                                              // 71
                                                                                                                       // 72
      var defaults = {                                                                                                 // 73
        'collections': collections,                                                                                    // 74
      };                                                                                                               // 75
                                                                                                                       // 76
      MeteorToysDict.set("Mongol", defaults);                                                                          // 77
                                                                                                                       // 78
    }                                                                                                                  // 79
  },                                                                                                                   // 80
  'hideCollection': function (collectionName) {                                                                        // 81
                                                                                                                       // 82
    var MongolConfig = MeteorToysDict.get("Mongol"),                                                                   // 83
        collections  = MongolConfig.collections;                                                                       // 84
                                                                                                                       // 85
    collections = _.without(collections, collectionName);                                                              // 86
    MongolConfig.collections = collections;                                                                            // 87
    MeteorToysDict.set("Mongol", MongolConfig);                                                                        // 88
                                                                                                                       // 89
  },                                                                                                                   // 90
  'showCollection': function (collectionName) {                                                                        // 91
    // In case a collection does not get detected, like a local one                                                    // 92
    var MongolConfig = MeteorToysDict.get("Mongol"),                                                                   // 93
        collections  = MongolConfig.collections;                                                                       // 94
                                                                                                                       // 95
    collections.push(collectionName);                                                                                  // 96
                                                                                                                       // 97
    MeteorToysDict.set("Mongol", MongolConfig);                                                                        // 98
  },                                                                                                                   // 99
  'hideVelocity': function () {                                                                                        // 100
    this.hideCollection('velocityTestFiles');                                                                          // 101
    this.hideCollection('velocityFixtureFiles');                                                                       // 102
    this.hideCollection('velocityTestReports');                                                                        // 103
    this.hideCollection('velocityAggregateReports');                                                                   // 104
    this.hideCollection('velocityLogs');                                                                               // 105
    this.hideCollection('velocityMirrors');                                                                            // 106
    this.hideCollection('velocityOptions');                                                                            // 107
  },                                                                                                                   // 108
  'hideMeteorToys': function () {                                                                                      // 109
    this.hideCollection("MeteorToys.Impersonate");                                                                     // 110
    this.hideCollection("MeteorToys.JetSetter");                                                                       // 111
    this.hideCollection("MeteorToys.Mongol");                                                                          // 112
    this.hideCollection("MeteorToys.AutoPub");                                                                         // 113
    this.hideCollection("MeteorToys.Email");                                                                           // 114
    this.hideCollection("MeteorToys.Result");                                                                          // 115
    this.hideCollection("MeteorToys.Throttle");                                                                        // 116
  },                                                                                                                   // 117
  'hideMeteor': function () {                                                                                          // 118
    this.hideCollection("meteor_accounts_loginServiceConfiguration")                                                   // 119
    this.hideCollection("meteor_autoupdate_clientVersions")                                                            // 120
  },                                                                                                                   // 121
  'Collection': function (collectionName) {                                                                            // 122
                                                                                                                       // 123
    // Go through a variety of means of trying to return the correct collection                                        // 124
    return Mongo.Collection.get(collectionName)                                                                        // 125
      // This should automatically match all collections by default                                                    // 126
      // including namespaced collections                                                                              // 127
                                                                                                                       // 128
    || ((Meteor.isServer) ? eval(collectionName) : Meteor._get.apply(null,[window].concat(collectionName.split('.'))))
    // For user defined collection names                                                                               // 130
    // in the form of Meteor's Mongo.Collection names as strings                                                       // 131
                                                                                                                       // 132
    || ((Meteor.isServer) ? eval(firstToUpper(collectionName)) : Meteor._get.apply(null,[window].concat(firstToUpper(collectionName).split('.'))))
    // For user defined collections where the user has typical upper-case collection names                             // 134
    // but they've put actual mongodb collection names into the Mongol config instead of Meteor's Mongo.Collection names as strings
                                                                                                                       // 136
    || null;                                                                                                           // 137
    // If the user has gone for unconventional casing of collection names,                                             // 138
    // they'll have to get them right (i.e. Meteor's Mongo.Collection names as string) in the Mongol config manually   // 139
                                                                                                                       // 140
    // Changes the first character of a string to upper case                                                           // 141
                                                                                                                       // 142
    function firstToUpper(text) {                                                                                      // 143
                                                                                                                       // 144
      return text.charAt(0).toUpperCase() + text.substr(1);                                                            // 145
                                                                                                                       // 146
    }                                                                                                                  // 147
  },                                                                                                                   // 148
  'insertDoc': function (MongolCollection, documentData) {                                                             // 149
                                                                                                                       // 150
    check(MongolCollection, Match.Any);                                                                                // 151
    check(documentData, Match.Any);                                                                                    // 152
                                                                                                                       // 153
    if (!!Package['aldeed:simple-schema'] && !!Package['aldeed:collection2'] && _.isFunction(MongolCollection.simpleSchema) && MongolCollection._c2) {
      // This is to nullify the effects of SimpleSchema/Collection2                                                    // 155
      newId = MongolCollection.insert(documentData, {                                                                  // 156
        filter: false,                                                                                                 // 157
        autoConvert: false,                                                                                            // 158
        removeEmptyStrings: false,                                                                                     // 159
        validate: false                                                                                                // 160
      });                                                                                                              // 161
    }                                                                                                                  // 162
    else {                                                                                                             // 163
      newId = MongolCollection.insert(documentData);                                                                   // 164
    }                                                                                                                  // 165
    return newId;                                                                                                      // 166
  }                                                                                                                    // 167
}                                                                                                                      // 168
                                                                                                                       // 169
                                                                                                                       // 170
                                                                                                                       // 171
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_header/template.header.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_header");                                                                                 // 2
Template["Mongol_header"] = new Template("Template.Mongol_header", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return {                                                                                                           // 6
      name: Spacebars.call("mongol_618")                                                                               // 7
    };                                                                                                                 // 8
  }, function() {                                                                                                      // 9
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {                                     // 10
      return [ "\n\n    ", HTML.STRONG("Mongol"), HTML.BR(), "\n    ", HTML.DIV({                                      // 11
        "class": "Mongol_contentView"                                                                                  // 12
      }, "\n    ", HTML.Comment("  "), "\n      ", HTML.DIV({                                                          // 13
        "class": "Mongol_docMenu",                                                                                     // 14
        style: "text-indent: 8px"                                                                                      // 15
      }, "\n        In-App MongoDB Editor\n      "), "\n      ", HTML.DIV({                                            // 16
        "class": "Mongol_documentViewer "                                                                              // 17
      }, "\n", HTML.PRE({                                                                                              // 18
        "class": "MeteorToys-off"                                                                                      // 19
      }, "{ \n  ", HTML.SPAN({                                                                                         // 20
        "class": "MeteorToys_key"                                                                                      // 21
      }, '"created_by"'), ': "', HTML.A({                                                                              // 22
        href: "http://maxsavin.com"                                                                                    // 23
      }, "Max Savin"), '",\n  ', HTML.SPAN({                                                                           // 24
        "class": "MeteorToys_key"                                                                                      // 25
      }, '"docs_at"'), ':    "', HTML.A({                                                                              // 26
        href: "https://meteor.toys"                                                                                    // 27
      }, "Meteor Toys"), '",\n  ', HTML.SPAN({                                                                         // 28
        "class": "MeteorToys_key"                                                                                      // 29
      }, '"license"'), ':    "', HTML.A({                                                                              // 30
        href: "https://github.com/MeteorToys/allthings/blob/master/LICENSE.md"                                         // 31
      }, "MT License"), '",\n}\n'), "\n      "), "\n    ", HTML.Comment("  "), "\n    "), "\n\n  " ];                  // 32
    });                                                                                                                // 33
  });                                                                                                                  // 34
}));                                                                                                                   // 35
                                                                                                                       // 36
Template.__checkName("Mongol_header_pro");                                                                             // 37
Template["Mongol_header_pro"] = new Template("Template.Mongol_header_pro", (function() {                               // 38
  var view = this;                                                                                                     // 39
  return Blaze._TemplateWith(function() {                                                                              // 40
    return {                                                                                                           // 41
      name: Spacebars.call("cmongol_618")                                                                              // 42
    };                                                                                                                 // 43
  }, function() {                                                                                                      // 44
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {                                     // 45
      return [ "\n    ", HTML.STRONG("Mongol Pro"), HTML.BR(), "\n    ", HTML.DIV({                                    // 46
        "class": "Mongol_contentView"                                                                                  // 47
      }, "\n      ", HTML.Comment("  "), "\n      ", HTML.DIV({                                                        // 48
        "class": "Mongol_docMenu",                                                                                     // 49
        style: "text-indent: 8px"                                                                                      // 50
      }, "\n        Reset a Collection\n      "), "\n      ", HTML.DIV({                                               // 51
        "class": "Mongol_documentViewer ",                                                                             // 52
        style: "padding-top: 0px"                                                                                      // 53
      }, "\n        ", HTML.Comment(' <div class="MeteorToys_row Mongol_Impersonation MeteorToys_row_hoverable" style="margin-top: 0px">\n          Reset All Collections\n        </div> '), "\n        ", HTML.DIV({
        "class": "MeteorToys_row Mongol_All MeteorToys_row_hoverable",                                                 // 55
        style: "margin-top: 0px; line-height: 20px"                                                                    // 56
      }, "\n          All Collections + localStorage\n        "), "\n        ", HTML.DIV({                             // 57
        "class": "MeteorToys_row Mongol_MeteorToys MeteorToys_row_hoverable",                                          // 58
        style: "margin-top: 0px; line-height: 20px"                                                                    // 59
      }, "\n          Meteor Toys\n        "), "\n        ", HTML.DIV({                                                // 60
        "class": "MeteorToys_row Mongol_Impersonation MeteorToys_row_hoverable",                                       // 61
        style: "margin-top: 0px; line-height: 20px"                                                                    // 62
      }, "\n          Authenticate Toy\n        "), "\n        ", Blaze.Each(function() {                              // 63
        return Spacebars.call(view.lookup("collection"));                                                              // 64
      }, function() {                                                                                                  // 65
        return [ "\n          ", Blaze.If(function() {                                                                 // 66
          return Spacebars.call(view.lookup("."));                                                                     // 67
        }, function() {                                                                                                // 68
          return [ "\n            ", HTML.DIV({                                                                        // 69
            "class": "MeteorToys_row MeteorToys_row_reset MeteorToys_row_hoverable",                                   // 70
            style: "margin-top: 0px; line-height: 20px"                                                                // 71
          }, "\n              ", Blaze.View("lookup:.", function() {                                                   // 72
            return Spacebars.mustache(view.lookup("."));                                                               // 73
          }), " \n            "), "\n          " ];                                                                    // 74
        }), "\n        " ];                                                                                            // 75
      }), "\n      "), "\n    "), "\n  " ];                                                                            // 76
    });                                                                                                                // 77
  });                                                                                                                  // 78
}));                                                                                                                   // 79
                                                                                                                       // 80
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_header/header.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.Mongol_header_pro.events({                                                                                    // 1
  'click .MeteorToys_row_reset': function () {                                                                         // 2
    self = String(this);                                                                                               // 3
    if (confirm('This will permanently remove all the documents in ' + self  + '.')) {                                 // 4
      Meteor.call('Mongol_resetCollection', self, function (e, r) {                                                    // 5
        if (e) {                                                                                                       // 6
          alert("Sorry, there was an error removing " + self + '.')                                                    // 7
        }                                                                                                              // 8
      })                                                                                                               // 9
    }                                                                                                                  // 10
  },                                                                                                                   // 11
  'click .MeteorToys_row_reset_all': function () {                                                                     // 12
    // self = String(this);                                                                                            // 13
    if (confirm('This will permanently remove all the documents in your collections.')) {                              // 14
      Meteor.call('Mongol_resetCollections', self, function (e, r) {                                                   // 15
        if (e) {                                                                                                       // 16
          alert("Sorry, there was an error removing your collections.");                                               // 17
        }                                                                                                              // 18
      })                                                                                                               // 19
    }                                                                                                                  // 20
  },                                                                                                                   // 21
  'click .Mongol_Impersonation': function () {                                                                         // 22
    self = "MeteorToys.Impersonate";                                                                                   // 23
    if (confirm('This will reset your Authentication recents list')) {                                                 // 24
      Meteor.call('Mongol_resetCollection', self, function (e, r) {                                                    // 25
        if (e) {                                                                                                       // 26
          alert("Sorry, there was an error removing " + self + '.')                                                    // 27
        }                                                                                                              // 28
      })                                                                                                               // 29
    }                                                                                                                  // 30
  },                                                                                                                   // 31
  'click .Mongol_MeteorToys': function (){                                                                             // 32
    if (confirm('This will reset all your Meteor Toys data.')) {                                                       // 33
      Meteor.call('Mongol_resetMeteorToys', self, function (e, r) {                                                    // 34
        if (e) {                                                                                                       // 35
          alert("Sorry, there was an error removing " + self + '.')                                                    // 36
        }                                                                                                              // 37
      })                                                                                                               // 38
    }                                                                                                                  // 39
  },                                                                                                                   // 40
  'click .Mongol_All': function () {                                                                                   // 41
    if (confirm('This will reset all your Meteor collections and localStorage.')) {                                    // 42
      Meteor.call('Mongol_resetAll', function (e, r) {                                                                 // 43
        if (e) {                                                                                                       // 44
          alert("Sorry, there was an error removing " + self + '.')                                                    // 45
        }                                                                                                              // 46
        if (r) {                                                                                                       // 47
          MeteorToys.clear();                                                                                          // 48
          window.location.reload()                                                                                     // 49
        }                                                                                                              // 50
      })                                                                                                               // 51
    }                                                                                                                  // 52
  }                                                                                                                    // 53
});                                                                                                                    // 54
                                                                                                                       // 55
Template.Mongol_header_pro.helpers({                                                                                   // 56
  collection: function () {                                                                                            // 57
    var x = MeteorToysDict.get("Mongol");                                                                              // 58
    return x.collections;                                                                                              // 59
  }                                                                                                                    // 60
});                                                                                                                    // 61
                                                                                                                       // 62
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/doc_editor/template.docViewer.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_docViewer");                                                                              // 2
Template["Mongol_docViewer"] = new Template("Template.Mongol_docViewer", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("notEmpty"));                                                                    // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", Spacebars.include(view.lookupTemplate("Mongol_docControls")), "\n    ", Spacebars.With(function() {
      return Spacebars.call(view.lookup("activeDocument"));                                                            // 9
    }, function() {                                                                                                    // 10
      return [ "\n      ", Blaze.If(function() {                                                                       // 11
        return Spacebars.call(view.lookup("editStyle"));                                                               // 12
      }, function() {                                                                                                  // 13
        return [ "\n        ", HTML.DIV({                                                                              // 14
          "class": function() {                                                                                        // 15
            return [ "Mongol_documentViewer ", Spacebars.mustache(view.lookup("editStyle")) ];                         // 16
          },                                                                                                           // 17
          id: function() {                                                                                             // 18
            return [ "MongolDoc_", Spacebars.mustache(view.lookup("..")) ];                                            // 19
          },                                                                                                           // 20
          contenteditable: function() {                                                                                // 21
            return Spacebars.mustache(view.lookup("editContent"));                                                     // 22
          }                                                                                                            // 23
        }, "  \n          ", HTML.PRE({                                                                                // 24
          spellcheck: "false"                                                                                          // 25
        }, Blaze.View("lookup:normalJSON", function() {                                                                // 26
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("normalJSON")));                                     // 27
        })), "\n        "), "\n      " ];                                                                              // 28
      }, function() {                                                                                                  // 29
        return [ "\n        ", HTML.DIV({                                                                              // 30
          "class": function() {                                                                                        // 31
            return [ "Mongol_documentViewer ", Spacebars.mustache(view.lookup("editStyle")) ];                         // 32
          },                                                                                                           // 33
          id: function() {                                                                                             // 34
            return [ "MongolDoc_", Spacebars.mustache(view.lookup("..")) ];                                            // 35
          },                                                                                                           // 36
          contenteditable: function() {                                                                                // 37
            return Spacebars.mustache(view.lookup("editContent"));                                                     // 38
          }                                                                                                            // 39
        }, "  \n            ", HTML.PRE({                                                                              // 40
          spellcheck: "false"                                                                                          // 41
        }, Blaze.View("lookup:editableJSON", function() {                                                              // 42
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("editableJSON")));                                   // 43
        })), "\n        "), "\n      " ];                                                                              // 44
      }), "\n    " ];                                                                                                  // 45
    }, function() {                                                                                                    // 46
      return [ "\n      ", HTML.DIV({                                                                                  // 47
        "class": "Mongol_documentViewer",                                                                              // 48
        id: function() {                                                                                               // 49
          return [ "MongolDoc_", Spacebars.mustache(view.lookup(".")) ];                                               // 50
        }                                                                                                              // 51
      }, "  \n        ", HTML.PRE("No document found"), "\n      "), "\n    " ];                                       // 52
    }), "\n  " ];                                                                                                      // 53
  }, function() {                                                                                                      // 54
    return [ "\n    ", Spacebars.include(view.lookupTemplate("Mongol_docInsert")), "\n  " ];                           // 55
  });                                                                                                                  // 56
}));                                                                                                                   // 57
                                                                                                                       // 58
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/doc_editor/docViewer.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.Mongol_docViewer.helpers({                                                                                    // 1
  activeDocument: function () {                                                                                        // 2
    var collectionName = String(this);                                                                                 // 3
    var currentCollection = Mongol.Collection(collectionName);                                                         // 4
    var documents = currentCollection.find({}, {transform: null}).fetch();                                             // 5
    var sessionKey = "Mongol_" + String(this);                                                                         // 6
    var docNumber = MeteorToysDict.get(sessionKey);                                                                    // 7
    var docCurrent = documents[docNumber];                                                                             // 8
    return docCurrent;                                                                                                 // 9
  },                                                                                                                   // 10
  editableJSON: function () {                                                                                          // 11
    var docCurrent = this;                                                                                             // 12
    var json_output = JSON.stringify(docCurrent, null, 2), colorize;                                                   // 13
                                                                                                                       // 14
    if (!(json_output === undefined)) {                                                                                // 15
      colorize = Package["meteortoys:toykit"].MeteorToys_JSON.colorizeEditable(json_output);                           // 16
    } else {                                                                                                           // 17
      colorize = json_output;                                                                                          // 18
    }                                                                                                                  // 19
                                                                                                                       // 20
    return colorize;                                                                                                   // 21
  },                                                                                                                   // 22
  normalJSON: function () {                                                                                            // 23
    var docCurrent  = this,                                                                                            // 24
        json_output = JSON.stringify(docCurrent, null, 2);                                                             // 25
                                                                                                                       // 26
    return json_output;                                                                                                // 27
  },                                                                                                                   // 28
  editContent: function () {                                                                                           // 29
    var editMode = MeteorToysDict.get("Mongol_editMode");                                                              // 30
                                                                                                                       // 31
    if (editMode) {                                                                                                    // 32
      return "true";                                                                                                   // 33
    }                                                                                                                  // 34
  },                                                                                                                   // 35
  editStyle: function () {                                                                                             // 36
    var editMode = MeteorToysDict.get("Mongol_editMode");                                                              // 37
                                                                                                                       // 38
    if (editMode) {                                                                                                    // 39
      return "Mongol_editable";                                                                                        // 40
    }                                                                                                                  // 41
  },                                                                                                                   // 42
  notEmpty: function () {                                                                                              // 43
    var documentCount = Mongol.Collection(String(this)) && Mongol.Collection(String(this)).find().count() || 0;        // 44
                                                                                                                       // 45
    if (documentCount >= 1) {                                                                                          // 46
      return true;                                                                                                     // 47
    }                                                                                                                  // 48
  }                                                                                                                    // 49
});                                                                                                                    // 50
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/doc_editor/inline.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// There are four actions that the inline editor leverages:                                                            // 1
//  - focus in         - set editing state                                                                             // 2
//  - focus out        - save update                                                                                   // 3
//  - enter key        - focus out                                                                                     // 4
//  - escape key       - cancel                                                                                        // 5
                                                                                                                       // 6
// Loop for empty keys, if present remove it                                                                           // 7
// toggle true and false                                                                                               // 8
                                                                                                                       // 9
MongolEditingStatus = false;                                                                                           // 10
                                                                                                                       // 11
Mongol_InlineEditor = {                                                                                                // 12
  createBackup: function () {                                                                                          // 13
    current = MeteorToysDict.get("Mongol_currentCollection");                                                          // 14
    content = $("#MongolDoc_" + current).html();                                                                       // 15
    MeteorToysDict.set("Mongol_backup", content);                                                                      // 16
  },                                                                                                                   // 17
  restoreBackup: function () {                                                                                         // 18
    // Mongol_InlineEditor.removeTextSelection                                                                         // 19
    current = MeteorToysDict.get("Mongol_currentCollection");                                                          // 20
    content = MeteorToysDict.get("Mongol_backup");                                                                     // 21
    $("#MongolDoc_" + current).html(content);                                                                          // 22
  },                                                                                                                   // 23
  clearBackup: function () {                                                                                           // 24
    MeteorToysDict.set("Mongol_backup", null);                                                                         // 25
  },                                                                                                                   // 26
  getData: function () {                                                                                               // 27
    var target = MeteorToysDict.get("Mongol_currentCollection"),                                                       // 28
        data   = $("#Mongol_c" + target + " pre").text();                                                              // 29
                                                                                                                       // 30
    var newObject = null;                                                                                              // 31
                                                                                                                       // 32
    try {                                                                                                              // 33
      var reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;                  // 34
      var dateParser = function (key, value) {                                                                         // 35
        if (_.isString(value)) {                                                                                       // 36
          var a = reISO.exec(value);                                                                                   // 37
          if (a) {                                                                                                     // 38
            return new Date(value);                                                                                    // 39
          }                                                                                                            // 40
        }                                                                                                              // 41
        return value;                                                                                                  // 42
      }                                                                                                                // 43
      newObject = JSON.parse(data, dateParser);                                                                        // 44
    }                                                                                                                  // 45
    catch (error) {                                                                                                    // 46
      Mongol_InlineEditor.restoreBackup();                                                                             // 47
    }                                                                                                                  // 48
                                                                                                                       // 49
    return newObject;                                                                                                  // 50
  },                                                                                                                   // 51
  updateData: function () {                                                                                            // 52
                                                                                                                       // 53
    var collectionName = (MeteorToysDict.equals("Mongol_currentCollection", "account_618")) ? "users" : MeteorToysDict.get("Mongol_currentCollection"),
      oldObject,                                                                                                       // 55
      newObject,                                                                                                       // 56
      newData;                                                                                                         // 57
    if (MeteorToysDict.equals("Mongol_currentCollection", "account_618")) {                                            // 58
      newData = Mongol.getDocumentUpdate("account_618");                                                               // 59
      // var newObject = Mongol.parse(newData);                                                                        // 60
      newObject = Mongol_InlineEditor.getData();                                                                       // 61
      oldObject = Meteor.user();                                                                                       // 62
      // console.log(targetCollection);                                                                                // 63
      // console.log(newData);                                                                                         // 64
      // console.log(newObject);                                                                                       // 65
    } else {                                                                                                           // 66
      var sessionKey = "Mongol_" + collectionName;                                                                     // 67
      DocumentPosition = MeteorToysDict.get(sessionKey),                                                               // 68
      CurrentCollection = Mongol.Collection(collectionName).find({}, {transform: null}).fetch();                       // 69
      newData   = Mongol.getDocumentUpdate(collectionName);                                                            // 70
      // var newObject = Mongol.parse(newData);                                                                        // 71
      newObject = Mongol_InlineEditor.getData();                                                                       // 72
      oldObject = CurrentCollection[DocumentPosition];                                                                 // 73
    }                                                                                                                  // 74
                                                                                                                       // 75
    //                                                                                                                 // 76
    delete newObject[""];                                                                                              // 77
    delete newObject[" "];                                                                                             // 78
                                                                                                                       // 79
    if (newObject) {                                                                                                   // 80
      Meteor.call("Mongol_update", collectionName, newObject, Mongol.validateDocument(oldObject), function(error, result) {
        if (!error) {                                                                                                  // 82
          // MeteorToysDict.set('Mongol_editMode', null);                                                              // 83
          // Mongol_InlineEditor.removeTextSelection();                                                                // 84
        } else {                                                                                                       // 85
          Mongol.error('update');                                                                                      // 86
          Mongol_InlineEditor.restoreBackup();                                                                         // 87
        }                                                                                                              // 88
      });                                                                                                              // 89
    }                                                                                                                  // 90
  },                                                                                                                   // 91
  bindHotkeys: function () {                                                                                           // 92
    $('.MeteorToys_inline').keydown(function(event) {                                                                  // 93
      if (event.keyCode == 10 || event.keyCode == 13) {                                                                // 94
        event.preventDefault();                                                                                        // 95
        $('.MeteorToys_inline:focus').blur();                                                                          // 96
      }                                                                                                                // 97
                                                                                                                       // 98
      if (event.keyCode == 27) {                                                                                       // 99
        Mongol_InlineEditor.restoreBackup();                                                                           // 100
        $('.MeteorToys_inline:focus').blur();                                                                          // 101
      }                                                                                                                // 102
    });                                                                                                                // 103
  },                                                                                                                   // 104
  removeTextSelection: function () {                                                                                   // 105
    if (window.getSelection) {                                                                                         // 106
      if (window.getSelection().empty) {  // Chrome                                                                    // 107
        window.getSelection().empty();                                                                                 // 108
      } else if (window.getSelection().removeAllRanges) {  // Firefox                                                  // 109
        window.getSelection().removeAllRanges();                                                                       // 110
      }                                                                                                                // 111
    } else if (document.selection) {  // IE?                                                                           // 112
      document.selection.empty();                                                                                      // 113
    }                                                                                                                  // 114
  }                                                                                                                    // 115
}                                                                                                                      // 116
                                                                                                                       // 117
Template.Mongol_docViewer.events({                                                                                     // 118
  'dblclick .Mongol_documentViewer': function () {                                                                     // 119
    MeteorToysDict.set("Mongol_editMode", true);                                                                       // 120
  },                                                                                                                   // 121
  'focusout .MeteorToys_inline': function () {                                                                         // 122
    a = Mongol_InlineEditor.updateData();                                                                              // 123
    b = Mongol_InlineEditor.removeTextSelection();                                                                     // 124
    // console.log("focusedout");                                                                                      // 125
  },                                                                                                                   // 126
  'focusin .MeteorToys_inline': function () {                                                                          // 127
    a = Mongol_InlineEditor.bindHotkeys();                                                                             // 128
    b = Mongol_InlineEditor.createBackup();                                                                            // 129
    // console.log("focusedin");                                                                                       // 130
  },                                                                                                                   // 131
  'dblclick .MeteorToys_inline': function (e,t) {                                                                      // 132
    e.stopPropagation();                                                                                               // 133
  }                                                                                                                    // 134
});                                                                                                                    // 135
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_account/template.account.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_account");                                                                                // 2
Template["Mongol_account"] = new Template("Template.Mongol_account", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return {                                                                                                           // 6
      name: Spacebars.call("account_618")                                                                              // 7
    };                                                                                                                 // 8
  }, function() {                                                                                                      // 9
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {                                     // 10
      return [ "\n\n			", HTML.Comment(" Display sign in status "), "\n			", Blaze.If(function() {                     // 11
        return Spacebars.call(view.lookup("currentUser"));                                                             // 12
      }, function() {                                                                                                  // 13
        return [ "\n				", HTML.DIV({                                                                                  // 14
          "class": "Mongol_account_state MeteorToys-background-green"                                                  // 15
        }), "\n			" ];                                                                                                 // 16
      }, function() {                                                                                                  // 17
        return [ "\n				", HTML.DIV({                                                                                  // 18
          "class": "Mongol_account_state MeteorToys-background-red"                                                    // 19
        }), "\n			" ];                                                                                                 // 20
      }), "\n\n			", HTML.Comment(" Row Name "), "\n			", HTML.DIV({                                                   // 21
        "class": "Mongol_icon Mongol_icon_user"                                                                        // 22
      }), "\n			Account\n     \n        ", HTML.DIV({                                                                  // 23
        "class": "Mongol_contentView"                                                                                  // 24
      }, "\n\n			", HTML.Comment(" Document Viewer "), "\n			", Blaze.If(function() {                                  // 25
        return Spacebars.call(view.lookup("currentUser"));                                                             // 26
      }, function() {                                                                                                  // 27
        return [ "\n				", Spacebars.include(view.lookupTemplate("Mongol_accountViewer")), "\n			" ];                  // 28
      }, function() {                                                                                                  // 29
        return [ "\n				", Spacebars.include(view.lookupTemplate("Mongol_accountViewer_notSignedIn")), "\n			" ];      // 30
      }), "\n\n		"), "\n\n	" ];                                                                                        // 31
    });                                                                                                                // 32
  });                                                                                                                  // 33
}));                                                                                                                   // 34
                                                                                                                       // 35
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_account/account.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_account/template.accountViewer.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_accountViewer");                                                                          // 2
Template["Mongol_accountViewer"] = new Template("Template.Mongol_accountViewer", (function() {                         // 3
  var view = this;                                                                                                     // 4
  return [ Spacebars.include(view.lookupTemplate("Mongol_docControls")), "\n\n	", HTML.DIV({                           // 5
    "class": function() {                                                                                              // 6
      return [ "Mongol_documentViewer ", Spacebars.mustache(view.lookup("editStyle")) ];                               // 7
    },                                                                                                                 // 8
    id: "MongolDoc_account_618",                                                                                       // 9
    contenteditable: function() {                                                                                      // 10
      return Spacebars.mustache(view.lookup("editContent"));                                                           // 11
    }                                                                                                                  // 12
  }, "	\n		", HTML.PRE(Blaze.View("lookup:accountData", function() {                                                   // 13
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("accountData")));                                          // 14
  })), "\n	") ];                                                                                                       // 15
}));                                                                                                                   // 16
                                                                                                                       // 17
Template.__checkName("Mongol_accountViewer_notSignedIn");                                                              // 18
Template["Mongol_accountViewer_notSignedIn"] = new Template("Template.Mongol_accountViewer_notSignedIn", (function() {
  var view = this;                                                                                                     // 20
  return HTML.Raw('<div class="Mongol_docMenu">\n			<div class="Mongol_docBar1" style="text-indent: 8px">\n				Not Signed In\n			</div>\n		</div>\n	<div class="Mongol_documentViewer">	\n		<!-- Nothing -->\n	</div>');
}));                                                                                                                   // 22
                                                                                                                       // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_account/accountViewer.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.Mongol_accountViewer.helpers({                                                                                // 1
  accountData: function () {                                                                                           // 2
                                                                                                                       // 3
    var docCurrent  = Meteor.user(),                                                                                   // 4
        json_output = JSON.stringify(docCurrent, null, 2);                                                             // 5
                                                                                                                       // 6
        if (MeteorToysDict.get("Mongol_editMode")) {                                                                   // 7
          colorized = json_output                                                                                      // 8
        } else {                                                                                                       // 9
          colorized = Package["meteortoys:toykit"].MeteorToys.colorizeEditable(json_output);                           // 10
        }                                                                                                              // 11
    return colorized;                                                                                                  // 12
                                                                                                                       // 13
  },                                                                                                                   // 14
  editContent: function () {                                                                                           // 15
                                                                                                                       // 16
    var editMode = MeteorToysDict.get("Mongol_editMode");                                                              // 17
                                                                                                                       // 18
    if (editMode) {                                                                                                    // 19
      return "true";                                                                                                   // 20
    }                                                                                                                  // 21
                                                                                                                       // 22
  },                                                                                                                   // 23
  editStyle: function () {                                                                                             // 24
                                                                                                                       // 25
    var editMode = MeteorToysDict.get("Mongol_editMode");                                                              // 26
                                                                                                                       // 27
    if (editMode) {                                                                                                    // 28
      return "Mongol_editable";                                                                                        // 29
    }                                                                                                                  // 30
                                                                                                                       // 31
  },                                                                                                                   // 32
  usercode: function () {                                                                                              // 33
                                                                                                                       // 34
    return Meteor.userId();                                                                                            // 35
                                                                                                                       // 36
  },                                                                                                                   // 37
});                                                                                                                    // 38
                                                                                                                       // 39
                                                                                                                       // 40
Template.Mongol_accountViewer.events({                                                                                 // 41
    'dblclick .Mongol_documentViewer': function () {                                                                   // 42
    MeteorToysDict.set("Mongol_editMode", true);                                                                       // 43
  },                                                                                                                   // 44
  'focusout .MeteorToys_inline': function () {                                                                         // 45
    a = Mongol_InlineEditor.updateData();                                                                              // 46
    b = Mongol_InlineEditor.removeTextSelection();                                                                     // 47
    // console.log("focusedout");                                                                                      // 48
  },                                                                                                                   // 49
  'focusin .MeteorToys_inline': function () {                                                                          // 50
    a = Mongol_InlineEditor.bindHotkeys();                                                                             // 51
    b = Mongol_InlineEditor.createBackup();                                                                            // 52
    // console.log("focusedin");                                                                                       // 53
  },                                                                                                                   // 54
  'dblclick .MeteorToys_inline': function (e,t) {                                                                      // 55
    e.stopPropagation();                                                                                               // 56
  }                                                                                                                    // 57
});                                                                                                                    // 58
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_collection_notFound/template.notFound.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_collection_notFound");                                                                    // 2
Template["Mongol_collection_notFound"] = new Template("Template.Mongol_collection_notFound", (function() {             // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return {                                                                                                           // 6
      name: Spacebars.call("no_collections")                                                                           // 7
    };                                                                                                                 // 8
  }, function() {                                                                                                      // 9
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {                                     // 10
      return [ "\n\n    ", HTML.DIV({                                                                                  // 11
        "class": "Mongol_icon Mongol_icon_collection"                                                                  // 12
      }), "No Collections", HTML.BR(), "\n    ", HTML.DIV({                                                            // 13
        "class": "Mongol_contentView"                                                                                  // 14
      }, "\n    ", HTML.Comment("  "), "\n      ", HTML.DIV({                                                          // 15
        "class": "Mongol_docMenu",                                                                                     // 16
        style: "text-indent: 8px"                                                                                      // 17
      }, "\n        None Detected\n      "), "\n      ", HTML.DIV({                                                    // 18
        "class": "Mongol_documentViewer "                                                                              // 19
      }, "\n\n        If you think this is an error,", HTML.BR(), "\n        please report it on ", HTML.A({           // 20
        href: "https://github.com/msavin/Mongol",                                                                      // 21
        style: "color: #cc0000"                                                                                        // 22
      }, "GitHub"), ".\n        \n      "), "\n    ", HTML.Comment("  "), "\n    "), "\n\n  " ];                       // 23
    });                                                                                                                // 24
  });                                                                                                                  // 25
}));                                                                                                                   // 26
                                                                                                                       // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_collection_notFound/notFound.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_collection/template.collections.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_collection");                                                                             // 2
Template["Mongol_collection"] = new Template("Template.Mongol_collection", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return {                                                                                                           // 6
      name: Spacebars.call(view.lookup("."))                                                                           // 7
    };                                                                                                                 // 8
  }, function() {                                                                                                      // 9
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {                                     // 10
      return [ "\n\n		", HTML.Comment(" Collection Count "), "\n		", HTML.DIV({                                        // 11
        "class": "Mongol_counter"                                                                                      // 12
      }, "\n			", Blaze.If(function() {                                                                                // 13
        return Spacebars.call(view.lookup("collectionCount"));                                                         // 14
      }, function() {                                                                                                  // 15
        return [ "\n			", HTML.SPAN({                                                                                  // 16
          "class": "MongolHide"                                                                                        // 17
        }, Blaze.View("lookup:currentPosition", function() {                                                           // 18
          return Spacebars.mustache(view.lookup("currentPosition"));                                                   // 19
        }), "/") ];                                                                                                    // 20
      }), Blaze.View("lookup:collectionCount", function() {                                                            // 21
        return Spacebars.mustache(view.lookup("collectionCount"));                                                     // 22
      }), "\n		"), "\n\n		", HTML.Comment(" Collection Name "), "\n		", HTML.DIV({                                     // 23
        "class": "Mongol_row_name"                                                                                     // 24
      }, HTML.DIV({                                                                                                    // 25
        "class": "Mongol_icon Mongol_icon_collection"                                                                  // 26
      }), Blaze.View("lookup:.", function() {                                                                          // 27
        return Spacebars.mustache(view.lookup("."));                                                                   // 28
      }), Blaze.If(function() {                                                                                        // 29
        return Spacebars.call(view.lookup("xf"));                                                                      // 30
      }, function() {                                                                                                  // 31
        return Blaze.View("lookup:xf", function() {                                                                    // 32
          return Spacebars.mustache(view.lookup("xf"));                                                                // 33
        });                                                                                                            // 34
      })), "\n    	    \n		", HTML.Comment(" Document Viewer "), "\n		", HTML.DIV({                                    // 35
        "class": "Mongol_contentView"                                                                                  // 36
      }, "\n			", Spacebars.include(view.lookupTemplate("Mongol_docViewer")), "\n		"), "\n		\n	" ];                    // 37
    });                                                                                                                // 38
  });                                                                                                                  // 39
}));                                                                                                                   // 40
                                                                                                                       // 41
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_collection/collections.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.Mongol_collection.events({                                                                                    // 1
  'click': function () {                                                                                               // 2
                                                                                                                       // 3
    var targetCollection = String(this),                                                                               // 4
        sessionKey       = "Mongol_" + targetCollection;                                                               // 5
                                                                                                                       // 6
    if (MeteorToysDict.equals("Mongol_currentCollection", targetCollection)) {                                         // 7
                                                                                                                       // 8
      // do nothing                                                                                                    // 9
                                                                                                                       // 10
    } else {                                                                                                           // 11
                                                                                                                       // 12
      // If the collection doesn't have an index key set,                                                              // 13
      // start it from the first document                                                                              // 14
                                                                                                                       // 15
      if (!MeteorToysDict.get(String(sessionKey))) {                                                                   // 16
        MeteorToysDict.set(String(sessionKey), 0);                                                                     // 17
      }                                                                                                                // 18
                                                                                                                       // 19
    }                                                                                                                  // 20
                                                                                                                       // 21
  },                                                                                                                   // 22
});                                                                                                                    // 23
                                                                                                                       // 24
Template.Mongol_collection.helpers({                                                                                   // 25
  collectionCount: function () {                                                                                       // 26
                                                                                                                       // 27
    var collectionName = String(this);                                                                                 // 28
    var collectionVar = Mongol.Collection(collectionName);                                                             // 29
                                                                                                                       // 30
    var count = collectionVar && collectionVar.find().count() || 0;                                                    // 31
                                                                                                                       // 32
    return count;                                                                                                      // 33
                                                                                                                       // 34
  },                                                                                                                   // 35
  currentPosition: function () {                                                                                       // 36
                                                                                                                       // 37
    var targetCollection = String(this);                                                                               // 38
    var sessionKey = "Mongol_" + targetCollection;                                                                     // 39
                                                                                                                       // 40
    var current = MeteorToysDict.get(sessionKey);                                                                      // 41
    var count = current + 1;                                                                                           // 42
                                                                                                                       // 43
    return count;                                                                                                      // 44
                                                                                                                       // 45
  }                                                                                                                    // 46
});                                                                                                                    // 47
                                                                                                                       // 48
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_trash/template.main.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_trash");                                                                                  // 2
Template["Mongol_trash"] = new Template("Template.Mongol_trash", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return {                                                                                                           // 6
      name: Spacebars.call("trash")                                                                                    // 7
    };                                                                                                                 // 8
  }, function() {                                                                                                      // 9
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {                                     // 10
      return [ "\n	  \n		", HTML.DIV({                                                                                 // 11
        "class": "Mongol_counter"                                                                                      // 12
      }, "\n			", Blaze.If(function() {                                                                                // 13
        return Spacebars.call(view.lookup("collectionCount"));                                                         // 14
      }, function() {                                                                                                  // 15
        return [ "\n				", HTML.SPAN({                                                                                 // 16
          "class": "MongolHide"                                                                                        // 17
        }, Blaze.View("lookup:currentPosition", function() {                                                           // 18
          return Spacebars.mustache(view.lookup("currentPosition"));                                                   // 19
        }), "/") ];                                                                                                    // 20
      }), Blaze.View("lookup:collectionCount", function() {                                                            // 21
        return Spacebars.mustache(view.lookup("collectionCount"));                                                     // 22
      }), "\n		"), "\n\n		", HTML.DIV({                                                                                // 23
        "class": "Mongol_row_name"                                                                                     // 24
      }, HTML.DIV({                                                                                                    // 25
        "class": "Mongol_icon Mongol_icon_trash"                                                                       // 26
      }), "Trash"), "\n\n		", Blaze.If(function() {                                                                    // 27
        return Spacebars.call(view.lookup("collectionCount"));                                                         // 28
      }, function() {                                                                                                  // 29
        return [ "\n			", Spacebars.include(view.lookupTemplate("Mongol_trash_viewer")), "\n		" ];                     // 30
      }, function() {                                                                                                  // 31
        return [ "\n			", Spacebars.include(view.lookupTemplate("Mongol_trash_empty")), "\n		" ];                      // 32
      }), "\n\n	" ];                                                                                                   // 33
    });                                                                                                                // 34
  });                                                                                                                  // 35
}));                                                                                                                   // 36
                                                                                                                       // 37
Template.__checkName("Mongol_trash_menu");                                                                             // 38
Template["Mongol_trash_menu"] = new Template("Template.Mongol_trash_menu", (function() {                               // 39
  var view = this;                                                                                                     // 40
  return HTML.DIV({                                                                                                    // 41
    "class": "Mongol_docMenu"                                                                                          // 42
  }, HTML.Raw('\n		<div class="Mongol_m_edit MeteorToys_action">Restore</div>\n		'), HTML.DIV({                        // 43
    "class": function() {                                                                                              // 44
      return [ Spacebars.mustache(view.lookup("disable_right")), " Mongol_m_right MeteorToys_action" ];                // 45
    }                                                                                                                  // 46
  }, HTML.Raw("&rsaquo;")), "\n		", HTML.DIV({                                                                         // 47
    "class": function() {                                                                                              // 48
      return [ Spacebars.mustache(view.lookup("disable_left")), " Mongol_m_left MeteorToys_action" ];                  // 49
    }                                                                                                                  // 50
  }, HTML.Raw("&lsaquo;")), "\n	");                                                                                    // 51
}));                                                                                                                   // 52
                                                                                                                       // 53
Template.__checkName("Mongol_trash_viewer");                                                                           // 54
Template["Mongol_trash_viewer"] = new Template("Template.Mongol_trash_viewer", (function() {                           // 55
  var view = this;                                                                                                     // 56
  return HTML.DIV({                                                                                                    // 57
    "class": "Mongol_contentView"                                                                                      // 58
  }, "\n		", Spacebars.include(view.lookupTemplate("Mongol_trash_menu")), "\n	    ", HTML.DIV({                        // 59
    "class": "Mongol_documentViewer"                                                                                   // 60
  }, "\n", HTML.PRE("From ", Blaze.View("lookup:collectionName", function() {                                          // 61
    return Spacebars.mustache(view.lookup("collectionName"));                                                          // 62
  }), " ", Blaze.View("lookup:currentDocument", function() {                                                           // 63
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("currentDocument")));                                      // 64
  })), "\n	    "), "\n	");                                                                                             // 65
}));                                                                                                                   // 66
                                                                                                                       // 67
Template.__checkName("Mongol_trash_empty");                                                                            // 68
Template["Mongol_trash_empty"] = new Template("Template.Mongol_trash_empty", (function() {                             // 69
  var view = this;                                                                                                     // 70
  return HTML.Raw('<div class="Mongol_contentView">\n		<div class="Mongol_docMenu" style="text-indent: 8px">Empty</div>\n		<div class="Mongol_documentViewer">\n<pre>When you remove documents,\nthey will appear here.</pre></div>\n	</div>');
}));                                                                                                                   // 72
                                                                                                                       // 73
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_trash/main.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _0x92fe=["\x4D\x6F\x6E\x67\x6F\x6C\x5F\x54\x72\x61\x73\x68\x5F\x43\x6F\x75\x6E\x74","\x67\x65\x74","\x73\x65\x74","\x65\x76\x65\x6E\x74\x73","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x74\x72\x61\x73\x68","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x4D\x6F\x6E\x67\x6F\x6C","\x4D\x6F\x6E\x67\x6F\x6C","\x6D\x73\x61\x76\x69\x6E\x3A\x6D\x6F\x6E\x67\x6F\x6C","\x63\x6F\x75\x6E\x74","\x66\x69\x6E\x64","\x54\x72\x61\x73\x68\x5F\x43\x6F\x75\x6E\x74","\x4D\x6F\x6E\x67\x6F\x6C\x5F","\x68\x65\x6C\x70\x65\x72\x73","\x66\x65\x74\x63\x68","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6F\x72\x69\x67\x69\x6E","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x64\x61\x74\x65","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x63\x6F\x6C\x6F\x72\x69\x7A\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x74\x72\x61\x73\x68\x5F\x76\x69\x65\x77\x65\x72","\x5F\x69\x64","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x69\x6E\x73\x65\x72\x74","\x54\x68\x65\x72\x65\x20\x77\x61\x73\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x20\x72\x65\x73\x74\x6F\x72\x69\x6E\x67\x20\x79\x6F\x75\x72\x20\x64\x6F\x63\x75\x6D\x65\x6E\x74\x2E","\x63\x61\x6C\x6C","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x72\x65\x6D\x6F\x76\x65","\x54\x68\x65\x72\x65\x20\x77\x61\x73\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x20\x72\x65\x6D\x6F\x76\x69\x6E\x67\x20\x64\x6F\x63\x75\x6D\x65\x6E\x74\x20\x66\x72\x6F\x6D\x20\x74\x72\x61\x73\x68\x2C","\x63\x6C\x69\x63\x6B","\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x6C\x65\x66\x74","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x64\x69\x73\x61\x62\x6C\x65\x64","\x68\x61\x73\x43\x6C\x61\x73\x73","\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x72\x69\x67\x68\x74","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x74\x72\x61\x73\x68\x5F\x6D\x65\x6E\x75"];Template[_0x92fe[4]][_0x92fe[3]]({"\x63\x6C\x69\x63\x6B":function(){if(!MeteorToysDict[_0x92fe[1]](_0x92fe[0])){MeteorToysDict[_0x92fe[2]](_0x92fe[0],0)}}});Template[_0x92fe[4]][_0x92fe[12]]({collectionCount:function(){var _0x1e90x1=_0x92fe[5];var _0x1e90x2=Package[_0x92fe[7]][_0x92fe[6]].Collection(_0x1e90x1);var _0x1e90x3=_0x1e90x2&&_0x1e90x2[_0x92fe[9]]()[_0x92fe[8]]()||0;return _0x1e90x3},currentPosition:function(){var _0x1e90x4=_0x92fe[10];var _0x1e90x5=_0x92fe[11]+_0x1e90x4;var _0x1e90x6=MeteorToysDict[_0x92fe[1]](_0x1e90x5);var _0x1e90x3=_0x1e90x6+1;return _0x1e90x3}});Template[_0x92fe[20]][_0x92fe[12]]({currentDocument:function(){var _0x1e90x1=_0x92fe[5],_0x1e90x7=MeteorToysDict[_0x92fe[1]](_0x92fe[0]),_0x1e90x8=Package[_0x92fe[7]][_0x92fe[6]].Collection(_0x92fe[5])[_0x92fe[9]]()[_0x92fe[13]]()[_0x1e90x7];if(_0x1e90x8){delete _0x1e90x8[_0x92fe[14]];delete _0x1e90x8[_0x92fe[15]];var _0x1e90x9=Package[_0x92fe[19]][_0x92fe[18]][_0x92fe[17]](JSON[_0x92fe[16]](_0x1e90x8,undefined,2));return _0x1e90x9}},collectionName:function(){var _0x1e90x1=_0x92fe[5],_0x1e90x7=MeteorToysDict[_0x92fe[1]](_0x92fe[0]),_0x1e90x8=Package[_0x92fe[7]][_0x92fe[6]].Collection(_0x92fe[5])[_0x92fe[9]]()[_0x92fe[13]]()[_0x1e90x7];if(_0x1e90x8){return _0x1e90x8[_0x92fe[14]]}}});Template[_0x92fe[32]][_0x92fe[3]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x65\x64\x69\x74":function(){var _0x1e90x1=_0x92fe[5],_0x1e90x7=MeteorToysDict[_0x92fe[1]](_0x92fe[0]),_0x1e90x8=Package[_0x92fe[7]][_0x92fe[6]].Collection(_0x92fe[5])[_0x92fe[9]]()[_0x92fe[13]]()[_0x1e90x7];var _0x1e90x4=_0x1e90x8[_0x92fe[14]];var _0x1e90xa=_0x1e90x8[_0x92fe[21]];delete _0x1e90x8[_0x92fe[14]];delete _0x1e90x8[_0x92fe[15]];Meteor[_0x92fe[24]](_0x92fe[22],_0x1e90x4,_0x1e90x8,function(_0x1e90xb,_0x1e90xc){if(_0x1e90xb){alert(_0x92fe[23])}});Meteor[_0x92fe[24]](_0x92fe[25],_0x92fe[5],_0x1e90xa,true,function(_0x1e90xb,_0x1e90xc){if(_0x1e90xb){alert(_0x92fe[26])}});var _0x1e90x5=_0x92fe[0];var _0x1e90xd=MeteorToysDict[_0x92fe[1]](_0x1e90x5);var _0x1e90x2=Package[_0x92fe[7]][_0x92fe[6]].Collection(_0x92fe[5]);var _0x1e90xe=_0x1e90x2[_0x92fe[9]]()[_0x92fe[8]]()-1;if(_0x1e90xe===_0x1e90xd){$(_0x92fe[28])[_0x92fe[27]]()}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x72\x69\x67\x68\x74":function(){if(!$(_0x92fe[31])[_0x92fe[30]](_0x92fe[29])){var _0x1e90x5=_0x92fe[0];var _0x1e90xd=MeteorToysDict[_0x92fe[1]](_0x1e90x5);var _0x1e90x2=Package[_0x92fe[7]][_0x92fe[6]].Collection(_0x92fe[5]);var _0x1e90xe=_0x1e90x2[_0x92fe[9]]()[_0x92fe[8]]()-1;if(_0x1e90xd>_0x1e90xe){MeteorToysDict[_0x92fe[2]](_0x1e90x5,0);return};if(_0x1e90xe===_0x1e90xd){MeteorToysDict[_0x92fe[2]](_0x1e90x5,0)}else {var _0x1e90xf=MeteorToysDict[_0x92fe[1]](_0x1e90x5)+1;MeteorToysDict[_0x92fe[2]](_0x1e90x5,_0x1e90xf)}}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x6C\x65\x66\x74":function(){if(!$(_0x92fe[28])[_0x92fe[30]](_0x92fe[29])){var _0x1e90x5=_0x92fe[0];var _0x1e90xd=MeteorToysDict[_0x92fe[1]](_0x1e90x5);var _0x1e90x2=Package[_0x92fe[7]][_0x92fe[6]].Collection(_0x92fe[5]);var _0x1e90xe=_0x1e90x2[_0x92fe[9]]()[_0x92fe[8]]()-1;if(_0x1e90xd>_0x1e90xe){MeteorToysDict[_0x92fe[2]](_0x1e90x5,_0x1e90xe);return};if(MeteorToysDict[_0x92fe[1]](_0x1e90x5)===0){MeteorToysDict[_0x92fe[2]](_0x1e90x5,_0x1e90xe)}else {var _0x1e90xf=MeteorToysDict[_0x92fe[1]](_0x1e90x5)-1;MeteorToysDict[_0x92fe[2]](_0x1e90x5,_0x1e90xf)}}}})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_subscriptions/template.main.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_subscriptions");                                                                          // 2
Template["Mongol_subscriptions"] = new Template("Template.Mongol_subscriptions", (function() {                         // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return {                                                                                                           // 6
      name: Spacebars.call("subscriptions_618")                                                                        // 7
    };                                                                                                                 // 8
  }, function() {                                                                                                      // 9
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {                                     // 10
      return [ "\n\n		\n        ", HTML.DIV({                                                                          // 11
        "class": "Mongol_toggle_selected_collection"                                                                   // 12
      }, "\n			", HTML.Comment(" Name "), "\n			", HTML.DIV({                                                          // 13
        "class": "Mongol_icon Mongol_icon_sub"                                                                         // 14
      }), "Subscriptions\n        "), "\n\n		", HTML.DIV({                                                             // 15
        "class": "Mongol_contentView"                                                                                  // 16
      }, "\n		", HTML.DIV({                                                                                            // 17
        "class": "Mongol_docMenu",                                                                                     // 18
        style: "text-indent: 8px"                                                                                      // 19
      }, "\n			", Blaze.View("lookup:subType", function() {                                                            // 20
        return Spacebars.mustache(view.lookup("subType"));                                                             // 21
      }), "\n		"), "\n		", HTML.Comment(" Document Viewer "), "\n		", HTML.DIV({                                       // 22
        "class": "Mongol_documentViewer",                                                                              // 23
        style: "Padding: 0px 7px !important"                                                                           // 24
      }, "\n			", Blaze.Each(function() {                                                                              // 25
        return Spacebars.call(view.lookup("subscription"));                                                            // 26
      }, function() {                                                                                                  // 27
        return [ "\n				", HTML.DIV({                                                                                  // 28
          "class": "Mongol_pubsub_row"                                                                                 // 29
        }, "\n					", HTML.DIV({                                                                                       // 30
          "class": "Mongol_pubsub_row_toggle"                                                                          // 31
        }, HTML.CharRef({                                                                                              // 32
          html: "&times;",                                                                                             // 33
          str: "×"                                                                                                     // 34
        })), "\n					", HTML.DIV({                                                                                     // 35
          "class": "Mongol_pubsub_row_name"                                                                            // 36
        }, Blaze.View("lookup:name", function() {                                                                      // 37
          return Spacebars.mustache(view.lookup("name"));                                                              // 38
        })), "\n					Params: ", Blaze.View("lookup:params", function() {                                               // 39
          return Spacebars.mustache(view.lookup("params"));                                                            // 40
        }), " \n				"), "\n			" ];                                                                                     // 41
      }, function() {                                                                                                  // 42
        return "\n				No subscriptions available\n			";                                                                // 43
      }), "\n		"), "\n		", HTML.Comment("  "), "\n	"), "\n		\n\n	" ];                                                  // 44
    });                                                                                                                // 45
  });                                                                                                                  // 46
}));                                                                                                                   // 47
                                                                                                                       // 48
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_subscriptions/main.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _0x93de=["\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x73\x75\x62","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x72\x75\x6E\x50\x75\x62\x53\x75\x62","\x64\x65\x66\x61\x75\x6C\x74\x5F\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x6F\x62\x73\x65\x72\x76\x65","\x6D\x73\x61\x76\x69\x6E\x3A\x73\x75\x62","\x6D\x73\x61\x76\x69\x6E\x3A\x6D\x6F\x6E\x67\x6F\x6C","\x5F\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x73","\x6B\x65\x79\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2F\x50\x75\x62\x53\x75\x62","\x73\x65\x74","\x67\x65\x74","\x6E\x61\x6D\x65","\x70\x61\x72\x61\x6D\x73","\x6C\x65\x6E\x67\x74\x68","\x6E\x6F\x6E\x65","\x50\x6F\x6C\x6C\x69\x6E\x67\x20\x65\x76\x65\x72\x79\x20\x33\x20\x73\x65\x63\x6F\x6E\x64\x73","\x68\x65\x6C\x70\x65\x72\x73","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x73","\x73\x74\x6F\x70","\x65\x76\x65\x6E\x74\x73"];if(!Package[_0x93de[0]]){MeteorToysDict=Package[_0x93de[2]][_0x93de[1]];MeteorToys_Sub={observe:function(){MeteorToys_Sub[_0x93de[3]]();thisishack=true;if(thisishack){setInterval(function(){MeteorToys_Sub[_0x93de[3]]()},3000)}else {Object[_0x93de[5]](Meteor[_0x93de[4]]._subscriptions,function(){MeteorToys_Sub[_0x93de[3]]()})}},runPubSub:function(){if(Package[_0x93de[6]]||Package[_0x93de[7]]){var _0x8721x1=Meteor[_0x93de[4]][_0x93de[8]],_0x8721x2=Object[_0x93de[9]](_0x8721x1);MeteorToysDict[_0x93de[11]](_0x93de[10],_0x8721x2)}}};MeteorToys_Sub[_0x93de[5]]()};Template[_0x93de[19]][_0x93de[18]]({subscription:function(){var _0x8721x3=MeteorToysDict[_0x93de[12]](_0x93de[10]);return _0x8721x3},name:function(){var _0x8721x4=Meteor[_0x93de[4]][_0x93de[8]][this]&&Meteor[_0x93de[4]][_0x93de[8]][this][_0x93de[13]];return _0x8721x4},params:function(){var _0x8721x5=Meteor[_0x93de[4]][_0x93de[8]][this]&&Meteor[_0x93de[4]][_0x93de[8]][this][_0x93de[14]];if(_0x8721x5&&_0x8721x5[_0x93de[15]]>0){return _0x8721x5}else {return _0x93de[16]}},subType:function(){return _0x93de[17]}});Template[_0x93de[19]][_0x93de[21]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x72\x6F\x77\x5F\x74\x6F\x67\x67\x6C\x65":function(){Meteor[_0x93de[4]][_0x93de[8]][this][_0x93de[20]]()}})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/doc_insert/template.docInsert.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_docInsert");                                                                              // 2
Template["Mongol_docInsert"] = new Template("Template.Mongol_docInsert", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return [ HTML.Raw('<div class="Mongol_docMenu">\n		<div class="MeteorToys_action Mongol_docMenu_insert" style="float: right">Submit</div>\n		&nbsp;Insert a Document\n	</div>\n\n	'), HTML.DIV({
    "class": "Mongol_documentViewer ",                                                                                 // 6
    id: function() {                                                                                                   // 7
      return [ "Mongol_", Spacebars.mustache(view.lookup(".")), "_newEntry" ];                                         // 8
    },                                                                                                                 // 9
    tabindex: "-1",                                                                                                    // 10
    contenteditable: "true"                                                                                            // 11
  }, "	\n", HTML.Raw("<pre>{\n\n}</pre>"), "\n\n	") ];                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/doc_insert/docInsert.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.Mongol_docInsert.events({                                                                                     // 1
  'click .Mongol_docMenu_insert': function (e, t) {                                                                    // 2
                                                                                                                       // 3
    var CollectionName = String(this),                                                                                 // 4
        newDataID      = "Mongol_" + String(this) + "_newEntry",                                                       // 5
        newData        = document.getElementById(newDataID).textContent,                                               // 6
        newObject      = Mongol.parse(newData);                                                                        // 7
                                                                                                                       // 8
    if (newObject) {                                                                                                   // 9
      Meteor.call('Mongol_insert', CollectionName, newObject, function (error, result) {                               // 10
        if (!error) {                                                                                                  // 11
          sessionKey = "Mongol_" + CollectionName;                                                                     // 12
          MeteorToysDict.set(sessionKey, 0);                                                                           // 13
          alert("Document successfully inserted.");                                                                    // 14
          t.$("#Mongol_" + CollectionName + "_newEntry").html("{<br><br>}");                                           // 15
        } else {                                                                                                       // 16
          Mongol.error("insert");                                                                                      // 17
        }                                                                                                              // 18
      });                                                                                                              // 19
    }                                                                                                                  // 20
                                                                                                                       // 21
  }                                                                                                                    // 22
});                                                                                                                    // 23
                                                                                                                       // 24
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/_component/template.component.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_Component");                                                                              // 2
Template["Mongol_Component"] = new Template("Template.Mongol_Component", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": function() {                                                                                              // 6
      return [ "Mongol_row ", Spacebars.mustache(view.lookup("active")) ];                                             // 7
    },                                                                                                                 // 8
    id: function() {                                                                                                   // 9
      return [ "Mongol_c", Spacebars.mustache(view.lookup("name")) ];                                                  // 10
    }                                                                                                                  // 11
  }, "\n		", Blaze._InOuterTemplateScope(view, function() {                                                            // 12
    return Spacebars.include(function() {                                                                              // 13
      return Spacebars.call(view.templateContentBlock);                                                                // 14
    });                                                                                                                // 15
  }), "\n	");                                                                                                          // 16
}));                                                                                                                   // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/_component/component.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _0x34af=["\x4D\x6F\x6E\x67\x6F\x6C","\x63\x6C\x6F\x73\x65","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x63\x75\x72\x72\x65\x6E\x74\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E","\x67\x65\x74","\x73\x65\x74","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x65\x64\x69\x74\x4D\x6F\x64\x65","\x77\x68\x69\x63\x68","\x6E\x61\x6D\x65","\x65\x71\x75\x61\x6C\x73","\x73\x74\x6F\x70\x50\x72\x6F\x70\x61\x67\x61\x74\x69\x6F\x6E","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x70\x72\x65\x76\x69\x65\x77","\x65\x76\x65\x6E\x74\x73","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x72\x6F\x77\x5F\x65\x78\x70\x61\x6E\x64","\x68\x65\x6C\x70\x65\x72\x73"];window[_0x34af[0]]={};window[_0x34af[0]][_0x34af[1]]=function(){if(MeteorToysDict[_0x34af[3]](_0x34af[2])){MeteorToysDict[_0x34af[4]](_0x34af[2],null);MeteorToysDict[_0x34af[4]](_0x34af[5],false)}else {MeteorToys[_0x34af[1]]()}};Template[_0x34af[12]][_0x34af[11]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x72\x6F\x77":function(_0x8b35x1,_0x8b35x2){if(_0x8b35x1[_0x34af[6]]===1){if(MeteorToysDict[_0x34af[8]](_0x34af[2],this[_0x34af[7]])){MeteorToysDict[_0x34af[4]](_0x34af[2],null)}else {MeteorToysDict[_0x34af[4]](_0x34af[2],this[_0x34af[7]])};MeteorToysDict[_0x34af[4]](_0x34af[5],false)}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x63\x6F\x6E\x74\x65\x6E\x74\x56\x69\x65\x77":function(_0x8b35x1){_0x8b35x1[_0x34af[9]]()},"\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x72\x6F\x77":function(){MeteorToysDict[_0x34af[4]](_0x34af[10],this[_0x34af[7]])}});Template[_0x34af[12]][_0x34af[14]]({active:function(){if(MeteorToysDict[_0x34af[8]](_0x34af[2],this[_0x34af[7]])){return _0x34af[13]}}})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/template.main.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol");                                                                                        // 2
Template["Mongol"] = new Template("Template.Mongol", (function() {                                                     // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    id: "Mongol",                                                                                                      // 6
    "class": function() {                                                                                              // 7
      return [ Spacebars.mustache(view.lookup("active")), " MeteorToys MeteorToys_hide_Mongol MeteorToysReset" ];      // 8
    },                                                                                                                 // 9
    oncontextmenu: "Mongol.close(); return false;"                                                                     // 10
  }, "\n\n		", Blaze.If(function() {                                                                                   // 11
    return Spacebars.call(view.lookup("MeteorToys_Pro"));                                                              // 12
  }, function() {                                                                                                      // 13
    return [ "\n		\n			", Spacebars.include(view.lookupTemplate("Mongol_header_pro")), "\n			", Spacebars.include(view.lookupTemplate("Mongol_account")), "\n\n			", Blaze.Each(function() {
      return Spacebars.call(view.lookup("Mongol_collections"));                                                        // 15
    }, function() {                                                                                                    // 16
      return [ "\n				", Spacebars.include(view.lookupTemplate("Mongol_collection")), "\n			" ];                       // 17
    }, function() {                                                                                                    // 18
      return [ "\n				", Spacebars.include(view.lookupTemplate("Mongol_collection_notFound")), "\n			" ];              // 19
    }), "\n\n	", HTML.Comment(' 		{{#each Mongol_local}}\n				{{> Mongol_collection xf="local"}}\n			{{/each}} '), "\n\n\n			", Spacebars.include(view.lookupTemplate("Mongol_trash")), "\n\n		" ];
  }, function() {                                                                                                      // 21
    return [ "\n\n			", Spacebars.include(view.lookupTemplate("Mongol_header")), "\n			", Spacebars.include(view.lookupTemplate("Mongol_account")), "\n			", Spacebars.include(view.lookupTemplate("Mongol_subscriptions")), "\n			", Blaze.Each(function() {
      return Spacebars.call(view.lookup("Mongol_collections"));                                                        // 23
    }, function() {                                                                                                    // 24
      return [ "\n				", Spacebars.include(view.lookupTemplate("Mongol_collection")), "\n			" ];                       // 25
    }, function() {                                                                                                    // 26
      return [ "\n				", Spacebars.include(view.lookupTemplate("Mongol_collection_notFound")), "\n			" ];              // 27
    }), "\n\n\n\n\n		" ];                                                                                              // 28
  }), "\n\n	");                                                                                                        // 29
}));                                                                                                                   // 30
                                                                                                                       // 31
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/main.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.startup(function() {                                                                                            // 1
                                                                                                                       // 2
  // Detect collections                                                                                                // 3
    Mongol.detectCollections();                                                                                        // 4
                                                                                                                       // 5
  // Initialize Reactive-Dict                                                                                          // 6
    MeteorToysDict = Package["meteortoys:toykit"].MeteorToys;                                                          // 7
                                                                                                                       // 8
  // Hide background collections                                                                                       // 9
    Mongol.hideMeteor();                                                                                               // 10
    Mongol.hideVelocity();                                                                                             // 11
    Mongol.hideMeteorToys();                                                                                           // 12
                                                                                                                       // 13
  // For use outside of Mongol package scope:                                                                          // 14
  // Package["msavin:mongol"].Mongol.hideCollection("mongoName");                                                      // 15
  // Package["msavin:mongol"].Mongol.showCollection("localCollection");                                                // 16
                                                                                                                       // 17
});                                                                                                                    // 18
                                                                                                                       // 19
Template.Mongol.helpers({                                                                                              // 20
  Mongol_collections: function () {                                                                                    // 21
    // returns Mongo names of collections                                                                              // 22
    var    MongolConfig = MeteorToysDict.get("Mongol");                                                                // 23
    return MongolConfig && _.without(MongolConfig.collections, null) || [];                                            // 24
  },                                                                                                                   // 25
  active: function () {                                                                                                // 26
    var MongolCollection = MeteorToysDict.get("Mongol_currentCollection");                                             // 27
    if (MongolCollection) {                                                                                            // 28
      return "Mongol_expand";                                                                                          // 29
    }                                                                                                                  // 30
  }                                                                                                                    // 31
});                                                                                                                    // 32
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/doc_controls/template.docControls.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_docControls");                                                                            // 2
Template["Mongol_docControls"] = new Template("Template.Mongol_docControls", (function() {                             // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("active"));                                                                      // 6
  }, function() {                                                                                                      // 7
    return [ "\n		\n		", HTML.DIV({                                                                                    // 8
      "class": function() {                                                                                            // 9
        return [ "Mongol_docMenu ", Spacebars.mustache(view.lookup("Mongol_docMenu_editing")) ];                       // 10
      }                                                                                                                // 11
    }, "\n			", Blaze.If(function() {                                                                                  // 12
      return Spacebars.call(view.lookup("account"));                                                                   // 13
    }, function() {                                                                                                    // 14
      return [ "\n				", HTML.DIV({                                                                                    // 15
        "class": "Mongol_docBar1"                                                                                      // 16
      }, "\n					", Blaze.If(function() {                                                                              // 17
        return Spacebars.call(view.lookup("editing"));                                                                 // 18
      }, function() {                                                                                                  // 19
        return [ "\n						", HTML.DIV({                                                                                // 20
          "class": "Mongol_edit_title"                                                                                 // 21
        }, "Update Document"), "\n						", HTML.DIV({                                                                  // 22
          "class": "MeteorToys_action Mongol_edit_save"                                                                // 23
        }, "Save"), "\n						", HTML.DIV({                                                                             // 24
          "class": "MeteorToys_action Mongol_edit_cancel"                                                              // 25
        }, "Cancel"), "\n					" ];                                                                                     // 26
      }, function() {                                                                                                  // 27
        return [ "	\n						\n                        ", HTML.Comment("For some reason, the method in place does not work for this\n                        Commenting out for now"), "\n                        ", HTML.DIV({
          "class": "MeteorToys_action Mongol_m_edit Mongol_m_updateAccount"                                            // 29
        }, "Update"), "\n						\n						", HTML.Comment(" &nbsp;Currently Read-Only "), "\n						", HTML.DIV({          // 30
          "class": "MeteorToys_action Mongol_m_signout"                                                                // 31
        }, "Sign Out"), "\n                        \n					" ];                                                         // 32
      }), "\n				"), "\n			" ];                                                                                        // 33
    }, function() {                                                                                                    // 34
      return [ "\n				", HTML.DIV({                                                                                    // 35
        "class": "Mongol_docBar1"                                                                                      // 36
      }, "\n					", Blaze.If(function() {                                                                              // 37
        return Spacebars.call(view.lookup("editing"));                                                                 // 38
      }, function() {                                                                                                  // 39
        return [ "\n						", HTML.DIV({                                                                                // 40
          "class": "Mongol_edit_title"                                                                                 // 41
        }, "Update Document"), "\n						", HTML.DIV({                                                                  // 42
          "class": "MeteorToys_action Mongol_edit_save"                                                                // 43
        }, "Save"), "\n						", HTML.DIV({                                                                             // 44
          "class": "MeteorToys_action Mongol_edit_cancel"                                                              // 45
        }, "Cancel"), "\n					" ];                                                                                     // 46
      }, function() {                                                                                                  // 47
        return [ "\n						", HTML.DIV({                                                                                // 48
          "class": "MeteorToys_action Mongol_m_edit"                                                                   // 49
        }, "Update"), "\n						", HTML.DIV({                                                                           // 50
          "class": "MeteorToys_action Mongol_m_new"                                                                    // 51
        }, "Duplicate"), "\n						", HTML.DIV({                                                                        // 52
          "class": "MeteorToys_action Mongol_m_delete"                                                                 // 53
        }, "Remove"), "\n						", HTML.DIV({                                                                           // 54
          "class": function() {                                                                                        // 55
            return [ "MeteorToys_action ", Spacebars.mustache(view.lookup("disable")), " Mongol_m_right" ];            // 56
          }                                                                                                            // 57
        }, HTML.CharRef({                                                                                              // 58
          html: "&rsaquo;",                                                                                            // 59
          str: "›"                                                                                                     // 60
        })), "\n						", HTML.DIV({                                                                                    // 61
          "class": function() {                                                                                        // 62
            return [ "MeteorToys_action ", Spacebars.mustache(view.lookup("disable")), " Mongol_m_left" ];             // 63
          }                                                                                                            // 64
        }, HTML.CharRef({                                                                                              // 65
          html: "&lsaquo;",                                                                                            // 66
          str: "‹"                                                                                                     // 67
        })), "\n					" ];                                                                                              // 68
      }), "\n				"), "\n			" ];                                                                                        // 69
    }), "	\n		"), "\n\n	" ];                                                                                           // 70
  }, function() {                                                                                                      // 71
    return [ "\n\n		", HTML.DIV({                                                                                      // 72
      "class": "Mongol_docMenu"                                                                                        // 73
    }, "\n			", HTML.DIV({                                                                                             // 74
      "class": "Mongol_docBar1"                                                                                        // 75
    }, "\n				", HTML.CharRef({                                                                                        // 76
      html: "&nbsp;",                                                                                                  // 77
      str: " "                                                                                                         // 78
    }), "\n			"), "\n		"), "\n\n	" ];                                                                                  // 79
  });                                                                                                                  // 80
}));                                                                                                                   // 81
                                                                                                                       // 82
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/doc_controls/docControls.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
// needs to be re-thought                                                                                              // 2
                                                                                                                       // 3
// Strip out functions in case documents have had methods added to them                                                // 4
                                                                                                                       // 5
Mongol.validateDocument = function (doc) {                                                                             // 6
  var validatedDoc = {};                                                                                               // 7
  _.each(doc, function (val, key) {                                                                                    // 8
    if (_.isFunction(val)) {                                                                                           // 9
      return;                                                                                                          // 10
    }                                                                                                                  // 11
    validatedDoc[key] = val;                                                                                           // 12
  });                                                                                                                  // 13
  return validatedDoc;                                                                                                 // 14
}                                                                                                                      // 15
                                                                                                                       // 16
Mongol.inlineEditingTimer = null;                                                                                      // 17
                                                                                                                       // 18
Mongol.resetInlineEditingTimer = function() {                                                                          // 19
  if (Mongol.inlineEditingTimer) {                                                                                     // 20
	Meteor.clearTimeout(Mongol.inlineEditingTimer);                                                                       // 21
  }                                                                                                                    // 22
  MeteorToysDict.set('Mongol_noInlineEditing', true);                                                                  // 23
  Mongol.inlineEditingTimer = Meteor.setTimeout(function () {                                                          // 24
    MeteorToysDict.set('Mongol_noInlineEditing', false);                                                               // 25
  },300);                                                                                                              // 26
}                                                                                                                      // 27
                                                                                                                       // 28
Template.Mongol_docControls.events({                                                                                   // 29
  'click .Mongol_m_new': function() {                                                                                  // 30
                                                                                                                       // 31
    CollectionName    = MeteorToysDict.get("Mongol_currentCollection"),                                                // 32
    DocumentPosition  = MeteorToysDict.get("Mongol_" + String(this)),                                                  // 33
    CurrentCollection = Mongol.Collection(CollectionName).find({}, {transform: null}).fetch(),                         // 34
    CollectionCount   = Mongol.Collection(CollectionName).find().count(),                                              // 35
    CurrentDocument   = CurrentCollection[DocumentPosition],                                                           // 36
    DocumentID        = CurrentDocument._id,                                                                           // 37
    sessionKey        = "Mongol_" + String(this),                                                                      // 38
    ValidatedCurrentDocument = Mongol.validateDocument(CurrentDocument);                                               // 39
                                                                                                                       // 40
    Meteor.call("Mongol_duplicate", CollectionName, ValidatedCurrentDocument._id, function(error, result) {            // 41
      if (!error) {                                                                                                    // 42
                                                                                                                       // 43
        if (Mongol.Collection(CollectionName).findOne(result)) {                                                       // 44
                                                                                                                       // 45
          // Get position of new document                                                                              // 46
          list  = Mongol.Collection(CollectionName).find({}, {transform: null}).fetch(),                               // 47
          docID = result,                                                                                              // 48
          currentDoc;                                                                                                  // 49
                                                                                                                       // 50
          docIndex = _.map(list, function(obj, index) {                                                                // 51
            if (obj._id === docID) {                                                                                   // 52
              currentDoc = index;                                                                                      // 53
            }                                                                                                          // 54
          })                                                                                                           // 55
                                                                                                                       // 56
          MeteorToysDict.set(sessionKey, Number(currentDoc));                                                          // 57
        }                                                                                                              // 58
                                                                                                                       // 59
      } else {                                                                                                         // 60
        Mongol.error("duplicate");                                                                                     // 61
      }                                                                                                                // 62
    });                                                                                                                // 63
                                                                                                                       // 64
                                                                                                                       // 65
                                                                                                                       // 66
  },                                                                                                                   // 67
  'click .Mongol_m_edit': function() {                                                                                 // 68
    MeteorToysDict.set("Mongol_editMode", true);                                                                       // 69
  },                                                                                                                   // 70
  'click .Mongol_m_delete': function() {                                                                               // 71
                                                                                                                       // 72
    var CollectionName = MeteorToysDict.get("Mongol_currentCollection"),                                               // 73
      sessionKey = "Mongol_" + String(this);                                                                           // 74
    DocumentPosition = MeteorToysDict.get(sessionKey),                                                                 // 75
      CurrentCollection = Mongol.Collection(CollectionName).find({}, {transform: null}).fetch(),                       // 76
      CollectionCount = Mongol.Collection(CollectionName).find().count();                                              // 77
                                                                                                                       // 78
    var CurrentDocument = CurrentCollection[DocumentPosition],                                                         // 79
      DocumentID = CurrentDocument._id;                                                                                // 80
                                                                                                                       // 81
                                                                                                                       // 82
                                                                                                                       // 83
    Meteor.call('Mongol_remove', CollectionName, DocumentID, function(error, result) {                                 // 84
                                                                                                                       // 85
      if (!error) {                                                                                                    // 86
        // Log the action                                                                                              // 87
        if (MeteorToysDict.shouldLog()) {                                                                              // 88
          console.log("Removed " + DocumentID + " from " + CollectionName + ". Back-up below:");                       // 89
          console.log(CurrentDocument);                                                                                // 90
        }                                                                                                              // 91
                                                                                                                       // 92
        // Adjust the position                                                                                         // 93
        if (DocumentPosition >= CollectionCount - 1) {                                                                 // 94
          newPosition = DocumentPosition - 1;                                                                          // 95
          MeteorToysDict.set(sessionKey, newPosition);                                                                 // 96
        }                                                                                                              // 97
                                                                                                                       // 98
        if (MeteorToysDict.get(sessionKey) === -1) {                                                                   // 99
          MeteorToysDict.set(sessionKey, 0);                                                                           // 100
        }                                                                                                              // 101
                                                                                                                       // 102
                                                                                                                       // 103
      } else {                                                                                                         // 104
        Mongol.error("remove");                                                                                        // 105
      }                                                                                                                // 106
                                                                                                                       // 107
    });                                                                                                                // 108
                                                                                                                       // 109
                                                                                                                       // 110
                                                                                                                       // 111
  },                                                                                                                   // 112
  'click .Mongol_m_right': function(e,t) {                                                                             // 113
    // Verify that the button is not disabled                                                                          // 114
    if (!t.$('.Mongol_m_right').hasClass('Mongol_m_disabled')) {                                                       // 115
                                                                                                                       // 116
      // Disable inline editing for 0.3s for quick flick to next doc                                                   // 117
      Mongol.resetInlineEditingTimer();                                                                                // 118
	                                                                                                                      // 119
      // Grab the key                                                                                                  // 120
                                                                                                                       // 121
      var sessionKey = "Mongol_" + String(this);                                                                       // 122
      var CurrentDocument = MeteorToysDict.get(sessionKey);                                                            // 123
      var collectionName = String(this);                                                                               // 124
      var collectionVar = Mongol.Collection(collectionName);                                                           // 125
      var collectionCount = collectionVar.find().count() - 1;                                                          // 126
                                                                                                                       // 127
      if (CurrentDocument > collectionCount) {                                                                         // 128
        MeteorToysDict.set(sessionKey, 0)                                                                              // 129
        return;                                                                                                        // 130
      }                                                                                                                // 131
                                                                                                                       // 132
      if (collectionCount === CurrentDocument) {                                                                       // 133
        // Go back to document 1                                                                                       // 134
        MeteorToysDict.set(sessionKey, 0);                                                                             // 135
      } else {                                                                                                         // 136
        // Go to next document                                                                                         // 137
        var MongolDocNumber = MeteorToysDict.get(sessionKey) + 1;                                                      // 138
        MeteorToysDict.set(sessionKey, MongolDocNumber);                                                               // 139
      }                                                                                                                // 140
                                                                                                                       // 141
    }                                                                                                                  // 142
  },                                                                                                                   // 143
  'click .Mongol_m_left': function(e,t) {                                                                              // 144
                                                                                                                       // 145
    // Verify that the button is not disabled                                                                          // 146
    if (!t.$('.Mongol_m_left').hasClass('Mongol_m_disabled')) {                                                        // 147
                                                                                                                       // 148
      // Disable inline editing for 0.3s for quick flick to next doc                                                   // 149
      Mongol.resetInlineEditingTimer();                                                                                // 150
                                                                                                                       // 151
      // Grab the key                                                                                                  // 152
      sessionKey = "Mongol_" + String(this);                                                                           // 153
      // Get the document count                                                                                        // 154
      var CurrentDocument = MeteorToysDict.get(sessionKey);                                                            // 155
      var collectionName  = String(this);                                                                              // 156
      var collectionVar   = Mongol.Collection(collectionName);                                                         // 157
      var collectionCount = collectionVar.find().count() - 1;                                                          // 158
                                                                                                                       // 159
      if (CurrentDocument > collectionCount) {                                                                         // 160
        MeteorToysDict.set(sessionKey, collectionCount)                                                                // 161
        return;                                                                                                        // 162
      }                                                                                                                // 163
                                                                                                                       // 164
      if (MeteorToysDict.get(sessionKey) === 0) {                                                                      // 165
                                                                                                                       // 166
                                                                                                                       // 167
        // Set the key to last                                                                                         // 168
        MeteorToysDict.set(sessionKey, collectionCount)                                                                // 169
      } else {                                                                                                         // 170
        var MongolDocNumber = MeteorToysDict.get(sessionKey) - 1;                                                      // 171
        MeteorToysDict.set(sessionKey, MongolDocNumber);                                                               // 172
      }                                                                                                                // 173
                                                                                                                       // 174
    }                                                                                                                  // 175
                                                                                                                       // 176
  },                                                                                                                   // 177
  'click .Mongol_edit_save': function() {                                                                              // 178
                                                                                                                       // 179
    // Get current document to get its current state                                                                   // 180
    // We need to send this to the server so we know which fields are up for change                                    // 181
    // when applying the diffing algorithm                                                                             // 182
                                                                                                                       // 183
    var collectionName = (MeteorToysDict.equals("Mongol_currentCollection", "account_618")) ? "users" : String(this);  // 184
                                                                                                                       // 185
    if (MeteorToysDict.equals("Mongol_currentCollection", "account_618")) {                                            // 186
      var newData = Mongol.getDocumentUpdate("account_618");                                                           // 187
      var newObject = Mongol.parse(newData);                                                                           // 188
      var oldObject = Meteor.user();                                                                                   // 189
      // console.log(targetCollection);                                                                                // 190
      // console.log(newData);                                                                                         // 191
      // console.log(newObject);                                                                                       // 192
    } else {                                                                                                           // 193
      var sessionKey = "Mongol_" + collectionName;                                                                     // 194
      DocumentPosition = MeteorToysDict.get(sessionKey),                                                               // 195
      CurrentCollection = Mongol.Collection(collectionName).find({}, {transform: null}).fetch();                       // 196
      var newData =   Mongol.getDocumentUpdate(collectionName);                                                        // 197
      var newObject = Mongol.parse(newData);                                                                           // 198
      var oldObject = CurrentCollection[DocumentPosition];                                                             // 199
    }                                                                                                                  // 200
                                                                                                                       // 201
    // console.log(newData);                                                                                           // 202
    // console.log(newObject);                                                                                         // 203
    // console.log(oldObject);                                                                                         // 204
                                                                                                                       // 205
    if (newObject) {                                                                                                   // 206
      Meteor.call("Mongol_update", collectionName, newObject, Mongol.validateDocument(oldObject), function(error, result) {
        if (!error) {                                                                                                  // 208
          MeteorToysDict.set('Mongol_editMode', null);                                                                 // 209
                                                                                                                       // 210
        } else {                                                                                                       // 211
          Mongol.error('update')                                                                                       // 212
        }                                                                                                              // 213
      });                                                                                                              // 214
    }                                                                                                                  // 215
  },                                                                                                                   // 216
  'click .Mongol_edit_cancel': function() {                                                                            // 217
    MeteorToysDict.set('Mongol_editMode', null);                                                                       // 218
  },                                                                                                                   // 219
  'click .Mongol_m_signout': function() {                                                                              // 220
    Meteor.logout();                                                                                                   // 221
    MeteorToysDict.set("Mongol_currentCollection", null);                                                              // 222
  },                                                                                                                   // 223
});                                                                                                                    // 224
                                                                                                                       // 225
                                                                                                                       // 226
Template.Mongol_docControls.helpers({                                                                                  // 227
  disable: function() {                                                                                                // 228
    var sessionKey = "Mongol_" + String(this);                                                                         // 229
    var CurrentDocument = MeteorToysDict.get(sessionKey);                                                              // 230
    var collectionName = String(this);                                                                                 // 231
    var collectionVar = Mongol.Collection(collectionName);                                                             // 232
    var collectionCount = collectionVar.find().count();                                                                // 233
                                                                                                                       // 234
    if (CurrentDocument >= 1) {                                                                                        // 235
      return;                                                                                                          // 236
    }                                                                                                                  // 237
                                                                                                                       // 238
    if (collectionCount === 1) {                                                                                       // 239
      return "MeteorToys_disabled";                                                                                    // 240
    }                                                                                                                  // 241
                                                                                                                       // 242
  },                                                                                                                   // 243
  editing: function() {                                                                                                // 244
    var editing = MeteorToysDict.get('Mongol_editMode');                                                               // 245
    return editing;                                                                                                    // 246
  },                                                                                                                   // 247
  editing_class: function() {                                                                                          // 248
    var edit = MeteorToysDict.get('Mongol_editMode');                                                                  // 249
    if (edit) {                                                                                                        // 250
      return "Mongol_m_wrapper_expand"                                                                                 // 251
    }                                                                                                                  // 252
  },                                                                                                                   // 253
  Mongol_docMenu_editing: function() {                                                                                 // 254
    var editMode = MeteorToysDict.get("Mongol_editMode");                                                              // 255
                                                                                                                       // 256
    if (editMode) {                                                                                                    // 257
      return "Mongol_docMenu_editing";                                                                                 // 258
    }                                                                                                                  // 259
                                                                                                                       // 260
  },                                                                                                                   // 261
  active: function() {                                                                                                 // 262
                                                                                                                       // 263
    var current = MeteorToysDict.get("Mongol_currentCollection");                                                      // 264
                                                                                                                       // 265
    // return true if collection name matches                                                                          // 266
    if (current === String(this)) {                                                                                    // 267
      return true;                                                                                                     // 268
    }                                                                                                                  // 269
                                                                                                                       // 270
    // return true if it's a user account                                                                              // 271
    if (current === "account_618") {                                                                                   // 272
      return true;                                                                                                     // 273
    }                                                                                                                  // 274
                                                                                                                       // 275
  },                                                                                                                   // 276
  account: function() {                                                                                                // 277
                                                                                                                       // 278
    var currentCollection = MeteorToysDict.get("Mongol_currentCollection");                                            // 279
    if (currentCollection === "account_618") {                                                                         // 280
      return true                                                                                                      // 281
    } else {                                                                                                           // 282
      return false                                                                                                     // 283
    }                                                                                                                  // 284
  },                                                                                                                   // 285
                                                                                                                       // 286
});                                                                                                                    // 287
                                                                                                                       // 288
// Will possibly be used in augmented document udpate UI                                                               // 289
/*Template.Mongol_docViewer.events({                                                                                   // 290
'click .Mongol_string' : function (evt,tmpl) {                                                                         // 291
var field = $(evt.target).prevAll(".Mongol_key:first").text().slice(1,-2);                                             // 292
MeteorToysDict.set('Mongol_inlineEdit',true);                                                                          // 293
Tracker.flush();                                                                                                       // 294
// Do something to trigger the editable text element                                                                   // 295
}                                                                                                                      // 296
});*/                                                                                                                  // 297
                                                                                                                       // 298
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['msavin:mongol'] = {}, {
  Mongol: Mongol
});

})();
