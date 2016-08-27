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
var Session = Package.session.Session;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var MeteorToysDict, JetSetter, CloseJetSetter, value, stringed, colorize, targetDict, target, varName, currentDict, name, contents, Dictionaries, DictNames, dictionaryName, currentSession;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/msavin_jetsetter/client/template.main.js                                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("JetSetter");                                                                               // 2
Template["JetSetter"] = new Template("Template.JetSetter", (function() {                                         // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    id: "JetSetter",                                                                                             // 6
    "class": function() {                                                                                        // 7
      return [ "MeteorToys ", Spacebars.mustache(view.lookup("expanded")), " MeteorToys_hide_JetSetter MeteorToysReset" ];
    },                                                                                                           // 9
    oncontextmenu: 'Package["msavin:jetsetter"].CloseJetSetter(); return false;'                                 // 10
  }, "\n		\n		", Blaze.If(function() {                                                                           // 11
    return Spacebars.call(view.lookup("MeteorToys_Pro"));                                                        // 12
  }, function() {                                                                                                // 13
    return [ "	\n			", Spacebars.include(view.lookupTemplate("JetSetter_header_pro")), "\n		" ];                 // 14
  }, function() {                                                                                                // 15
    return [ "\n			", Spacebars.include(view.lookupTemplate("JetSetter_header")), "\n		" ];                      // 16
  }), "\n		\n		", Blaze.If(function() {                                                                          // 17
    return Spacebars.call(view.lookup("JetSetter_oldSession"));                                                  // 18
  }, function() {                                                                                                // 19
    return [ "\n			", Spacebars.include(view.lookupTemplate("JetSetterSession")), "\n		" ];                      // 20
  }), "\n		\n		", Spacebars.include(view.lookupTemplate("JetSetter_reactive")), "\n\n	");                        // 21
}));                                                                                                             // 22
                                                                                                                 // 23
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/msavin_jetsetter/client/main.js                                                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
delete Session.all                                                                                               // 1
// Initialize Reactive-Dict                                                                                      // 2
MeteorToysDict = Package["meteortoys:toykit"].MeteorToys;                                                        // 3
                                                                                                                 // 4
Template.JetSetter.helpers({                                                                                     // 5
    expanded: function () {                                                                                      // 6
        var current = MeteorToysDict.get("JetSetter_current");                                                   // 7
        if (current) {                                                                                           // 8
            return "JetSetter_expand"                                                                            // 9
        }                                                                                                        // 10
    },                                                                                                           // 11
    JetSetter_oldSession: function () {                                                                          // 12
    	if (typeof Session.all == 'function') {                                                                     // 13
    		return false;                                                                                              // 14
    	} else {                                                                                                    // 15
    		return true;                                                                                               // 16
    	}                                                                                                           // 17
    }                                                                                                            // 18
});                                                                                                              // 19
                                                                                                                 // 20
Template.JetSetter.events({                                                                                      // 21
	'mouseover': function () {                                                                                      // 22
		$("#JetSetter").addClass("JetSetter_previewMode");                                                             // 23
	},                                                                                                              // 24
	'mouseout': function () {                                                                                       // 25
		$("#JetSetter").removeClass("JetSetter_previewMode");                                                          // 26
	},                                                                                                              // 27
})                                                                                                               // 28
                                                                                                                 // 29
JetSetter = {};                                                                                                  // 30
                                                                                                                 // 31
CloseJetSetter = function () {                                                                                   // 32
	if (Package["meteortoys:toykit"].MeteorToys.get("JetSetter_current")) {                                         // 33
        Package["meteortoys:toykit"].MeteorToys.set("JetSetter_current");                                        // 34
    } else {                                                                                                     // 35
        MeteorToys.close();                                                                                      // 36
    }                                                                                                            // 37
                                                                                                                 // 38
}                                                                                                                // 39
                                                                                                                 // 40
// JetSetter.cleaner = function (value) {                                                                        // 41
//     a = value.replace("::", "");                                                                              // 42
//     b = a.replace(":", "");                                                                                   // 43
//     c = b.replace("/", "");                                                                                   // 44
//     d = c.replace("/", "");                                                                                   // 45
//     e = d.replace("/", "");                                                                                   // 46
//     f = e.replace("-", "");                                                                                   // 47
//     g = f.replace("!", "");                                                                                   // 48
//     return g;                                                                                                 // 49
// }                                                                                                             // 50
Meteor.startup(function () {                                                                                     // 51
    if (typeof window["Session"] === 'undefined') {                                                              // 52
        if (Package["session"]) {                                                                                // 53
            window["Session"] = Package["session"].Session                                                       // 54
        }                                                                                                        // 55
    }                                                                                                            // 56
})                                                                                                               // 57
                                                                                                                 // 58
                                                                                                                 // 59
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/msavin_jetsetter/client/row/template.main.js                                                         //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("JetSetter_reactiveVar_row");                                                               // 2
Template["JetSetter_reactiveVar_row"] = new Template("Template.JetSetter_reactiveVar_row", (function() {         // 3
  var view = this;                                                                                               // 4
  return Blaze._TemplateWith(function() {                                                                        // 5
    return {                                                                                                     // 6
      name: Spacebars.call(view.lookup("componentName"))                                                         // 7
    };                                                                                                           // 8
  }, function() {                                                                                                // 9
    return Spacebars.include(view.lookupTemplate("JetSetter_Component"), function() {                            // 10
      return [ "\n		", HTML.DIV({                                                                                // 11
        "class": "JetSetter_dictTitle"                                                                           // 12
      }, "\n			", Blaze.View("lookup:..key", function() {                                                        // 13
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "key"));                                       // 14
      }), HTML.SPAN({                                                                                            // 15
        "class": "JetSetter_value_preview"                                                                       // 16
      }, ": ", Blaze.View("lookup:value", function() {                                                           // 17
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("value")));                                      // 18
      })), "\n		"), "\n		", Spacebars.include(view.lookupTemplate("JetSetter_reactiveVar_editor")), "\n	" ];     // 19
    });                                                                                                          // 20
  });                                                                                                            // 21
}));                                                                                                             // 22
                                                                                                                 // 23
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/msavin_jetsetter/client/row/main.js                                                                  //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.JetSetter_reactiveVar_row.helpers({                                                                     // 2
	'value': function () {                                                                                          // 3
		var value = undefined;                                                                                         // 4
                                                                                                                 // 5
		try {                                                                                                          // 6
			value = window[this.parent].get(this.key);                                                                    // 7
		} catch (e) {                                                                                                  // 8
			// value = false                                                                                              // 9
		}                                                                                                              // 10
                                                                                                                 // 11
		if (typeof value === 'undefined') {                                                                            // 12
			return "<em>undefined</em>";                                                                                  // 13
		} else {                                                                                                       // 14
			return JSON.stringify(value)                                                                                  // 15
		}                                                                                                              // 16
		// } else {                                                                                                    // 17
			// return false                                                                                               // 18
		// }                                                                                                           // 19
                                                                                                                 // 20
		// return this.parent;                                                                                         // 21
	},                                                                                                              // 22
	'componentName': function () {                                                                                  // 23
		return this.parent + "_" + this.key;                                                                           // 24
	}                                                                                                               // 25
})                                                                                                               // 26
                                                                                                                 // 27
                                                                                                                 // 28
                                                                                                                 // 29
                                                                                                                 // 30
                                                                                                                 // 31
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/msavin_jetsetter/client/functions.js                                                                 //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// Initialize Dict                                                                                               // 1
MeteorToysDict = Package["meteortoys:toykit"].MeteorToysDict;                                                    // 2
                                                                                                                 // 3
