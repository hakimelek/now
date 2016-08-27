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
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var MeteorToysDict, count, msg, ToyKit, MeteorToys;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/meteortoys_listen/client/template.main.js                                                          //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
                                                                                                               // 1
Template.__checkName("MeteorToys_intercept");                                                                  // 2
Template["MeteorToys_intercept"] = new Template("Template.MeteorToys_intercept", (function() {                 // 3
  var view = this;                                                                                             // 4
  return Blaze._TemplateWith(function() {                                                                      // 5
    return {                                                                                                   // 6
      name: Spacebars.call("MeteorToys_intercept")                                                             // 7
    };                                                                                                         // 8
  }, function() {                                                                                              // 9
    return Spacebars.include(view.lookupTemplate("MeteorToy"), function() {                                    // 10
      return [ "\n		", Spacebars.include(view.lookupTemplate("MeteorToys_intercept_header")), "\n		", Spacebars.include(view.lookupTemplate("MeteorToys_intercept_content")), "\n	" ];
    });                                                                                                        // 12
  });                                                                                                          // 13
}));                                                                                                           // 14
                                                                                                               // 15
Template.__checkName("MeteorToys_intercept_header");                                                           // 16
Template["MeteorToys_intercept_header"] = new Template("Template.MeteorToys_intercept_header", (function() {   // 17
  var view = this;                                                                                             // 18
  return HTML.DIV({                                                                                            // 19
    "class": "MeteorToys_intercept_header MeteorToys-background-overlay1"                                      // 20
  }, "\n		", Blaze.Unless(function() {                                                                         // 21
    return Spacebars.call(view.lookup("running"));                                                             // 22
  }, function() {                                                                                              // 23
    return [ "\n			", HTML.DIV({                                                                               // 24
      "class": "MeteorToys_intercept_button MeteorToys_intercept_start MeteorToys_action"                      // 25
    }, "Start"), "\n		" ];                                                                                     // 26
  }, function() {                                                                                              // 27
    return [ "\n			", HTML.DIV({                                                                               // 28
      "class": "MeteorToys_intercept_button MeteorToys_intercept_stop MeteorToys_action"                       // 29
    }, "Stop"), "\n		" ];                                                                                      // 30
  }), HTML.Raw('\n		<div class="MeteorToys_name"><strong>Listen</strong></div>\n	'));                          // 31
}));                                                                                                           // 32
                                                                                                               // 33
