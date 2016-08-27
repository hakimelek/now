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
var _ = Package.underscore._;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/froala_editor-reactive/template.froala-reactive.js                                                 //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
                                                                                                               // 1
Template.__checkName("froalaReactive");                                                                        // 2
Template["froalaReactive"] = new Template("Template.froalaReactive", (function() {                             // 3
  var view = this;                                                                                             // 4
  return HTML.DIV({                                                                                            // 5
    "class": function() {                                                                                      // 6
      return Spacebars.mustache(view.lookup("getClass"));                                                      // 7
    }                                                                                                          // 8
  });                                                                                                          // 9
}));                                                                                                           // 10
                                                                                                               // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/froala_editor-reactive/froala-reactive.js                                                          //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
/*                                                                                                             // 1
 * Froala-Reactive                                                                                             // 2
 * ===============                                                                                             // 3
 *                                                                                                             // 4
 * (c) 2014-2015 RSBA Technology Ltd                                                                           // 5
 *                                                                                                             // 6
 *  Wraps Froala Editor jQuery plugin into a reactive Meteor template object                                   // 7
 *                                                                                                             // 8
 * Implementation heavily based on 'x-editable-reactive-template' Meteor package                               // 9
 * see: https://github.com/davidworkman9/x-editable-reactive-template                                          // 10
 *                                                                                                             // 11
 * Example Usage:                                                                                              // 12
 *                                                                                                             // 13
 * {{> froalaEditor toolbarInline=true initOnClick=false saveInterval=2000                                     // 14
 *     _value=requirementParameter.text}}                                                                      // 15
 *                                                                                                             // 16
 * Set Froala Editor options as <option>=<value>                                                               // 17
 * (see: https://froala.com/wysiwyg-editor)                                                                    // 18
 * This template will dynamically call option setter methods if any of the                                     // 19
 * provided option parameter values change, reactively.                                                        // 20
 *                                                                                                             // 21
 * Register callbacks for Froala Editor events by prefixing the event name                                     // 22
 * by '_on'.  Callbacks get the same two parameters: e, editor provided by                                     // 23
 * Froala Editor's event callbacks.  The data context on the callbacks is set                                  // 24
 * from the data context of the froalaEditor template instance.                                                // 25
 *                                                                                                             // 26
 * onSaved: function () {                                                                                      // 27
 *   var self = this;                                                                                          // 28
 *   return function (e, editor) {                                                                             // 29
 *     // Do something                                                                                         // 30
 *   };                                                                                                        // 31
 * }                                                                                                           // 32
 *                                                                                                             // 33
 * Pass the model value to be wrapped by the editor in the '_value' argument                                   // 34
 *                                                                                                             // 35
 * Override the template wrapper class by setting '_className' argument (default "froala-reactive-meteorized")
 *                                                                                                             // 37
 * If you save the contents of the editor with markers included, set the `_keepMarkers=true` argument to make sure the comparison between current & new content respects the marker html.
 *                                                                                                             // 39
 */                                                                                                            // 40
                                                                                                               // 41
'use strict';                                                                                                  // 42
                                                                                                               // 43
Template.froalaReactive.helpers({                                                                              // 44
  getClass: function () {                                                                                      // 45
    var tmpl = Template.instance();                                                                            // 46
    return tmpl.wrapperClassName;                                                                              // 47
  }                                                                                                            // 48
});                                                                                                            // 49
                                                                                                               // 50
Template.froalaReactive.onCreated(function () {                                                                // 51
  var tmpl = this;                                                                                             // 52
  tmpl.wrapperClassName = tmpl.data._className || "froala-reactive-meteorized";                                // 53
})                                                                                                             // 54
                                                                                                               // 55
