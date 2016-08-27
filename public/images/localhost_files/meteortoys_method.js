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
var Mongo = Package.mongo.Mongo;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var ToyKit, MeteorToys, name, data, backup, mCallback, params;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/meteortoys_method/ToyKit/main.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Modify this object                                                                                                  // 1
                                                                                                                       // 2
ToyKit = {                                                                                                             // 3
	name:     "Method",                                                                                                   // 4
	version:  "1.0.0",                                                                                                    // 5
	template: "MeteorToys_Method"                                                                                         // 6
};                                                                                                                     // 7
                                                                                                                       // 8
                                                                                                                       // 9
// Do not modify the code below here                                                                                   // 10
                                                                                                                       // 11
if (Meteor.isClient) {                                                                                                 // 12
	if (Package["meteortoys:toykit"]) {                                                                                   // 13
		// Import Meteor Toys API                                                                                            // 14
		MeteorToys = Package["meteortoys:toykit"].MeteorToys;                                                                // 15
	} else {                                                                                                              // 16
		MeteorToys = {};                                                                                                     // 17
		console.log("For the " + ToyKit.name + " toy to work, you must install Mongol or");                                  // 18
		console.log("the Meteor Toys package. Grab the free edition at http://Meteor.Toys/");                                // 19
	}                                                                                                                     // 20
}                                                                                                                      // 21
                                                                                                                       // 22
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/meteortoys_method/client/template.main.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("MeteorToys_Method");                                                                             // 2
Template["MeteorToys_Method"] = new Template("Template.MeteorToys_Method", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return {                                                                                                           // 6
      name: Spacebars.call("MeteorToys_Method")                                                                        // 7
    };                                                                                                                 // 8
  }, function() {                                                                                                      // 9
    return Spacebars.include(view.lookupTemplate("MeteorToy"), function() {                                            // 10
      return [ "\n		", HTML.Comment(" Start Editable Zone "), "\n			", Spacebars.include(view.lookupTemplate("MeteorToys_Method_header")), "\n			", Spacebars.include(view.lookupTemplate("MeteorToys_Method_content")), "\n		", HTML.Comment(" End Editable Zone  "), "\n	" ];
    });                                                                                                                // 12
  });                                                                                                                  // 13
}));                                                                                                                   // 14
                                                                                                                       // 15
Template.__checkName("MeteorToys_Method_header");                                                                      // 16
Template["MeteorToys_Method_header"] = new Template("Template.MeteorToys_Method_header", (function() {                 // 17
  var view = this;                                                                                                     // 18
  return [ HTML.Raw("<!-- Note: `MeteorToys-background-overlay1`\n 		 comes from Meteor Toys ThemeKit -->\n	"), HTML.DIV({
    "class": "MeteorToys_Method_header MeteorToys-background-overlay1"                                                 // 20
  }, "\n		\n		", HTML.DIV({                                                                                            // 21
    "class": function() {                                                                                              // 22
      return [ "MeteorToys_Method_button MeteorToys_action ", Spacebars.mustache(view.lookup("displayable")) ];        // 23
    }                                                                                                                  // 24
  }, "Cancel"), "\n		", HTML.Raw("<strong>Method</strong>"), "\n	") ];                                                 // 25
}));                                                                                                                   // 26
                                                                                                                       // 27
Template.__checkName("MeteorToys_Method_content");                                                                     // 28
Template["MeteorToys_Method_content"] = new Template("Template.MeteorToys_Method_content", (function() {               // 29
  var view = this;                                                                                                     // 30
  return HTML.DIV({                                                                                                    // 31
    "class": "MeteorToys_Method_content"                                                                               // 32
  }, "\n		", HTML.DIV({                                                                                                // 33
    "class": function() {                                                                                              // 34
      return [ "MeteorToys_Method_contents ", Spacebars.mustache(view.lookup("position")) ];                           // 35
    }                                                                                                                  // 36
  }, "\n			", HTML.DIV({                                                                                               // 37
    "class": "MeteorToys_Method_contenta"                                                                              // 38
  }, Spacebars.include(view.lookupTemplate("MeteorToys_Method_m"))), "\n			", HTML.DIV({                               // 39
    "class": "MeteorToys_Method_contentb"                                                                              // 40
  }, Spacebars.include(view.lookupTemplate("MeteorToys_Method_h"))), "\n		"), "\n	\n	");                               // 41
}));                                                                                                                   // 42
                                                                                                                       // 43
