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
var ToyKit, MeteorToys, name, data, params;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/meteortoys_pub/ToyKit/main.js                                                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// Modify this object                                                                                               // 1
                                                                                                                    // 2
ToyKit = {                                                                                                          // 3
	name:     "Pub",                                                                                                   // 4
	version:  "1.0.0",                                                                                                 // 5
	template: "MeteorToys_Pub"                                                                                         // 6
};                                                                                                                  // 7
                                                                                                                    // 8
                                                                                                                    // 9
// Do not modify the code below here                                                                                // 10
                                                                                                                    // 11
if (Meteor.isClient) {                                                                                              // 12
	if (Package["meteortoys:toykit"]) {                                                                                // 13
		// Import Meteor Toys API                                                                                         // 14
		MeteorToys = Package["meteortoys:toykit"].MeteorToys;                                                             // 15
	} else {                                                                                                           // 16
		MeteorToys = {};                                                                                                  // 17
		console.log("For the " + ToyKit.name + " toy to work, you must install Mongol or");                               // 18
		console.log("the Meteor Toys package. Grab the free edition at http://Meteor.Toys/");                             // 19
	}                                                                                                                  // 20
}                                                                                                                   // 21
                                                                                                                    // 22
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/meteortoys_pub/client/template.main.js                                                                  //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("MeteorToys_Pub");                                                                             // 2
Template["MeteorToys_Pub"] = new Template("Template.MeteorToys_Pub", (function() {                                  // 3
  var view = this;                                                                                                  // 4
  return Blaze._TemplateWith(function() {                                                                           // 5
    return {                                                                                                        // 6
      name: Spacebars.call("MeteorToys_Pub")                                                                        // 7
    };                                                                                                              // 8
  }, function() {                                                                                                   // 9
    return Spacebars.include(view.lookupTemplate("MeteorToy"), function() {                                         // 10
      return [ "\n		", HTML.Comment(" Start Editable Zone "), "\n			", Spacebars.include(view.lookupTemplate("MeteorToys_Pub_header")), "\n			", Spacebars.include(view.lookupTemplate("MeteorToys_Pub_content")), "\n		", HTML.Comment(" End Editable Zone  "), "\n	" ];
    });                                                                                                             // 12
  });                                                                                                               // 13
}));                                                                                                                // 14
                                                                                                                    // 15
Template.__checkName("MeteorToys_Pub_header");                                                                      // 16
Template["MeteorToys_Pub_header"] = new Template("Template.MeteorToys_Pub_header", (function() {                    // 17
  var view = this;                                                                                                  // 18
  return [ HTML.Raw("<!-- Note: `MeteorToys-background-overlay1`\n 		 comes from Meteor Toys ThemeKit -->\n	"), HTML.DIV({
    "class": "MeteorToys_Pub_header MeteorToys-background-overlay1"                                                 // 20
  }, "\n		\n		", HTML.DIV({                                                                                         // 21
    "class": function() {                                                                                           // 22
      return [ "MeteorToys_Pub_button MeteorToys_action ", Spacebars.mustache(view.lookup("displayable")) ];        // 23
    }                                                                                                               // 24
  }, "Cancel"), "\n		", HTML.Raw("<strong>Pub</strong>"), "\n	") ];                                                 // 25
}));                                                                                                                // 26
                                                                                                                    // 27
Template.__checkName("MeteorToys_Pub_content");                                                                     // 28
Template["MeteorToys_Pub_content"] = new Template("Template.MeteorToys_Pub_content", (function() {                  // 29
  var view = this;                                                                                                  // 30
  return HTML.DIV({                                                                                                 // 31
    "class": "MeteorToys_Pub_content"                                                                               // 32
  }, "\n		", HTML.DIV({                                                                                             // 33
    "class": function() {                                                                                           // 34
      return [ "MeteorToys_Pub_contents ", Spacebars.mustache(view.lookup("position")) ];                           // 35
    }                                                                                                               // 36
  }, "\n			", HTML.DIV({                                                                                            // 37
    "class": "MeteorToys_Pub_contenta"                                                                              // 38
  }, Spacebars.include(view.lookupTemplate("MeteorToys_Pub_m"))), "\n			", HTML.DIV({                               // 39
    "class": "MeteorToys_Pub_contentb"                                                                              // 40
  }, Spacebars.include(view.lookupTemplate("MeteorToys_Pub_h"))), "\n		"), "\n	\n	");                               // 41
}));                                                                                                                // 42
                                                                                                                    // 43