Template.froalaReactive.onRendered(function () {                                                               // 56
  var tmpl = this,                                                                                             // 57
    $input = tmpl.$('.'+tmpl.wrapperClassName),                                                                // 58
    froalaMethod;                                                                                              // 59
                                                                                                               // 60
  tmpl.lastData = tmpl.data;                                                                                   // 61
                                                                                                               // 62
  if ($input.length !== 1) {                                                                                   // 63
    throw new Error ('invalid-froala-reactive-template');                                                      // 64
  }                                                                                                            // 65
                                                                                                               // 66
  froalaMethod = getFroalaEditorJQueryInstanceMethod($input);                                                  // 67
  if (!froalaMethod) {                                                                                         // 68
    throw new Error('invalid-froala-editor-plugin');                                                           // 69
  }                                                                                                            // 70
                                                                                                               // 71
  initEditor(tmpl, tmpl.data, tmpl.lastData, $input, froalaMethod);                                            // 72
                                                                                                               // 73
  // Autorun block, re-run every time the data context changes                                                 // 74
  tmpl.autorun(function () {                                                                                   // 75
    // Set up reactive dependency on template's data context                                                   // 76
    var _data = Template.currentData();                                                                        // 77
                                                                                                               // 78
    Tracker.nonreactive(function () {                                                                          // 79
      // Update HTML data wrapped within froala editor, if changed                                             // 80
      var currentHTMLWithMarkers = $input[froalaMethod]('html.get', _data._keepMarkers /* keep_markers */);    // 81
      if (_data && currentHTMLWithMarkers !== _data._value) {                                                  // 82
       // Avoid calling html.set with null                                                                     // 83
        // See: https://github.com/froala/wysiwyg-editor/issues/1061                                           // 84
        $input[froalaMethod]('html.set', _data._value || "");                                                  // 85
        _data._keepMarkers && $input[froalaMethod]('selection.restore');                                       // 86
      }                                                                                                        // 87
                                                                                                               // 88
      // Update froala editor option values, if changed                                                        // 89
      var _changedOpts = _.filter(Object.keys(_data), function (opt) {                                         // 90
          // Find all option values whose value has changed                                                    // 91
          // Exclude any opt properties that start with '_', reserved for                                      // 92
          // passing froala-reactive - specific parameters into the template                                   // 93
          // data context.                                                                                     // 94
          return opt.indexOf('_')!==0 && !_.isEqual(tmpl.lastData[opt], _data[opt]);                           // 95
      });                                                                                                      // 96
      if (_changedOpts.length > 0) {                                                                           // 97
        // Destroy and re-init the editor                                                                      // 98
        var _snapshot = tmpl.editor.froalaEditor('snapshot.get');                                              // 99
        tmpl.editor.froalaEditor('destroy');                                                                   // 100
        initEditor(tmpl, _data, tmpl.lastData, $input, froalaMethod);                                          // 101
        tmpl.editor.froalaEditor('snapshot.restore', _snapshot);                                               // 102
      }                                                                                                        // 103
                                                                                                               // 104
      // Save current data context for comparison on next autorun execution                                    // 105
      tmpl.lastData = _data;                                                                                   // 106
    })                                                                                                         // 107
                                                                                                               // 108
   });                                                                                                         // 109
});                                                                                                            // 110
                                                                                                               // 111
/**                                                                                                            // 112
 * Ensure froalaEditor is properly removed to prevent memory leaks                                             // 113
 */                                                                                                            // 114
Template.froalaReactive.onDestroyed(function () {                                                              // 115
 var tmpl = this,                                                                                              // 116
    $input = tmpl.$('.'+tmpl.wrapperClassName),                                                                // 117
    froalaMethod;                                                                                              // 118
                                                                                                               // 119
  froalaMethod = getFroalaEditorJQueryInstanceMethod($input);                                                  // 120
  if (!froalaMethod) {                                                                                         // 121
    return;                                                                                                    // 122
  }                                                                                                            // 123
                                                                                                               // 124
  if (!$input.data('froala.editor')) {                                                                         // 125
    // Restore internal 'froala_editor' reference to froala editor.                                            // 126
    // For some reason, by the time we get here in the destroyed procedure,                                    // 127
    // this jQuery data appears to have been wiped.                                                            // 128
    // See: https://github.com/froala/froala-reactive/issues/2                                                 // 129
    $input.data('froala.editor', tmpl.__froala_editor);                                                        // 130
  }                                                                                                            // 131
                                                                                                               // 132
  // Destroy froala editor object itself                                                                       // 133
  // This may throw an exception if Meteor has already torn down part of the DOM                               // 134
  // managed by Froala Editor, so we wrap this in a try / catch block to                                       // 135
  // silently ignore any such cases                                                                            // 136
  try {                                                                                                        // 137
    $input[froalaMethod]('destroy');                                                                           // 138
  } catch (e) {}                                                                                               // 139
                                                                                                               // 140
});                                                                                                            // 141
                                                                                                               // 142