JetSetter = {                                                                                                    // 4
    getKeys: function () {                                                                                       // 5
                                                                                                                 // 6
        var keys = Object.getOwnPropertyNames(Session.keys);                                                     // 7
        keys = JetSetter.arrayCleaner(keys, "Meteor.");                                                          // 8
        MeteorToysDict.set("JetSetter", keys);                                                                   // 9
                                                                                                                 // 10
    },                                                                                                           // 11
    arrayCleaner: function(array, toRemove) {                                                                    // 12
                                                                                                                 // 13
        var length = toRemove.length;                                                                            // 14
                                                                                                                 // 15
        for (var i = 0; i < array.length; i++) {                                                                 // 16
            if(array[i].substr(0, length) === toRemove) {                                                        // 17
                array.splice(i, 1);                                                                              // 18
                i--;                                                                                             // 19
            }                                                                                                    // 20
        }                                                                                                        // 21
                                                                                                                 // 22
        return array;                                                                                            // 23
                                                                                                                 // 24
    }                                                                                                            // 25
}                                                                                                                // 26
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/msavin_jetsetter/client/row_editor/template.JetSetter_editor.js                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("JetSetter_reactiveVar_editor");                                                            // 2
Template["JetSetter_reactiveVar_editor"] = new Template("Template.JetSetter_reactiveVar_editor", (function() {   // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    "class": "JetSetter_editor"                                                                                  // 6
  }, "\n			\n			", Blaze.If(function() {                                                                         // 7
    return Spacebars.call(view.lookup("editing"));                                                               // 8
  }, function() {                                                                                                // 9
    return [ "\n				", HTML.DIV({                                                                                // 10
      "class": "JetSetter_editor_header"                                                                         // 11
    }, "\n					", HTML.DIV({                                                                                     // 12
      "class": "JetSetter_editor_button JetSetter_button_save"                                                   // 13
    }, "Save"), "\n					", HTML.DIV({                                                                            // 14
      "class": "JetSetter_editor_button JetSetter_button_cancel"                                                 // 15
    }, "Cancel"), "\n					Value \n				"), "\n				", HTML.DIV({                                                   // 16
      "class": "JetSetter_editor_content JetSetter_editor_content_editing",                                      // 17
      id: function() {                                                                                           // 18
        return [ "JetSetter_editor_", Spacebars.mustache(view.lookup("editorName")) ];                           // 19
      },                                                                                                         // 20
      contenteditable: "true"                                                                                    // 21
    }, "\n					", HTML.PRE(Blaze.View("lookup:editingContent", function() {                                      // 22
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("editingContent")));                               // 23
    })), "\n				"), "\n			" ];                                                                                   // 24
  }, function() {                                                                                                // 25
    return [ "\n				", HTML.DIV({                                                                                // 26
      "class": "JetSetter_editor_header"                                                                         // 27
    }, "\n					", HTML.DIV({                                                                                     // 28
      "class": "JetSetter_editor_button JetSetter_button_edit MeteorToys_action"                                 // 29
    }, "Edit"), "\n					", HTML.DIV({                                                                            // 30
      "class": "JetSetter_editor_button JetSetter_button_drop MeteorToys_action"                                 // 31
    }, "Nullify"), "\n					Value \n				"), "\n				", HTML.DIV({                                                  // 32
      "class": "JetSetter_editor_content"                                                                        // 33
    }, "\n					", HTML.PRE(Blaze.View("lookup:content", function() {                                             // 34
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("content")));                                      // 35
    })), "\n				"), "\n			" ];                                                                                   // 36
  }), "\n		");                                                                                                   // 37
}));                                                                                                             // 38
                                                                                                                 // 39
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/msavin_jetsetter/client/row_editor/JetSetter_editor.js                                               //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _0x428b=["\x6B\x65\x79","\x67\x65\x74","\x70\x61\x72\x65\x6E\x74","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x63\x6F\x6C\x6F\x72\x69\x7A\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x73\x65\x74\x74\x69\x6E\x67\x73\x5F\x65\x64\x69\x74","\x5F","\x68\x65\x6C\x70\x65\x72\x73","\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x72\x65\x61\x63\x74\x69\x76\x65\x56\x61\x72\x5F\x65\x64\x69\x74\x6F\x72","\x74\x65\x78\x74","\x23\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x65\x64\x69\x74\x6F\x72\x5F","\x70\x61\x72\x73\x65","\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x66\x61\x69\x6C\x65\x64\x5F\x63\x68\x61\x6E\x67\x65","\x73\x65\x74","\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x63\x75\x72\x72\x65\x6E\x74","\x65\x76\x65\x6E\x74\x73"];Template[_0x428b[10]][_0x428b[9]]({"\x63\x6F\x6E\x74\x65\x6E\x74":function(){value=undefined;try{value=window[this[_0x428b[2]]][_0x428b[1]](this[_0x428b[0]])}catch(e){};stringed=JSON[_0x428b[3]](value,null,2);colorize=Package[_0x428b[6]][_0x428b[5]][_0x428b[4]](stringed);return colorize},"\x65\x64\x69\x74\x69\x6E\x67\x43\x6F\x6E\x74\x65\x6E\x74":function(){value=undefined;try{value=window[this[_0x428b[2]]][_0x428b[1]](this[_0x428b[0]])}catch(e){};stringed=JSON[_0x428b[3]](value,null,2);return stringed},"\x65\x64\x69\x74\x69\x6E\x67":function(){return MeteorToysDict[_0x428b[1]](_0x428b[7])},"\x65\x64\x69\x74\x6F\x72\x4E\x61\x6D\x65":function(){return this[_0x428b[2]]+_0x428b[8]+this[_0x428b[0]]}});Template[_0x428b[10]][_0x428b[17]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x62\x75\x74\x74\x6F\x6E\x5F\x73\x61\x76\x65":function(){var _0xcbe9x1=$(_0x428b[12]+String(this[_0x428b[2]])+_0x428b[8]+String(this[_0x428b[0]]))[_0x428b[11]]();var _0xcbe9x2=false;try{_0xcbe9x2=JSON[_0x428b[13]](_0xcbe9x1)}catch(error){var _0xcbe9x2=_0x428b[14]};if(_0xcbe9x2===_0x428b[14]){}else {targetDict=window[this[_0x428b[2]]];window[this[_0x428b[2]]][_0x428b[15]](this[_0x428b[0]],_0xcbe9x2)};MeteorToysDict[_0x428b[15]](_0x428b[7],false)},"\x63\x6C\x69\x63\x6B\x20\x2E\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x62\x75\x74\x74\x6F\x6E\x5F\x63\x61\x6E\x63\x65\x6C":function(){MeteorToysDict[_0x428b[15]](_0x428b[7],false)},"\x63\x6C\x69\x63\x6B\x20\x2E\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x62\x75\x74\x74\x6F\x6E\x5F\x65\x64\x69\x74":function(){MeteorToysDict[_0x428b[15]](_0x428b[7],true)},"\x63\x6C\x69\x63\x6B\x20\x2E\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x62\x75\x74\x74\x6F\x6E\x5F\x64\x72\x6F\x70":function(){target=window[this[_0x428b[2]]];if(target[_0x428b[1]](this[_0x428b[0]])===null){MeteorToysDict[_0x428b[15]](_0x428b[16],false)}else {target[_0x428b[15]](this[_0x428b[0]],null)}}})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/msavin_jetsetter/client/row_header/template.JetSetter_header.js                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("JetSetter_header");                                                                        // 2
Template["JetSetter_header"] = new Template("Template.JetSetter_header", (function() {                           // 3
  var view = this;                                                                                               // 4
  return Blaze._TemplateWith(function() {                                                                        // 5
    return {                                                                                                     // 6
      name: Spacebars.call("header")                                                                             // 7
    };                                                                                                           // 8
  }, function() {                                                                                                // 9
    return Spacebars.include(view.lookupTemplate("JetSetter_Component"), function() {                            // 10
      return [ "\n		", HTML.STRONG("JetSetter"), "\n		", HTML.DIV({                                              // 11
        "class": "JetSetter_editor"                                                                              // 12
      }, "\n			", HTML.DIV({                                                                                     // 13
        "class": "JetSetter_editor_header"                                                                       // 14
      }, "\n				In-App Session Editor\n			"), "\n			", HTML.DIV({                                                // 15
        "class": "JetSetter_editor_content"                                                                      // 16
      }, "\n", HTML.PRE({                                                                                        // 17
        "class": "MeteorToys-off"                                                                                // 18
      }, "{ \n  ", HTML.SPAN({                                                                                   // 19
        "class": "MeteorToys_key"                                                                                // 20
      }, '"created_by"'), ': "', HTML.A({                                                                        // 21
        href: "http://maxsavin.com"                                                                              // 22
      }, "Max Savin"), '",\n  ', HTML.SPAN({                                                                     // 23
        "class": "MeteorToys_key"                                                                                // 24
      }, '"docs_at"'), ':    "', HTML.A({                                                                        // 25
        href: "https://meteor.toys"                                                                              // 26
      }, "Meteor Toys"), '",\n  ', HTML.SPAN({                                                                   // 27
        "class": "MeteorToys_key"                                                                                // 28
      }, '"license"'), ':    "', HTML.A({                                                                        // 29
        href: "https://github.com/MeteorToys/allthings/blob/master/LICENSE.md"                                   // 30
      }, "MT License"), '",\n}\n'), "\n			"), "\n		"), "\n	" ];                                                  // 31
    });                                                                                                          // 32
  });                                                                                                            // 33
}));                                                                                                             // 34
                                                                                                                 // 35