Template.__checkName("MeteorToys_Pub_m");                                                                           // 44
Template["MeteorToys_Pub_m"] = new Template("Template.MeteorToys_Pub_m", (function() {                              // 45
  var view = this;                                                                                                  // 46
  return Blaze.Each(function() {                                                                                    // 47
    return Spacebars.call(view.lookup("data"));                                                                     // 48
  }, function() {                                                                                                   // 49
    return [ "\n		", HTML.DIV({                                                                                     // 50
      "class": "MeteorToys_row MeteorToys_row_hoverable"                                                            // 51
    }, Blaze.View("lookup:.", function() {                                                                          // 52
      return Spacebars.mustache(view.lookup("."));                                                                  // 53
    })), "\n	" ];                                                                                                   // 54
  });                                                                                                               // 55
}));                                                                                                                // 56
                                                                                                                    // 57
Template.__checkName("MeteorToys_Pub_h");                                                                           // 58
Template["MeteorToys_Pub_h"] = new Template("Template.MeteorToys_Pub_h", (function() {                              // 59
  var view = this;                                                                                                  // 60
  return [ HTML.DIV({                                                                                               // 61
    "class": "MeteorToys_row"                                                                                       // 62
  }, Blaze.View("lookup:name", function() {                                                                         // 63
    return Spacebars.mustache(view.lookup("name"));                                                                 // 64
  })), "\n		", Blaze.Each(function() {                                                                              // 65
    return Spacebars.call(view.lookup("data"));                                                                     // 66
  }, function() {                                                                                                   // 67
    return [ "\n			", HTML.DIV({                                                                                    // 68
      "class": "MeteorToys_row"                                                                                     // 69
    }, "\n				", HTML.INPUT({                                                                                       // 70
      id: function() {                                                                                              // 71
        return [ "MeteorToys_pub_", Spacebars.mustache(view.lookup(".")) ];                                         // 72
      },                                                                                                            // 73
      value: function() {                                                                                           // 74
        return Spacebars.mustache(view.lookup("cachedValue"));                                                      // 75
      }                                                                                                             // 76
    }), "\n				", HTML.DIV({                                                                                        // 77
      "class": "MeteorToys_row_name"                                                                                // 78
    }, Blaze.View("lookup:.", function() {                                                                          // 79
      return Spacebars.mustache(view.lookup("."));                                                                  // 80
    })), "\n			"), "\n		" ];                                                                                        // 81
  }), HTML.Raw('\n		<div id="MeteorToys_pub_call" class="MeteorToys_action">Call</div>\n		'), Blaze.If(function() {
    return Spacebars.call(view.lookup("data"));                                                                     // 83
  }, function() {                                                                                                   // 84
    return HTML.DIV({                                                                                               // 85
      id: "MeteorToys_pub_clear",                                                                                   // 86
      "class": "MeteorToys_action"                                                                                  // 87
    }, "Clear");                                                                                                    // 88
  }), HTML.Raw('\n\n\n		<div style="margin-top: 28px; width: 100%; line-height: 20px; pointer-events: none; opacity: .5;">Note: use double quotes <br> in objects and arrays.</div>') ];
}));                                                                                                                // 90
                                                                                                                    // 91
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/meteortoys_pub/client/main.js                                                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _0xeac5=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x5F\x74\x61\x72\x67\x65\x74","\x73\x65\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x5F\x74\x61\x72\x67\x65\x74\x5F\x70\x61\x72\x61\x6D\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x5F\x73\x63\x72\x6F\x6C\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x5F\x64","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x5F\x70\x75\x62\x73","\x63\x61\x6C\x6C","\x73\x74\x61\x72\x74\x75\x70","\x63\x6C\x6F\x73\x65\x54\x6F\x79","\x73\x74\x6F\x70\x50\x72\x6F\x70\x61\x67\x61\x74\x69\x6F\x6E","\x73\x65\x74\x54\x69\x6D\x65\x6F\x75\x74","\x65\x76\x65\x6E\x74\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x50\x75\x62\x5F\x68\x65\x61\x64\x65\x72","\x67\x65\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x62\x75\x74\x74\x6F\x6E\x5F\x64\x69\x73\x70\x6C\x61\x79\x61\x62\x6C\x65","\x68\x65\x6C\x70\x65\x72\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x50\x75\x62\x5F\x63\x6F\x6E\x74\x65\x6E\x74\x63","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x50\x75\x62\x5F\x63\x6F\x6E\x74\x65\x6E\x74","\x73\x6F\x72\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x50\x75\x62\x5F\x6D","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x5F\x66","\x54\x68\x65\x72\x65\x20\x77\x61\x73\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x2E","\x30","\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70","\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x50\x75\x62\x5F\x63\x6F\x6E\x74\x65\x6E\x74\x62","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x70\x75\x62\x43\x61\x63\x68\x65\x2E","\x67\x65\x74\x49\x74\x65\x6D","\x70\x61\x72\x73\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x50\x75\x62\x5F\x68","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","","\x76\x61\x6C","\x23\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x5F","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x70\x75\x73\x68","\x27","\x27\x2C","\x65\x61\x63\x68","\x61\x70\x70\x6C\x79","\x73\x75\x62\x73\x63\x72\x69\x62\x65","\x73\x68\x6F\x75\x6C\x64\x4C\x6F\x67","\x50\x75\x62\x53\x75\x62\x20\x6A\x75\x73\x74\x20\x65\x78\x65\x63\x75\x74\x65\x64\x3A","\x6C\x6F\x67","\x4D\x65\x74\x65\x6F\x72\x2E\x73\x75\x62\x73\x63\x72\x69\x62\x65\x28\x27","\x27\x2C\x20","\x73\x6C\x69\x63\x65","\x29","\x27\x29","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x73\x75\x62\x5F\x74\x61\x72\x67\x65\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x73\x75\x62\x5F\x65\x64\x69\x74\x69\x6E\x67","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x73\x65\x74\x49\x74\x65\x6D","\x72\x65\x6D\x6F\x76\x65\x49\x74\x65\x6D"];Meteor[_0xeac5[7]](function(){MeteorToys[_0xeac5[1]](_0xeac5[0],false);MeteorToys[_0xeac5[1]](_0xeac5[2],false);MeteorToys[_0xeac5[1]](_0xeac5[3],false);Meteor[_0xeac5[6]](_0xeac5[4],function(_0x2c07x1,_0x2c07x2){if(!_0x2c07x1){MeteorToys[_0xeac5[1]](_0xeac5[5],_0x2c07x2)}})});Template[_0xeac5[12]][_0xeac5[11]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x50\x75\x62\x5F\x68\x65\x61\x64\x65\x72":function(){MeteorToys[_0xeac5[8]]()},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x50\x75\x62\x5F\x62\x75\x74\x74\x6F\x6E":function(_0x2c07x1,_0x2c07x3){_0x2c07x1[_0xeac5[9]]();MeteorToys[_0xeac5[1]](_0xeac5[3],false);window[_0xeac5[10]](function(){MeteorToys[_0xeac5[1]](_0xeac5[0],false);MeteorToys[_0xeac5[1]](_0xeac5[2],false)},250)}});Template[_0xeac5[12]][_0xeac5[15]]({"\x64\x69\x73\x70\x6C\x61\x79\x61\x62\x6C\x65":function(){if(MeteorToys[_0xeac5[13]](_0xeac5[3])){return _0xeac5[14]}}});Template[_0xeac5[17]][_0xeac5[15]]({"\x70\x6F\x73\x69\x74\x69\x6F\x6E":function(){if(MeteorToys[_0xeac5[13]](_0xeac5[3])){return _0xeac5[16]}}});Template[_0xeac5[19]][_0xeac5[15]]({"\x64\x61\x74\x61":function(){if(MeteorToys[_0xeac5[13]](_0xeac5[5])){return MeteorToys[_0xeac5[13]](_0xeac5[5])[_0xeac5[18]]()}}});Template[_0xeac5[19]][_0xeac5[11]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72\x6F\x77":function(){var _0x2c07x4=String(this);Meteor[_0xeac5[6]](_0xeac5[20],_0x2c07x4,function(_0x2c07x1,_0x2c07x2){if(_0x2c07x1){alert(_0xeac5[21])}else {MeteorToys[_0xeac5[1]](_0xeac5[0],_0x2c07x4);MeteorToys[_0xeac5[1]](_0xeac5[2],_0x2c07x2);MeteorToys[_0xeac5[1]](_0xeac5[3],true);$(_0xeac5[24])[_0xeac5[23]](_0xeac5[22])}})}});Template[_0xeac5[28]][_0xeac5[15]]({"\x6E\x61\x6D\x65":function(){return MeteorToys[_0xeac5[13]](_0xeac5[0])},"\x64\x61\x74\x61":function(){return MeteorToys[_0xeac5[13]](_0xeac5[2])},cachedValue:function(){name=_0xeac5[25]+MeteorToys[_0xeac5[13]](_0xeac5[0]);if(localStorage[_0xeac5[26]](name)){data=JSON[_0xeac5[27]](localStorage[_0xeac5[26]](name));if(data[this]){return data[this]}}}});Template[_0xeac5[28]][_0xeac5[11]]({"\x63\x6C\x69\x63\x6B\x20\x23\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x5F\x63\x61\x6C\x6C":function(_0x2c07x1,_0x2c07x3){_0x2c07x1[_0xeac5[29]]();_0x2c07x1[_0xeac5[29]]();var _0x2c07x4=MeteorToys[_0xeac5[13]](_0xeac5[0]),_0x2c07x5=MeteorToys[_0xeac5[13]](_0xeac5[2]),_0x2c07x6=_0x2c07x4,_0x2c07x7=[_0x2c07x6],_0x2c07x8=_0xeac5[30],_0x2c07x9={};if(_0x2c07x5){jQuery[_0xeac5[38]](_0x2c07x5,function(_0x2c07xa,_0x2c07xb){var _0x2c07xc=$(_0xeac5[32]+_0x2c07xb)[_0xeac5[31]]();var _0x2c07xd=Package[_0xeac5[34]][_0xeac5[33]][_0xeac5[27]](_0x2c07xc);_0x2c07x7[_0xeac5[35]](_0x2c07xd);_0x2c07x9[_0x2c07xb]=_0x2c07xc;_0x2c07x8+=_0xeac5[36]+_0x2c07xc+_0xeac5[37]});Meteor[_0xeac5[40]][_0xeac5[39]](Meteor,_0x2c07x7);if(MeteorToys[_0xeac5[41]]()){console[_0xeac5[43]](_0xeac5[42]);console[_0xeac5[43]](_0xeac5[44]+_0x2c07x6+_0xeac5[45]+_0x2c07x8[_0xeac5[46]](0,-1)+_0xeac5[47])}}else {Meteor[_0xeac5[40]](_0x2c07x6);if(MeteorToys[_0xeac5[41]]()){console[_0xeac5[43]](_0xeac5[42]);console[_0xeac5[43]](_0xeac5[44]+_0x2c07x6+_0xeac5[48])}};MeteorToys[_0xeac5[1]](_0xeac5[49],false);MeteorToys[_0xeac5[1]](_0xeac5[50],false);MeteorToys[_0xeac5[1]](_0xeac5[3],false);_0x2c07x6=_0xeac5[25]+_0x2c07x6;data=JSON[_0xeac5[51]](_0x2c07x9);localStorage[_0xeac5[52]](_0x2c07x6,data)},"\x63\x6C\x69\x63\x6B\x20\x23\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x5F\x63\x6C\x65\x61\x72":function(_0x2c07x1,_0x2c07x3){_0x2c07x1[_0xeac5[29]]();name=_0xeac5[25]+name;params=MeteorToys[_0xeac5[13]](_0xeac5[2]);localStorage[_0xeac5[53]](name);if(params){jQuery[_0xeac5[38]](params,function(_0x2c07xa,_0x2c07xb){$(_0xeac5[32]+_0x2c07xb)[_0xeac5[31]](_0xeac5[30])})}}})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/meteortoys_pub/lib/main.js                                                                              //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// If your toy requires a collection,                                                                               // 1
// please use the suggested name pattern                                                                            // 2
// so your collections do not show up in                                                                            // 3
// Meteor Toys or Kadira Debug, and to                                                                              // 4
// avoid interference with other Meteor Toys                                                                        // 5
//                                                                                                                  // 6
// CollectionName = new Mongo.Collection("MeteorToys/authorName/packageName");                                      // 7
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:pub'] = {};

})();
