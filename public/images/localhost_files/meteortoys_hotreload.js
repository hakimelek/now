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
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var MeteorToysDict, ToyKit, MeteorToys;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/meteortoys_hotreload/client/template.main.js                                 //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
                                                                                         // 1
Template.__checkName("MeteorToys_reload");                                               // 2
Template["MeteorToys_reload"] = new Template("Template.MeteorToys_reload", (function() {
  var view = this;                                                                       // 4
  return HTML.Raw('<!-- {{#MeteorToy name="MeteorToys_reload" type="button"}} -->\n	<!-- {{/MeteorToy}} -->\n	<div class="MeteorToys_orb MeteorToys_button" id="MeteorToys_reload" oncontextmenu="Package[\'meteortoys:toykit\'].MeteorToys.closeToy(); return false;">	\n				<div class="MeteorToys_icon"></div>\n			<div class="MeteorToys_orb_filler_wrapper"></div>\n	</div>');
}));                                                                                     // 6
                                                                                         // 7
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/meteortoys_hotreload/client/main.js                                          //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
var _0x7daa=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x69\x63\x74","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x72\x65\x6C\x6F\x61\x64","\x5F\x72\x65\x6C\x6F\x61\x64","\x66\x6F\x63\x75\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72\x65\x6C\x6F\x61\x64","\x73\x65\x74","\x54\x6F\x79\x4B\x69\x74","\x65\x76\x65\x6E\x74\x73"];MeteorToysDict=Package[_0x7daa[1]][_0x7daa[0]];Template[_0x7daa[5]][_0x7daa[8]]({"\x63\x6C\x69\x63\x6B":function(){Meteor[_0x7daa[3]][_0x7daa[2]]()},"\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72":function(){Package[_0x7daa[1]][_0x7daa[7]][_0x7daa[6]](_0x7daa[4],_0x7daa[5])},"\x6D\x6F\x75\x73\x65\x6F\x75\x74":function(){Package[_0x7daa[1]][_0x7daa[7]][_0x7daa[6]](_0x7daa[4])}})
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/meteortoys_hotreload/config/config.js                                        //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
ToyKit = {                                                                               // 1
	name:     "Hot Reload",                                                                 // 2
	version:  "1.0.0",                                                                      // 3
	template: "MeteorToys_reload"                                                           // 4
};                                                                                       // 5
                                                                                         // 6
Meteor.startup(function() {                                                              // 7
                                                                                         // 8
	MeteorToys = Package["meteortoys:toykit"].MeteorToys;                                   // 9
                                                                                         // 10
	// MeteorToys.register({                                                                // 11
	// 	package:  "meteortoys:hotreload",                                                   // 12
	// 	name:     "Hot Reload",                                                             // 13
	// 	template: "MeteorToys_reload",                                                      // 14
	// 	core:     true                                                                      // 15
	// })                                                                                   // 16
                                                                                         // 17
});                                                                                      // 18
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:hotreload'] = {};

})();