Template.__checkName("JetSetter_header_pro");                                                                    // 36
Template["JetSetter_header_pro"] = new Template("Template.JetSetter_header_pro", (function() {                   // 37
  var view = this;                                                                                               // 38
  return Blaze._TemplateWith(function() {                                                                        // 39
    return {                                                                                                     // 40
      name: Spacebars.call("header2")                                                                            // 41
    };                                                                                                           // 42
  }, function() {                                                                                                // 43
    return Spacebars.include(view.lookupTemplate("JetSetter_Component"), function() {                            // 44
      return [ "\n\n		", HTML.STRONG("JetSetter Pro"), "\n		", HTML.DIV({                                        // 45
        "class": "JetSetter_editor"                                                                              // 46
      }, "\n			", HTML.DIV({                                                                                     // 47
        "class": "JetSetter_editor_header"                                                                       // 48
      }, "\n				", HTML.DIV({                                                                                    // 49
        "class": "JetSetter_editor_button JetSetter_button_drop"                                                 // 50
      }, "\n					Add\n				"), "\n				Reactive Dictionaries\n			"), "\n			", HTML.DIV({                           // 51
        "class": "JetSetter_editor_content",                                                                     // 52
        style: "padding-top: 4px"                                                                                // 53
      }, "\n				", Blaze.Each(function() {                                                                       // 54
        return Spacebars.call(view.lookup("ReactiveVar"));                                                       // 55
      }, function() {                                                                                            // 56
        return [ "\n					", HTML.DIV({                                                                           // 57
          "class": "MeteorToys_row"                                                                              // 58
        }, "\n						", HTML.DIV({                                                                                // 59
          "class": "MeteorToys_row_remove"                                                                       // 60
        }, HTML.CharRef({                                                                                        // 61
          html: "&times;",                                                                                       // 62
          str: "×"                                                                                               // 63
        })), "\n						", Blaze.View("lookup:name", function() {                                                  // 64
          return Spacebars.mustache(view.lookup("name"));                                                        // 65
        }), "\n					"), "\n				" ];                                                                              // 66
      }, function() {                                                                                            // 67
        return [ "\n					You are not watching any", HTML.BR(), " reactive dictionaries.\n					To watch,", HTML.BR(), ' simply press the "Add" button.', HTML.BR(), "\n				" ];
      }), "\n			"), "\n		"), "\n		\n	" ];                                                                        // 69
    });                                                                                                          // 70
  });                                                                                                            // 71
}));                                                                                                             // 72
                                                                                                                 // 73
