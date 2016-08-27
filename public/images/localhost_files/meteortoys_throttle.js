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
var MeteorToysDict, doc, ToyKit, MeteorToys;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// packages/meteortoys_throttle/client/template.main.js                                      //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
                                                                                             // 1
Template.__checkName("MeteorToys_throttle");                                                 // 2
Template["MeteorToys_throttle"] = new Template("Template.MeteorToys_throttle", (function() {
  var view = this;                                                                           // 4
  return HTML.DIV({                                                                          // 5
    "class": "MeteorToys_orb  MeteorToys_button MeteorToys_Throttle",                        // 6
    id: "MeteorToys_throttle",                                                               // 7
    oncontextmenu: "Package['meteortoys:toykit'].MeteorToys.closeToy(); return false;"       // 8
  }, "	\n		", HTML.DIV({                                                                     // 9
    "class": function() {                                                                    // 10
      return [ "MeteorToys_icon ", Spacebars.mustache(view.lookup("icon_type")) ];           // 11
    }                                                                                        // 12
  }, "\n			", HTML.Raw('<div id="MeteorToys_indicator"></div>'), "\n		"), HTML.Raw('\n		<div class="MeteorToys_orb_filler_wrapper"></div>\n	'));
}));                                                                                         // 14
                                                                                             // 15