Template.__checkName("MeteorToys_Method_m");                                                                           // 44
Template["MeteorToys_Method_m"] = new Template("Template.MeteorToys_Method_m", (function() {                           // 45
  var view = this;                                                                                                     // 46
  return Blaze.Each(function() {                                                                                       // 47
    return Spacebars.call(view.lookup("data"));                                                                        // 48
  }, function() {                                                                                                      // 49
    return [ "\n		", HTML.DIV({                                                                                        // 50
      "class": "MeteorToys_row MeteorToys_row_hoverable"                                                               // 51
    }, Blaze.View("lookup:.", function() {                                                                             // 52
      return Spacebars.mustache(view.lookup("."));                                                                     // 53
    })), "\n	" ];                                                                                                      // 54
  });                                                                                                                  // 55
}));                                                                                                                   // 56
                                                                                                                       // 57
Template.__checkName("MeteorToys_Method_h");                                                                           // 58
Template["MeteorToys_Method_h"] = new Template("Template.MeteorToys_Method_h", (function() {                           // 59
  var view = this;                                                                                                     // 60
  return [ HTML.Raw('<!-- <div class="MeteorToys_method_subDiv"> -->\n		'), HTML.DIV({                                 // 61
    "class": "MeteorToys_row"                                                                                          // 62
  }, Blaze.View("lookup:name", function() {                                                                            // 63
    return Spacebars.mustache(view.lookup("name"));                                                                    // 64
  })), "\n		", Blaze.Each(function() {                                                                                 // 65
    return Spacebars.call(view.lookup("data"));                                                                        // 66
  }, function() {                                                                                                      // 67
    return [ "\n			", HTML.DIV({                                                                                       // 68
      "class": "MeteorToys_row"                                                                                        // 69
    }, "\n				", HTML.INPUT({                                                                                          // 70
      id: function() {                                                                                                 // 71
        return [ "MeteorToys_method_", Spacebars.mustache(view.lookup(".")) ];                                         // 72
      },                                                                                                               // 73
      value: function() {                                                                                              // 74
        return Spacebars.mustache(view.lookup("cachedValue"));                                                         // 75
      }                                                                                                                // 76
    }), "\n				", HTML.DIV({                                                                                           // 77
      "class": "MeteorToys_row_name"                                                                                   // 78
    }, Blaze.View("lookup:.", function() {                                                                             // 79
      return Spacebars.mustache(view.lookup("."));                                                                     // 80
    })), "\n			"), "\n		" ];                                                                                           // 81
  }), HTML.Raw('\n		<div id="MeteorToys_method_call" class="MeteorToys_action">Call</div>\n		'), Blaze.If(function() {
    return Spacebars.call(view.lookup("data"));                                                                        // 83
  }, function() {                                                                                                      // 84
    return [ "\n		", HTML.DIV({                                                                                        // 85
      id: "MeteorToys_method_clear",                                                                                   // 86
      "class": "MeteorToys_action"                                                                                     // 87
    }, "Clear"), "\n		" ];                                                                                             // 88
  }), HTML.Raw('\n\n\n	 <div style="margin-top: 28px; width: 100%; line-height: 20px; pointer-events: none; opacity: .5;">Note: use double quotes <br> in objects and arrays.</div>\n	<!-- </div> -->') ];
}));                                                                                                                   // 90
                                                                                                                       // 91
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/meteortoys_method/client/main.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _0x11e9=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6D\x65\x74\x68\x6F\x64\x5F\x74\x61\x72\x67\x65\x74","\x73\x65\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6D\x65\x74\x68\x6F\x64\x5F\x74\x61\x72\x67\x65\x74\x5F\x70\x61\x72\x61\x6D\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6D\x65\x74\x68\x6F\x64\x5F\x73\x63\x72\x6F\x6C\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x78","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6D\x65\x74\x68\x6F\x64\x5F\x6D\x65\x74\x68\x6F\x64\x73","\x63\x61\x6C\x6C","\x73\x74\x61\x72\x74\x75\x70","\x63\x6C\x6F\x73\x65\x54\x6F\x79","\x73\x74\x6F\x70\x50\x72\x6F\x70\x61\x67\x61\x74\x69\x6F\x6E","\x73\x65\x74\x54\x69\x6D\x65\x6F\x75\x74","\x65\x76\x65\x6E\x74\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4D\x65\x74\x68\x6F\x64\x5F\x68\x65\x61\x64\x65\x72","\x67\x65\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x62\x75\x74\x74\x6F\x6E\x5F\x64\x69\x73\x70\x6C\x61\x79\x61\x62\x6C\x65","\x68\x65\x6C\x70\x65\x72\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4D\x65\x74\x68\x6F\x64\x5F\x63\x6F\x6E\x74\x65\x6E\x74\x63","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4D\x65\x74\x68\x6F\x64\x5F\x63\x6F\x6E\x74\x65\x6E\x74","\x73\x6F\x72\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4D\x65\x74\x68\x6F\x64\x5F\x6D","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x5F\x79","\x54\x68\x65\x72\x65\x20\x77\x61\x73\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x2E","\x30","\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70","\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4D\x65\x74\x68\x6F\x64\x5F\x63\x6F\x6E\x74\x65\x6E\x74\x62","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x6D\x65\x74\x68\x6F\x64\x43\x61\x63\x68\x65\x2E","\x67\x65\x74\x49\x74\x65\x6D","\x70\x61\x72\x73\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4D\x65\x74\x68\x6F\x64\x5F\x68","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","","\x76\x61\x6C","\x23\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6D\x65\x74\x68\x6F\x64\x5F","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x70\x75\x73\x68","\x27","\x27\x2C","\x65\x61\x63\x68","\x45\x72\x72\x6F\x72\x3A","\x6C\x6F\x67","\x73\x68\x6F\x75\x6C\x64\x4C\x6F\x67","\x52\x65\x73\x75\x6C\x74\x3A","\x6D\x65\x74\x68\x6F\x64","\x69\x6E\x73\x65\x72\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x52\x65\x73\x75\x6C\x74","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x72\x65\x73\x75\x6C\x74","\x63\x6F\x6E\x63\x61\x74","\x61\x70\x70\x6C\x79","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x73\x65\x74\x49\x74\x65\x6D","\x72\x65\x6D\x6F\x76\x65\x49\x74\x65\x6D"];Meteor[_0x11e9[7]](function(){MeteorToys[_0x11e9[1]](_0x11e9[0],false);MeteorToys[_0x11e9[1]](_0x11e9[2],false);MeteorToys[_0x11e9[1]](_0x11e9[3],false);Meteor[_0x11e9[6]](_0x11e9[4],function(_0xc281x1,_0xc281x2){if(!_0xc281x1){MeteorToys[_0x11e9[1]](_0x11e9[5],_0xc281x2)}})});Template[_0x11e9[12]][_0x11e9[11]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4D\x65\x74\x68\x6F\x64\x5F\x68\x65\x61\x64\x65\x72":function(){MeteorToys[_0x11e9[8]]()},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4D\x65\x74\x68\x6F\x64\x5F\x62\x75\x74\x74\x6F\x6E":function(_0xc281x1,_0xc281x3){_0xc281x1[_0x11e9[9]]();MeteorToys[_0x11e9[1]](_0x11e9[3],false);window[_0x11e9[10]](function(){MeteorToys[_0x11e9[1]](_0x11e9[0],false);MeteorToys[_0x11e9[1]](_0x11e9[2],false)},250)}});Template[_0x11e9[12]][_0x11e9[15]]({"\x64\x69\x73\x70\x6C\x61\x79\x61\x62\x6C\x65":function(){if(MeteorToys[_0x11e9[13]](_0x11e9[3])){return _0x11e9[14]}}});Template[_0x11e9[17]][_0x11e9[15]]({"\x70\x6F\x73\x69\x74\x69\x6F\x6E":function(){if(MeteorToys[_0x11e9[13]](_0x11e9[3])){return _0x11e9[16]}}});Template[_0x11e9[19]][_0x11e9[15]]({"\x64\x61\x74\x61":function(){if(MeteorToys[_0x11e9[13]](_0x11e9[5])){return MeteorToys[_0x11e9[13]](_0x11e9[5])[_0x11e9[18]]()}}});Template[_0x11e9[19]][_0x11e9[11]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72\x6F\x77":function(){var _0xc281x4=String(this);Meteor[_0x11e9[6]](_0x11e9[20],_0xc281x4,function(_0xc281x1,_0xc281x2){if(_0xc281x1){alert(_0x11e9[21])}else {MeteorToys[_0x11e9[1]](_0x11e9[0],_0xc281x4);MeteorToys[_0x11e9[1]](_0x11e9[2],_0xc281x2);MeteorToys[_0x11e9[1]](_0x11e9[3],true);$(_0x11e9[24])[_0x11e9[23]](_0x11e9[22])}})}});Template[_0x11e9[28]][_0x11e9[15]]({"\x6E\x61\x6D\x65":function(){return MeteorToys[_0x11e9[13]](_0x11e9[0])},"\x64\x61\x74\x61":function(){return MeteorToys[_0x11e9[13]](_0x11e9[2])},cachedValue:function(){name=_0x11e9[25]+MeteorToys[_0x11e9[13]](_0x11e9[0]);if(localStorage[_0x11e9[26]](name)){data=JSON[_0x11e9[27]](localStorage[_0x11e9[26]](name));if(data[this]){return data[this]}}}});Template[_0x11e9[28]][_0x11e9[11]]({"\x63\x6C\x69\x63\x6B\x20\x23\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6D\x65\x74\x68\x6F\x64\x5F\x63\x61\x6C\x6C":function(_0xc281x1,_0xc281x3){_0xc281x1[_0x11e9[29]]();var _0xc281x5=MeteorToys[_0x11e9[13]](_0x11e9[2]),_0xc281x6=MeteorToys[_0x11e9[13]](_0x11e9[0]),_0xc281x7=[_0xc281x6],_0xc281x8=_0x11e9[30];backup={};if(_0xc281x5){jQuery[_0x11e9[38]](_0xc281x5,function(_0xc281x9,_0xc281xa){var _0xc281xb=$(_0x11e9[32]+_0xc281xa)[_0x11e9[31]]();var _0xc281xc=Package[_0x11e9[34]][_0x11e9[33]][_0x11e9[27]](_0xc281xb);_0xc281x7[_0x11e9[35]](_0xc281xc);_0xc281x8+=_0x11e9[36]+_0xc281xb+_0x11e9[37];backup[_0xc281xa]=_0xc281xc})};mCallback=function(_0xc281x1,_0xc281x2){if(_0xc281x1){console[_0x11e9[40]](_0x11e9[39]);console[_0x11e9[40]](_0xc281x1)};if(!_0xc281x1){if(MeteorToys[_0x11e9[41]]()){console[_0x11e9[40]](_0x11e9[42]);console[_0x11e9[40]](_0xc281x2)};Package[_0x11e9[46]][_0x11e9[45]][_0x11e9[44]](_0xc281x2,_0x11e9[43],_0xc281x7)}};if(_0xc281x5){Meteor[_0x11e9[6]][_0x11e9[48]](Meteor,_0xc281x7[_0x11e9[47]](mCallback))}else {Meteor[_0x11e9[6]](_0xc281x6,mCallback)};MeteorToys[_0x11e9[1]](_0x11e9[3],false);_0xc281x6=_0x11e9[25]+_0xc281x6;data=JSON[_0x11e9[49]](backup);localStorage[_0x11e9[50]](_0xc281x6,data)},"\x63\x6C\x69\x63\x6B\x20\x23\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6D\x65\x74\x68\x6F\x64\x5F\x63\x6C\x65\x61\x72":function(_0xc281x1,_0xc281x3){_0xc281x1[_0x11e9[29]]();name=_0x11e9[25]+name;params=MeteorToys[_0x11e9[13]](_0x11e9[2]);localStorage[_0x11e9[51]](name);if(params){jQuery[_0x11e9[38]](params,function(_0xc281x9,_0xc281xa){$(_0x11e9[32]+_0xc281xa)[_0x11e9[31]](_0x11e9[30])})}}})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/meteortoys_method/lib/main.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// If your toy requires a collection,                                                                                  // 1
// please use the suggested name pattern                                                                               // 2
// so your collections do not show up in                                                                               // 3
// Meteor Toys or Kadira Debug, and to                                                                                 // 4
// avoid interference with other Meteor Toys                                                                           // 5
//                                                                                                                     // 6
// CollectionName = new Mongo.Collection("MeteorToys/authorName/packageName");                                         // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:method'] = {};

})();
