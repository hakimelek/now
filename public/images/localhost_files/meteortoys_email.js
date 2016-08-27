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
var MeteorToysDict, MeteorToysGoTo, currentEmail, nextEmail, emailCount, lastEmail, resultCount, current, thing, doc, ToyKit, MeteorToys;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/meteortoys_email/client/template.main.js                                                   //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
                                                                                                       // 1
Template.__checkName("MeteorToys_email");                                                              // 2
Template["MeteorToys_email"] = new Template("Template.MeteorToys_email", (function() {                 // 3
  var view = this;                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                              // 5
    return {                                                                                           // 6
      name: Spacebars.call("MeteorToys_email")                                                         // 7
    };                                                                                                 // 8
  }, function() {                                                                                      // 9
    return Spacebars.include(view.lookupTemplate("MeteorToy"), function() {                            // 10
      return [ "\n		", Spacebars.include(view.lookupTemplate("MeteorToys_email_header")), "\n		", Spacebars.include(view.lookupTemplate("MeteorToys_email_content")), "\n	" ];
    });                                                                                                // 12
  });                                                                                                  // 13
}));                                                                                                   // 14
                                                                                                       // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/meteortoys_email/client/main.js                                                            //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
// JavaScript                                                                                          // 1
MeteorToysDict  = Package["meteortoys:toykit"].MeteorToysDict;                                         // 2
MeteorToysDict.set("currentEmail", 0);                                                                 // 3
                                                                                                       // 4
// Mark Emails as read                                                                                 // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/meteortoys_email/client/template.header.js                                                 //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
                                                                                                       // 1
Template.__checkName("MeteorToys_email_header");                                                       // 2
Template["MeteorToys_email_header"] = new Template("Template.MeteorToys_email_header", (function() {   // 3
  var view = this;                                                                                     // 4
  return HTML.DIV({                                                                                    // 5
    "class": "MeteorToys_email_header MeteorToys-background-overlay1"                                  // 6
  }, "\n		", Blaze.If(function() {                                                                     // 7
    return Spacebars.call(view.lookup("hasData"));                                                     // 8
  }, function() {                                                                                      // 9
    return [ "\n			", HTML.DIV({                                                                       // 10
      "class": "MeteorToys_email_button MeteorToys_email_next MeteorToys_action"                       // 11
    }, HTML.CharRef({                                                                                  // 12
      html: "&rsaquo;",                                                                                // 13
      str: "›"                                                                                         // 14
    })), "\n			", HTML.DIV({                                                                           // 15
      "class": "MeteorToys_email_button MeteorToys_email_prev MeteorToys_action"                       // 16
    }, HTML.CharRef({                                                                                  // 17
      html: "&lsaquo;",                                                                                // 18
      str: "‹"                                                                                         // 19
    })), "\n		" ];                                                                                     // 20
  }), "\n		", HTML.DIV({                                                                               // 21
    "class": "MeteorToys_name"                                                                         // 22
  }, HTML.Raw("<strong>Email</strong>"), " ", Blaze.If(function() {                                    // 23
    return Spacebars.call(view.lookup("hasData"));                                                     // 24
  }, function() {                                                                                      // 25
    return [ Blaze.View("lookup:current", function() {                                                 // 26
      return Spacebars.mustache(view.lookup("current"));                                               // 27
    }), " of ", Blaze.View("lookup:total", function() {                                                // 28
      return Spacebars.mustache(view.lookup("total"));                                                 // 29
    }) ];                                                                                              // 30
  })), "\n	");                                                                                         // 31
}));                                                                                                   // 32
                                                                                                       // 33
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/meteortoys_email/client/header.js                                                          //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
var _0xc3e6=["\x63\x75\x72\x72\x65\x6E\x74\x45\x6D\x61\x69\x6C","\x67\x65\x74","\x73\x65\x74","\x63\x6F\x75\x6E\x74","\x66\x69\x6E\x64","\x45\x6D\x61\x69\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x61\x74\x61","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x6C\x61\x73\x74","\x70\x72\x65\x76","\x66\x69\x72\x73\x74","\x6E\x65\x78\x74","\x65\x76\x65\x6E\x74\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x65\x6D\x61\x69\x6C\x5F\x68\x65\x61\x64\x65\x72","\x68\x65\x6C\x70\x65\x72\x73"];MeteorToysGoTo={"\x6E\x65\x78\x74":function(){currentEmail=MeteorToysDict[_0xc3e6[1]](_0xc3e6[0])+1;nextEmail=MeteorToysDict[_0xc3e6[1]](_0xc3e6[0])+1;MeteorToysDict[_0xc3e6[2]](_0xc3e6[0],nextEmail)},"\x70\x72\x65\x76":function(){nextEmail=MeteorToysDict[_0xc3e6[1]](_0xc3e6[0])-1;MeteorToysDict[_0xc3e6[2]](_0xc3e6[0],nextEmail)},"\x66\x69\x72\x73\x74":function(){MeteorToysDict[_0xc3e6[2]](_0xc3e6[0],0)},"\x6C\x61\x73\x74":function(){emailCount=Package[_0xc3e6[7]][_0xc3e6[6]][_0xc3e6[5]][_0xc3e6[4]]()[_0xc3e6[3]]();lastEmail=emailCount-1;MeteorToysDict[_0xc3e6[2]](_0xc3e6[0],lastEmail)}};Template[_0xc3e6[13]][_0xc3e6[12]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x65\x6D\x61\x69\x6C\x5F\x70\x72\x65\x76":function(_0x9aa5x1,_0x9aa5x2){currentEmail=MeteorToysDict[_0xc3e6[1]](_0xc3e6[0]);if(currentEmail===0){MeteorToysGoTo[_0xc3e6[8]]()}else {MeteorToysGoTo[_0xc3e6[9]]()}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x65\x6D\x61\x69\x6C\x5F\x6E\x65\x78\x74":function(){emailCount=Package[_0xc3e6[7]][_0xc3e6[6]][_0xc3e6[5]][_0xc3e6[4]]()[_0xc3e6[3]]();currentEmail=MeteorToysDict[_0xc3e6[1]](_0xc3e6[0])+1;if(emailCount===currentEmail){MeteorToysGoTo[_0xc3e6[10]]()}else {MeteorToysGoTo[_0xc3e6[11]]()}}});Template[_0xc3e6[13]][_0xc3e6[14]]({current:function(){currentEmail=MeteorToysDict[_0xc3e6[1]](_0xc3e6[0])+1;return currentEmail},total:function(){emailCount=Package[_0xc3e6[7]][_0xc3e6[6]][_0xc3e6[5]][_0xc3e6[4]]()[_0xc3e6[3]]();return emailCount},hasData:function(){resultCount=Package[_0xc3e6[7]][_0xc3e6[6]][_0xc3e6[5]][_0xc3e6[4]]()[_0xc3e6[3]]();if(resultCount<=1){return false}else {return true}}})
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/meteortoys_email/client/template.content.js                                                //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
                                                                                                       // 1
