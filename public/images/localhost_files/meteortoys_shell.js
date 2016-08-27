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
var value, thing, Thing, ToyKit, MeteorToys;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/meteortoys_shell/client/template.main.js                                                   //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
                                                                                                       // 1
Template.__checkName("MeteorToys_shell");                                                              // 2
Template["MeteorToys_shell"] = new Template("Template.MeteorToys_shell", (function() {                 // 3
  var view = this;                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                              // 5
    return {                                                                                           // 6
      name: Spacebars.call("MeteorToys_shell")                                                         // 7
    };                                                                                                 // 8
  }, function() {                                                                                      // 9
    return Spacebars.include(view.lookupTemplate("MeteorToy"), function() {                            // 10
      return [ "\n		", Spacebars.include(view.lookupTemplate("MeteorToys_shell_header")), "\n		", Spacebars.include(view.lookupTemplate("MeteorToys_shell_content")), "\n	" ];
    });                                                                                                // 12
  });                                                                                                  // 13
}));                                                                                                   // 14
                                                                                                       // 15
Template.__checkName("MeteorToys_shell_header");                                                       // 16
Template["MeteorToys_shell_header"] = new Template("Template.MeteorToys_shell_header", (function() {   // 17
  var view = this;                                                                                     // 18
  return HTML.DIV({                                                                                    // 19
    "class": "MeteorToys_shell_header MeteorToys-background-overlay1"                                  // 20
  }, HTML.Raw('\n		<div id="MeteoToys_shell_run" class="MeteorToys_shell_button ">Run</div>\n		'), Blaze.If(function() {
    return Spacebars.call(view.lookup("clearable"));                                                   // 22
  }, function() {                                                                                      // 23
    return [ "\n			", HTML.DIV({                                                                       // 24
      id: "MeteoToys_shell_clear",                                                                     // 25
      "class": "MeteorToys_shell_button "                                                              // 26
    }, "Clear"), "\n		" ];                                                                             // 27
  }), HTML.Raw('\n		<div class="MeteorToys_name"><strong>Shell</strong></div>\n	'));                   // 28
}));                                                                                                   // 29
                                                                                                       // 30
Template.__checkName("MeteorToys_shell_content");                                                      // 31
Template["MeteorToys_shell_content"] = new Template("Template.MeteorToys_shell_content", (function() {
  var view = this;                                                                                     // 33
  return HTML.DIV({                                                                                    // 34
    "class": "MeteorToys_shell_content"                                                                // 35
  }, "\n		", Spacebars.include(view.lookupTemplate("MeteorToys_shell_input")), "\n	");                 // 36
}));                                                                                                   // 37
                                                                                                       // 38
Template.__checkName("MeteorToys_shell_input");                                                        // 39
Template["MeteorToys_shell_input"] = new Template("Template.MeteorToys_shell_input", (function() {     // 40
  var view = this;                                                                                     // 41
  return HTML.TEXTAREA({                                                                               // 42
    id: "MeteorToys_shell_input",                                                                      // 43
    tabindex: "-1",                                                                                    // 44
    placeholder: "Enter code here to run it as a method. Results will appear in console."              // 45
  });                                                                                                  // 46
}));                                                                                                   // 47
                                                                                                       // 48
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/meteortoys_shell/client/main.js                                                            //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
// JavaScript                                                                                          // 1
                                                                                                       // 2