Template.__checkName("JetSetter_reactiveDict_header");                                                           // 74
Template["JetSetter_reactiveDict_header"] = new Template("Template.JetSetter_reactiveDict_header", (function() {
  var view = this;                                                                                               // 76
  return Blaze._TemplateWith(function() {                                                                        // 77
    return {                                                                                                     // 78
      name: Spacebars.call(view.lookup("componentName"))                                                         // 79
    };                                                                                                           // 80
  }, function() {                                                                                                // 81
    return Spacebars.include(view.lookupTemplate("JetSetter_Component"), function() {                            // 82
      return [ "\n		\n		", HTML.DIV({                                                                            // 83
        "class": "JetSetter_dictTitle"                                                                           // 84
      }, "\n			", HTML.STRONG(Blaze.View("lookup:..name", function() {                                           // 85
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "name"));                                      // 86
      })), "\n			", HTML.DIV("\n				", HTML.STRONG("+"), "\n			"), "\n		"), "\n		\n		", HTML.DIV({               // 87
        "class": "JetSetter_editor"                                                                              // 88
      }, "\n			", HTML.DIV({                                                                                     // 89
        "class": "JetSetter_editor_header"                                                                       // 90
      }, "\n				", HTML.Comment(' <div class="JetSetter_create_name"></div> '), "\n				", HTML.INPUT({           // 91
        type: "text",                                                                                            // 92
        "class": "JetSetter_editor_title",                                                                       // 93
        id: function() {                                                                                         // 94
          return [ "JetSetter_new_name_", Spacebars.mustache(Spacebars.dot(view.lookup("."), "name")) ];         // 95
        },                                                                                                       // 96
        placeholder: "Enter Name"                                                                                // 97
      }), HTML.CharRef({                                                                                         // 98
        html: "&nbsp;",                                                                                          // 99
        str: " "                                                                                                 // 100
      }), "\n				", HTML.DIV({                                                                                   // 101
        "class": "JetSetter_editor_button JetSetter_button_new MeteorToys_action"                                // 102
      }, "\n					Set\n				"), "\n			"), "\n			", HTML.DIV({                                                      // 103
        "class": "JetSetter_editor_content JetSetter_editor_create",                                             // 104
        id: function() {                                                                                         // 105
          return [ "JetSetter_new_", Spacebars.mustache(Spacebars.dot(view.lookup("."), "name")) ];              // 106
        },                                                                                                       // 107
        contenteditable: "true",                                                                                 // 108
        style: "cursor: text"                                                                                    // 109
      }), "\n		"), "\n\n	" ];                                                                                    // 110
    });                                                                                                          // 111
  });                                                                                                            // 112
}));                                                                                                             // 113
                                                                                                                 // 114
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/msavin_jetsetter/client/row_header/JetSetter_header.js                                               //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Template.JetSetter_header_pro.events({                                                                           // 1
	'click .JetSetter_editor_button': function () {                                                                 // 2
		                                                                                                               // 3
		varName = prompt("What's it called?");                                                                         // 4
		target  = window[varName];                                                                                     // 5
                                                                                                                 // 6
		if (typeof target === "undefined") {                                                                           // 7
			alert("The variable you specified does not exist. Please try again.");                                        // 8
			return;                                                                                                       // 9
		}                                                                                                              // 10
		                                                                                                               // 11
		if (typeof target.all === "undefined") {                                                                       // 12
			alert("Invalid variable specified. Please try again");                                                        // 13
		} else {                                                                                                       // 14
			Package["meteortoys:toykit"].MeteorToysData.JetSetter.insert({                                                // 15
				'name': varName                                                                                              // 16
			});                                                                                                           // 17
		}                                                                                                              // 18
                                                                                                                 // 19
	},                                                                                                              // 20
	'click .MeteorToys_row': function () {                                                                          // 21
                                                                                                                 // 22
		var varID = Package["meteortoys:toykit"].MeteorToysData.JetSetter.findOne({                                    // 23
			'name': this.name                                                                                             // 24
		})._id;                                                                                                        // 25
                                                                                                                 // 26
		Package["meteortoys:toykit"].MeteorToysData.JetSetter.remove(varID);                                           // 27
                                                                                                                 // 28
	}                                                                                                               // 29
});                                                                                                              // 30
                                                                                                                 // 31