///////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// packages/meteortoys_throttle/client/main.js                                               //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
var _0xa3ab=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x69\x63\x74","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x61\x6C\x74\x4B\x65\x79","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x74\x68\x72\x6F\x74\x74\x6C\x65\x5F\x64\x69\x73\x61\x62\x6C\x65","\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x54\x68\x72\x6F\x74\x74\x6C\x65\x20\x68\x61\x73\x20\x62\x65\x65\x6E\x20\x64\x69\x73\x61\x62\x6C\x65\x64\x2E\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x3C\x62\x72\x3E\x20\x50\x6C\x65\x61\x73\x65\x20\x6E\x6F\x74\x65\x20\x79\x6F\x75\x20\x6D\x75\x73\x74\x20\x72\x65\x2D\x62\x75\x69\x6C\x64\x20\x79\x6F\x75\x72\x20\x4D\x65\x74\x65\x6F\x72\x20\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x20\x66\x6F\x72\x20\x74\x68\x65\x20\x63\x68\x61\x6E\x67\x65\x20\x74\x6F\x20\x74\x61\x6B\x65\x20\x65\x66\x66\x65\x63\x74\x2E","\x63\x6F\x75\x6E\x74\x65\x72","\x63\x61\x6C\x6C","\x73\x68\x69\x66\x74\x4B\x65\x79","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x74\x68\x72\x6F\x74\x74\x6C\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x20\x45\x72\x72\x6F\x72","\x6C\x6F\x67","\x54\x68\x65\x72\x65\x20\x77\x61\x73\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x20\x61\x63\x74\x69\x76\x61\x74\x69\x6E\x67\x20\x54\x68\x72\x6F\x74\x74\x6C\x65\x2E\x20\x50\x6C\x65\x61\x73\x65\x20\x73\x65\x65\x20\x63\x6F\x6E\x73\x6F\x6C\x65\x20\x66\x6F\x72\x20\x74\x68\x65\x20\x4D\x65\x74\x65\x6F\x72\x20\x65\x72\x72\x6F\x72\x2E","\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x54\x68\x72\x6F\x74\x74\x6C\x65\x20\x68\x61\x73\x20\x62\x65\x65\x6E\x20\x74\x6F\x67\x67\x6C\x65\x64\x2E\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x3C\x62\x72\x3E\x20\x50\x6C\x65\x61\x73\x65\x20\x6E\x6F\x74\x65\x20\x79\x6F\x75\x20\x6D\x75\x73\x74\x20\x72\x65\x2D\x62\x75\x69\x6C\x64\x20\x79\x6F\x75\x72\x20\x4D\x65\x74\x65\x6F\x72\x20\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x20\x66\x6F\x72\x20\x74\x68\x65\x20\x63\x68\x61\x6E\x67\x65\x20\x74\x6F\x20\x74\x61\x6B\x65\x20\x65\x66\x66\x65\x63\x74\x2E","\x66\x6F\x63\x75\x73","\x73\x65\x74","\x54\x6F\x79\x4B\x69\x74","\x65\x76\x65\x6E\x74\x73","\x66\x69\x6E\x64\x4F\x6E\x65","\x54\x68\x72\x6F\x74\x74\x6C\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x61\x74\x61","\x73\x70\x65\x65\x64","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x74\x68\x72\x6F\x74\x74\x6C\x65\x5F\x65\x6E\x61\x62\x6C\x65\x64\x31","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x74\x68\x72\x6F\x74\x74\x6C\x65\x5F\x65\x6E\x61\x62\x6C\x65\x64\x32","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x74\x68\x72\x6F\x74\x74\x6C\x65\x5F\x64\x69\x73\x61\x62\x6C\x65\x64","\x68\x65\x6C\x70\x65\x72\x73"];MeteorToysDict=Package[_0xa3ab[1]][_0xa3ab[0]];Template[_0xa3ab[8]][_0xa3ab[16]]({"\x63\x6C\x69\x63\x6B":function(_0xa9c4x1,_0xa9c4x2){if(_0xa9c4x1[_0xa3ab[2]]){Meteor[_0xa3ab[6]](_0xa3ab[3],function(_0xa9c4x1,_0xa9c4x3){if(!_0xa9c4x1){Package[_0xa3ab[1]].Note(_0xa3ab[4],_0xa3ab[5])}});return};if(_0xa9c4x1[_0xa3ab[7]]){Meteor[_0xa3ab[6]](_0xa3ab[3],function(_0xa9c4x1,_0xa9c4x3){if(!_0xa9c4x1){Package[_0xa3ab[1]].Note(_0xa3ab[4],_0xa3ab[5])}});return};Meteor[_0xa3ab[6]](_0xa3ab[8],function(_0xa9c4x1,_0xa9c4x3){if(_0xa9c4x1){console[_0xa3ab[10]](_0xa3ab[9]);console[_0xa3ab[10]](_0xa9c4x1);Package[_0xa3ab[1]].Note(_0xa3ab[11])}else {Package[_0xa3ab[1]].Note(_0xa3ab[12],_0xa3ab[5])}})},"\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72":function(){Package[_0xa3ab[1]][_0xa3ab[15]][_0xa3ab[14]](_0xa3ab[13],_0xa3ab[8])},"\x6D\x6F\x75\x73\x65\x6F\x75\x74":function(){Package[_0xa3ab[1]][_0xa3ab[15]][_0xa3ab[14]](_0xa3ab[13])}});Template[_0xa3ab[8]][_0xa3ab[24]]({"\x69\x63\x6F\x6E\x5F\x74\x79\x70\x65":function(){if(Package[_0xa3ab[1]][_0xa3ab[19]][_0xa3ab[18]][_0xa3ab[17]]()){doc=Package[_0xa3ab[1]][_0xa3ab[19]][_0xa3ab[18]][_0xa3ab[17]]();if(doc[_0xa3ab[20]]===600){return _0xa3ab[21]}else {if(doc[_0xa3ab[20]]===1200){return _0xa3ab[22]}}}else {return _0xa3ab[23]}}})
///////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// packages/meteortoys_throttle/config/config.js                                             //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
ToyKit = {                                                                                   // 1
	name:     "Throttle",                                                                       // 2
	version:  "1.0.0",                                                                          // 3
	template: "MeteorToys_throttle",                                                            // 4
	ToyKit:   "1.0.0"                                                                           // 5
};                                                                                           // 6
                                                                                             // 7
                                                                                             // 8
Meteor.startup(function() {                                                                  // 9
                                                                                             // 10
	MeteorToys = Package["meteortoys:toykit"].MeteorToys;                                       // 11
                                                                                             // 12
	// MeteorToys.register({                                                                    // 13
	// 	package:  "meteortoys:throttle",                                                        // 14
	// 	name:     "Throttle",                                                                   // 15
	// 	template: "MeteorToys_throttle",                                                        // 16
	// 	core:     true                                                                          // 17
	// })                                                                                       // 18
                                                                                             // 19
});                                                                                          // 20
///////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:throttle'] = {};

})();