Template.__checkName("MeteorToys_intercept_content");                                                          // 34
Template["MeteorToys_intercept_content"] = new Template("Template.MeteorToys_intercept_content", (function() {
  var view = this;                                                                                             // 36
  return HTML.DIV({                                                                                            // 37
    "class": "MeteorToys_intercept_content"                                                                    // 38
  }, "\n		", Blaze.Unless(function() {                                                                         // 39
    return Spacebars.call(view.lookup("running"));                                                             // 40
  }, function() {                                                                                              // 41
    return "\n			When you start DDP Listen, it will display all the data in your console.\n		";                // 42
  }, function() {                                                                                              // 43
    return [ "\n			DDP\n			", HTML.SPAN({                                                                      // 44
      style: "color: #A6E22D"                                                                                  // 45
    }, HTML.CharRef({                                                                                          // 46
      html: "&#x25BC;",                                                                                        // 47
      str: "▼"                                                                                                 // 48
    })), " ", Blaze.View("lookup:downCount", function() {                                                      // 49
      return Spacebars.mustache(view.lookup("downCount"));                                                     // 50
    }), "\n			", HTML.SPAN({                                                                                   // 51
      style: "color: #EB4C16"                                                                                  // 52
    }, HTML.CharRef({                                                                                          // 53
      html: "&#x25B2;",                                                                                        // 54
      str: "▲"                                                                                                 // 55
    })), " ", Blaze.View("lookup:upCount", function() {                                                        // 56
      return Spacebars.mustache(view.lookup("upCount"));                                                       // 57
    }), HTML.BR(), " \n		" ];                                                                                  // 58
  }), "\n		\n		\n	");                                                                                          // 59
}));                                                                                                           // 60
                                                                                                               // 61
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/meteortoys_listen/client/main.js                                                                   //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
var _0xa304=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x69\x63\x74","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x74\x65\x72\x63\x65\x70\x74","\x73\x65\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6D\x6F\x6E\x6B\x65\x79\x50\x61\x74\x63\x68\x65\x64","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x74\x65\x72\x63\x65\x70\x74\x5F\x64\x6F\x77\x6E","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x74\x65\x72\x63\x65\x70\x74\x5F\x75\x70","\x6F\x6E","\x65\x71\x75\x61\x6C\x73","\x6F\x66\x66","\x65\x76\x65\x6E\x74\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x74\x65\x72\x63\x65\x70\x74\x5F\x68\x65\x61\x64\x65\x72","\x68\x65\x6C\x70\x65\x72\x73","\x67\x65\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x74\x65\x72\x63\x65\x70\x74\x5F\x63\x6F\x6E\x74\x65\x6E\x74","\x5F\x73\x65\x6E\x64","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x4F\x55\x54\x20","\x6D\x73\x67","\x6C\x6F\x67","\x63\x61\x6C\x6C","\x6D\x65\x73\x73\x61\x67\x65","\x70\x61\x72\x73\x65","\x49\x4E\x20\x20","\x5F\x73\x74\x72\x65\x61\x6D","\x4D\x65\x74\x65\x6F\x72\x20\x54\x6F\x79\x73\x20\x69\x6E\x74\x65\x72\x63\x65\x70\x74\x20\x73\x74\x61\x72\x74\x65\x64\x20\x61\x74\x20","\x4D\x65\x74\x65\x6F\x72\x20\x54\x6F\x79\x73\x20\x69\x6E\x74\x65\x72\x63\x65\x70\x74\x20\x73\x74\x6F\x70\x70\x65\x64\x20\x61\x74\x20","\x61\x75\x74\x6F\x72\x75\x6E"];MeteorToysDict=Package[_0xa304[1]][_0xa304[0]];MeteorToysDict[_0xa304[3]](_0xa304[2],false);MeteorToysDict[_0xa304[3]](_0xa304[4],false);MeteorToysDict[_0xa304[3]](_0xa304[5],0);MeteorToysDict[_0xa304[3]](_0xa304[6],0);Template[_0xa304[11]][_0xa304[10]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x74\x65\x72\x63\x65\x70\x74\x5F\x73\x74\x61\x72\x74":function(){MeteorToysDict[_0xa304[3]](_0xa304[2],_0xa304[7]);if(MeteorToysDict[_0xa304[8]](_0xa304[4],false)){MeteorToysIntercept()}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x74\x65\x72\x63\x65\x70\x74\x5F\x73\x74\x6F\x70":function(){MeteorToysDict[_0xa304[3]](_0xa304[2],_0xa304[9])}});Template[_0xa304[11]][_0xa304[12]]({running:function(){if(MeteorToysDict[_0xa304[8]](_0xa304[2],_0xa304[7])){return true}}});Template[_0xa304[14]][_0xa304[12]]({running:function(){if(MeteorToysDict[_0xa304[8]](_0xa304[2],_0xa304[7])){return true}},downCount:function(){return MeteorToysDict[_0xa304[13]](_0xa304[5])},upCount:function(){return MeteorToysDict[_0xa304[13]](_0xa304[6])}});var MeteorToysIntercept=function(){var _0xaa61x2=Meteor[_0xa304[16]][_0xa304[15]];Meteor[_0xa304[16]][_0xa304[15]]=function(_0xaa61x3){if(MeteorToysDict[_0xa304[8]](_0xa304[2],_0xa304[7])){console[_0xa304[19]](_0xa304[17],_0xaa61x3[_0xa304[18]],_0xaa61x3);count=MeteorToysDict[_0xa304[13]](_0xa304[6])+1;MeteorToysDict[_0xa304[3]](_0xa304[6],count)};_0xaa61x2[_0xa304[20]](this,_0xaa61x3)};Meteor[_0xa304[16]][_0xa304[24]][_0xa304[7]](_0xa304[21],function(_0xaa61x4){if(MeteorToysDict[_0xa304[8]](_0xa304[2],_0xa304[7])){msg=JSON[_0xa304[22]](_0xaa61x4);console[_0xa304[19]](_0xa304[23],msg[_0xa304[18]],msg);count=MeteorToysDict[_0xa304[13]](_0xa304[5])+1;MeteorToysDict[_0xa304[3]](_0xa304[5],count)}})};Tracker[_0xa304[27]](function(){if(MeteorToysDict[_0xa304[8]](_0xa304[2],_0xa304[7])){console[_0xa304[19]](_0xa304[25]+Date())};if(MeteorToysDict[_0xa304[8]](_0xa304[2],_0xa304[9])){console[_0xa304[19]](_0xa304[26]+Date())}})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/meteortoys_listen/config/config.js                                                                 //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
var _0xbd9a=["\x4C\x69\x73\x74\x65\x6E","\x31\x2E\x30\x2E\x30","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x74\x65\x72\x63\x65\x70\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x73\x74\x61\x72\x74\x75\x70"];ToyKit={name:_0xbd9a[0],version:_0xbd9a[1],template:_0xbd9a[2],ToyKit:_0xbd9a[1]};Meteor[_0xbd9a[5]](function(){MeteorToys=Package[_0xbd9a[4]][_0xbd9a[3]]})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:listen'] = {};

})();