Template.JetSetter_header_pro.helpers({                                                                          // 32
	ReactiveVar: function () {                                                                                      // 33
		return Package["meteortoys:toykit"].MeteorToysData.JetSetter.find();                                           // 34
	}                                                                                                               // 35
});                                                                                                              // 36
                                                                                                                 // 37
Template.JetSetter_reactiveDict_header.events({                                                                  // 38
	'click .JetSetter_dictTitle': function() {                                                                      // 39
		$("#JetSetter_new_name_" + this.name).focus();                                                                 // 40
	},                                                                                                              // 41
	'click .JetSetter_button_new': function () {                                                                    // 42
		                                                                                                               // 43
		// Capture the Reactive Dictionary                                                                             // 44
		currentDict = window[this.name];                                                                               // 45
                                                                                                                 // 46
		// Get all the values                                                                                          // 47
		name     = $('#JetSetter_new_name_' + this.name).val();                                                        // 48
		contents = $('#JetSetter_new_' + this.name).text();                                                            // 49
		value 	 = Package["meteortoys:toykit"].MeteorToys_JSON.parse(contents);                                        // 50
                                                                                                                 // 51
		// Set the value                                                                                               // 52
		currentDict.set(name, value);                                                                                  // 53
                                                                                                                 // 54
		// Open the box                                                                                                // 55
		var item    = "JetSetter_" + String(this.name) + "_" + name;                                                   // 56
		MeteorToysDict.set("JetSetter_current", item);                                                                 // 57
                                                                                                                 // 58
		// Clear the inputs                                                                                            // 59
		$('#JetSetter_new_name_' + this.name).val("");                                                                 // 60
		$('#JetSetter_new_' + this.name).html = "";                                                                    // 61
                                                                                                                 // 62
	}                                                                                                               // 63
})                                                                                                               // 64
                                                                                                                 // 65