/** Initialise Froala Editor instance */                                                                       // 143
function initEditor(tmpl, data, lastData, $input, froalaMethod) {                                              // 144
                                                                                                               // 145
  // Set up additional event handlers                                                                          // 146
  var eventHandlers = getEventHandlerNames(tmpl.data);                                                         // 147
  _.each(eventHandlers, function (opt) {                                                                       // 148
    var _eventName = 'froalaEditor.' + opt.substring(3); // Remove '_on' prefix                                // 149
    $input.on(_eventName, function (e) {                                                                       // 150
      e.preventDefault();                                                                                      // 151
      // Call callback, setting `this` to the latest, reactive, data context                                   // 152
      // of this template instance.                                                                            // 153
      // Callback function can use `this._value` to get up-to-date model value.                                // 154
      // Also note that these callbacks fire AFTER the autorun function                                        // 155
      // has triggered if the data context changed. Hence, we pass the `lastData`                              // 156
      // property as the data context for the callback function, not the original                              // 157
      // `tmpl.data` object.                                                                                   // 158
      return tmpl.data[opt].apply(lastData, arguments);                                                        // 159
    });                                                                                                        // 160
  });                                                                                                          // 161
                                                                                                               // 162
  // Create Froala Editor instance, setting options & initial HTML content                                     // 163
  // from template data context                                                                                // 164
  tmpl.editor = $input[froalaMethod](data);                                                                    // 165
  if (tmpl.data._value) {                                                                                      // 166
    $input[froalaMethod]('html.set', data._value);                                                             // 167
  }                                                                                                            // 168
                                                                                                               // 169
  // Hack to provide destroyed callback with froala editor object,                                             // 170
  // by stuffing a reference to it in the template instance object.                                            // 171
  // See: https://github.com/froala/froala-reactive/issues/2                                                   // 172
  tmpl.__froala_editor = $input.data('froala.editor');                                                         // 173
                                                                                                               // 174
}                                                                                                              // 175
                                                                                                               // 176
/**                                                                                                            // 177
 * Internal function to return correct Froala Editor instance method name                                      // 178
 *                                                                                                             // 179
 */                                                                                                            // 180
function getFroalaEditorJQueryInstanceMethod(froalaJQueryObject) {                                             // 181
  if (froalaJQueryObject) {                                                                                    // 182
    if (_.isFunction(froalaJQueryObject.froalaEditor)) {                                                       // 183
      // Original froala jQuery instance method                                                                // 184
      return 'froalaEditor';                                                                                   // 185
    }                                                                                                          // 186
  }                                                                                                            // 187
  // Whoops! Looks like froala editor code has not been loaded                                                 // 188
  return null;                                                                                                 // 189
};                                                                                                             // 190
                                                                                                               // 191
/**                                                                                                            // 192
 * Internal function to parse any '_on<event>' event callback arguments                                        // 193
 */                                                                                                            // 194
function getEventHandlerNames(tmplData) {                                                                      // 195
 return _.filter(Object.keys(tmplData), function (opt) {                                                       // 196
    return opt.indexOf('_on') === 0 && // Include if '_on...'                                                  // 197
      _.isFunction(tmplData[opt]); // and handler is indeed a function                                         // 198
  });                                                                                                          // 199
}                                                                                                              // 200
                                                                                                               // 201
                                                                                                               // 202
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['froala:editor-reactive'] = {};

})();
