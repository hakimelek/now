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
var MeteorToysDict, current, thing, DaData, colorized, x, y, MeteorToysGoTo, currentResult, nextResult, resultCount, lastResult, MeteorToys_Result, resultObject, ToyKit;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/meteortoys_result/client/template.main.js                                                    //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
                                                                                                         // 1
Template.__checkName("MeteorToys_result");                                                               // 2
Template["MeteorToys_result"] = new Template("Template.MeteorToys_result", (function() {                 // 3
  var view = this;                                                                                       // 4
  return Blaze._TemplateWith(function() {                                                                // 5
    return {                                                                                             // 6
      name: Spacebars.call("MeteorToys_result")                                                          // 7
    };                                                                                                   // 8
  }, function() {                                                                                        // 9
    return Spacebars.include(view.lookupTemplate("MeteorToy"), function() {                              // 10
      return [ "\n		", Spacebars.include(view.lookupTemplate("MeteorToys_result_header")), "\n		", Spacebars.include(view.lookupTemplate("MeteorToys_result_content")), "\n	" ];
    });                                                                                                  // 12
  });                                                                                                    // 13
}));                                                                                                     // 14
                                                                                                         // 15
Template.__checkName("MeteorToys_result_header");                                                        // 16
Template["MeteorToys_result_header"] = new Template("Template.MeteorToys_result_header", (function() {   // 17
  var view = this;                                                                                       // 18
  return HTML.DIV({                                                                                      // 19
    "class": "MeteorToys_result_header MeteorToys-background-overlay1"                                   // 20
  }, "\n		", Blaze.If(function() {                                                                       // 21
    return Spacebars.call(view.lookup("hasData"));                                                       // 22
  }, function() {                                                                                        // 23
    return [ "\n		", HTML.DIV({                                                                          // 24
      "class": "MeteorToys_result_button MeteorToys_result_next MeteorToys_action"                       // 25
    }, HTML.CharRef({                                                                                    // 26
      html: "&rsaquo;",                                                                                  // 27
      str: "›"                                                                                           // 28
    })), "\n		", HTML.DIV({                                                                              // 29
      "class": "MeteorToys_result_button MeteorToys_result_prev MeteorToys_action"                       // 30
    }, HTML.CharRef({                                                                                    // 31
      html: "&lsaquo;",                                                                                  // 32
      str: "‹"                                                                                           // 33
    })), "\n		" ];                                                                                       // 34
  }), "\n		", HTML.DIV({                                                                                 // 35
    "class": "MeteorToys_name"                                                                           // 36
  }, HTML.Raw("<strong>Result</strong>"), " ", Blaze.If(function() {                                     // 37
    return Spacebars.call(view.lookup("hasData"));                                                       // 38
  }, function() {                                                                                        // 39
    return [ " ", Blaze.View("lookup:current", function() {                                              // 40
      return Spacebars.mustache(view.lookup("current"));                                                 // 41
    }), " of ", Blaze.View("lookup:total", function() {                                                  // 42
      return Spacebars.mustache(view.lookup("total"));                                                   // 43
    }) ];                                                                                                // 44
  })), "\n	");                                                                                           // 45
}));                                                                                                     // 46
                                                                                                         // 47