Template.MeteorToys_shell_header.events({                                                              // 3
	'click #MeteoToys_shell_run': function (e, t) {                                                       // 4
		                                                                                                     // 5
		e.preventDefault();                                                                                  // 6
		                                                                                                     // 7
		var execute = String($("#MeteorToys_shell_input").val());                                            // 8
		                                                                                                     // 9
		if (execute == false) {                                                                              // 10
			alert("Please enter code to run");                                                                  // 11
			return false;                                                                                       // 12
		}                                                                                                    // 13
                                                                                                       // 14
		Meteor.call("MeteorToys_Shell", execute, function (e,r) {                                            // 15
			if (e) {                                                                                            // 16
				                                                                                                   // 17
				alert("There was an error.");                                                                      // 18
				console.log("=====================================");                                              // 19
				console.log("Shell Error");                                                                        // 20
				console.log(e);                                                                                    // 21
				console.log("=====================================");                                              // 22
                                                                                                       // 23
			} else {                                                                                            // 24
				console.log("=====================================");                                              // 25
				console.log("Meteor Toys ran the following method:");                                              // 26
				console.log("Method = function () { \n" + execute + "\n}");                                        // 27
				console.log("The results are");                                                                    // 28
				console.log(r);                                                                                    // 29
				console.log("=====================================");                                              // 30
				$("#MeteorToys_shell_input").val("");                                                              // 31
                                                                                                       // 32
				Package['meteortoys:result'].MeteorToys_Result.insert(r, "meteortoysshell", execute);              // 33
				                                                                                                   // 34
			}                                                                                                   // 35
		});                                                                                                  // 36
                                                                                                       // 37
	},                                                                                                    // 38
	'click #MeteoToys_shell_clear': function () {                                                         // 39
		$("#MeteorToys_shell_input").val('');                                                                // 40
		MeteorToys.set("Shell_Clearable", false);                                                            // 41
		localStorage.removeItem("MeteorToys_shell");                                                         // 42
		$("#MeteorToys_shell_input").focus();                                                                // 43
	}                                                                                                     // 44
});                                                                                                    // 45
                                                                                                       // 46
Template.MeteorToys_shell_header.helpers({                                                             // 47
	clearable: function () {                                                                              // 48
		return MeteorToys.get("Shell_Clearable");                                                            // 49
	}                                                                                                     // 50
});                                                                                                    // 51
                                                                                                       // 52
Template.MeteorToys_shell_input.events({                                                               // 53
	'keyup': function () {                                                                                // 54
		// console.log('ok');                                                                                // 55
		value = String($("#MeteorToys_shell_input").val()) || "";                                            // 56
		localStorage.setItem('MeteorToys_shell', value)                                                      // 57
                                                                                                       // 58
		if (value === "") {                                                                                  // 59
			MeteorToys.set("Shell_Clearable", false);                                                           // 60
		} else {                                                                                             // 61
			MeteorToys.set("Shell_Clearable", true);                                                            // 62
		}                                                                                                    // 63
	}                                                                                                     // 64
})                                                                                                     // 65
                                                                                                       // 66
Template.MeteorToys_shell_input.rendered = function () {                                               // 67
	thing = localStorage.getItem('MeteorToys_shell') || "";                                               // 68
	$("#MeteorToys_shell_input").val(thing)                                                               // 69
                                                                                                       // 70
	if (thing === "") {                                                                                   // 71
		MeteorToys.set("Shell_Clearable", false);                                                            // 72
	} else {                                                                                              // 73
		MeteorToys.set("Shell_Clearable", true);                                                             // 74
	}                                                                                                     // 75
};                                                                                                     // 76
                                                                                                       // 77
Thing = Package["meteortoys:toykit"].ToyKit;                                                           // 78
Tracker.autorun(function () {                                                                          // 79
	if (Thing.equals("current","MeteorToys_shell")) {                                                     // 80
		window.setTimeout(function() {                                                                       // 81
			$("#MeteorToys_shell_input").focus();                                                               // 82
		}, 300)                                                                                              // 83
	}                                                                                                     // 84
})                                                                                                     // 85
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/meteortoys_shell/config/config.js                                                          //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
ToyKit = {                                                                                             // 1
	name:     "Shell",                                                                                    // 2
	template: "MeteorToys_shell",                                                                         // 3
	type:     "orb",                                                                                      // 4
	// onOpen: function () {                                                                              // 5
	// 	alert("yo mofuker");                                                                              // 6
	// },                                                                                                 // 7
	// onClose: function () {                                                                             // 8
	// 	// do nothing                                                                                     // 9
	// }                                                                                                  // 10
};                                                                                                     // 11
                                                                                                       // 12
                                                                                                       // 13
                                                                                                       // 14
Meteor.startup(function() {                                                                            // 15
                                                                                                       // 16
	MeteorToys = Package["meteortoys:toykit"].MeteorToys;                                                 // 17
                                                                                                       // 18
                                                                                                       // 19
});                                                                                                    // 20
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:shell'] = {};

})();
