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
var MeteorToysDict, ToyKit;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/meteortoys_autopub/client/template.main.js                                                              //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("MeteorToys_autopub");                                                                         // 2
Template["MeteorToys_autopub"] = new Template("Template.MeteorToys_autopub", (function() {                          // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    "class": function() {                                                                                           // 6
      return [ "MeteorToys_orb MeteorToys_button ", Spacebars.mustache(view.lookup("autopub_state")) ];             // 7
    },                                                                                                              // 8
    id: "MeteorToys_autopub",                                                                                       // 9
    oncontextmenu: "Package['meteortoys:toykit'].MeteorToys.closeToy();return false;"                               // 10
  }, HTML.Raw('	\n		<div class="MeteorToys_icon"></div>\n		<div class="MeteorToys_orb_filler_wrapper"></div>\n	'));
}));                                                                                                                // 12
                                                                                                                    // 13
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/meteortoys_autopub/client/main.js                                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _0x83d3=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x69\x63\x74","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x63\x6F\x75\x6E\x74","\x66\x69\x6E\x64","\x41\x75\x74\x6F\x50\x75\x62","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x61\x74\x61","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x61\x75\x74\x6F\x70\x75\x62\x6C\x69\x73\x68\x5F\x70\x65\x72\x73\x69\x73\x74\x65\x6E\x74","\x73\x65\x74","\x61\x75\x74\x6F\x72\x75\x6E","\x67\x65\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x61\x75\x74\x6F\x70\x75\x62\x6C\x69\x73\x68\x5F\x69\x73\x6F\x6C\x61\x74\x65\x64","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x61\x75\x74\x6F\x70\x75\x62\x6C\x69\x73\x68","\x63\x74\x72\x6C\x4B\x65\x79","\x6D\x65\x74\x61\x4B\x65\x79","\x73\x68\x69\x66\x74\x4B\x65\x79","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x61\x75\x74\x6F\x70\x75\x62","\x54\x68\x65\x72\x65\x20\x68\x61\x73\x20\x62\x65\x65\x6E\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x20\x65\x6E\x61\x62\x6C\x69\x6E\x67\x20\x70\x65\x72\x73\x69\x73\x74\x65\x6E\x74\x20\x41\x75\x74\x6F\x50\x75\x62\x2E","\x63\x61\x6C\x6C","\x66\x6F\x63\x75\x73","\x54\x6F\x79\x4B\x69\x74","\x65\x76\x65\x6E\x74\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x41\x75\x74\x6F\x50\x75\x62\x5F\x70\x65\x72\x73\x69\x73\x74\x65\x6E\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x41\x75\x74\x6F\x50\x75\x62\x5F\x61\x63\x74\x69\x76\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x41\x75\x74\x6F\x50\x75\x62","\x68\x65\x6C\x70\x65\x72\x73"];MeteorToysDict=Package[_0x83d3[1]][_0x83d3[0]];Tracker[_0x83d3[8]](function(){if(Package[_0x83d3[1]][_0x83d3[5]][_0x83d3[4]][_0x83d3[3]]()[_0x83d3[2]]()===1){MeteorToysDict[_0x83d3[7]](_0x83d3[6],true)}else {MeteorToysDict[_0x83d3[7]](_0x83d3[6],false)}});Tracker[_0x83d3[8]](function(){var _0xb28ax1=MeteorToysDict[_0x83d3[9]](_0x83d3[6]);var _0xb28ax2=MeteorToysDict[_0x83d3[9]](_0x83d3[10]);if(_0xb28ax1){MeteorToysDict[_0x83d3[7]](_0x83d3[11],true)}else {if(_0xb28ax2){MeteorToysDict[_0x83d3[7]](_0x83d3[11],true)}else {MeteorToysDict[_0x83d3[7]](_0x83d3[11],false)}}});Template[_0x83d3[15]][_0x83d3[20]]({"\x63\x6C\x69\x63\x6B":function(_0xb28ax3,_0xb28ax4){if(_0xb28ax3[_0x83d3[12]]||_0xb28ax3[_0x83d3[13]]||_0xb28ax3[_0x83d3[14]]){Meteor[_0x83d3[17]](_0x83d3[15],function(_0xb28ax3,_0xb28ax5){if(_0xb28ax3){alert(_0x83d3[16])}})}else {if(MeteorToysDict[_0x83d3[9]](_0x83d3[10])){MeteorToysDict[_0x83d3[7]](_0x83d3[10],false)}else {MeteorToysDict[_0x83d3[7]](_0x83d3[10],true)}}},"\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72":function(){Package[_0x83d3[1]][_0x83d3[19]][_0x83d3[7]](_0x83d3[18],_0x83d3[15])},"\x6D\x6F\x75\x73\x65\x6F\x75\x74":function(){Package[_0x83d3[1]][_0x83d3[19]][_0x83d3[7]](_0x83d3[18])}});Template[_0x83d3[15]][_0x83d3[24]]({autopub_state:function(){if(MeteorToysDict[_0x83d3[9]](_0x83d3[6])){return _0x83d3[21]}else {if(MeteorToysDict[_0x83d3[9]](_0x83d3[10])){return _0x83d3[22]}else {return _0x83d3[23]}}}})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/meteortoys_autopub/config/config.js                                                                     //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
ToyKit = {                                                                                                          // 1
	name:     "AutoPub",                                                                                               // 2
	version:  "1.0.0",                                                                                                 // 3
	template: "MeteorToys_autopub",                                                                                    // 4
	ToyKit:   "1.0.0"                                                                                                  // 5
};                                                                                                                  // 6
                                                                                                                    // 7
// Meteor.startup(function() {                                                                                      // 8
                                                                                                                    // 9
// 	MeteorToys = Package["meteortoys:toykit"].MeteorToys;                                                           // 10
                                                                                                                    // 11
// 	MeteorToys.register({                                                                                           // 12
// 		package:  "meteortoys:autopub",                                                                                // 13
// 		name:     "AutoPub",                                                                                           // 14
// 		template: "MeteorToys_autopub",                                                                                // 15
// 		core:     true                                                                                                 // 16
// 	})                                                                                                              // 17
                                                                                                                    // 18
// });                                                                                                              // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:autopub'] = {};

})();