Template.__checkName("MeteorToys_result_content");                                                       // 48
Template["MeteorToys_result_content"] = new Template("Template.MeteorToys_result_content", (function() {
  var view = this;                                                                                       // 50
  return HTML.DIV({                                                                                      // 51
    "class": "MeteorToys_result_content"                                                                 // 52
  }, "\n", Blaze.If(function() {                                                                         // 53
    return Spacebars.call(view.lookup("content"));                                                       // 54
  }, function() {                                                                                        // 55
    return [ HTML.PRE(Blaze.View("lookup:content", function() {                                          // 56
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("content")));                              // 57
    })), HTML.DIV({                                                                                      // 58
      "class": "MeteorToys_divider MeteorToys-border-color-overlay1"                                     // 59
    }), HTML.PRE(Blaze.View("lookup:timestamp", function() {                                             // 60
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("timestamp")));                            // 61
    })), "\n	" ];                                                                                        // 62
  }, function() {                                                                                        // 63
    return "\n		When you execute code through the Shell or Method toy, if they return data, it will be displayed here.\n	";
  }), "\n	");                                                                                            // 65
}));                                                                                                     // 66
                                                                                                         // 67
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/meteortoys_result/client/main.js                                                             //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
var _0x871e=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x69\x63\x74","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x63\x75\x72\x72\x65\x6E\x74\x52\x65\x73\x75\x6C\x74","\x73\x65\x74","\x67\x65\x74","\x66\x65\x74\x63\x68","\x66\x69\x6E\x64","\x52\x65\x73\x75\x6C\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x61\x74\x61","\x72\x65\x73\x75\x6C\x74","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x63\x6F\x6C\x6F\x72\x69\x7A\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x74\x79\x70\x65","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x73\x68\x65\x6C\x6C","\x52\x65\x73\x75\x6C\x74\x20\x66\x72\x6F\x6D\x20\x53\x68\x65\x6C\x6C\x20\x54\x6F\x79\x3A\x20\x3C\x62\x72\x3E","\x70\x61\x72\x61\x6D\x73","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x52\x65\x73\x75\x6C\x74\x20\x66\x72\x6F\x6D\x20\x4D\x65\x74\x68\x6F\x64\x20\x54\x6F\x79\x3A\x3C\x62\x72\x3E\x4D\x65\x74\x65\x6F\x72\x2E\x63\x61\x6C\x6C\x28","\x29","\x68\x65\x6C\x70\x65\x72\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72\x65\x73\x75\x6C\x74\x5F\x63\x6F\x6E\x74\x65\x6E\x74"];MeteorToysDict=Package[_0x871e[1]][_0x871e[0]];MeteorToysDict[_0x871e[3]](_0x871e[2],0);Template[_0x871e[22]][_0x871e[21]]({"\x63\x6F\x6E\x74\x65\x6E\x74":function(){current=MeteorToysDict[_0x871e[4]](_0x871e[2]);thing=Package[_0x871e[1]][_0x871e[8]][_0x871e[7]][_0x871e[6]]({},{sort:{"\x74\x69\x6D\x65\x73\x74\x61\x6D\x70":-1}})[_0x871e[5]]()[current];if(thing){DaData=JSON[_0x871e[10]](thing[_0x871e[9]],null,2);colorized=Package[_0x871e[1]][_0x871e[12]][_0x871e[11]](DaData);return colorized}},timestamp:function(){current=MeteorToysDict[_0x871e[4]](_0x871e[2]);thing=Package[_0x871e[1]][_0x871e[8]][_0x871e[7]][_0x871e[6]]({},{sort:{"\x74\x69\x6D\x65\x73\x74\x61\x6D\x70":-1}})[_0x871e[5]]()[current];if(thing[_0x871e[13]]===_0x871e[14]){return _0x871e[15]+thing[_0x871e[16]]}else {x=JSON[_0x871e[10]](thing[_0x871e[16]]);y=x[_0x871e[18]](1,x[_0x871e[17]]-1);return _0x871e[19]+y+_0x871e[20]}}})
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/meteortoys_result/client/header.js                                                           //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
var _0x66df=["\x63\x75\x72\x72\x65\x6E\x74\x52\x65\x73\x75\x6C\x74","\x67\x65\x74","\x73\x65\x74","\x63\x6F\x75\x6E\x74","\x66\x69\x6E\x64","\x52\x65\x73\x75\x6C\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x61\x74\x61","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x6C\x61\x73\x74","\x70\x72\x65\x76","\x66\x69\x72\x73\x74","\x6E\x65\x78\x74","\x65\x76\x65\x6E\x74\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72\x65\x73\x75\x6C\x74\x5F\x68\x65\x61\x64\x65\x72","\x68\x65\x6C\x70\x65\x72\x73"];MeteorToysGoTo={"\x6E\x65\x78\x74":function(){currentResult=MeteorToysDict[_0x66df[1]](_0x66df[0])+1;nextResult=MeteorToysDict[_0x66df[1]](_0x66df[0])+1;MeteorToysDict[_0x66df[2]](_0x66df[0],nextResult)},"\x70\x72\x65\x76":function(){nextResult=MeteorToysDict[_0x66df[1]](_0x66df[0])-1;MeteorToysDict[_0x66df[2]](_0x66df[0],nextResult)},"\x66\x69\x72\x73\x74":function(){MeteorToysDict[_0x66df[2]](_0x66df[0],0)},"\x6C\x61\x73\x74":function(){resultCount=Package[_0x66df[7]][_0x66df[6]][_0x66df[5]][_0x66df[4]]()[_0x66df[3]]();lastResult=resultCount-1;MeteorToysDict[_0x66df[2]](_0x66df[0],lastResult)}};Template[_0x66df[13]][_0x66df[12]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72\x65\x73\x75\x6C\x74\x5F\x70\x72\x65\x76":function(_0x30abx1,_0x30abx2){currentResult=MeteorToysDict[_0x66df[1]](_0x66df[0]);if(currentResult===0){MeteorToysGoTo[_0x66df[8]]()}else {MeteorToysGoTo[_0x66df[9]]()}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72\x65\x73\x75\x6C\x74\x5F\x6E\x65\x78\x74":function(){resultCount=Package[_0x66df[7]][_0x66df[6]][_0x66df[5]][_0x66df[4]]()[_0x66df[3]]();currentResult=MeteorToysDict[_0x66df[1]](_0x66df[0])+1;if(resultCount===currentResult){MeteorToysGoTo[_0x66df[10]]()}else {MeteorToysGoTo[_0x66df[11]]()}}});Template[_0x66df[13]][_0x66df[14]]({current:function(){currentResult=MeteorToysDict[_0x66df[1]](_0x66df[0])+1;return currentResult},total:function(){resultCount=Package[_0x66df[7]][_0x66df[6]][_0x66df[5]][_0x66df[4]]()[_0x66df[3]]();return resultCount},"\x68\x61\x73\x44\x61\x74\x61":function(){resultCount=Package[_0x66df[7]][_0x66df[6]][_0x66df[5]][_0x66df[4]]()[_0x66df[3]]();if(resultCount<=1){return false}else {return true}}})
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/meteortoys_result/client/function.js                                                         //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
MeteorToys_Result = {                                                                                    // 1
	'insert': function (result, type, params) {                                                             // 2
		                                                                                                       // 3
		// Create the data objet                                                                               // 4
		resultObject = {                                                                                       // 5
			"result": result,                                                                                     // 6
			"timestamp": new Date(),                                                                              // 7
		}                                                                                                      // 8
		                                                                                                       // 9
		if (type) {                                                                                            // 10
			resultObject.type = type;                                                                             // 11
		}                                                                                                      // 12
                                                                                                         // 13
		if (params) {                                                                                          // 14
			resultObject.params = params;                                                                         // 15
		}                                                                                                      // 16
                                                                                                         // 17
		// Insert it into the collection                                                                       // 18
		Package['meteortoys:toykit'].MeteorToysData["Result"].insert(resultObject);                            // 19
                                                                                                         // 20
		// Open the Meteor Toy orb                                                                             // 21
		$("#MeteorToys_result").click();                                                                       // 22
                                                                                                         // 23
		// Set the proper position for orb                                                                     // 24
		MeteorToysDict.set("currentResult", 0);                                                                // 25
	}                                                                                                       // 26
}                                                                                                        // 27
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/meteortoys_result/config/config.js                                                           //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
ToyKit = {                                                                                               // 1
	name:     "Result",                                                                                     // 2
	version:  "1.0.0",                                                                                      // 3
	template: "MeteorToys_result",                                                                          // 4
	ToyKit:   "1.0.0"                                                                                       // 5
};                                                                                                       // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['meteortoys:result'] = {}, {
  MeteorToys_Result: MeteorToys_Result
});

})();
