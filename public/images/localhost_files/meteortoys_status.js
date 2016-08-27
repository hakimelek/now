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
// packages/meteortoys_status/client/template.main.js                                    //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
                                                                                         // 1
Template.__checkName("MeteorToys_status");                                               // 2
Template["MeteorToys_status"] = new Template("Template.MeteorToys_status", (function() {
  var view = this;                                                                       // 4
  return HTML.DIV({                                                                      // 5
    "class": "MeteorToys_orb MeteorToys_button",                                         // 6
    id: "MeteorToys_status",                                                             // 7
    oncontextmenu: "Package['meteortoys:toykit'].MeteorToys.closeToy(); return false;"   // 8
  }, "	\n		", Blaze.If(function() {                                                      // 9
    return Spacebars.call(view.lookup("online"));                                        // 10
  }, function() {                                                                        // 11
    return [ "\n			", HTML.DIV({                                                         // 12
      "class": "MeteorToys_icon MeteorToys_icon_online"                                  // 13
    }), "\n		" ];                                                                        // 14
  }), "\n		", Blaze.If(function() {                                                      // 15
    return Spacebars.call(view.lookup("connecting"));                                    // 16
  }, function() {                                                                        // 17
    return [ "\n			", HTML.DIV({                                                         // 18
      "class": "MeteorToys_icon MeteorToys_icon_connecting"                              // 19
    }), "\n		" ];                                                                        // 20
  }), "\n		", Blaze.If(function() {                                                      // 21
    return Spacebars.call(view.lookup("offline"));                                       // 22
  }, function() {                                                                        // 23
    return [ "\n			", HTML.DIV({                                                         // 24
      "class": "MeteorToys_icon MeteorToys_icon_offline"                                 // 25
    }), "\n		" ];                                                                        // 26
  }), "\n		", Blaze.If(function() {                                                      // 27
    return Spacebars.call(view.lookup("waiting"));                                       // 28
  }, function() {                                                                        // 29
    return [ "\n			", HTML.DIV({                                                         // 30
      "class": "MeteorToys_icon MeteorToys_icon_waiting"                                 // 31
    }), "\n		" ];                                                                        // 32
  }), "\n		", Blaze.If(function() {                                                      // 33
    return Spacebars.call(view.lookup("failed"));                                        // 34
  }, function() {                                                                        // 35
    return [ "\n			", HTML.DIV({                                                         // 36
      "class": "MeteorToys_icon MeteorToys_icon_failed"                                  // 37
    }), "\n		" ];                                                                        // 38
  }), HTML.Raw('\n		<div class="MeteorToys_orb_filler_wrapper"></div>\n	'));             // 39
}));                                                                                     // 40
                                                                                         // 41
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/meteortoys_status/client/main.js                                             //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
var _0x3891=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x69\x63\x74","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x63\x6F\x6E\x6E\x65\x63\x74\x65\x64","\x73\x74\x61\x74\x75\x73","\x64\x69\x73\x63\x6F\x6E\x6E\x65\x63\x74","\x72\x65\x63\x6F\x6E\x6E\x65\x63\x74","\x66\x6F\x63\x75\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x73\x74\x61\x74\x75\x73","\x73\x65\x74","\x54\x6F\x79\x4B\x69\x74","\x65\x76\x65\x6E\x74\x73","\x6F\x66\x66\x6C\x69\x6E\x65","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6E\x67","\x77\x61\x69\x74\x69\x6E\x67","\x66\x61\x69\x6C\x65\x64","\x68\x65\x6C\x70\x65\x72\x73"];MeteorToysDict=Package[_0x3891[1]][_0x3891[0]];Template[_0x3891[7]][_0x3891[10]]({"\x63\x6C\x69\x63\x6B":function(_0x6cb6x1,_0x6cb6x2){if(Meteor[_0x3891[3]]()[_0x3891[2]]){Meteor[_0x3891[4]]()}else {Meteor[_0x3891[5]]()}},"\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72":function(){Package[_0x3891[1]][_0x3891[9]][_0x3891[8]](_0x3891[6],_0x3891[7])},"\x6D\x6F\x75\x73\x65\x6F\x75\x74":function(){Package[_0x3891[1]][_0x3891[9]][_0x3891[8]](_0x3891[6])}});Template[_0x3891[7]][_0x3891[15]]({online:function(){if(Meteor[_0x3891[3]]()[_0x3891[3]]===_0x3891[2]){return true}},offline:function(){if(Meteor[_0x3891[3]]()[_0x3891[3]]===_0x3891[11]){return true}},connecting:function(){if(Meteor[_0x3891[3]]()[_0x3891[3]]===_0x3891[12]){return true}},waiting:function(){if(Meteor[_0x3891[3]]()[_0x3891[3]]===_0x3891[13]){return true}},failed:function(){if(Meteor[_0x3891[3]]()[_0x3891[3]]===_0x3891[14]){return true}}})
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/meteortoys_status/config/config.js                                           //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
ToyKit = {                                                                               // 1
	name:     "Status",                                                                     // 2
	version:  "1.0.0",                                                                      // 3
	template: "MeteorToys_status",                                                          // 4
	ToyKit:   "1.0.0"                                                                       // 5
};                                                                                       // 6
                                                                                         // 7
Meteor.startup(function() {                                                              // 8
                                                                                         // 9
	MeteorToys = Package["meteortoys:toykit"].MeteorToys;                                   // 10
                                                                                         // 11
	// MeteorToys.register({                                                                // 12
	// 	package:  "meteortoys:status",                                                      // 13
	// 	name:     "Status",                                                                 // 14
	// 	template: "MeteorToys_status",                                                      // 15
	// 	core:     true,                                                                     // 16
	// 	// onOpen:   function () {                                                          // 17
	// 	// 	console.log('onOpen');                                                          // 18
	// 	// },                                                                               // 19
	// 	// onClose:  function () {                                                          // 20
	// 	// 	console.log('onClose');                                                         // 21
	// 	// },                                                                               // 22
	// })                                                                                   // 23
                                                                                         // 24
});                                                                                      // 25
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:status'] = {};

})();