Template.JetSetter_reactiveDict_header.helpers({                                                                 // 66
	'componentName': function () {                                                                                  // 67
		return "header_" + this.name;                                                                                  // 68
	}                                                                                                               // 69
})                                                                                                               // 70
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/msavin_jetsetter/client/row_dict/template.main.js                                                    //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("JetSetter_reactive");                                                                      // 2
Template["JetSetter_reactive"] = new Template("Template.JetSetter_reactive", (function() {                       // 3
  var view = this;                                                                                               // 4
  return Blaze.Each(function() {                                                                                 // 5
    return Spacebars.call(view.lookup("ReactiveDrill"));                                                         // 6
  }, function() {                                                                                                // 7
    return [ "\n		", Spacebars.include(view.lookupTemplate("JetSetter_reactiveDict_header")), "\n		", Blaze.Each(function() {
      return Spacebars.call(view.lookup("keys"));                                                                // 9
    }, function() {                                                                                              // 10
      return [ "\n			", Spacebars.include(view.lookupTemplate("JetSetter_reactiveVar_row")), "\n		" ];           // 11
    }), "\n	" ];                                                                                                 // 12
  });                                                                                                            // 13
}));                                                                                                             // 14
                                                                                                                 // 15
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/msavin_jetsetter/client/row_dict/main.js                                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Template.JetSetter_reactive.helpers({                                                                            // 1
	ReactiveDrill: function () {                                                                                    // 2
		Dictionaries = [];                                                                                             // 3
                                                                                                                 // 4
		if (Package["session"]) {                                                                                      // 5
			if (typeof Session.all == 'function') {                                                                       // 6
			    var referencedKeys = [];                                                                                  // 7
			    var originalKeys = Object.keys(Session.all());                                                            // 8
                                                                                                                 // 9
			    originalKeys.forEach(function(targetKey) {                                                                // 10
			    		referencedKeys.push({                                                                                   // 11
			    			parent: "Session",                                                                                     // 12
			    			key:    targetKey                                                                                      // 13
			    		})                                                                                                      // 14
			    	})                                                                                                       // 15
                                                                                                                 // 16
			    Dictionaries.push({                                                                                       // 17
			    	name: "Session",                                                                                         // 18
			    	keys: referencedKeys                                                                                     // 19
			    });                                                                                                       // 20
			}                                                                                                             // 21
		}                                                                                                              // 22
		                                                                                                               // 23
		if (Package["meteortoys:toykit"].ToyKit.equals("authenticated", true)) {                                       // 24
			DictNames    = Package["meteortoys:toykit"].MeteorToysData.JetSetter.find().fetch();                          // 25
			                                                                                                              // 26
			DictNames.forEach(function(targetDict) {                                                                      // 27
				                                                                                                             // 28
				dictionaryName = targetDict.name;                                                                            // 29
				referencedKeys = [];                                                                                         // 30
				originalKeys   = Object.keys(window[targetDict.name].all());                                                 // 31
                                                                                                                 // 32
				originalKeys.forEach(function(targetKey) {                                                                   // 33
					referencedKeys.push({                                                                                       // 34
						parent: dictionaryName,                                                                                    // 35
						key:    targetKey                                                                                          // 36
					})                                                                                                          // 37
				})                                                                                                           // 38
                                                                                                                 // 39
				Dictionaries.push({                                                                                          // 40
					name: dictionaryName,                                                                                       // 41
					keys: referencedKeys                                                                                        // 42
				});                                                                                                          // 43
                                                                                                                 // 44
			});                                                                                                           // 45
		}                                                                                                              // 46
                                                                                                                 // 47
		return Dictionaries;                                                                                           // 48
	}                                                                                                               // 49
});                                                                                                              // 50
                                                                                                                 // 51
                                                                                                                 // 52
                                                                                                                 // 53
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/msavin_jetsetter/client/_component/template.component.js                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("JetSetter_Component");                                                                     // 2
Template["JetSetter_Component"] = new Template("Template.JetSetter_Component", (function() {                     // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    "class": function() {                                                                                        // 6
      return [ "JetSetter_row ", Spacebars.mustache(view.lookup("expand")) ];                                    // 7
    },                                                                                                           // 8
    id: function() {                                                                                             // 9
      return [ "JetSetter_", Spacebars.mustache(view.lookup("name")) ];                                          // 10
    }                                                                                                            // 11
  }, "\n		", Blaze._InOuterTemplateScope(view, function() {                                                      // 12
    return Spacebars.include(function() {                                                                        // 13
      return Spacebars.call(view.templateContentBlock);                                                          // 14
    });                                                                                                          // 15
  }), "\n	");                                                                                                    // 16
}));                                                                                                             // 17
                                                                                                                 // 18
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/msavin_jetsetter/client/_component/component.js                                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _0x2807=["\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x63\x75\x72\x72\x65\x6E\x74","\x67\x65\x74","\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F","\x6E\x61\x6D\x65","\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x72\x6F\x77\x5F\x65\x78\x70\x61\x6E\x64","\x68\x65\x6C\x70\x65\x72\x73","\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74","\x73\x65\x74","\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x73\x65\x74\x74\x69\x6E\x67\x73\x5F\x65\x64\x69\x74","\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x70\x72\x65\x76\x69\x65\x77\x4D\x6F\x64\x65","\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73","\x23\x4A\x65\x74\x53\x65\x74\x74\x65\x72","\x73\x74\x6F\x70\x50\x72\x6F\x70\x61\x67\x61\x74\x69\x6F\x6E","\x65\x76\x65\x6E\x74\x73"];Template[_0x2807[6]][_0x2807[5]]({expand:function(){var _0xf61ex1=String(MeteorToysDict[_0x2807[1]](_0x2807[0]));var _0xf61ex2=_0x2807[2]+String(this[_0x2807[3]]);if(_0xf61ex1===_0xf61ex2){return _0x2807[4]}}});Template[_0x2807[6]][_0x2807[13]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x72\x6F\x77":function(){var _0xf61ex1=String(MeteorToysDict[_0x2807[1]](_0x2807[0]));var _0xf61ex3=_0x2807[2]+String(this[_0x2807[3]]);if(_0xf61ex1===_0xf61ex3){MeteorToysDict[_0x2807[7]](_0x2807[0],null)}else {MeteorToysDict[_0x2807[7]](_0x2807[0],_0xf61ex3)};MeteorToysDict[_0x2807[7]](_0x2807[8],false);$(_0x2807[11])[_0x2807[10]](_0x2807[9])},"\x63\x6C\x69\x63\x6B\x20\x2E\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x65\x64\x69\x74\x6F\x72":function(_0xf61ex4,_0xf61ex5){_0xf61ex4[_0x2807[12]]()}})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/msavin_jetsetter/client/dirtySession/template.main.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("JetSetterSession");                                                                        // 2
Template["JetSetterSession"] = new Template("Template.JetSetterSession", (function() {                           // 3
  var view = this;                                                                                               // 4
  return [ Spacebars.include(view.lookupTemplate("JetSetter_create")), "\n	", Blaze.Each(function() {            // 5
    return Spacebars.call(view.lookup("SessionItems"));                                                          // 6
  }, function() {                                                                                                // 7
    return [ "\n		", Spacebars.include(view.lookupTemplate("JetSetter_row")), "\n	" ];                           // 8
  }) ];                                                                                                          // 9
}));                                                                                                             // 10
                                                                                                                 // 11
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/msavin_jetsetter/client/dirtySession/main.js                                                         //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// Initialize Dict                                                                                               // 1
MeteorToysDict = Package["meteortoys:toykit"].MeteorToysDict;                                                    // 2
                                                                                                                 // 3
if (typeof Session === undefined) {                                                                              // 4
    if (Package["session"]) {                                                                                    // 5
        Session = Package["session"].Session;                                                                    // 6
    }                                                                                                            // 7
}                                                                                                                // 8
JetSetter = {                                                                                                    // 9
    getKeys: function () {                                                                                       // 10
                                                                                                                 // 11
        var keys = Object.getOwnPropertyNames(Session.keys);                                                     // 12
        keys = JetSetter.arrayCleaner(keys, "Meteor.");                                                          // 13
        MeteorToysDict.set("JetSetter", keys);                                                                   // 14
                                                                                                                 // 15
    },                                                                                                           // 16
    arrayCleaner: function(array, toRemove) {                                                                    // 17
                                                                                                                 // 18
        var length = toRemove.length;                                                                            // 19
                                                                                                                 // 20
        for (var i = 0; i < array.length; i++) {                                                                 // 21
            if(array[i].substr(0, length) === toRemove) {                                                        // 22
                array.splice(i, 1);                                                                              // 23
                i--;                                                                                             // 24
            }                                                                                                    // 25
        }                                                                                                        // 26
                                                                                                                 // 27
        return array;                                                                                            // 28
                                                                                                                 // 29
    }                                                                                                            // 30
}                                                                                                                // 31
                                                                                                                 // 32
                                                                                                                 // 33
                                                                                                                 // 34
// if (!Object.observe) {                                                                                        // 35
  setInterval(function(){                                                                                        // 36
    JetSetter.getKeys();                                                                                         // 37
  }, 3000);                                                                                                      // 38
// } else {                                                                                                      // 39
  // Object.observe(Session.keys, function () {                                                                  // 40
    // JetSetter.getKeys();                                                                                      // 41
  // })                                                                                                          // 42
// }                                                                                                             // 43
                                                                                                                 // 44
Template.JetSetterSession.helpers({                                                                              // 45
    expanded: function () {                                                                                      // 46
        var current = MeteorToysDict.get("JetSetter_current");                                                   // 47
        if (current) {                                                                                           // 48
            return "JetSetter_expand"                                                                            // 49
        }                                                                                                        // 50
    },                                                                                                           // 51
    SessionItems: function () {                                                                                  // 52
        var array = MeteorToysDict.get("JetSetter");                                                             // 53
        return array;                                                                                            // 54
    }                                                                                                            // 55
});                                                                                                              // 56
                                                                                                                 // 57
                                                                                                                 // 58
                                                                                                                 // 59
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/msavin_jetsetter/client/dirtySession/editor/template.main.js                                         //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("JetSetter_editor");                                                                        // 2
Template["JetSetter_editor"] = new Template("Template.JetSetter_editor", (function() {                           // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    "class": "JetSetter_editor"                                                                                  // 6
  }, "\n		\n		", Blaze.If(function() {                                                                           // 7
    return Spacebars.call(view.lookup("editing"));                                                               // 8
  }, function() {                                                                                                // 9
    return [ "\n			", HTML.DIV({                                                                                 // 10
      "class": "JetSetter_editor_header"                                                                         // 11
    }, "\n				", HTML.DIV({                                                                                      // 12
      "class": "JetSetter_editor_button JetSetter_button_save"                                                   // 13
    }, "Save"), "\n				", HTML.DIV({                                                                             // 14
      "class": "JetSetter_editor_button JetSetter_button_cancel"                                                 // 15
    }, "Cancel"), "\n				Value \n			"), "\n			", HTML.DIV({                                                      // 16
      "class": "JetSetter_editor_content JetSetter_editor_content_editing",                                      // 17
      id: function() {                                                                                           // 18
        return [ "JetSetter_editor_", Spacebars.mustache(view.lookup(".")) ];                                    // 19
      },                                                                                                         // 20
      contenteditable: "true"                                                                                    // 21
    }, "\n				", HTML.PRE(Blaze.View("lookup:content", function() {                                              // 22
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("content")));                                      // 23
    })), "\n			"), "\n		" ];                                                                                     // 24
  }, function() {                                                                                                // 25
    return [ "\n			", HTML.DIV({                                                                                 // 26
      "class": "JetSetter_editor_header"                                                                         // 27
    }, "\n				", HTML.DIV({                                                                                      // 28
      "class": "JetSetter_editor_button JetSetter_button_edit"                                                   // 29
    }, "Edit"), "\n				", HTML.DIV({                                                                             // 30
      "class": "JetSetter_editor_button JetSetter_button_drop"                                                   // 31
    }, "Drop"), "\n				Value \n			"), "\n			", HTML.DIV({                                                        // 32
      "class": "JetSetter_editor_content"                                                                        // 33
    }, "\n				", HTML.PRE(Blaze.View("lookup:content", function() {                                              // 34
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("content")));                                      // 35
    })), "\n			"), "\n		" ];                                                                                     // 36
  }), "\n\n	");                                                                                                  // 37
}));                                                                                                             // 38
                                                                                                                 // 39
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/msavin_jetsetter/client/dirtySession/editor/main.js                                                  //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Template.JetSetter_editor.events({                                                                               // 1
	'click .JetSetter_button_edit': function () {                                                                   // 2
		MeteorToysDict.set("JetSetter_settings_edit", true)                                                            // 3
	},                                                                                                              // 4
	'click .JetSetter_button_save': function () {                                                                   // 5
		                                                                                                               // 6
		// data the data                                                                                               // 7
		var data = $("#JetSetter_editor_" + String(this)).text();                                                      // 8
                                                                                                                 // 9
		// Parse it                                                                                                    // 10
                                                                                                                 // 11
		var newObject = false;                                                                                         // 12
                                                                                                                 // 13
		try {                                                                                                          // 14
		  newObject = JSON.parse(data);                                                                                // 15
		} catch (error) {                                                                                              // 16
		  var newObject = "JetSetter_failed_change"                                                                    // 17
		  // alert("There was an error with your input.")                                                              // 18
		}                                                                                                              // 19
                                                                                                                 // 20
		if (newObject === "JetSetter_failed_change") {                                                                 // 21
			// Do nothing                                                                                                 // 22
		} else {                                                                                                       // 23
			Session.set(this, newObject)	                                                                                 // 24
		}                                                                                                              // 25
                                                                                                                 // 26
		MeteorToysDict.set("JetSetter_settings_edit", false);                                                          // 27
                                                                                                                 // 28
	},                                                                                                              // 29
	'click .JetSetter_button_cancel': function () {                                                                 // 30
		MeteorToysDict.set("JetSetter_settings_edit", false)                                                           // 31
	},                                                                                                              // 32
	'click .JetSetter_editor': function (e, t) {                                                                    // 33
		e.stopPropagation();                                                                                           // 34
	},                                                                                                              // 35
	'click .JetSetter_button_drop': function () {                                                                   // 36
		                                                                                                               // 37
		MeteorToysDict.set("JetSetter_current", null)                                                                  // 38
		currentSession = this;                                                                                         // 39
                                                                                                                 // 40
		window.setTimeout(function() {                                                                                 // 41
			delete Session.keys[currentSession];                                                                          // 42
			JetSetter.getKeys();                                                                                          // 43
		}, 300);                                                                                                       // 44
		                                                                                                               // 45
                                                                                                                 // 46
	}                                                                                                               // 47
});                                                                                                              // 48
                                                                                                                 // 49