Template.__checkName("MeteorToys_email_content");                                                      // 2
Template["MeteorToys_email_content"] = new Template("Template.MeteorToys_email_content", (function() {
  var view = this;                                                                                     // 4
  return HTML.DIV({                                                                                    // 5
    "class": "MeteorToys_email_content"                                                                // 6
  }, "\n", Blaze.If(function() {                                                                       // 7
    return Spacebars.call(view.lookup("content"));                                                     // 8
  }, function() {                                                                                      // 9
    return [ "\n", Spacebars.With(function() {                                                         // 10
      return Spacebars.call(view.lookup("content"));                                                   // 11
    }, function() {                                                                                    // 12
      return [ "\n	", HTML.DIV({                                                                       // 13
        "class": "MeteorToys_content"                                                                  // 14
      }, "\n		", HTML.DIV({                                                                            // 15
        "class": "MeteorToys_content_name"                                                             // 16
      }, "To "), "\n		", HTML.DIV({                                                                    // 17
        "class": "MeteorToys_content_content"                                                          // 18
      }, Blaze.View("lookup:to", function() {                                                          // 19
        return Spacebars.mustache(view.lookup("to"));                                                  // 20
      })), "\n	"), "\n	", HTML.DIV({                                                                   // 21
        "class": "MeteorToys_content"                                                                  // 22
      }, "\n		", HTML.DIV({                                                                            // 23
        "class": "MeteorToys_content_name"                                                             // 24
      }, "From "), "\n		", HTML.DIV({                                                                  // 25
        "class": "MeteorToys_content_content"                                                          // 26
      }, Blaze.View("lookup:from", function() {                                                        // 27
        return Spacebars.mustache(view.lookup("from"));                                                // 28
      })), "\n	"), "\n	", HTML.DIV({                                                                   // 29
        "class": "MeteorToys_content"                                                                  // 30
      }, "\n		", HTML.DIV({                                                                            // 31
        "class": "MeteorToys_content_name"                                                             // 32
      }, "Subject "), "\n		", HTML.DIV({                                                               // 33
        "class": "MeteorToys_content_content"                                                          // 34
      }, Blaze.View("lookup:subject", function() {                                                     // 35
        return Spacebars.mustache(view.lookup("subject"));                                             // 36
      })), "\n	"), "\n	", HTML.DIV({                                                                   // 37
        "class": "MeteorToys_content"                                                                  // 38
      }, "\n		", HTML.DIV({                                                                            // 39
        "class": "MeteorToys_content_name"                                                             // 40
      }, "Time "), "\n		", HTML.DIV({                                                                  // 41
        "class": "MeteorToys_content_content"                                                          // 42
      }, Blaze.View("lookup:timestamp", function() {                                                   // 43
        return Spacebars.mustache(view.lookup("timestamp"));                                           // 44
      })), "\n	"), "\n	", HTML.DIV({                                                                   // 45
        "class": "MeteorToys_content"                                                                  // 46
      }, "\n		", HTML.DIV({                                                                            // 47
        "class": "MeteorToys_content_name"                                                             // 48
      }, "Body "), "\n		", HTML.DIV({                                                                  // 49
        "class": "MeteorToys_content_content"                                                          // 50
      }, Blaze.View("lookup:body", function() {                                                        // 51
        return Spacebars.mustache(view.lookup("body"));                                                // 52
      })), "\n	"), "\n" ];                                                                             // 53
    }), "\n	", HTML.Comment(" <pre>{{{content}}}</pre> "), "\n" ];                                     // 54
  }, function() {                                                                                      // 55
    return [ "\n	", HTML.DIV({                                                                         // 56
      style: "padding: 5px 8px"                                                                        // 57
    }, "\n		Whenever your application sends", HTML.BR(), "\n		an email, it will be captured", HTML.BR(), "\n		and displayed here.\n	"), "\n" ];
  }), "\n	");                                                                                          // 59
}));                                                                                                   // 60
                                                                                                       // 61
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/meteortoys_email/client/content.js                                                         //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
var _0x2adc=["\x63\x75\x72\x72\x65\x6E\x74\x45\x6D\x61\x69\x6C","\x67\x65\x74","\x66\x69\x6E\x64","\x45\x6D\x61\x69\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x61\x74\x61","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x66\x65\x74\x63\x68","\x68\x74\x6D\x6C","\x74\x65\x78\x74","\x74\x69\x6D\x65\x73\x74\x61\x6D\x70","\x74\x6F\x4C\x6F\x63\x61\x6C\x65\x54\x69\x6D\x65\x53\x74\x72\x69\x6E\x67","\x68\x65\x6C\x70\x65\x72\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x65\x6D\x61\x69\x6C\x5F\x63\x6F\x6E\x74\x65\x6E\x74"];Template[_0x2adc[12]][_0x2adc[11]]({"\x63\x6F\x6E\x74\x65\x6E\x74":function(){current=MeteorToysDict[_0x2adc[1]](_0x2adc[0]);thing=Package[_0x2adc[5]][_0x2adc[4]][_0x2adc[3]][_0x2adc[2]]({},{sort:{"\x74\x69\x6D\x65\x73\x74\x61\x6D\x70":-1}});doc=thing[_0x2adc[6]]()[current];return doc},"\x62\x6F\x64\x79":function(){current=MeteorToysDict[_0x2adc[1]](_0x2adc[0]);thing=Package[_0x2adc[5]][_0x2adc[4]][_0x2adc[3]][_0x2adc[2]]({},{sort:{"\x74\x69\x6D\x65\x73\x74\x61\x6D\x70":-1}});doc=thing[_0x2adc[6]]()[current];if(doc[_0x2adc[7]]){return doc[_0x2adc[7]]}else {return doc[_0x2adc[8]]}},"\x74\x69\x6D\x65\x73\x74\x61\x6D\x70":function(){var _0xa06dx1=this[_0x2adc[9]];return _0xa06dx1[_0x2adc[10]]()}})
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/meteortoys_email/config/config.js                                                          //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
ToyKit = {                                                                                             // 1
	name:     "Email",                                                                                    // 2
	version:  "1.0.0",                                                                                    // 3
	template: "MeteorToys_email",                                                                         // 4
	ToyKit:   "1.0.0"                                                                                     // 5
};                                                                                                     // 6
                                                                                                       // 7
Meteor.startup(function() {                                                                            // 8
                                                                                                       // 9
	MeteorToys = Package["meteortoys:toykit"].MeteorToys;                                                 // 10
                                                                                                       // 11
	// MeteorToys.register({                                                                              // 12
	// 	package:  "meteortoys:email",                                                                     // 13
	// 	name:     "Email",                                                                                // 14
	// 	template: "MeteorToys_email",                                                                     // 15
	// 	core:     true                                                                                    // 16
	// })                                                                                                 // 17
                                                                                                       // 18
});                                                                                                    // 19
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:email'] = {};

})();
