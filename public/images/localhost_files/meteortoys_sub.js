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
var MeteorToysDict, MeteorToys_Sub, thisishack, p, displayStatus, ToyKit, MeteorToys;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/meteortoys_sub/client/template.main.js                                                             //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
                                                                                                               // 1
Template.__checkName("MeteorToys_pubsub");                                                                     // 2
Template["MeteorToys_pubsub"] = new Template("Template.MeteorToys_pubsub", (function() {                       // 3
  var view = this;                                                                                             // 4
  return Blaze._TemplateWith(function() {                                                                      // 5
    return {                                                                                                   // 6
      name: Spacebars.call("MeteorToys_pubsub")                                                                // 7
    };                                                                                                         // 8
  }, function() {                                                                                              // 9
    return Spacebars.include(view.lookupTemplate("MeteorToy"), function() {                                    // 10
      return [ "\n		", Blaze.Unless(function() {                                                               // 11
        return Spacebars.call(view.lookup("editing"));                                                         // 12
      }, function() {                                                                                          // 13
        return [ "\n			", Spacebars.include(view.lookupTemplate("MeteorToys_pubsub_header")), "\n			", Spacebars.include(view.lookupTemplate("MeteorToys_pubsub_content")), "\n		" ];
      }, function() {                                                                                          // 15
        return [ "\n			", Spacebars.include(view.lookupTemplate("MeteorToys_pubsub_new_header")), "\n			", Spacebars.include(view.lookupTemplate("MeteorToys_pubsub_new")), "\n		" ];
      }), "\n	" ];                                                                                             // 17
    });                                                                                                        // 18
  });                                                                                                          // 19
}));                                                                                                           // 20
                                                                                                               // 21
Template.__checkName("MeteorToys_pubsub_header");                                                              // 22
Template["MeteorToys_pubsub_header"] = new Template("Template.MeteorToys_pubsub_header", (function() {         // 23
  var view = this;                                                                                             // 24
  return HTML.Raw('<div class="MeteorToys_pubsub_header MeteorToys-background-overlay1">\n		<!-- <div class="MeteorToys_pubsub_button">New</div> -->\n		<div class="MeteorToys_name"><strong>Subscriptions</strong></div>\n	</div>');
}));                                                                                                           // 26
                                                                                                               // 27
Template.__checkName("MeteorToys_pubsub_new_header");                                                          // 28
Template["MeteorToys_pubsub_new_header"] = new Template("Template.MeteorToys_pubsub_new_header", (function() {
  var view = this;                                                                                             // 30
  return HTML.Raw('<div class="MeteorToys_pubsub_header">\n		<div class="MeteorToys_pubsub_button">Cancel</div>\n		<div class="MeteorToys_name"><strong>Create New Subscription</strong></div>\n	</div>');
}));                                                                                                           // 32
                                                                                                               // 33
Template.__checkName("MeteorToys_pubsub_content");                                                             // 34
Template["MeteorToys_pubsub_content"] = new Template("Template.MeteorToys_pubsub_content", (function() {       // 35
  var view = this;                                                                                             // 36
  return HTML.DIV({                                                                                            // 37
    "class": "MeteorToys_pubsub_content"                                                                       // 38
  }, "\n		", Blaze.Each(function() {                                                                           // 39
    return Spacebars.call(view.lookup("subscription"));                                                        // 40
  }, function() {                                                                                              // 41
    return [ "\n			", HTML.DIV({                                                                               // 42
      "class": "MeteorToys_row "                                                                               // 43
    }, "\n				", HTML.DIV({                                                                                    // 44
      "class": function() {                                                                                    // 45
        return [ "MeteorToys_pubsub_row_toggle MeteorToys_pubsub_row_toggle_", Spacebars.mustache(view.lookup("name")) ];
      }                                                                                                        // 47
    }, HTML.CharRef({                                                                                          // 48
      html: "&times;",                                                                                         // 49
      str: "×"                                                                                                 // 50
    })), "\n				", HTML.DIV({                                                                                  // 51
      "class": "MeteorToys_pubsub_row_name"                                                                    // 52
    }, Blaze.View("lookup:name", function() {                                                                  // 53
      return Spacebars.mustache(view.lookup("name"));                                                          // 54
    })), "\n				", Blaze.If(function() {                                                                       // 55
      return Spacebars.call(view.lookup("parameters"));                                                        // 56
    }, function() {                                                                                            // 57
      return [ "\n					Params: ", Blaze.View("lookup:parameters", function() {                                 // 58
        return Spacebars.mustache(view.lookup("parameters"));                                                  // 59
      }), "\n				" ];                                                                                          // 60
    }, function() {                                                                                            // 61
      return "\n					No Parameters\n				";                                                                     // 62
    }), "\n			"), "\n		" ];                                                                                    // 63
  }, function() {                                                                                              // 64
    return [ "\n			", HTML.DIV({                                                                               // 65
      style: "padding-top: 4px"                                                                                // 66
    }, "No subscriptions available"), "\n		" ];                                                                // 67
  }), "\n	");                                                                                                  // 68
}));                                                                                                           // 69
                                                                                                               // 70