Template.JetSetter_editor.helpers({                                                                              // 50
	content: function () {                                                                                          // 51
		var value = Session.get(this);                                                                                 // 52
		var stringed = JSON.stringify(value, undefined, 2);                                                            // 53
		var result = Package["meteortoys:toykit"].MeteorToys_JSON.colorize(stringed)                                   // 54
		return result;                                                                                                 // 55
	},                                                                                                              // 56
	editing: function () {                                                                                          // 57
		return MeteorToysDict.get("JetSetter_settings_edit");                                                          // 58
	}                                                                                                               // 59
});                                                                                                              // 60
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/msavin_jetsetter/client/dirtySession/session/template.main.js                                        //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("JetSetter_row");                                                                           // 2
Template["JetSetter_row"] = new Template("Template.JetSetter_row", (function() {                                 // 3
  var view = this;                                                                                               // 4
  return Blaze._TemplateWith(function() {                                                                        // 5
    return {                                                                                                     // 6
      name: Spacebars.call(view.lookup("."))                                                                     // 7
    };                                                                                                           // 8
  }, function() {                                                                                                // 9
    return Spacebars.include(view.lookupTemplate("JetSetter_Component"), function() {                            // 10
      return [ "\n\n		", Blaze.View("lookup:.", function() {                                                     // 11
        return Spacebars.mustache(view.lookup("."));                                                             // 12
      }), HTML.SPAN({                                                                                            // 13
        "class": "JetSetter_value_preview"                                                                       // 14
      }, ": ", Blaze.View("lookup:value", function() {                                                           // 15
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("value")));                                      // 16
      })), "\n		", Spacebars.include(view.lookupTemplate("JetSetter_editor")), "\n\n	" ];                        // 17
    });                                                                                                          // 18
  });                                                                                                            // 19
}));                                                                                                             // 20
                                                                                                                 // 21
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/msavin_jetsetter/client/dirtySession/session/main.js                                                 //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.JetSetter_row.helpers({                                                                                 // 2
    value: function () {                                                                                         // 3
        var value = Session.get(this);                                                                           // 4
        var stringed = JSON.stringify(value, undefined, 0);                                                      // 5
        return stringed;                                                                                         // 6
   }                                                                                                             // 7
});                                                                                                              // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/msavin_jetsetter/client/dirtySession/create/template.main.js                                         //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("JetSetter_create");                                                                        // 2
Template["JetSetter_create"] = new Template("Template.JetSetter_create", (function() {                           // 3
  var view = this;                                                                                               // 4
  return Blaze._TemplateWith(function() {                                                                        // 5
    return {                                                                                                     // 6
      name: Spacebars.call("create")                                                                             // 7
    };                                                                                                           // 8
  }, function() {                                                                                                // 9
    return Spacebars.include(view.lookupTemplate("JetSetter_Component"), function() {                            // 10
      return [ "\n		\n		\n		", HTML.DIV({                                                                        // 11
        "class": "MeteorToys_right"                                                                              // 12
      }, "\n			", HTML.STRONG("+"), "\n		"), "\n		", HTML.STRONG("Session"), "\n\n		", HTML.DIV({                // 13
        "class": "JetSetter_editor"                                                                              // 14
      }, "\n			", HTML.DIV({                                                                                     // 15
        "class": "JetSetter_editor_header"                                                                       // 16
      }, "\n				", HTML.Comment(' <div class="JetSetter_create_name"></div> '), "\n				", HTML.INPUT({           // 17
        type: "text",                                                                                            // 18
        "class": "JetSetter_editor_title",                                                                       // 19
        placeholder: "Enter Name"                                                                                // 20
      }), HTML.CharRef({                                                                                         // 21
        html: "&nbsp;",                                                                                          // 22
        str: " "                                                                                                 // 23
      }), "\n				", HTML.DIV({                                                                                   // 24
        "class": "JetSetter_editor_button JetSetter_button_new"                                                  // 25
      }, "\n					Set"), "\n			"), "\n			", HTML.DIV({                                                            // 26
        "class": "JetSetter_editor_content JetSetter_editor_create",                                             // 27
        contenteditable: "true",                                                                                 // 28
        style: "cursor: text"                                                                                    // 29
      }, "\n			"), "\n		"), "\n\n	" ];                                                                           // 30
    });                                                                                                          // 31
  });                                                                                                            // 32
}));                                                                                                             // 33
                                                                                                                 // 34
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/msavin_jetsetter/client/dirtySession/create/main.js                                                  //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Template.JetSetter_create.events({                                                                               // 1
    'click .JetSetter_row': function () {                                                                        // 2
        // Focus on input                                                                                        // 3
        window.setTimeout(function() {                                                                           // 4
            $(".JetSetter_editor_title").focus();                                                                // 5
        }, 300);                                                                                                 // 6
                                                                                                                 // 7
    },                                                                                                           // 8
    'click .JetSetter_button_new': function () {                                                                 // 9
                                                                                                                 // 10
        // get values                                                                                            // 11
        var js_key    = $(".JetSetter_editor_title").val(),                                                      // 12
            js_value  = $(".JetSetter_editor_create").text(),                                                    // 13
            js_result = "jetsetter_empty_value";                                                                 // 14
                                                                                                                 // 15
        // ensure key has value                                                                                  // 16
        if (!js_key) {                                                                                           // 17
            alert("Please enter a Session key");                                                                 // 18
            return false;                                                                                        // 19
        }                                                                                                        // 20
                                                                                                                 // 21
        // convert string to json                                                                                // 22
                                                                                                                 // 23
        try {                                                                                                    // 24
          js_result = JSON.parse(js_value);                                                                      // 25
        } catch (error) {                                                                                        // 26
          alert("There was an error with your input.");                                                          // 27
          return false;                                                                                          // 28
        }                                                                                                        // 29
                                                                                                                 // 30
        // run magic                                                                                             // 31
                                                                                                                 // 32
        if (js_result === "jetsetter_empty_value") {                                                             // 33
            // do nothing                                                                                        // 34
        } else {                                                                                                 // 35
            // set session                                                                                       // 36
            Session.set(js_key, js_result);                                                                      // 37
                                                                                                                 // 38
            // rerun key fetch to seem instant                                                                   // 39
            JetSetter.getKeys()                                                                                  // 40
                                                                                                                 // 41
            // reset inputs                                                                                      // 42
            $(".JetSetter_editor_title").val("")                                                                 // 43
            $(".JetSetter_editor_create").text("")                                                               // 44
        }                                                                                                        // 45
                                                                                                                 // 46
    }                                                                                                            // 47
});                                                                                                              // 48
                                                                                                                 // 49
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['msavin:jetsetter'] = {}, {
  JetSetter: JetSetter,
  CloseJetSetter: CloseJetSetter
});

})();