Template.__checkName("MeteorToys_pubsub_new");                                                                 // 71
Template["MeteorToys_pubsub_new"] = new Template("Template.MeteorToys_pubsub_new", (function() {               // 72
  var view = this;                                                                                             // 73
  return HTML.DIV({                                                                                            // 74
    "class": "MeteorToys_pubsub_content"                                                                       // 75
  }, "\n		", Blaze.Unless(function() {                                                                         // 76
    return Spacebars.call(view.lookup("newTarget"));                                                           // 77
  }, function() {                                                                                              // 78
    return [ "\n			", Blaze.Each(function() {                                                                  // 79
      return Spacebars.call(view.lookup("sub"));                                                               // 80
    }, function() {                                                                                            // 81
      return [ "\n				", HTML.DIV({                                                                            // 82
        "class": "MeteorToys_row MeteorToys_row_sub"                                                           // 83
      }, "\n					", Blaze.View("lookup:.", function() {                                                        // 84
        return Spacebars.mustache(view.lookup("."));                                                           // 85
      }), HTML.CharRef({                                                                                       // 86
        html: "&nbsp;",                                                                                        // 87
        str: " "                                                                                               // 88
      }), "\n				"), "\n			" ];                                                                                // 89
    }), "\n		" ];                                                                                              // 90
  }, function() {                                                                                              // 91
    return [ "\n			", Spacebars.With(function() {                                                              // 92
      return Spacebars.call(view.lookup("newTarget"));                                                         // 93
    }, function() {                                                                                            // 94
      return [ "\n				", HTML.DIV({                                                                            // 95
        "class": "MeteorToys_row"                                                                              // 96
      }, "\n					Subscription: ", Blaze.View("lookup:name", function() {                                       // 97
        return Spacebars.mustache(view.lookup("name"));                                                        // 98
      }), "\n				"), "\n				", HTML.FORM("\n					", Blaze.Each(function() {                                    // 99
        return Spacebars.call(view.lookup("params"));                                                          // 100
      }, function() {                                                                                          // 101
        return [ "\n						", HTML.DIV({                                                                        // 102
          "class": "MeteorToys_row"                                                                            // 103
        }, "\n							", Blaze.View("lookup:.", function() {                                                    // 104
          return Spacebars.mustache(view.lookup("."));                                                         // 105
        }), "\n							", HTML.INPUT({                                                                          // 106
          id: function() {                                                                                     // 107
            return [ "MeteorToys_pubsub_param_", Spacebars.mustache(view.lookup(".")) ];                       // 108
          },                                                                                                   // 109
          tabindex: "-1"                                                                                       // 110
        }), "\n						"), "\n					" ];                                                                          // 111
      }), "\n					", HTML.INPUT({                                                                              // 112
        type: "submit",                                                                                        // 113
        value: "Start Subscription"                                                                            // 114
      }), "\n				"), "\n			" ];                                                                                // 115
    }), "\n		" ];                                                                                              // 116
  }), "\n	");                                                                                                  // 117
}));                                                                                                           // 118
                                                                                                               // 119
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/meteortoys_sub/client/main.js                                                                      //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
var _0x6732=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x72\x75\x6E\x50\x75\x62\x53\x75\x62","\x64\x65\x66\x61\x75\x6C\x74\x5F\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x6F\x62\x73\x65\x72\x76\x65","\x6D\x73\x61\x76\x69\x6E\x3A\x73\x75\x62","\x6D\x73\x61\x76\x69\x6E\x3A\x6D\x6F\x6E\x67\x6F\x6C","\x5F\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x73","\x6B\x65\x79\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2F\x50\x75\x62\x53\x75\x62","\x73\x65\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x65\x64\x69\x74\x69\x6E\x67","\x67\x65\x74","\x68\x65\x6C\x70\x65\x72\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62","\x65\x76\x65\x6E\x74\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x68\x65\x61\x64\x65\x72","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x74\x61\x72\x67\x65\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x6E\x65\x77\x5F\x68\x65\x61\x64\x65\x72","\x4E\x61\x6D\x65\x20\x55\x6E\x61\x76\x61\x69\x6C\x61\x62\x6C\x65","\x6E\x61\x6D\x65","\x50\x61\x72\x61\x6D\x73\x20\x55\x6E\x61\x76\x61\x69\x6C\x61\x62\x6C\x65","\x70\x61\x72\x61\x6D\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x63\x6F\x6E\x74\x65\x6E\x74","\x73\x74\x6F\x70","\x43\x68\x65\x63\x6B\x69\x6E\x67\x20\x65\x76\x65\x72\x79\x20\x33\x20\x73\x65\x63\x6F\x6E\x64\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x6E\x61\x6D\x65\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x6E\x65\x77","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x5F\x70\x75\x62\x6C\x69\x73\x68\x5F\x64\x65\x74\x61\x69\x6C\x73","\x63\x61\x6C\x6C","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","","\x76\x61\x6C","\x23\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x70\x61\x72\x61\x6D\x5F","\x70\x75\x73\x68","\x27","\x27\x2C","\x65\x61\x63\x68","\x61\x70\x70\x6C\x79","\x73\x75\x62\x73\x63\x72\x69\x62\x65","\x50\x75\x62\x53\x75\x62\x20\x6A\x75\x73\x74\x20\x65\x78\x65\x63\x75\x74\x65\x64\x3A","\x6C\x6F\x67","\x4D\x65\x74\x65\x6F\x72\x2E\x73\x75\x62\x73\x63\x72\x69\x62\x65\x28","\x73\x6C\x69\x63\x65","\x29","\x4D\x65\x74\x65\x6F\x72\x2E\x73\x75\x62\x73\x63\x72\x69\x62\x65\x28\x27","\x27\x29","\x64\x69\x73\x70\x6C\x61\x79","\x54\x6F\x79\x4B\x69\x74","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x73\x74\x61\x72\x74\x75\x70"];MeteorToysDict=Package[_0x6732[1]][_0x6732[0]];MeteorToys_Sub={observe:function(){MeteorToys_Sub[_0x6732[2]]();thisishack=true;if(thisishack){setInterval(function(){MeteorToys_Sub[_0x6732[2]]()},3000)}else {Object[_0x6732[4]](Meteor[_0x6732[3]]._subscriptions,function(){MeteorToys_Sub[_0x6732[2]]()})}},runPubSub:function(){if(Package[_0x6732[5]]||Package[_0x6732[6]]){var _0xa0c9x1=Meteor[_0x6732[3]][_0x6732[7]],_0xa0c9x2=Object[_0x6732[8]](_0xa0c9x1);MeteorToysDict[_0x6732[10]](_0x6732[9],_0xa0c9x2)}}};MeteorToys_Sub[_0x6732[4]]();Template[_0x6732[14]][_0x6732[13]]({editing:function(){return MeteorToysDict[_0x6732[12]](_0x6732[11])}});Template[_0x6732[16]][_0x6732[15]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x62\x75\x74\x74\x6F\x6E":function(){MeteorToysDict[_0x6732[10]](_0x6732[11],true)}});Template[_0x6732[18]][_0x6732[15]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x62\x75\x74\x74\x6F\x6E":function(){MeteorToysDict[_0x6732[10]](_0x6732[11],false);MeteorToysDict[_0x6732[10]](_0x6732[17],false)}});Template[_0x6732[23]][_0x6732[13]]({subscription:function(){var _0xa0c9x3=MeteorToysDict[_0x6732[12]](_0x6732[9]);return _0xa0c9x3},name:function(){var _0xa0c9x4=_0x6732[19];if(Meteor[_0x6732[3]][_0x6732[7]][this]){if(Meteor[_0x6732[3]][_0x6732[7]][this][_0x6732[20]]){_0xa0c9x4=Meteor[_0x6732[3]][_0x6732[7]][this][_0x6732[20]]}};return _0xa0c9x4},parameters:function(){p=_0x6732[21];if(Meteor[_0x6732[3]][_0x6732[7]][this]){p=Meteor[_0x6732[3]][_0x6732[7]][this][_0x6732[22]]};return p}});Template[_0x6732[23]][_0x6732[15]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x72\x6F\x77\x5F\x74\x6F\x67\x67\x6C\x65":function(){Meteor[_0x6732[3]][_0x6732[7]][this][_0x6732[24]]()}});Template[_0x6732[16]][_0x6732[13]]({subType:function(){return _0x6732[25]}});Template[_0x6732[27]][_0x6732[13]]({sub:function(){return MeteorToysDict[_0x6732[12]](_0x6732[26])},newTarget:function(){return MeteorToysDict[_0x6732[12]](_0x6732[17])}});Template[_0x6732[27]][_0x6732[15]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72\x6F\x77\x5F\x73\x75\x62":function(){var _0xa0c9x5=String(this);Meteor[_0x6732[29]](_0x6732[28],_0xa0c9x5,function(_0xa0c9x6,_0xa0c9x7){MeteorToysDict[_0x6732[10]](_0x6732[17],{"\x6E\x61\x6D\x65":_0xa0c9x5,"\x70\x61\x72\x61\x6D\x73":_0xa0c9x7})})},"\x73\x75\x62\x6D\x69\x74":function(_0xa0c9x6,_0xa0c9x8){_0xa0c9x6[_0x6732[30]]();var _0xa0c9x9=MeteorToysDict[_0x6732[12]](_0x6732[17]),_0xa0c9xa=_0xa0c9x9[_0x6732[22]],_0xa0c9x5=_0xa0c9x9[_0x6732[20]],_0xa0c9xb=[_0xa0c9x9[_0x6732[20]]],_0xa0c9xc=_0x6732[31];if(_0xa0c9xa){jQuery[_0x6732[37]](_0xa0c9xa,function(_0xa0c9xd,_0xa0c9xe){var _0xa0c9xf=$(_0x6732[33]+_0xa0c9xe)[_0x6732[32]]();_0xa0c9xb[_0x6732[34]](_0xa0c9xf);_0xa0c9xc+=_0x6732[35]+_0xa0c9xf+_0x6732[36]});Meteor[_0x6732[39]][_0x6732[38]](Meteor,_0xa0c9xb);console[_0x6732[41]](_0x6732[40]);console[_0x6732[41]](_0x6732[42]+_0xa0c9xc[_0x6732[43]](0,-1)+_0x6732[44])}else {Meteor[_0x6732[39]](_0xa0c9x5);console[_0x6732[41]](_0x6732[40]);console[_0x6732[41]](_0x6732[45]+_0xa0c9x5+_0x6732[46])};MeteorToysDict[_0x6732[10]](_0x6732[17],false);MeteorToysDict[_0x6732[10]](_0x6732[11],false)}});Meteor[_0x6732[50]](function(){displayStatus=Package[_0x6732[1]][_0x6732[48]][_0x6732[12]](_0x6732[47]);if( typeof displayStatus===_0x6732[49]){}else {MeteorToysDict[_0x6732[10]](_0x6732[9],null)}})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/meteortoys_sub/config/config.js                                                                    //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
ToyKit = {                                                                                                     // 1
	name:     "Sub",                                                                                              // 2
	version:  "1.0.0",                                                                                            // 3
	template: "MeteorToys_pubsub",                                                                                // 4
	ToyKit:   "1.0.0"                                                                                             // 5
};                                                                                                             // 6
                                                                                                               // 7
                                                                                                               // 8
Meteor.startup(function() {                                                                                    // 9
                                                                                                               // 10
	MeteorToys = Package["meteortoys:toykit"].MeteorToys;                                                         // 11
                                                                                                               // 12
	// MeteorToys.register({                                                                                      // 13
	// 	package:  "meteortoys:sub",                                                                               // 14
	// 	name:     "Sub",                                                                                          // 15
	// 	template: "MeteorToys_pubsub",                                                                            // 16
	// 	core:     true,                                                                                           // 17
	// 	// onOpen:   function () {                                                                                // 18
	// 	// 	console.log('onOpen');                                                                                // 19
	// 	// },                                                                                                     // 20
	// 	// onClose:  function () {                                                                                // 21
	// 	// 	console.log('onClose');                                                                               // 22
	// 	// },                                                                                                     // 23
	// })                                                                                                         // 24
                                                                                                               // 25
});                                                                                                            // 26
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:sub'] = {};

})();
