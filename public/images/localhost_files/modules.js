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
var _ = Package.underscore._;
var meteorInstall = Package['modules-runtime'].meteorInstall;

/* Package-scope variables */
var Buffer, process;

var require = meteorInstall({"node_modules":{"meteor":{"modules":{"client.js":["./install-packages.js","./stubs.js","./buffer.js","./process.js","reify/lib/runtime","./css",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/modules/client.js                                                                                //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
require("./install-packages.js");                                                                            // 1
require("./stubs.js");                                                                                       // 2
require("./buffer.js");                                                                                      // 3
require("./process.js");                                                                                     // 4
require("reify/lib/runtime").enable(module.constructor);                                                     // 5
                                                                                                             // 6
exports.addStyles = require("./css").addStyles;                                                              // 7
                                                                                                             // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"buffer.js":["buffer",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/modules/buffer.js                                                                                //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
try {                                                                                                        // 1
  Buffer = global.Buffer || require("buffer").Buffer;                                                        // 2
} catch (noBuffer) {}                                                                                        // 3
                                                                                                             // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"css.js":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/modules/css.js                                                                                   //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var doc = document;                                                                                          // 1
var head = doc.getElementsByTagName("head").item(0);                                                         // 2
                                                                                                             // 3
exports.addStyles = function (css) {                                                                         // 4
  var style = doc.createElement("style");                                                                    // 5
                                                                                                             // 6
  style.setAttribute("type", "text/css");                                                                    // 7
                                                                                                             // 8
  // https://msdn.microsoft.com/en-us/library/ms535871(v=vs.85).aspx                                         // 9
  var internetExplorerSheetObject =                                                                          // 10
    style.sheet || // Edge/IE11.                                                                             // 11
    style.styleSheet; // Older IEs.                                                                          // 12
                                                                                                             // 13
  if (internetExplorerSheetObject) {                                                                         // 14
    internetExplorerSheetObject.cssText = css;                                                               // 15
  } else {                                                                                                   // 16
    style.appendChild(doc.createTextNode(css));                                                              // 17
  }                                                                                                          // 18
                                                                                                             // 19
  return head.appendChild(style);                                                                            // 20
};                                                                                                           // 21
                                                                                                             // 22
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"install-packages.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/modules/install-packages.js                                                                      //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
function install(name, mainModule) {                                                                         // 1
  var meteorDir = {};                                                                                        // 2
                                                                                                             // 3
  // Given a package name <name>, install a stub module in the                                               // 4
  // /node_modules/meteor directory called <name>.js, so that                                                // 5
  // require.resolve("meteor/<name>") will always return                                                     // 6
  // /node_modules/meteor/<name>.js instead of something like                                                // 7
  // /node_modules/meteor/<name>/index.js, in the rare but possible event                                    // 8
  // that the package contains a file called index.js (#6590).                                               // 9
                                                                                                             // 10
  if (mainModule) {                                                                                          // 11
    meteorDir[name + ".js"] = [mainModule, function (require, e, module) {                                   // 12
      module.exports = require(mainModule);                                                                  // 13
    }];                                                                                                      // 14
  } else {                                                                                                   // 15
    // back compat with old Meteor packages                                                                  // 16
    meteorDir[name + ".js"] = function (r, e, module) {                                                      // 17
      module.exports = Package[name];                                                                        // 18
    };                                                                                                       // 19
  }                                                                                                          // 20
                                                                                                             // 21
  meteorInstall({                                                                                            // 22
    node_modules: {                                                                                          // 23
      meteor: meteorDir                                                                                      // 24
    }                                                                                                        // 25
  });                                                                                                        // 26
}                                                                                                            // 27
                                                                                                             // 28
// This file will be modified during computeJsOutputFilesMap to include                                      // 29
// install(<name>) calls for every Meteor package.                                                           // 30
                                                                                                             // 31
install("underscore");                                                                                       // 32
install("meteor");                                                                                           // 33
install("meteor-base");                                                                                      // 34
install("mobile-experience");                                                                                // 35
install("modules-runtime");                                                                                  // 36
install("modules", "meteor/modules/client.js");                                                              // 37
install("es5-shim", "meteor/es5-shim/client.js");                                                            // 38
install("promise", "meteor/promise/client.js");                                                              // 39
install("ecmascript-runtime", "meteor/ecmascript-runtime/runtime.js");                                       // 40
install("babel-compiler");                                                                                   // 41
install("ecmascript");                                                                                       // 42
install("base64");                                                                                           // 43
install("ejson");                                                                                            // 44
install("id-map");                                                                                           // 45
install("ordered-dict");                                                                                     // 46
install("tracker");                                                                                          // 47
install("babel-runtime");                                                                                    // 48
install("random");                                                                                           // 49
install("mongo-id");                                                                                         // 50
install("diff-sequence");                                                                                    // 51
install("geojson-utils", "meteor/geojson-utils/main.js");                                                    // 52
install("minimongo");                                                                                        // 53
install("check", "meteor/check/match.js");                                                                   // 54
install("retry");                                                                                            // 55
install("ddp-common");                                                                                       // 56
install("reload");                                                                                           // 57
install("ddp-client");                                                                                       // 58
install("ddp");                                                                                              // 59
install("ddp-server");                                                                                       // 60
install("allow-deny");                                                                                       // 61
install("mongo");                                                                                            // 62
install("blaze-html-templates");                                                                             // 63
install("reactive-var");                                                                                     // 64
install("jquery", "meteor/jquery/main.js");                                                                  // 65
install("standard-minifier-css");                                                                            // 66
install("standard-minifier-js");                                                                             // 67
install("shell-server");                                                                                     // 68
install("ddp-rate-limiter");                                                                                 // 69
install("localstorage");                                                                                     // 70
install("callback-hook");                                                                                    // 71
install("deps");                                                                                             // 72
install("htmljs");                                                                                           // 73
install("observe-sequence");                                                                                 // 74
install("blaze");                                                                                            // 75
install("accounts-base", "meteor/accounts-base/client_main.js");                                             // 76
install("service-configuration");                                                                            // 77
install("spacebars");                                                                                        // 78
install("templating");                                                                                       // 79
install("reactive-dict");                                                                                    // 80
install("session");                                                                                          // 81
install("sha");                                                                                              // 82
install("srp");                                                                                              // 83
install("accounts-password");                                                                                // 84
install("less");                                                                                             // 85
install("accounts-ui-unstyled");                                                                             // 86
install("accounts-ui");                                                                                      // 87
install("ui");                                                                                               // 88
install("iron:core");                                                                                        // 89
install("iron:dynamic-template");                                                                            // 90
install("iron:layout");                                                                                      // 91
install("iron:url");                                                                                         // 92
install("iron:middleware-stack");                                                                            // 93
install("iron:location");                                                                                    // 94
install("iron:controller");                                                                                  // 95
install("iron:router");                                                                                      // 96
install("momentjs:moment");                                                                                  // 97
install("aldeed:simple-schema");                                                                             // 98
install("raix:eventemitter");                                                                                // 99
install("aldeed:collection2-core");                                                                          // 100
install("aldeed:schema-index");                                                                              // 101
install("aldeed:schema-deny");                                                                               // 102
install("aldeed:collection2");                                                                               // 103
install("reywood:publish-composite");                                                                        // 104
install("raix:handlebar-helpers");                                                                           // 105
install("fortawesome:fontawesome");                                                                          // 106
install("froala:editor");                                                                                    // 107
install("froala:editor-reactive");                                                                           // 108
install("meteortoys:toykit");                                                                                // 109
install("msavin:mongol");                                                                                    // 110
install("msavin:jetsetter");                                                                                 // 111
install("meteortoys:blueprint");                                                                             // 112
install("meteortoys:authenticate");                                                                          // 113
install("meteortoys:shell");                                                                                 // 114
install("meteortoys:method");                                                                                // 115
install("meteortoys:result");                                                                                // 116
install("meteortoys:autopub");                                                                               // 117
install("meteortoys:pub");                                                                                   // 118
install("meteortoys:sub");                                                                                   // 119
install("meteortoys:email");                                                                                 // 120
install("meteortoys:listen");                                                                                // 121
install("meteortoys:throttle");                                                                              // 122
install("meteortoys:status");                                                                                // 123
install("meteortoys:hotreload");                                                                             // 124
install("meteortoys:allthings");                                                                             // 125
install("semantic:ui-css");                                                                                  // 126
install("useraccounts:core");                                                                                // 127
install("coffeescript");                                                                                     // 128
install("softwarerero:accounts-t9n");                                                                        // 129
install("useraccounts:iron-routing");                                                                        // 130
install("useraccounts:semantic-ui");                                                                         // 131
install("gadicohen:prism");                                                                                  // 132
install("erasaur:meteor-lodash");                                                                            // 133
install("chrismbeckett:toastr");                                                                             // 134
install("webapp");                                                                                           // 135
install("livedata");                                                                                         // 136
install("hot-code-push");                                                                                    // 137
install("launch-screen");                                                                                    // 138
install("autoupdate");                                                                                       // 139
install("mdg:validation-error");                                                                             // 140
                                                                                                             // 141
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"process.js":["process",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/modules/process.js                                                                               //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
try {                                                                                                        // 1
  // The application can run `npm install process` to provide its own                                        // 2
  // process stub; otherwise this module will provide a partial stub.                                        // 3
  process = global.process || require("process");                                                            // 4
} catch (noProcess) {                                                                                        // 5
  process = {};                                                                                              // 6
}                                                                                                            // 7
                                                                                                             // 8
if (Meteor.isServer) {                                                                                       // 9
  // Make require("process") work on the server in all versions of Node.                                     // 10
  meteorInstall({                                                                                            // 11
    node_modules: {                                                                                          // 12
      "process.js": function (r, e, module) {                                                                // 13
        module.exports = process;                                                                            // 14
      }                                                                                                      // 15
    }                                                                                                        // 16
  });                                                                                                        // 17
} else {                                                                                                     // 18
  process.platform = "browser";                                                                              // 19
  process.nextTick = process.nextTick || Meteor._setImmediate;                                               // 20
}                                                                                                            // 21
                                                                                                             // 22
if (typeof process.env !== "object") {                                                                       // 23
  process.env = {};                                                                                          // 24
}                                                                                                            // 25
                                                                                                             // 26
_.extend(process.env, meteorEnv);                                                                            // 27
                                                                                                             // 28
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"stubs.js":["meteor-node-stubs",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/modules/stubs.js                                                                                 //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
try {                                                                                                        // 1
  // When meteor-node-stubs is installed in the application's root                                           // 2
  // node_modules directory, requiring it here installs aliases for stubs                                    // 3
  // for all Node built-in modules, such as fs, util, and http.                                              // 4
  require("meteor-node-stubs");                                                                              // 5
} catch (noStubs) {}                                                                                         // 6
                                                                                                             // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"node_modules":{"reify":{"lib":{"runtime.js":["./entry.js","./utils.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor/modules/node_modules/reify/lib/runtime.js                                             //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var Entry = require("./entry.js").Entry;                                                                     // 1
var utils = require("./utils.js");                                                                           // 2
                                                                                                             // 3
exports.enable = function (Module) {                                                                         // 4
  var Mp = Module.prototype;                                                                                 // 5
                                                                                                             // 6
  if (typeof Mp.import === "function" &&                                                                     // 7
      typeof Mp.export === "function") {                                                                     // 8
    // If the Mp.{import,export} methods have already been                                                   // 9
    // defined, abandon reification immediately.                                                             // 10
    return Module;                                                                                           // 11
  }                                                                                                          // 12
                                                                                                             // 13
  // Platform-specific code should implement this method however                                             // 14
  // appropriate. Module.prototype.resolve(id) should return an absolute                                     // 15
  // version of the given module identifier, like require.resolve.                                           // 16
  Mp.resolve = Mp.resolve || function resolve(id) {                                                          // 17
    throw new Error("Module.prototype.resolve not implemented");                                             // 18
  };                                                                                                         // 19
                                                                                                             // 20
  // Platform-specific code should find a way to call this method whenever                                   // 21
  // the module system is about to return module.exports from require. This                                  // 22
  // might happen more than once per module, in case of dependency cycles,                                   // 23
  // so we want Module.prototype.runModuleSetters to run each time.                                          // 24
  Mp.runModuleSetters = function runModuleSetters(valueToPassThrough) {                                      // 25
    var entry = Entry.get(this.id);                                                                          // 26
    if (entry) {                                                                                             // 27
      entry.runModuleSetters(this);                                                                          // 28
    }                                                                                                        // 29
                                                                                                             // 30
    // Assignments to exported local variables get wrapped with calls to                                     // 31
    // module.runModuleSetters, so module.runModuleSetters returns the                                       // 32
    // valueToPassThrough parameter to allow the value of the original                                       // 33
    // expression to pass through. For example,                                                              // 34
    //                                                                                                       // 35
    //   export var a = 1;                                                                                   // 36
    //   console.log(a += 3);                                                                                // 37
    //                                                                                                       // 38
    // becomes                                                                                               // 39
    //                                                                                                       // 40
    //   module.export("a", () => a);                                                                        // 41
    //   var a = 1;                                                                                          // 42
    //   console.log(module.runModuleSetters(a += 3));                                                       // 43
    //                                                                                                       // 44
    // This ensures module.runModuleSetters runs immediately after the                                       // 45
    // assignment, and does not interfere with the larger computation.                                       // 46
    return valueToPassThrough;                                                                               // 47
  };                                                                                                         // 48
                                                                                                             // 49
  function setESModule(module) {                                                                             // 50
    var exports = module.exports;                                                                            // 51
    if (exports && typeof exports === "object") {                                                            // 52
      exports.__esModule = true;                                                                             // 53
    }                                                                                                        // 54
  }                                                                                                          // 55
                                                                                                             // 56
  Mp.import = function (id, setters) {                                                                       // 57
    var module = this;                                                                                       // 58
    setESModule(module);                                                                                     // 59
                                                                                                             // 60
    var absoluteId = module.resolve(id);                                                                     // 61
                                                                                                             // 62
    if (setters && typeof setters === "object") {                                                            // 63
      var entry = Entry.getOrCreate(absoluteId);                                                             // 64
      entry.addSetters(module, setters);                                                                     // 65
    }                                                                                                        // 66
                                                                                                             // 67
    var countBefore = entry && entry.runCount;                                                               // 68
    var exports = typeof module.require === "function"                                                       // 69
      ? module.require(absoluteId)                                                                           // 70
      : require(absoluteId);                                                                                 // 71
                                                                                                             // 72
    if (entry && entry.runCount === countBefore) {                                                           // 73
      // If require(absoluteId) didn't run any setters for this entry,                                       // 74
      // perhaps because it's not the first time this module has been                                        // 75
      // required, run the setters now using an object that passes as the                                    // 76
      // real module object.                                                                                 // 77
      entry.runModuleSetters({                                                                               // 78
        id: absoluteId,                                                                                      // 79
        exports: exports,                                                                                    // 80
        getExportByName: Mp.getExportByName                                                                  // 81
      });                                                                                                    // 82
    }                                                                                                        // 83
  };                                                                                                         // 84
                                                                                                             // 85
  // Register getter functions for local variables in the scope of an                                        // 86
  // export statement. The keys of the getters object are exported names,                                    // 87
  // and the values are functions that return local values.                                                  // 88
  Mp.export = function (getters) {                                                                           // 89
    var module = this;                                                                                       // 90
    setESModule(module);                                                                                     // 91
                                                                                                             // 92
    if (utils.isPlainObject(getters)) {                                                                      // 93
      Entry.getOrCreate(module.id).addGetters(getters);                                                      // 94
    }                                                                                                        // 95
                                                                                                             // 96
    if (module.loaded) {                                                                                     // 97
      // If the module has already been evaluated, then we need to trigger                                   // 98
      // another round of entry.runModuleSetters calls, which begins by                                      // 99
      // calling entry.runModuleGetters(module).                                                             // 100
      module.runModuleSetters();                                                                             // 101
    }                                                                                                        // 102
  };                                                                                                         // 103
                                                                                                             // 104
  // This method can be overridden by client code to implement custom export                                 // 105
  // naming logic. The current implementation works well with Babel's                                        // 106
  // __esModule convention.                                                                                  // 107
  Mp.getExportByName = function (name) {                                                                     // 108
    var exports = this.exports;                                                                              // 109
                                                                                                             // 110
    if (name === "*") {                                                                                      // 111
      return exports;                                                                                        // 112
    }                                                                                                        // 113
                                                                                                             // 114
    if (name === "default" &&                                                                                // 115
        ! (exports &&                                                                                        // 116
           typeof exports === "object" &&                                                                    // 117
           exports.__esModule &&                                                                             // 118
           "default" in exports)) {                                                                          // 119
      return exports;                                                                                        // 120
    }                                                                                                        // 121
                                                                                                             // 122
    return exports && exports[name];                                                                         // 123
  };                                                                                                         // 124
                                                                                                             // 125
  return Module;                                                                                             // 126
};                                                                                                           // 127
                                                                                                             // 128
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"entry.js":["./utils.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor/modules/node_modules/reify/lib/entry.js                                               //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var hasOwn = Object.prototype.hasOwnProperty;                                                                // 1
var entryMap = Object.create(null);                                                                          // 2
var utils = require("./utils.js");                                                                           // 3
                                                                                                             // 4
function Entry(id) {                                                                                         // 5
  // Same as module.id for this module.                                                                      // 6
  this.id = id;                                                                                              // 7
  // The number of times this.runModuleSetters has been called.                                              // 8
  this.runCount = 0;                                                                                         // 9
  // Setters for assigning to local variables in parent modules.                                             // 10
  this.setters = Object.create(null);                                                                        // 11
  // Getters for local variables exported from this module.                                                  // 12
  this.getters = Object.create(null);                                                                        // 13
}                                                                                                            // 14
                                                                                                             // 15
var Ep = Entry.prototype;                                                                                    // 16
                                                                                                             // 17
Entry.get = function (id) {                                                                                  // 18
  return entryMap[id] || null;                                                                               // 19
};                                                                                                           // 20
                                                                                                             // 21
Entry.getOrCreate = function (id) {                                                                          // 22
  return entryMap[id] = entryMap[id] || new Entry(id);                                                       // 23
};                                                                                                           // 24
                                                                                                             // 25
Ep.addSetters = function (parent, setters) {                                                                 // 26
  var entry = this;                                                                                          // 27
                                                                                                             // 28
  Object.keys(setters).forEach(function (name) {                                                             // 29
    var setter = setters[name];                                                                              // 30
    if (typeof setter === "function" &&                                                                      // 31
        // Ignore any requests for the exports.__esModule property."                                         // 32
        name !== "__esModule") {                                                                             // 33
      setter.parent = parent;                                                                                // 34
      (entry.setters[name] =                                                                                 // 35
       entry.setters[name] || []                                                                             // 36
      ).push(setter);                                                                                        // 37
    }                                                                                                        // 38
  });                                                                                                        // 39
};                                                                                                           // 40
                                                                                                             // 41
Ep.addGetters = function (getters) {                                                                         // 42
  var entry = this;                                                                                          // 43
  Object.keys(getters).forEach(function (name) {                                                             // 44
    var getter = getters[name];                                                                              // 45
    if (typeof getter === "function" &&                                                                      // 46
        // Ignore any requests for the exports.__esModule property."                                         // 47
        name !== "__esModule") {                                                                             // 48
      // Should this throw if hasOwn.call(this.getters, name)?                                               // 49
      entry.getters[name] = getter;                                                                          // 50
    }                                                                                                        // 51
  });                                                                                                        // 52
};                                                                                                           // 53
                                                                                                             // 54
function runModuleSetters(module) {                                                                          // 55
  var entry = entryMap[module.id];                                                                           // 56
  if (entry) {                                                                                               // 57
    entry.runModuleSetters(module);                                                                          // 58
  }                                                                                                          // 59
}                                                                                                            // 60
                                                                                                             // 61
function runModuleGetters(module) {                                                                          // 62
  var entry = entryMap[module.id];                                                                           // 63
  return entry ? entry.runModuleGetters(module) : 0;                                                         // 64
}                                                                                                            // 65
                                                                                                             // 66
Ep.runModuleGetters = function (module) {                                                                    // 67
  var entry = this;                                                                                          // 68
  var changeCount = 0;                                                                                       // 69
                                                                                                             // 70
  Object.keys(entry.getters).forEach(function (name) {                                                       // 71
    if (entry.runGetter(module, name)) {                                                                     // 72
      ++changeCount;                                                                                         // 73
    }                                                                                                        // 74
  });                                                                                                        // 75
                                                                                                             // 76
  return changeCount;                                                                                        // 77
};                                                                                                           // 78
                                                                                                             // 79
// Returns true iff the getter updated module.exports with a new value.                                      // 80
Ep.runGetter = function (module, name) {                                                                     // 81
  if (! hasOwn.call(this.getters, name)) {                                                                   // 82
    return false;                                                                                            // 83
  }                                                                                                          // 84
                                                                                                             // 85
  var getter = this.getters[name];                                                                           // 86
  try {                                                                                                      // 87
    var value = getter.call(module);                                                                         // 88
  } catch (e) {}                                                                                             // 89
  var exports = module.exports;                                                                              // 90
                                                                                                             // 91
  if (! hasOwn.call(exports, name) ||                                                                        // 92
      exports[name] !== value) {                                                                             // 93
    // We update module.exports[name] with the current value so that                                         // 94
    // CommonJS require calls remain consistent with module.import.                                          // 95
    exports[name] = value;                                                                                   // 96
    return true;                                                                                             // 97
  }                                                                                                          // 98
                                                                                                             // 99
  return false;                                                                                              // 100
};                                                                                                           // 101
                                                                                                             // 102
// Called whenever module.exports might have changed, to trigger any                                         // 103
// setters associated with the newly exported values.                                                        // 104
Ep.runModuleSetters = function (module) {                                                                    // 105
  var entry = this;                                                                                          // 106
  var names = Object.keys(entry.setters);                                                                    // 107
                                                                                                             // 108
  // Make sure module.exports is up to date before we call                                                   // 109
  // module.getExportByName(name).                                                                           // 110
  entry.runModuleGetters(module);                                                                            // 111
                                                                                                             // 112
  // Invoke the given callback once for every (setter, value, name) triple                                   // 113
  // that needs to be called. Note that forEachSetter does not call any                                      // 114
  // setters itself, only the given callback.                                                                // 115
  function forEachSetter(callback, context) {                                                                // 116
    names.forEach(function (name) {                                                                          // 117
      entry.setters[name].forEach(function (setter) {                                                        // 118
        var value = module.getExportByName(name);                                                            // 119
        if (name === "*") {                                                                                  // 120
          Object.keys(value).forEach(function (name) {                                                       // 121
            call(setter, value[name], name);                                                                 // 122
          });                                                                                                // 123
        } else {                                                                                             // 124
          call(setter, value, name);                                                                         // 125
        }                                                                                                    // 126
      });                                                                                                    // 127
    });                                                                                                      // 128
                                                                                                             // 129
    function call(setter, value, name) {                                                                     // 130
      if (name === "__esModule") {                                                                           // 131
        // Ignore setters asking for module.exports.__esModule.                                              // 132
        return;                                                                                              // 133
      }                                                                                                      // 134
                                                                                                             // 135
      setter.last = setter.last || Object.create(null);                                                      // 136
                                                                                                             // 137
      if (! hasOwn.call(setter.last, name) ||                                                                // 138
          setter.last[name] !== value) {                                                                     // 139
        // Only invoke the callback if we have not called this setter                                        // 140
        // (with a value of this name) before, or the current value is                                       // 141
        // different from the last value we passed to this setter.                                           // 142
        return callback.apply(context, arguments);                                                           // 143
      }                                                                                                      // 144
    }                                                                                                        // 145
  }                                                                                                          // 146
                                                                                                             // 147
  // Every three elements of this list form a (setter, value, name) triple                                   // 148
  // that needs to be invoked.                                                                               // 149
  var settersToCall = [];                                                                                    // 150
                                                                                                             // 151
  // Lazily-initialized objects mapping parent module identifiers to                                         // 152
  // relevant parent module objects and snapshots of their exports.                                          // 153
  var relevantParents;                                                                                       // 154
  var parentSnapshots;                                                                                       // 155
                                                                                                             // 156
  // Take snapshots of setter.parent.exports for any setters that we are                                     // 157
  // planning to call, so that we can later determine if calling the                                         // 158
  // setters modified any of those exports objects.                                                          // 159
  forEachSetter(function (setter, value, name) {                                                             // 160
    var parent = setter.parent;                                                                              // 161
    parentSnapshots = parentSnapshots || Object.create(null);                                                // 162
    if (! hasOwn.call(parentSnapshots, parent.id)) {                                                         // 163
      relevantParents = relevantParents || Object.create(null);                                              // 164
      relevantParents[parent.id] = parent;                                                                   // 165
      if (utils.isPlainObject(parent.exports)) {                                                             // 166
        // If parent.exports is an object, make a shallow clone of it so                                     // 167
        // that we can see if it changes as a result of calling setters.                                     // 168
        parentSnapshots[parent.id] = utils.assign({}, parent.exports);                                       // 169
      } else {                                                                                               // 170
        // If parent.exports is not an object, the "snapshot" is just the                                    // 171
        // value of parent.exports.                                                                          // 172
        parentSnapshots[parent.id] = parent.exports;                                                         // 173
      }                                                                                                      // 174
    }                                                                                                        // 175
                                                                                                             // 176
    // Push three elements at a time to avoid creating wrapper arrays for                                    // 177
    // each (setter, value, name) triple. Note the i += 3 below.                                             // 178
    settersToCall.push(setter, value, name);                                                                 // 179
  });                                                                                                        // 180
                                                                                                             // 181
  // Now call all the setters that we decided we need to call.                                               // 182
  for (var i = 0; i < settersToCall.length; i += 3) {                                                        // 183
    var setter = settersToCall[i];                                                                           // 184
    var value = settersToCall[i + 1];                                                                        // 185
    var name = settersToCall[i + 2];                                                                         // 186
    setter.call(module, setter.last[name] = value, name);                                                    // 187
  }                                                                                                          // 188
                                                                                                             // 189
  ++entry.runCount;                                                                                          // 190
                                                                                                             // 191
  if (! relevantParents) {                                                                                   // 192
    // If we never called takeSnapshot, then we can avoid checking                                           // 193
    // relevantParents and parentSnapshots below.                                                            // 194
    return;                                                                                                  // 195
  }                                                                                                          // 196
                                                                                                             // 197
  // If any of the setters updated the module.exports of a parent module,                                    // 198
  // or updated local variables that are exported by that parent module,                                     // 199
  // then we must re-run any setters registered by that parent module.                                       // 200
  Object.keys(relevantParents).forEach(function (id) {                                                       // 201
    var parent = relevantParents[id];                                                                        // 202
                                                                                                             // 203
    if (runModuleGetters(parent) > 0) {                                                                      // 204
      return runModuleSetters(parent);                                                                       // 205
    }                                                                                                        // 206
                                                                                                             // 207
    var exports = parent.exports;                                                                            // 208
    var snapshot = parentSnapshots[parent.id];                                                               // 209
    if (utils.shallowObjEqual(exports, snapshot)) {                                                          // 210
      // If parent.exports have not changed since we took the snapshot,                                      // 211
      // then we do not need to run the parent's setters.                                                    // 212
      return;                                                                                                // 213
    }                                                                                                        // 214
                                                                                                             // 215
    runModuleSetters(parent);                                                                                // 216
  });                                                                                                        // 217
};                                                                                                           // 218
                                                                                                             // 219
exports.Entry = Entry;                                                                                       // 220
                                                                                                             // 221
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"utils.js":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor/modules/node_modules/reify/lib/utils.js                                               //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var hasOwn = Object.prototype.hasOwnProperty;                                                                // 1
var objToStr = Object.prototype.toString;                                                                    // 2
var objStr = objToStr.call({});                                                                              // 3
                                                                                                             // 4
function isPlainObject(value) {                                                                              // 5
  return objToStr.call(value) === objStr;                                                                    // 6
}                                                                                                            // 7
exports.isPlainObject = isPlainObject;                                                                       // 8
                                                                                                             // 9
exports.assign = Object.assign || function (obj) {                                                           // 10
  var argc = arguments.length;                                                                               // 11
  for (var i = 1; i < argc; ++i) {                                                                           // 12
    var arg = arguments[i];                                                                                  // 13
    if (arg && typeof arg === "object") {                                                                    // 14
      var keys = Object.keys(arg);                                                                           // 15
      for (var k = 0; k < keys.length; ++k) {                                                                // 16
        var key = keys[k];                                                                                   // 17
        obj[key] = arg[key];                                                                                 // 18
      }                                                                                                      // 19
    }                                                                                                        // 20
  }                                                                                                          // 21
  return obj;                                                                                                // 22
};                                                                                                           // 23
                                                                                                             // 24
exports.shallowObjEqual = function(a, b) {                                                                   // 25
  if (a === b) {                                                                                             // 26
    return true;                                                                                             // 27
  }                                                                                                          // 28
                                                                                                             // 29
  if (! isPlainObject(a) ||                                                                                  // 30
      ! isPlainObject(b)) {                                                                                  // 31
    return false;                                                                                            // 32
  }                                                                                                          // 33
                                                                                                             // 34
  var aKeys = Object.keys(a);                                                                                // 35
  var bKeys = Object.keys(b);                                                                                // 36
                                                                                                             // 37
  if (aKeys.length !== bKeys.length) {                                                                       // 38
    return false;                                                                                            // 39
  }                                                                                                          // 40
                                                                                                             // 41
  return aKeys.every(function (key) {                                                                        // 42
    return hasOwn.call(b, key) &&                                                                            // 43
      a[key] === b[key];                                                                                     // 44
  });                                                                                                        // 45
};                                                                                                           // 46
                                                                                                             // 47
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},"meteor-node-stubs":{"package.json":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/package.json                                                               //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
exports.name = "meteor-node-stubs";                                                                          // 1
exports.version = "0.2.3";                                                                                   // 2
exports.main = "index.js";                                                                                   // 3
                                                                                                             // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":["./map.json",function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/index.js                                                                   //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var map = require("./map.json");                                                                             // 1
var meteorAliases = {};                                                                                      // 2
                                                                                                             // 3
Object.keys(map).forEach(function (id) {                                                                     // 4
  if (typeof map[id] === "string") {                                                                         // 5
    try {                                                                                                    // 6
      exports[id] = meteorAliases[id + ".js"] =                                                              // 7
        require.resolve(map[id]);                                                                            // 8
    } catch (e) {                                                                                            // 9
      // Resolution can fail at runtime if the stub was not included in the                                  // 10
      // bundle because nothing depended on it.                                                              // 11
    }                                                                                                        // 12
  } else {                                                                                                   // 13
    exports[id] = map[id];                                                                                   // 14
    meteorAliases[id + ".js"] = function(){};                                                                // 15
  }                                                                                                          // 16
});                                                                                                          // 17
                                                                                                             // 18
if (typeof meteorInstall === "function") {                                                                   // 19
  meteorInstall({                                                                                            // 20
    // Install the aliases into a node_modules directory one level up from                                   // 21
    // the root directory, so that they do not clutter the namespace                                         // 22
    // available to apps and packages.                                                                       // 23
    "..": {                                                                                                  // 24
      node_modules: meteorAliases                                                                            // 25
    }                                                                                                        // 26
  });                                                                                                        // 27
}                                                                                                            // 28
                                                                                                             // 29
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"map.json":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/map.json                                                                   //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
module.exports = {                                                                                           // 1
  "assert": "assert/",                                                                                       // 2
  "buffer": "buffer/",                                                                                       // 3
  "child_process": null,                                                                                     // 4
  "cluster": null,                                                                                           // 5
  "console": "console-browserify",                                                                           // 6
  "constants": "constants-browserify",                                                                       // 7
  "crypto": "crypto-browserify",                                                                             // 8
  "dgram": null,                                                                                             // 9
  "dns": null,                                                                                               // 10
  "domain": "domain-browser",                                                                                // 11
  "events": "events/",                                                                                       // 12
  "fs": null,                                                                                                // 13
  "http": "http-browserify",                                                                                 // 14
  "https": "https-browserify",                                                                               // 15
  "module": null,                                                                                            // 16
  "net": null,                                                                                               // 17
  "os": "os-browserify/browser.js",                                                                          // 18
  "path": "path-browserify",                                                                                 // 19
  "process": "process/browser.js",                                                                           // 20
  "punycode": "punycode/",                                                                                   // 21
  "querystring": "querystring-es3/",                                                                         // 22
  "readline": null,                                                                                          // 23
  "repl": null,                                                                                              // 24
  "stream": "stream-browserify",                                                                             // 25
  "_stream_duplex": "readable-stream/duplex.js",                                                             // 26
  "_stream_passthrough": "readable-stream/passthrough.js",                                                   // 27
  "_stream_readable": "readable-stream/readable.js",                                                         // 28
  "_stream_transform": "readable-stream/transform.js",                                                       // 29
  "_stream_writable": "readable-stream/writable.js",                                                         // 30
  "string_decoder": "string_decoder/",                                                                       // 31
  "sys": "util/util.js",                                                                                     // 32
  "timers": "timers-browserify",                                                                             // 33
  "tls": null,                                                                                               // 34
  "tty": "tty-browserify",                                                                                   // 35
  "url": "url/",                                                                                             // 36
  "util": "util/util.js",                                                                                    // 37
  "vm": "vm-browserify",                                                                                     // 38
  "zlib": "browserify-zlib"                                                                                  // 39
};                                                                                                           // 40
                                                                                                             // 41
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"deps":{"buffer.js":["buffer/",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/deps/buffer.js                                                             //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
require("buffer/");                                                                                          // 1
                                                                                                             // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"process.js":["process/browser.js",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/deps/process.js                                                            //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
require("process/browser.js");                                                                               // 1
                                                                                                             // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"domain.js":["domain-browser",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/deps/domain.js                                                             //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
require("domain-browser");                                                                                   // 1
                                                                                                             // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"node_modules":{"buffer":{"package.json":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/node_modules/buffer/package.json                                           //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
exports.name = "buffer";                                                                                     // 1
exports.version = "4.5.1";                                                                                   // 2
exports.main = "index.js";                                                                                   // 3
                                                                                                             // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":["base64-js","ieee754","isarray",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/node_modules/buffer/index.js                                               //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
/*!                                                                                                          // 1
 * The buffer module from node.js, for the browser.                                                          // 2
 *                                                                                                           // 3
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>                                     // 4
 * @license  MIT                                                                                             // 5
 */                                                                                                          // 6
/* eslint-disable no-proto */                                                                                // 7
                                                                                                             // 8
'use strict'                                                                                                 // 9
                                                                                                             // 10
var base64 = require('base64-js')                                                                            // 11
var ieee754 = require('ieee754')                                                                             // 12
var isArray = require('isarray')                                                                             // 13
                                                                                                             // 14
exports.Buffer = Buffer                                                                                      // 15
exports.SlowBuffer = SlowBuffer                                                                              // 16
exports.INSPECT_MAX_BYTES = 50                                                                               // 17
Buffer.poolSize = 8192 // not used by this implementation                                                    // 18
                                                                                                             // 19
var rootParent = {}                                                                                          // 20
                                                                                                             // 21
/**                                                                                                          // 22
 * If `Buffer.TYPED_ARRAY_SUPPORT`:                                                                          // 23
 *   === true    Use Uint8Array implementation (fastest)                                                     // 24
 *   === false   Use Object implementation (most compatible, even IE6)                                       // 25
 *                                                                                                           // 26
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,                        // 27
 * Opera 11.6+, iOS 4.2+.                                                                                    // 28
 *                                                                                                           // 29
 * Due to various browser bugs, sometimes the Object implementation will be used even                        // 30
 * when the browser supports typed arrays.                                                                   // 31
 *                                                                                                           // 32
 * Note:                                                                                                     // 33
 *                                                                                                           // 34
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,                       // 35
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.                                             // 36
 *                                                                                                           // 37
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.                                  // 38
 *                                                                                                           // 39
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of                    // 40
 *     incorrect length in some situations.                                                                  // 41
                                                                                                             // 42
 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they                    // 43
 * get the Object implementation, which is slower but behaves correctly.                                     // 44
 */                                                                                                          // 45
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined                                        // 46
  ? global.TYPED_ARRAY_SUPPORT                                                                               // 47
  : typedArraySupport()                                                                                      // 48
                                                                                                             // 49
function typedArraySupport () {                                                                              // 50
  try {                                                                                                      // 51
    var arr = new Uint8Array(1)                                                                              // 52
    arr.foo = function () { return 42 }                                                                      // 53
    return arr.foo() === 42 && // typed array instances can be augmented                                     // 54
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`                                 // 55
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`                                    // 56
  } catch (e) {                                                                                              // 57
    return false                                                                                             // 58
  }                                                                                                          // 59
}                                                                                                            // 60
                                                                                                             // 61
function kMaxLength () {                                                                                     // 62
  return Buffer.TYPED_ARRAY_SUPPORT                                                                          // 63
    ? 0x7fffffff                                                                                             // 64
    : 0x3fffffff                                                                                             // 65
}                                                                                                            // 66
                                                                                                             // 67
/**                                                                                                          // 68
 * The Buffer constructor returns instances of `Uint8Array` that have their                                  // 69
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of                           // 70
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods                           // 71
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it                             // 72
 * returns a single octet.                                                                                   // 73
 *                                                                                                           // 74
 * The `Uint8Array` prototype remains unmodified.                                                            // 75
 */                                                                                                          // 76
function Buffer (arg) {                                                                                      // 77
  if (!(this instanceof Buffer)) {                                                                           // 78
    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.                                 // 79
    if (arguments.length > 1) return new Buffer(arg, arguments[1])                                           // 80
    return new Buffer(arg)                                                                                   // 81
  }                                                                                                          // 82
                                                                                                             // 83
  if (!Buffer.TYPED_ARRAY_SUPPORT) {                                                                         // 84
    this.length = 0                                                                                          // 85
    this.parent = undefined                                                                                  // 86
  }                                                                                                          // 87
                                                                                                             // 88
  // Common case.                                                                                            // 89
  if (typeof arg === 'number') {                                                                             // 90
    return fromNumber(this, arg)                                                                             // 91
  }                                                                                                          // 92
                                                                                                             // 93
  // Slightly less common case.                                                                              // 94
  if (typeof arg === 'string') {                                                                             // 95
    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')                               // 96
  }                                                                                                          // 97
                                                                                                             // 98
  // Unusual.                                                                                                // 99
  return fromObject(this, arg)                                                                               // 100
}                                                                                                            // 101
                                                                                                             // 102
// TODO: Legacy, not needed anymore. Remove in next major version.                                           // 103
Buffer._augment = function (arr) {                                                                           // 104
  arr.__proto__ = Buffer.prototype                                                                           // 105
  return arr                                                                                                 // 106
}                                                                                                            // 107
                                                                                                             // 108
function fromNumber (that, length) {                                                                         // 109
  that = allocate(that, length < 0 ? 0 : checked(length) | 0)                                                // 110
  if (!Buffer.TYPED_ARRAY_SUPPORT) {                                                                         // 111
    for (var i = 0; i < length; i++) {                                                                       // 112
      that[i] = 0                                                                                            // 113
    }                                                                                                        // 114
  }                                                                                                          // 115
  return that                                                                                                // 116
}                                                                                                            // 117
                                                                                                             // 118
function fromString (that, string, encoding) {                                                               // 119
  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'                                     // 120
                                                                                                             // 121
  // Assumption: byteLength() return value is always < kMaxLength.                                           // 122
  var length = byteLength(string, encoding) | 0                                                              // 123
  that = allocate(that, length)                                                                              // 124
                                                                                                             // 125
  that.write(string, encoding)                                                                               // 126
  return that                                                                                                // 127
}                                                                                                            // 128
                                                                                                             // 129
function fromObject (that, object) {                                                                         // 130
  if (Buffer.isBuffer(object)) return fromBuffer(that, object)                                               // 131
                                                                                                             // 132
  if (isArray(object)) return fromArray(that, object)                                                        // 133
                                                                                                             // 134
  if (object == null) {                                                                                      // 135
    throw new TypeError('must start with number, buffer, array or string')                                   // 136
  }                                                                                                          // 137
                                                                                                             // 138
  if (typeof ArrayBuffer !== 'undefined') {                                                                  // 139
    if (object.buffer instanceof ArrayBuffer) {                                                              // 140
      return fromTypedArray(that, object)                                                                    // 141
    }                                                                                                        // 142
    if (object instanceof ArrayBuffer) {                                                                     // 143
      return fromArrayBuffer(that, object)                                                                   // 144
    }                                                                                                        // 145
  }                                                                                                          // 146
                                                                                                             // 147
  if (object.length) return fromArrayLike(that, object)                                                      // 148
                                                                                                             // 149
  return fromJsonObject(that, object)                                                                        // 150
}                                                                                                            // 151
                                                                                                             // 152
function fromBuffer (that, buffer) {                                                                         // 153
  var length = checked(buffer.length) | 0                                                                    // 154
  that = allocate(that, length)                                                                              // 155
  buffer.copy(that, 0, 0, length)                                                                            // 156
  return that                                                                                                // 157
}                                                                                                            // 158
                                                                                                             // 159
function fromArray (that, array) {                                                                           // 160
  var length = checked(array.length) | 0                                                                     // 161
  that = allocate(that, length)                                                                              // 162
  for (var i = 0; i < length; i += 1) {                                                                      // 163
    that[i] = array[i] & 255                                                                                 // 164
  }                                                                                                          // 165
  return that                                                                                                // 166
}                                                                                                            // 167
                                                                                                             // 168
// Duplicate of fromArray() to keep fromArray() monomorphic.                                                 // 169
function fromTypedArray (that, array) {                                                                      // 170
  var length = checked(array.length) | 0                                                                     // 171
  that = allocate(that, length)                                                                              // 172
  // Truncating the elements is probably not what people expect from typed                                   // 173
  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior                                 // 174
  // of the old Buffer constructor.                                                                          // 175
  for (var i = 0; i < length; i += 1) {                                                                      // 176
    that[i] = array[i] & 255                                                                                 // 177
  }                                                                                                          // 178
  return that                                                                                                // 179
}                                                                                                            // 180
                                                                                                             // 181
function fromArrayBuffer (that, array) {                                                                     // 182
  array.byteLength // this throws if `array` is not a valid ArrayBuffer                                      // 183
                                                                                                             // 184
  if (Buffer.TYPED_ARRAY_SUPPORT) {                                                                          // 185
    // Return an augmented `Uint8Array` instance, for best performance                                       // 186
    that = new Uint8Array(array)                                                                             // 187
    that.__proto__ = Buffer.prototype                                                                        // 188
  } else {                                                                                                   // 189
    // Fallback: Return an object instance of the Buffer class                                               // 190
    that = fromTypedArray(that, new Uint8Array(array))                                                       // 191
  }                                                                                                          // 192
  return that                                                                                                // 193
}                                                                                                            // 194
                                                                                                             // 195
function fromArrayLike (that, array) {                                                                       // 196
  var length = checked(array.length) | 0                                                                     // 197
  that = allocate(that, length)                                                                              // 198
  for (var i = 0; i < length; i += 1) {                                                                      // 199
    that[i] = array[i] & 255                                                                                 // 200
  }                                                                                                          // 201
  return that                                                                                                // 202
}                                                                                                            // 203
                                                                                                             // 204
// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.                                   // 205
// Returns a zero-length buffer for inputs that don't conform to the spec.                                   // 206
function fromJsonObject (that, object) {                                                                     // 207
  var array                                                                                                  // 208
  var length = 0                                                                                             // 209
                                                                                                             // 210
  if (object.type === 'Buffer' && isArray(object.data)) {                                                    // 211
    array = object.data                                                                                      // 212
    length = checked(array.length) | 0                                                                       // 213
  }                                                                                                          // 214
  that = allocate(that, length)                                                                              // 215
                                                                                                             // 216
  for (var i = 0; i < length; i += 1) {                                                                      // 217
    that[i] = array[i] & 255                                                                                 // 218
  }                                                                                                          // 219
  return that                                                                                                // 220
}                                                                                                            // 221
                                                                                                             // 222
if (Buffer.TYPED_ARRAY_SUPPORT) {                                                                            // 223
  Buffer.prototype.__proto__ = Uint8Array.prototype                                                          // 224
  Buffer.__proto__ = Uint8Array                                                                              // 225
  if (typeof Symbol !== 'undefined' && Symbol.species &&                                                     // 226
      Buffer[Symbol.species] === Buffer) {                                                                   // 227
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97                               // 228
    Object.defineProperty(Buffer, Symbol.species, {                                                          // 229
      value: null,                                                                                           // 230
      configurable: true                                                                                     // 231
    })                                                                                                       // 232
  }                                                                                                          // 233
} else {                                                                                                     // 234
  // pre-set for values that may exist in the future                                                         // 235
  Buffer.prototype.length = undefined                                                                        // 236
  Buffer.prototype.parent = undefined                                                                        // 237
}                                                                                                            // 238
                                                                                                             // 239
function allocate (that, length) {                                                                           // 240
  if (Buffer.TYPED_ARRAY_SUPPORT) {                                                                          // 241
    // Return an augmented `Uint8Array` instance, for best performance                                       // 242
    that = new Uint8Array(length)                                                                            // 243
    that.__proto__ = Buffer.prototype                                                                        // 244
  } else {                                                                                                   // 245
    // Fallback: Return an object instance of the Buffer class                                               // 246
    that.length = length                                                                                     // 247
  }                                                                                                          // 248
                                                                                                             // 249
  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1                                             // 250
  if (fromPool) that.parent = rootParent                                                                     // 251
                                                                                                             // 252
  return that                                                                                                // 253
}                                                                                                            // 254
                                                                                                             // 255
function checked (length) {                                                                                  // 256
  // Note: cannot use `length < kMaxLength` here because that fails when                                     // 257
  // length is NaN (which is otherwise coerced to zero.)                                                     // 258
  if (length >= kMaxLength()) {                                                                              // 259
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +                                 // 260
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')                                  // 261
  }                                                                                                          // 262
  return length | 0                                                                                          // 263
}                                                                                                            // 264
                                                                                                             // 265
function SlowBuffer (subject, encoding) {                                                                    // 266
  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)                                // 267
                                                                                                             // 268
  var buf = new Buffer(subject, encoding)                                                                    // 269
  delete buf.parent                                                                                          // 270
  return buf                                                                                                 // 271
}                                                                                                            // 272
                                                                                                             // 273
Buffer.isBuffer = function isBuffer (b) {                                                                    // 274
  return !!(b != null && b._isBuffer)                                                                        // 275
}                                                                                                            // 276
                                                                                                             // 277
Buffer.compare = function compare (a, b) {                                                                   // 278
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {                                                          // 279
    throw new TypeError('Arguments must be Buffers')                                                         // 280
  }                                                                                                          // 281
                                                                                                             // 282
  if (a === b) return 0                                                                                      // 283
                                                                                                             // 284
  var x = a.length                                                                                           // 285
  var y = b.length                                                                                           // 286
                                                                                                             // 287
  for (var i = 0, len = Math.min(x, y); i < len; ++i) {                                                      // 288
    if (a[i] !== b[i]) {                                                                                     // 289
      x = a[i]                                                                                               // 290
      y = b[i]                                                                                               // 291
      break                                                                                                  // 292
    }                                                                                                        // 293
  }                                                                                                          // 294
                                                                                                             // 295
  if (x < y) return -1                                                                                       // 296
  if (y < x) return 1                                                                                        // 297
  return 0                                                                                                   // 298
}                                                                                                            // 299
                                                                                                             // 300
Buffer.isEncoding = function isEncoding (encoding) {                                                         // 301
  switch (String(encoding).toLowerCase()) {                                                                  // 302
    case 'hex':                                                                                              // 303
    case 'utf8':                                                                                             // 304
    case 'utf-8':                                                                                            // 305
    case 'ascii':                                                                                            // 306
    case 'binary':                                                                                           // 307
    case 'base64':                                                                                           // 308
    case 'raw':                                                                                              // 309
    case 'ucs2':                                                                                             // 310
    case 'ucs-2':                                                                                            // 311
    case 'utf16le':                                                                                          // 312
    case 'utf-16le':                                                                                         // 313
      return true                                                                                            // 314
    default:                                                                                                 // 315
      return false                                                                                           // 316
  }                                                                                                          // 317
}                                                                                                            // 318
                                                                                                             // 319
Buffer.concat = function concat (list, length) {                                                             // 320
  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')                      // 321
                                                                                                             // 322
  if (list.length === 0) {                                                                                   // 323
    return new Buffer(0)                                                                                     // 324
  }                                                                                                          // 325
                                                                                                             // 326
  var i                                                                                                      // 327
  if (length === undefined) {                                                                                // 328
    length = 0                                                                                               // 329
    for (i = 0; i < list.length; i++) {                                                                      // 330
      length += list[i].length                                                                               // 331
    }                                                                                                        // 332
  }                                                                                                          // 333
                                                                                                             // 334
  var buf = new Buffer(length)                                                                               // 335
  var pos = 0                                                                                                // 336
  for (i = 0; i < list.length; i++) {                                                                        // 337
    var item = list[i]                                                                                       // 338
    item.copy(buf, pos)                                                                                      // 339
    pos += item.length                                                                                       // 340
  }                                                                                                          // 341
  return buf                                                                                                 // 342
}                                                                                                            // 343
                                                                                                             // 344
function byteLength (string, encoding) {                                                                     // 345
  if (typeof string !== 'string') string = '' + string                                                       // 346
                                                                                                             // 347
  var len = string.length                                                                                    // 348
  if (len === 0) return 0                                                                                    // 349
                                                                                                             // 350
  // Use a for loop to avoid recursion                                                                       // 351
  var loweredCase = false                                                                                    // 352
  for (;;) {                                                                                                 // 353
    switch (encoding) {                                                                                      // 354
      case 'ascii':                                                                                          // 355
      case 'binary':                                                                                         // 356
      // Deprecated                                                                                          // 357
      case 'raw':                                                                                            // 358
      case 'raws':                                                                                           // 359
        return len                                                                                           // 360
      case 'utf8':                                                                                           // 361
      case 'utf-8':                                                                                          // 362
        return utf8ToBytes(string).length                                                                    // 363
      case 'ucs2':                                                                                           // 364
      case 'ucs-2':                                                                                          // 365
      case 'utf16le':                                                                                        // 366
      case 'utf-16le':                                                                                       // 367
        return len * 2                                                                                       // 368
      case 'hex':                                                                                            // 369
        return len >>> 1                                                                                     // 370
      case 'base64':                                                                                         // 371
        return base64ToBytes(string).length                                                                  // 372
      default:                                                                                               // 373
        if (loweredCase) return utf8ToBytes(string).length // assume utf8                                    // 374
        encoding = ('' + encoding).toLowerCase()                                                             // 375
        loweredCase = true                                                                                   // 376
    }                                                                                                        // 377
  }                                                                                                          // 378
}                                                                                                            // 379
Buffer.byteLength = byteLength                                                                               // 380
                                                                                                             // 381
function slowToString (encoding, start, end) {                                                               // 382
  var loweredCase = false                                                                                    // 383
                                                                                                             // 384
  start = start | 0                                                                                          // 385
  end = end === undefined || end === Infinity ? this.length : end | 0                                        // 386
                                                                                                             // 387
  if (!encoding) encoding = 'utf8'                                                                           // 388
  if (start < 0) start = 0                                                                                   // 389
  if (end > this.length) end = this.length                                                                   // 390
  if (end <= start) return ''                                                                                // 391
                                                                                                             // 392
  while (true) {                                                                                             // 393
    switch (encoding) {                                                                                      // 394
      case 'hex':                                                                                            // 395
        return hexSlice(this, start, end)                                                                    // 396
                                                                                                             // 397
      case 'utf8':                                                                                           // 398
      case 'utf-8':                                                                                          // 399
        return utf8Slice(this, start, end)                                                                   // 400
                                                                                                             // 401
      case 'ascii':                                                                                          // 402
        return asciiSlice(this, start, end)                                                                  // 403
                                                                                                             // 404
      case 'binary':                                                                                         // 405
        return binarySlice(this, start, end)                                                                 // 406
                                                                                                             // 407
      case 'base64':                                                                                         // 408
        return base64Slice(this, start, end)                                                                 // 409
                                                                                                             // 410
      case 'ucs2':                                                                                           // 411
      case 'ucs-2':                                                                                          // 412
      case 'utf16le':                                                                                        // 413
      case 'utf-16le':                                                                                       // 414
        return utf16leSlice(this, start, end)                                                                // 415
                                                                                                             // 416
      default:                                                                                               // 417
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)                                // 418
        encoding = (encoding + '').toLowerCase()                                                             // 419
        loweredCase = true                                                                                   // 420
    }                                                                                                        // 421
  }                                                                                                          // 422
}                                                                                                            // 423
                                                                                                             // 424
// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect                       // 425
// Buffer instances.                                                                                         // 426
Buffer.prototype._isBuffer = true                                                                            // 427
                                                                                                             // 428
Buffer.prototype.toString = function toString () {                                                           // 429
  var length = this.length | 0                                                                               // 430
  if (length === 0) return ''                                                                                // 431
  if (arguments.length === 0) return utf8Slice(this, 0, length)                                              // 432
  return slowToString.apply(this, arguments)                                                                 // 433
}                                                                                                            // 434
                                                                                                             // 435
Buffer.prototype.equals = function equals (b) {                                                              // 436
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')                                  // 437
  if (this === b) return true                                                                                // 438
  return Buffer.compare(this, b) === 0                                                                       // 439
}                                                                                                            // 440
                                                                                                             // 441
Buffer.prototype.inspect = function inspect () {                                                             // 442
  var str = ''                                                                                               // 443
  var max = exports.INSPECT_MAX_BYTES                                                                        // 444
  if (this.length > 0) {                                                                                     // 445
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')                                              // 446
    if (this.length > max) str += ' ... '                                                                    // 447
  }                                                                                                          // 448
  return '<Buffer ' + str + '>'                                                                              // 449
}                                                                                                            // 450
                                                                                                             // 451
Buffer.prototype.compare = function compare (b) {                                                            // 452
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')                                  // 453
  return Buffer.compare(this, b)                                                                             // 454
}                                                                                                            // 455
                                                                                                             // 456
Buffer.prototype.indexOf = function indexOf (val, byteOffset) {                                              // 457
  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff                                                       // 458
  else if (byteOffset < -0x80000000) byteOffset = -0x80000000                                                // 459
  byteOffset >>= 0                                                                                           // 460
                                                                                                             // 461
  if (this.length === 0) return -1                                                                           // 462
  if (byteOffset >= this.length) return -1                                                                   // 463
                                                                                                             // 464
  // Negative offsets start from the end of the buffer                                                       // 465
  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)                                     // 466
                                                                                                             // 467
  if (typeof val === 'string') {                                                                             // 468
    if (val.length === 0) return -1 // special case: looking for empty string always fails                   // 469
    return String.prototype.indexOf.call(this, val, byteOffset)                                              // 470
  }                                                                                                          // 471
  if (Buffer.isBuffer(val)) {                                                                                // 472
    return arrayIndexOf(this, val, byteOffset)                                                               // 473
  }                                                                                                          // 474
  if (typeof val === 'number') {                                                                             // 475
    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {                         // 476
      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)                                        // 477
    }                                                                                                        // 478
    return arrayIndexOf(this, [ val ], byteOffset)                                                           // 479
  }                                                                                                          // 480
                                                                                                             // 481
  function arrayIndexOf (arr, val, byteOffset) {                                                             // 482
    var foundIndex = -1                                                                                      // 483
    for (var i = 0; byteOffset + i < arr.length; i++) {                                                      // 484
      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {                             // 485
        if (foundIndex === -1) foundIndex = i                                                                // 486
        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex                                // 487
      } else {                                                                                               // 488
        foundIndex = -1                                                                                      // 489
      }                                                                                                      // 490
    }                                                                                                        // 491
    return -1                                                                                                // 492
  }                                                                                                          // 493
                                                                                                             // 494
  throw new TypeError('val must be string, number or Buffer')                                                // 495
}                                                                                                            // 496
                                                                                                             // 497
function hexWrite (buf, string, offset, length) {                                                            // 498
  offset = Number(offset) || 0                                                                               // 499
  var remaining = buf.length - offset                                                                        // 500
  if (!length) {                                                                                             // 501
    length = remaining                                                                                       // 502
  } else {                                                                                                   // 503
    length = Number(length)                                                                                  // 504
    if (length > remaining) {                                                                                // 505
      length = remaining                                                                                     // 506
    }                                                                                                        // 507
  }                                                                                                          // 508
                                                                                                             // 509
  // must be an even number of digits                                                                        // 510
  var strLen = string.length                                                                                 // 511
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')                                                // 512
                                                                                                             // 513
  if (length > strLen / 2) {                                                                                 // 514
    length = strLen / 2                                                                                      // 515
  }                                                                                                          // 516
  for (var i = 0; i < length; i++) {                                                                         // 517
    var parsed = parseInt(string.substr(i * 2, 2), 16)                                                       // 518
    if (isNaN(parsed)) throw new Error('Invalid hex string')                                                 // 519
    buf[offset + i] = parsed                                                                                 // 520
  }                                                                                                          // 521
  return i                                                                                                   // 522
}                                                                                                            // 523
                                                                                                             // 524
function utf8Write (buf, string, offset, length) {                                                           // 525
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)                           // 526
}                                                                                                            // 527
                                                                                                             // 528
function asciiWrite (buf, string, offset, length) {                                                          // 529
  return blitBuffer(asciiToBytes(string), buf, offset, length)                                               // 530
}                                                                                                            // 531
                                                                                                             // 532
function binaryWrite (buf, string, offset, length) {                                                         // 533
  return asciiWrite(buf, string, offset, length)                                                             // 534
}                                                                                                            // 535
                                                                                                             // 536
function base64Write (buf, string, offset, length) {                                                         // 537
  return blitBuffer(base64ToBytes(string), buf, offset, length)                                              // 538
}                                                                                                            // 539
                                                                                                             // 540
function ucs2Write (buf, string, offset, length) {                                                           // 541
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)                        // 542
}                                                                                                            // 543
                                                                                                             // 544
Buffer.prototype.write = function write (string, offset, length, encoding) {                                 // 545
  // Buffer#write(string)                                                                                    // 546
  if (offset === undefined) {                                                                                // 547
    encoding = 'utf8'                                                                                        // 548
    length = this.length                                                                                     // 549
    offset = 0                                                                                               // 550
  // Buffer#write(string, encoding)                                                                          // 551
  } else if (length === undefined && typeof offset === 'string') {                                           // 552
    encoding = offset                                                                                        // 553
    length = this.length                                                                                     // 554
    offset = 0                                                                                               // 555
  // Buffer#write(string, offset[, length][, encoding])                                                      // 556
  } else if (isFinite(offset)) {                                                                             // 557
    offset = offset | 0                                                                                      // 558
    if (isFinite(length)) {                                                                                  // 559
      length = length | 0                                                                                    // 560
      if (encoding === undefined) encoding = 'utf8'                                                          // 561
    } else {                                                                                                 // 562
      encoding = length                                                                                      // 563
      length = undefined                                                                                     // 564
    }                                                                                                        // 565
  // legacy write(string, encoding, offset, length) - remove in v0.13                                        // 566
  } else {                                                                                                   // 567
    var swap = encoding                                                                                      // 568
    encoding = offset                                                                                        // 569
    offset = length | 0                                                                                      // 570
    length = swap                                                                                            // 571
  }                                                                                                          // 572
                                                                                                             // 573
  var remaining = this.length - offset                                                                       // 574
  if (length === undefined || length > remaining) length = remaining                                         // 575
                                                                                                             // 576
  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {                           // 577
    throw new RangeError('attempt to write outside buffer bounds')                                           // 578
  }                                                                                                          // 579
                                                                                                             // 580
  if (!encoding) encoding = 'utf8'                                                                           // 581
                                                                                                             // 582
  var loweredCase = false                                                                                    // 583
  for (;;) {                                                                                                 // 584
    switch (encoding) {                                                                                      // 585
      case 'hex':                                                                                            // 586
        return hexWrite(this, string, offset, length)                                                        // 587
                                                                                                             // 588
      case 'utf8':                                                                                           // 589
      case 'utf-8':                                                                                          // 590
        return utf8Write(this, string, offset, length)                                                       // 591
                                                                                                             // 592
      case 'ascii':                                                                                          // 593
        return asciiWrite(this, string, offset, length)                                                      // 594
                                                                                                             // 595
      case 'binary':                                                                                         // 596
        return binaryWrite(this, string, offset, length)                                                     // 597
                                                                                                             // 598
      case 'base64':                                                                                         // 599
        // Warning: maxLength not taken into account in base64Write                                          // 600
        return base64Write(this, string, offset, length)                                                     // 601
                                                                                                             // 602
      case 'ucs2':                                                                                           // 603
      case 'ucs-2':                                                                                          // 604
      case 'utf16le':                                                                                        // 605
      case 'utf-16le':                                                                                       // 606
        return ucs2Write(this, string, offset, length)                                                       // 607
                                                                                                             // 608
      default:                                                                                               // 609
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)                                // 610
        encoding = ('' + encoding).toLowerCase()                                                             // 611
        loweredCase = true                                                                                   // 612
    }                                                                                                        // 613
  }                                                                                                          // 614
}                                                                                                            // 615
                                                                                                             // 616
Buffer.prototype.toJSON = function toJSON () {                                                               // 617
  return {                                                                                                   // 618
    type: 'Buffer',                                                                                          // 619
    data: Array.prototype.slice.call(this._arr || this, 0)                                                   // 620
  }                                                                                                          // 621
}                                                                                                            // 622
                                                                                                             // 623
function base64Slice (buf, start, end) {                                                                     // 624
  if (start === 0 && end === buf.length) {                                                                   // 625
    return base64.fromByteArray(buf)                                                                         // 626
  } else {                                                                                                   // 627
    return base64.fromByteArray(buf.slice(start, end))                                                       // 628
  }                                                                                                          // 629
}                                                                                                            // 630
                                                                                                             // 631
function utf8Slice (buf, start, end) {                                                                       // 632
  end = Math.min(buf.length, end)                                                                            // 633
  var res = []                                                                                               // 634
                                                                                                             // 635
  var i = start                                                                                              // 636
  while (i < end) {                                                                                          // 637
    var firstByte = buf[i]                                                                                   // 638
    var codePoint = null                                                                                     // 639
    var bytesPerSequence = (firstByte > 0xEF) ? 4                                                            // 640
      : (firstByte > 0xDF) ? 3                                                                               // 641
      : (firstByte > 0xBF) ? 2                                                                               // 642
      : 1                                                                                                    // 643
                                                                                                             // 644
    if (i + bytesPerSequence <= end) {                                                                       // 645
      var secondByte, thirdByte, fourthByte, tempCodePoint                                                   // 646
                                                                                                             // 647
      switch (bytesPerSequence) {                                                                            // 648
        case 1:                                                                                              // 649
          if (firstByte < 0x80) {                                                                            // 650
            codePoint = firstByte                                                                            // 651
          }                                                                                                  // 652
          break                                                                                              // 653
        case 2:                                                                                              // 654
          secondByte = buf[i + 1]                                                                            // 655
          if ((secondByte & 0xC0) === 0x80) {                                                                // 656
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)                                  // 657
            if (tempCodePoint > 0x7F) {                                                                      // 658
              codePoint = tempCodePoint                                                                      // 659
            }                                                                                                // 660
          }                                                                                                  // 661
          break                                                                                              // 662
        case 3:                                                                                              // 663
          secondByte = buf[i + 1]                                                                            // 664
          thirdByte = buf[i + 2]                                                                             // 665
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {                                 // 666
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)       // 667
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {               // 668
              codePoint = tempCodePoint                                                                      // 669
            }                                                                                                // 670
          }                                                                                                  // 671
          break                                                                                              // 672
        case 4:                                                                                              // 673
          secondByte = buf[i + 1]                                                                            // 674
          thirdByte = buf[i + 2]                                                                             // 675
          fourthByte = buf[i + 3]                                                                            // 676
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {                                        // 679
              codePoint = tempCodePoint                                                                      // 680
            }                                                                                                // 681
          }                                                                                                  // 682
      }                                                                                                      // 683
    }                                                                                                        // 684
                                                                                                             // 685
    if (codePoint === null) {                                                                                // 686
      // we did not generate a valid codePoint so insert a                                                   // 687
      // replacement char (U+FFFD) and advance only 1 byte                                                   // 688
      codePoint = 0xFFFD                                                                                     // 689
      bytesPerSequence = 1                                                                                   // 690
    } else if (codePoint > 0xFFFF) {                                                                         // 691
      // encode to utf16 (surrogate pair dance)                                                              // 692
      codePoint -= 0x10000                                                                                   // 693
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)                                                            // 694
      codePoint = 0xDC00 | codePoint & 0x3FF                                                                 // 695
    }                                                                                                        // 696
                                                                                                             // 697
    res.push(codePoint)                                                                                      // 698
    i += bytesPerSequence                                                                                    // 699
  }                                                                                                          // 700
                                                                                                             // 701
  return decodeCodePointsArray(res)                                                                          // 702
}                                                                                                            // 703
                                                                                                             // 704
// Based on http://stackoverflow.com/a/22747272/680742, the browser with                                     // 705
// the lowest limit is Chrome, with 0x10000 args.                                                            // 706
// We go 1 magnitude less, for safety                                                                        // 707
var MAX_ARGUMENTS_LENGTH = 0x1000                                                                            // 708
                                                                                                             // 709
function decodeCodePointsArray (codePoints) {                                                                // 710
  var len = codePoints.length                                                                                // 711
  if (len <= MAX_ARGUMENTS_LENGTH) {                                                                         // 712
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()                              // 713
  }                                                                                                          // 714
                                                                                                             // 715
  // Decode in chunks to avoid "call stack size exceeded".                                                   // 716
  var res = ''                                                                                               // 717
  var i = 0                                                                                                  // 718
  while (i < len) {                                                                                          // 719
    res += String.fromCharCode.apply(                                                                        // 720
      String,                                                                                                // 721
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)                                                         // 722
    )                                                                                                        // 723
  }                                                                                                          // 724
  return res                                                                                                 // 725
}                                                                                                            // 726
                                                                                                             // 727
function asciiSlice (buf, start, end) {                                                                      // 728
  var ret = ''                                                                                               // 729
  end = Math.min(buf.length, end)                                                                            // 730
                                                                                                             // 731
  for (var i = start; i < end; i++) {                                                                        // 732
    ret += String.fromCharCode(buf[i] & 0x7F)                                                                // 733
  }                                                                                                          // 734
  return ret                                                                                                 // 735
}                                                                                                            // 736
                                                                                                             // 737
function binarySlice (buf, start, end) {                                                                     // 738
  var ret = ''                                                                                               // 739
  end = Math.min(buf.length, end)                                                                            // 740
                                                                                                             // 741
  for (var i = start; i < end; i++) {                                                                        // 742
    ret += String.fromCharCode(buf[i])                                                                       // 743
  }                                                                                                          // 744
  return ret                                                                                                 // 745
}                                                                                                            // 746
                                                                                                             // 747
function hexSlice (buf, start, end) {                                                                        // 748
  var len = buf.length                                                                                       // 749
                                                                                                             // 750
  if (!start || start < 0) start = 0                                                                         // 751
  if (!end || end < 0 || end > len) end = len                                                                // 752
                                                                                                             // 753
  var out = ''                                                                                               // 754
  for (var i = start; i < end; i++) {                                                                        // 755
    out += toHex(buf[i])                                                                                     // 756
  }                                                                                                          // 757
  return out                                                                                                 // 758
}                                                                                                            // 759
                                                                                                             // 760
function utf16leSlice (buf, start, end) {                                                                    // 761
  var bytes = buf.slice(start, end)                                                                          // 762
  var res = ''                                                                                               // 763
  for (var i = 0; i < bytes.length; i += 2) {                                                                // 764
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)                                                // 765
  }                                                                                                          // 766
  return res                                                                                                 // 767
}                                                                                                            // 768
                                                                                                             // 769
Buffer.prototype.slice = function slice (start, end) {                                                       // 770
  var len = this.length                                                                                      // 771
  start = ~~start                                                                                            // 772
  end = end === undefined ? len : ~~end                                                                      // 773
                                                                                                             // 774
  if (start < 0) {                                                                                           // 775
    start += len                                                                                             // 776
    if (start < 0) start = 0                                                                                 // 777
  } else if (start > len) {                                                                                  // 778
    start = len                                                                                              // 779
  }                                                                                                          // 780
                                                                                                             // 781
  if (end < 0) {                                                                                             // 782
    end += len                                                                                               // 783
    if (end < 0) end = 0                                                                                     // 784
  } else if (end > len) {                                                                                    // 785
    end = len                                                                                                // 786
  }                                                                                                          // 787
                                                                                                             // 788
  if (end < start) end = start                                                                               // 789
                                                                                                             // 790
  var newBuf                                                                                                 // 791
  if (Buffer.TYPED_ARRAY_SUPPORT) {                                                                          // 792
    newBuf = this.subarray(start, end)                                                                       // 793
    newBuf.__proto__ = Buffer.prototype                                                                      // 794
  } else {                                                                                                   // 795
    var sliceLen = end - start                                                                               // 796
    newBuf = new Buffer(sliceLen, undefined)                                                                 // 797
    for (var i = 0; i < sliceLen; i++) {                                                                     // 798
      newBuf[i] = this[i + start]                                                                            // 799
    }                                                                                                        // 800
  }                                                                                                          // 801
                                                                                                             // 802
  if (newBuf.length) newBuf.parent = this.parent || this                                                     // 803
                                                                                                             // 804
  return newBuf                                                                                              // 805
}                                                                                                            // 806
                                                                                                             // 807
/*                                                                                                           // 808
 * Need to make sure that buffer isn't trying to write out of bounds.                                        // 809
 */                                                                                                          // 810
function checkOffset (offset, ext, length) {                                                                 // 811
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')                           // 812
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')                   // 813
}                                                                                                            // 814
                                                                                                             // 815
Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {                           // 816
  offset = offset | 0                                                                                        // 817
  byteLength = byteLength | 0                                                                                // 818
  if (!noAssert) checkOffset(offset, byteLength, this.length)                                                // 819
                                                                                                             // 820
  var val = this[offset]                                                                                     // 821
  var mul = 1                                                                                                // 822
  var i = 0                                                                                                  // 823
  while (++i < byteLength && (mul *= 0x100)) {                                                               // 824
    val += this[offset + i] * mul                                                                            // 825
  }                                                                                                          // 826
                                                                                                             // 827
  return val                                                                                                 // 828
}                                                                                                            // 829
                                                                                                             // 830
Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {                           // 831
  offset = offset | 0                                                                                        // 832
  byteLength = byteLength | 0                                                                                // 833
  if (!noAssert) {                                                                                           // 834
    checkOffset(offset, byteLength, this.length)                                                             // 835
  }                                                                                                          // 836
                                                                                                             // 837
  var val = this[offset + --byteLength]                                                                      // 838
  var mul = 1                                                                                                // 839
  while (byteLength > 0 && (mul *= 0x100)) {                                                                 // 840
    val += this[offset + --byteLength] * mul                                                                 // 841
  }                                                                                                          // 842
                                                                                                             // 843
  return val                                                                                                 // 844
}                                                                                                            // 845
                                                                                                             // 846
Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {                                         // 847
  if (!noAssert) checkOffset(offset, 1, this.length)                                                         // 848
  return this[offset]                                                                                        // 849
}                                                                                                            // 850
                                                                                                             // 851
Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {                                   // 852
  if (!noAssert) checkOffset(offset, 2, this.length)                                                         // 853
  return this[offset] | (this[offset + 1] << 8)                                                              // 854
}                                                                                                            // 855
                                                                                                             // 856
Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {                                   // 857
  if (!noAssert) checkOffset(offset, 2, this.length)                                                         // 858
  return (this[offset] << 8) | this[offset + 1]                                                              // 859
}                                                                                                            // 860
                                                                                                             // 861
Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {                                   // 862
  if (!noAssert) checkOffset(offset, 4, this.length)                                                         // 863
                                                                                                             // 864
  return ((this[offset]) |                                                                                   // 865
      (this[offset + 1] << 8) |                                                                              // 866
      (this[offset + 2] << 16)) +                                                                            // 867
      (this[offset + 3] * 0x1000000)                                                                         // 868
}                                                                                                            // 869
                                                                                                             // 870
Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {                                   // 871
  if (!noAssert) checkOffset(offset, 4, this.length)                                                         // 872
                                                                                                             // 873
  return (this[offset] * 0x1000000) +                                                                        // 874
    ((this[offset + 1] << 16) |                                                                              // 875
    (this[offset + 2] << 8) |                                                                                // 876
    this[offset + 3])                                                                                        // 877
}                                                                                                            // 878
                                                                                                             // 879
Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {                             // 880
  offset = offset | 0                                                                                        // 881
  byteLength = byteLength | 0                                                                                // 882
  if (!noAssert) checkOffset(offset, byteLength, this.length)                                                // 883
                                                                                                             // 884
  var val = this[offset]                                                                                     // 885
  var mul = 1                                                                                                // 886
  var i = 0                                                                                                  // 887
  while (++i < byteLength && (mul *= 0x100)) {                                                               // 888
    val += this[offset + i] * mul                                                                            // 889
  }                                                                                                          // 890
  mul *= 0x80                                                                                                // 891
                                                                                                             // 892
  if (val >= mul) val -= Math.pow(2, 8 * byteLength)                                                         // 893
                                                                                                             // 894
  return val                                                                                                 // 895
}                                                                                                            // 896
                                                                                                             // 897
Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {                             // 898
  offset = offset | 0                                                                                        // 899
  byteLength = byteLength | 0                                                                                // 900
  if (!noAssert) checkOffset(offset, byteLength, this.length)                                                // 901
                                                                                                             // 902
  var i = byteLength                                                                                         // 903
  var mul = 1                                                                                                // 904
  var val = this[offset + --i]                                                                               // 905
  while (i > 0 && (mul *= 0x100)) {                                                                          // 906
    val += this[offset + --i] * mul                                                                          // 907
  }                                                                                                          // 908
  mul *= 0x80                                                                                                // 909
                                                                                                             // 910
  if (val >= mul) val -= Math.pow(2, 8 * byteLength)                                                         // 911
                                                                                                             // 912
  return val                                                                                                 // 913
}                                                                                                            // 914
                                                                                                             // 915
Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {                                           // 916
  if (!noAssert) checkOffset(offset, 1, this.length)                                                         // 917
  if (!(this[offset] & 0x80)) return (this[offset])                                                          // 918
  return ((0xff - this[offset] + 1) * -1)                                                                    // 919
}                                                                                                            // 920
                                                                                                             // 921
Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {                                     // 922
  if (!noAssert) checkOffset(offset, 2, this.length)                                                         // 923
  var val = this[offset] | (this[offset + 1] << 8)                                                           // 924
  return (val & 0x8000) ? val | 0xFFFF0000 : val                                                             // 925
}                                                                                                            // 926
                                                                                                             // 927
Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {                                     // 928
  if (!noAssert) checkOffset(offset, 2, this.length)                                                         // 929
  var val = this[offset + 1] | (this[offset] << 8)                                                           // 930
  return (val & 0x8000) ? val | 0xFFFF0000 : val                                                             // 931
}                                                                                                            // 932
                                                                                                             // 933
Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {                                     // 934
  if (!noAssert) checkOffset(offset, 4, this.length)                                                         // 935
                                                                                                             // 936
  return (this[offset]) |                                                                                    // 937
    (this[offset + 1] << 8) |                                                                                // 938
    (this[offset + 2] << 16) |                                                                               // 939
    (this[offset + 3] << 24)                                                                                 // 940
}                                                                                                            // 941
                                                                                                             // 942
Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {                                     // 943
  if (!noAssert) checkOffset(offset, 4, this.length)                                                         // 944
                                                                                                             // 945
  return (this[offset] << 24) |                                                                              // 946
    (this[offset + 1] << 16) |                                                                               // 947
    (this[offset + 2] << 8) |                                                                                // 948
    (this[offset + 3])                                                                                       // 949
}                                                                                                            // 950
                                                                                                             // 951
Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {                                     // 952
  if (!noAssert) checkOffset(offset, 4, this.length)                                                         // 953
  return ieee754.read(this, offset, true, 23, 4)                                                             // 954
}                                                                                                            // 955
                                                                                                             // 956
Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {                                     // 957
  if (!noAssert) checkOffset(offset, 4, this.length)                                                         // 958
  return ieee754.read(this, offset, false, 23, 4)                                                            // 959
}                                                                                                            // 960
                                                                                                             // 961
Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {                                   // 962
  if (!noAssert) checkOffset(offset, 8, this.length)                                                         // 963
  return ieee754.read(this, offset, true, 52, 8)                                                             // 964
}                                                                                                            // 965
                                                                                                             // 966
Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {                                   // 967
  if (!noAssert) checkOffset(offset, 8, this.length)                                                         // 968
  return ieee754.read(this, offset, false, 52, 8)                                                            // 969
}                                                                                                            // 970
                                                                                                             // 971
function checkInt (buf, value, offset, ext, max, min) {                                                      // 972
  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')                         // 973
  if (value > max || value < min) throw new RangeError('value is out of bounds')                             // 974
  if (offset + ext > buf.length) throw new RangeError('index out of range')                                  // 975
}                                                                                                            // 976
                                                                                                             // 977
Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {                  // 978
  value = +value                                                                                             // 979
  offset = offset | 0                                                                                        // 980
  byteLength = byteLength | 0                                                                                // 981
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)                   // 982
                                                                                                             // 983
  var mul = 1                                                                                                // 984
  var i = 0                                                                                                  // 985
  this[offset] = value & 0xFF                                                                                // 986
  while (++i < byteLength && (mul *= 0x100)) {                                                               // 987
    this[offset + i] = (value / mul) & 0xFF                                                                  // 988
  }                                                                                                          // 989
                                                                                                             // 990
  return offset + byteLength                                                                                 // 991
}                                                                                                            // 992
                                                                                                             // 993
Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {                  // 994
  value = +value                                                                                             // 995
  offset = offset | 0                                                                                        // 996
  byteLength = byteLength | 0                                                                                // 997
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)                   // 998
                                                                                                             // 999
  var i = byteLength - 1                                                                                     // 1000
  var mul = 1                                                                                                // 1001
  this[offset + i] = value & 0xFF                                                                            // 1002
  while (--i >= 0 && (mul *= 0x100)) {                                                                       // 1003
    this[offset + i] = (value / mul) & 0xFF                                                                  // 1004
  }                                                                                                          // 1005
                                                                                                             // 1006
  return offset + byteLength                                                                                 // 1007
}                                                                                                            // 1008
                                                                                                             // 1009
Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {                                // 1010
  value = +value                                                                                             // 1011
  offset = offset | 0                                                                                        // 1012
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)                                                   // 1013
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)                                                 // 1014
  this[offset] = (value & 0xff)                                                                              // 1015
  return offset + 1                                                                                          // 1016
}                                                                                                            // 1017
                                                                                                             // 1018
function objectWriteUInt16 (buf, value, offset, littleEndian) {                                              // 1019
  if (value < 0) value = 0xffff + value + 1                                                                  // 1020
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {                                        // 1021
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>                               // 1022
      (littleEndian ? i : 1 - i) * 8                                                                         // 1023
  }                                                                                                          // 1024
}                                                                                                            // 1025
                                                                                                             // 1026
Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {                          // 1027
  value = +value                                                                                             // 1028
  offset = offset | 0                                                                                        // 1029
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)                                                 // 1030
  if (Buffer.TYPED_ARRAY_SUPPORT) {                                                                          // 1031
    this[offset] = (value & 0xff)                                                                            // 1032
    this[offset + 1] = (value >>> 8)                                                                         // 1033
  } else {                                                                                                   // 1034
    objectWriteUInt16(this, value, offset, true)                                                             // 1035
  }                                                                                                          // 1036
  return offset + 2                                                                                          // 1037
}                                                                                                            // 1038
                                                                                                             // 1039
Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {                          // 1040
  value = +value                                                                                             // 1041
  offset = offset | 0                                                                                        // 1042
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)                                                 // 1043
  if (Buffer.TYPED_ARRAY_SUPPORT) {                                                                          // 1044
    this[offset] = (value >>> 8)                                                                             // 1045
    this[offset + 1] = (value & 0xff)                                                                        // 1046
  } else {                                                                                                   // 1047
    objectWriteUInt16(this, value, offset, false)                                                            // 1048
  }                                                                                                          // 1049
  return offset + 2                                                                                          // 1050
}                                                                                                            // 1051
                                                                                                             // 1052
function objectWriteUInt32 (buf, value, offset, littleEndian) {                                              // 1053
  if (value < 0) value = 0xffffffff + value + 1                                                              // 1054
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {                                        // 1055
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff                                      // 1056
  }                                                                                                          // 1057
}                                                                                                            // 1058
                                                                                                             // 1059
Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {                          // 1060
  value = +value                                                                                             // 1061
  offset = offset | 0                                                                                        // 1062
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)                                             // 1063
  if (Buffer.TYPED_ARRAY_SUPPORT) {                                                                          // 1064
    this[offset + 3] = (value >>> 24)                                                                        // 1065
    this[offset + 2] = (value >>> 16)                                                                        // 1066
    this[offset + 1] = (value >>> 8)                                                                         // 1067
    this[offset] = (value & 0xff)                                                                            // 1068
  } else {                                                                                                   // 1069
    objectWriteUInt32(this, value, offset, true)                                                             // 1070
  }                                                                                                          // 1071
  return offset + 4                                                                                          // 1072
}                                                                                                            // 1073
                                                                                                             // 1074
Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {                          // 1075
  value = +value                                                                                             // 1076
  offset = offset | 0                                                                                        // 1077
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)                                             // 1078
  if (Buffer.TYPED_ARRAY_SUPPORT) {                                                                          // 1079
    this[offset] = (value >>> 24)                                                                            // 1080
    this[offset + 1] = (value >>> 16)                                                                        // 1081
    this[offset + 2] = (value >>> 8)                                                                         // 1082
    this[offset + 3] = (value & 0xff)                                                                        // 1083
  } else {                                                                                                   // 1084
    objectWriteUInt32(this, value, offset, false)                                                            // 1085
  }                                                                                                          // 1086
  return offset + 4                                                                                          // 1087
}                                                                                                            // 1088
                                                                                                             // 1089
Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {                    // 1090
  value = +value                                                                                             // 1091
  offset = offset | 0                                                                                        // 1092
  if (!noAssert) {                                                                                           // 1093
    var limit = Math.pow(2, 8 * byteLength - 1)                                                              // 1094
                                                                                                             // 1095
    checkInt(this, value, offset, byteLength, limit - 1, -limit)                                             // 1096
  }                                                                                                          // 1097
                                                                                                             // 1098
  var i = 0                                                                                                  // 1099
  var mul = 1                                                                                                // 1100
  var sub = value < 0 ? 1 : 0                                                                                // 1101
  this[offset] = value & 0xFF                                                                                // 1102
  while (++i < byteLength && (mul *= 0x100)) {                                                               // 1103
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF                                                     // 1104
  }                                                                                                          // 1105
                                                                                                             // 1106
  return offset + byteLength                                                                                 // 1107
}                                                                                                            // 1108
                                                                                                             // 1109
Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {                    // 1110
  value = +value                                                                                             // 1111
  offset = offset | 0                                                                                        // 1112
  if (!noAssert) {                                                                                           // 1113
    var limit = Math.pow(2, 8 * byteLength - 1)                                                              // 1114
                                                                                                             // 1115
    checkInt(this, value, offset, byteLength, limit - 1, -limit)                                             // 1116
  }                                                                                                          // 1117
                                                                                                             // 1118
  var i = byteLength - 1                                                                                     // 1119
  var mul = 1                                                                                                // 1120
  var sub = value < 0 ? 1 : 0                                                                                // 1121
  this[offset + i] = value & 0xFF                                                                            // 1122
  while (--i >= 0 && (mul *= 0x100)) {                                                                       // 1123
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF                                                     // 1124
  }                                                                                                          // 1125
                                                                                                             // 1126
  return offset + byteLength                                                                                 // 1127
}                                                                                                            // 1128
                                                                                                             // 1129
Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {                                  // 1130
  value = +value                                                                                             // 1131
  offset = offset | 0                                                                                        // 1132
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)                                               // 1133
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)                                                 // 1134
  if (value < 0) value = 0xff + value + 1                                                                    // 1135
  this[offset] = (value & 0xff)                                                                              // 1136
  return offset + 1                                                                                          // 1137
}                                                                                                            // 1138
                                                                                                             // 1139
Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {                            // 1140
  value = +value                                                                                             // 1141
  offset = offset | 0                                                                                        // 1142
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)                                           // 1143
  if (Buffer.TYPED_ARRAY_SUPPORT) {                                                                          // 1144
    this[offset] = (value & 0xff)                                                                            // 1145
    this[offset + 1] = (value >>> 8)                                                                         // 1146
  } else {                                                                                                   // 1147
    objectWriteUInt16(this, value, offset, true)                                                             // 1148
  }                                                                                                          // 1149
  return offset + 2                                                                                          // 1150
}                                                                                                            // 1151
                                                                                                             // 1152
Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {                            // 1153
  value = +value                                                                                             // 1154
  offset = offset | 0                                                                                        // 1155
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)                                           // 1156
  if (Buffer.TYPED_ARRAY_SUPPORT) {                                                                          // 1157
    this[offset] = (value >>> 8)                                                                             // 1158
    this[offset + 1] = (value & 0xff)                                                                        // 1159
  } else {                                                                                                   // 1160
    objectWriteUInt16(this, value, offset, false)                                                            // 1161
  }                                                                                                          // 1162
  return offset + 2                                                                                          // 1163
}                                                                                                            // 1164
                                                                                                             // 1165
Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {                            // 1166
  value = +value                                                                                             // 1167
  offset = offset | 0                                                                                        // 1168
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)                                   // 1169
  if (Buffer.TYPED_ARRAY_SUPPORT) {                                                                          // 1170
    this[offset] = (value & 0xff)                                                                            // 1171
    this[offset + 1] = (value >>> 8)                                                                         // 1172
    this[offset + 2] = (value >>> 16)                                                                        // 1173
    this[offset + 3] = (value >>> 24)                                                                        // 1174
  } else {                                                                                                   // 1175
    objectWriteUInt32(this, value, offset, true)                                                             // 1176
  }                                                                                                          // 1177
  return offset + 4                                                                                          // 1178
}                                                                                                            // 1179
                                                                                                             // 1180
Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {                            // 1181
  value = +value                                                                                             // 1182
  offset = offset | 0                                                                                        // 1183
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)                                   // 1184
  if (value < 0) value = 0xffffffff + value + 1                                                              // 1185
  if (Buffer.TYPED_ARRAY_SUPPORT) {                                                                          // 1186
    this[offset] = (value >>> 24)                                                                            // 1187
    this[offset + 1] = (value >>> 16)                                                                        // 1188
    this[offset + 2] = (value >>> 8)                                                                         // 1189
    this[offset + 3] = (value & 0xff)                                                                        // 1190
  } else {                                                                                                   // 1191
    objectWriteUInt32(this, value, offset, false)                                                            // 1192
  }                                                                                                          // 1193
  return offset + 4                                                                                          // 1194
}                                                                                                            // 1195
                                                                                                             // 1196
function checkIEEE754 (buf, value, offset, ext, max, min) {                                                  // 1197
  if (offset + ext > buf.length) throw new RangeError('index out of range')                                  // 1198
  if (offset < 0) throw new RangeError('index out of range')                                                 // 1199
}                                                                                                            // 1200
                                                                                                             // 1201
function writeFloat (buf, value, offset, littleEndian, noAssert) {                                           // 1202
  if (!noAssert) {                                                                                           // 1203
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)                     // 1204
  }                                                                                                          // 1205
  ieee754.write(buf, value, offset, littleEndian, 23, 4)                                                     // 1206
  return offset + 4                                                                                          // 1207
}                                                                                                            // 1208
                                                                                                             // 1209
Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {                            // 1210
  return writeFloat(this, value, offset, true, noAssert)                                                     // 1211
}                                                                                                            // 1212
                                                                                                             // 1213
Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {                            // 1214
  return writeFloat(this, value, offset, false, noAssert)                                                    // 1215
}                                                                                                            // 1216
                                                                                                             // 1217
function writeDouble (buf, value, offset, littleEndian, noAssert) {                                          // 1218
  if (!noAssert) {                                                                                           // 1219
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)                   // 1220
  }                                                                                                          // 1221
  ieee754.write(buf, value, offset, littleEndian, 52, 8)                                                     // 1222
  return offset + 8                                                                                          // 1223
}                                                                                                            // 1224
                                                                                                             // 1225
Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {                          // 1226
  return writeDouble(this, value, offset, true, noAssert)                                                    // 1227
}                                                                                                            // 1228
                                                                                                             // 1229
Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {                          // 1230
  return writeDouble(this, value, offset, false, noAssert)                                                   // 1231
}                                                                                                            // 1232
                                                                                                             // 1233
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)                                 // 1234
Buffer.prototype.copy = function copy (target, targetStart, start, end) {                                    // 1235
  if (!start) start = 0                                                                                      // 1236
  if (!end && end !== 0) end = this.length                                                                   // 1237
  if (targetStart >= target.length) targetStart = target.length                                              // 1238
  if (!targetStart) targetStart = 0                                                                          // 1239
  if (end > 0 && end < start) end = start                                                                    // 1240
                                                                                                             // 1241
  // Copy 0 bytes; we're done                                                                                // 1242
  if (end === start) return 0                                                                                // 1243
  if (target.length === 0 || this.length === 0) return 0                                                     // 1244
                                                                                                             // 1245
  // Fatal error conditions                                                                                  // 1246
  if (targetStart < 0) {                                                                                     // 1247
    throw new RangeError('targetStart out of bounds')                                                        // 1248
  }                                                                                                          // 1249
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')                   // 1250
  if (end < 0) throw new RangeError('sourceEnd out of bounds')                                               // 1251
                                                                                                             // 1252
  // Are we oob?                                                                                             // 1253
  if (end > this.length) end = this.length                                                                   // 1254
  if (target.length - targetStart < end - start) {                                                           // 1255
    end = target.length - targetStart + start                                                                // 1256
  }                                                                                                          // 1257
                                                                                                             // 1258
  var len = end - start                                                                                      // 1259
  var i                                                                                                      // 1260
                                                                                                             // 1261
  if (this === target && start < targetStart && targetStart < end) {                                         // 1262
    // descending copy from end                                                                              // 1263
    for (i = len - 1; i >= 0; i--) {                                                                         // 1264
      target[i + targetStart] = this[i + start]                                                              // 1265
    }                                                                                                        // 1266
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {                                                    // 1267
    // ascending copy from start                                                                             // 1268
    for (i = 0; i < len; i++) {                                                                              // 1269
      target[i + targetStart] = this[i + start]                                                              // 1270
    }                                                                                                        // 1271
  } else {                                                                                                   // 1272
    Uint8Array.prototype.set.call(                                                                           // 1273
      target,                                                                                                // 1274
      this.subarray(start, start + len),                                                                     // 1275
      targetStart                                                                                            // 1276
    )                                                                                                        // 1277
  }                                                                                                          // 1278
                                                                                                             // 1279
  return len                                                                                                 // 1280
}                                                                                                            // 1281
                                                                                                             // 1282
// fill(value, start=0, end=buffer.length)                                                                   // 1283
Buffer.prototype.fill = function fill (value, start, end) {                                                  // 1284
  if (!value) value = 0                                                                                      // 1285
  if (!start) start = 0                                                                                      // 1286
  if (!end) end = this.length                                                                                // 1287
                                                                                                             // 1288
  if (end < start) throw new RangeError('end < start')                                                       // 1289
                                                                                                             // 1290
  // Fill 0 bytes; we're done                                                                                // 1291
  if (end === start) return                                                                                  // 1292
  if (this.length === 0) return                                                                              // 1293
                                                                                                             // 1294
  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')                         // 1295
  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')                                // 1296
                                                                                                             // 1297
  var i                                                                                                      // 1298
  if (typeof value === 'number') {                                                                           // 1299
    for (i = start; i < end; i++) {                                                                          // 1300
      this[i] = value                                                                                        // 1301
    }                                                                                                        // 1302
  } else {                                                                                                   // 1303
    var bytes = utf8ToBytes(value.toString())                                                                // 1304
    var len = bytes.length                                                                                   // 1305
    for (i = start; i < end; i++) {                                                                          // 1306
      this[i] = bytes[i % len]                                                                               // 1307
    }                                                                                                        // 1308
  }                                                                                                          // 1309
                                                                                                             // 1310
  return this                                                                                                // 1311
}                                                                                                            // 1312
                                                                                                             // 1313
// HELPER FUNCTIONS                                                                                          // 1314
// ================                                                                                          // 1315
                                                                                                             // 1316
var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g                                                                 // 1317
                                                                                                             // 1318
function base64clean (str) {                                                                                 // 1319
  // Node strips out invalid characters like \n and \t from the string, base64-js does not                   // 1320
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')                                                       // 1321
  // Node converts strings with length < 2 to ''                                                             // 1322
  if (str.length < 2) return ''                                                                              // 1323
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not                    // 1324
  while (str.length % 4 !== 0) {                                                                             // 1325
    str = str + '='                                                                                          // 1326
  }                                                                                                          // 1327
  return str                                                                                                 // 1328
}                                                                                                            // 1329
                                                                                                             // 1330
function stringtrim (str) {                                                                                  // 1331
  if (str.trim) return str.trim()                                                                            // 1332
  return str.replace(/^\s+|\s+$/g, '')                                                                       // 1333
}                                                                                                            // 1334
                                                                                                             // 1335
function toHex (n) {                                                                                         // 1336
  if (n < 16) return '0' + n.toString(16)                                                                    // 1337
  return n.toString(16)                                                                                      // 1338
}                                                                                                            // 1339
                                                                                                             // 1340
function utf8ToBytes (string, units) {                                                                       // 1341
  units = units || Infinity                                                                                  // 1342
  var codePoint                                                                                              // 1343
  var length = string.length                                                                                 // 1344
  var leadSurrogate = null                                                                                   // 1345
  var bytes = []                                                                                             // 1346
                                                                                                             // 1347
  for (var i = 0; i < length; i++) {                                                                         // 1348
    codePoint = string.charCodeAt(i)                                                                         // 1349
                                                                                                             // 1350
    // is surrogate component                                                                                // 1351
    if (codePoint > 0xD7FF && codePoint < 0xE000) {                                                          // 1352
      // last char was a lead                                                                                // 1353
      if (!leadSurrogate) {                                                                                  // 1354
        // no lead yet                                                                                       // 1355
        if (codePoint > 0xDBFF) {                                                                            // 1356
          // unexpected trail                                                                                // 1357
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)                                                // 1358
          continue                                                                                           // 1359
        } else if (i + 1 === length) {                                                                       // 1360
          // unpaired lead                                                                                   // 1361
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)                                                // 1362
          continue                                                                                           // 1363
        }                                                                                                    // 1364
                                                                                                             // 1365
        // valid lead                                                                                        // 1366
        leadSurrogate = codePoint                                                                            // 1367
                                                                                                             // 1368
        continue                                                                                             // 1369
      }                                                                                                      // 1370
                                                                                                             // 1371
      // 2 leads in a row                                                                                    // 1372
      if (codePoint < 0xDC00) {                                                                              // 1373
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)                                                  // 1374
        leadSurrogate = codePoint                                                                            // 1375
        continue                                                                                             // 1376
      }                                                                                                      // 1377
                                                                                                             // 1378
      // valid surrogate pair                                                                                // 1379
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000                              // 1380
    } else if (leadSurrogate) {                                                                              // 1381
      // valid bmp char, but last char was a lead                                                            // 1382
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)                                                    // 1383
    }                                                                                                        // 1384
                                                                                                             // 1385
    leadSurrogate = null                                                                                     // 1386
                                                                                                             // 1387
    // encode utf8                                                                                           // 1388
    if (codePoint < 0x80) {                                                                                  // 1389
      if ((units -= 1) < 0) break                                                                            // 1390
      bytes.push(codePoint)                                                                                  // 1391
    } else if (codePoint < 0x800) {                                                                          // 1392
      if ((units -= 2) < 0) break                                                                            // 1393
      bytes.push(                                                                                            // 1394
        codePoint >> 0x6 | 0xC0,                                                                             // 1395
        codePoint & 0x3F | 0x80                                                                              // 1396
      )                                                                                                      // 1397
    } else if (codePoint < 0x10000) {                                                                        // 1398
      if ((units -= 3) < 0) break                                                                            // 1399
      bytes.push(                                                                                            // 1400
        codePoint >> 0xC | 0xE0,                                                                             // 1401
        codePoint >> 0x6 & 0x3F | 0x80,                                                                      // 1402
        codePoint & 0x3F | 0x80                                                                              // 1403
      )                                                                                                      // 1404
    } else if (codePoint < 0x110000) {                                                                       // 1405
      if ((units -= 4) < 0) break                                                                            // 1406
      bytes.push(                                                                                            // 1407
        codePoint >> 0x12 | 0xF0,                                                                            // 1408
        codePoint >> 0xC & 0x3F | 0x80,                                                                      // 1409
        codePoint >> 0x6 & 0x3F | 0x80,                                                                      // 1410
        codePoint & 0x3F | 0x80                                                                              // 1411
      )                                                                                                      // 1412
    } else {                                                                                                 // 1413
      throw new Error('Invalid code point')                                                                  // 1414
    }                                                                                                        // 1415
  }                                                                                                          // 1416
                                                                                                             // 1417
  return bytes                                                                                               // 1418
}                                                                                                            // 1419
                                                                                                             // 1420
function asciiToBytes (str) {                                                                                // 1421
  var byteArray = []                                                                                         // 1422
  for (var i = 0; i < str.length; i++) {                                                                     // 1423
    // Node's code seems to be doing this and not & 0x7F..                                                   // 1424
    byteArray.push(str.charCodeAt(i) & 0xFF)                                                                 // 1425
  }                                                                                                          // 1426
  return byteArray                                                                                           // 1427
}                                                                                                            // 1428
                                                                                                             // 1429
function utf16leToBytes (str, units) {                                                                       // 1430
  var c, hi, lo                                                                                              // 1431
  var byteArray = []                                                                                         // 1432
  for (var i = 0; i < str.length; i++) {                                                                     // 1433
    if ((units -= 2) < 0) break                                                                              // 1434
                                                                                                             // 1435
    c = str.charCodeAt(i)                                                                                    // 1436
    hi = c >> 8                                                                                              // 1437
    lo = c % 256                                                                                             // 1438
    byteArray.push(lo)                                                                                       // 1439
    byteArray.push(hi)                                                                                       // 1440
  }                                                                                                          // 1441
                                                                                                             // 1442
  return byteArray                                                                                           // 1443
}                                                                                                            // 1444
                                                                                                             // 1445
function base64ToBytes (str) {                                                                               // 1446
  return base64.toByteArray(base64clean(str))                                                                // 1447
}                                                                                                            // 1448
                                                                                                             // 1449
function blitBuffer (src, dst, offset, length) {                                                             // 1450
  for (var i = 0; i < length; i++) {                                                                         // 1451
    if ((i + offset >= dst.length) || (i >= src.length)) break                                               // 1452
    dst[i + offset] = src[i]                                                                                 // 1453
  }                                                                                                          // 1454
  return i                                                                                                   // 1455
}                                                                                                            // 1456
                                                                                                             // 1457
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"node_modules":{"base64-js":{"package.json":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/node_modules/buffer/node_modules/base64-js/package.json                    //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
exports.name = "base64-js";                                                                                  // 1
exports.version = "1.1.2";                                                                                   // 2
exports.main = "lib/b64.js";                                                                                 // 3
                                                                                                             // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lib":{"b64.js":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/node_modules/buffer/node_modules/base64-js/lib/b64.js                      //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
'use strict'                                                                                                 // 1
                                                                                                             // 2
exports.toByteArray = toByteArray                                                                            // 3
exports.fromByteArray = fromByteArray                                                                        // 4
                                                                                                             // 5
var lookup = []                                                                                              // 6
var revLookup = []                                                                                           // 7
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array                                             // 8
                                                                                                             // 9
function init () {                                                                                           // 10
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'                              // 11
  for (var i = 0, len = code.length; i < len; ++i) {                                                         // 12
    lookup[i] = code[i]                                                                                      // 13
    revLookup[code.charCodeAt(i)] = i                                                                        // 14
  }                                                                                                          // 15
                                                                                                             // 16
  revLookup['-'.charCodeAt(0)] = 62                                                                          // 17
  revLookup['_'.charCodeAt(0)] = 63                                                                          // 18
}                                                                                                            // 19
                                                                                                             // 20
init()                                                                                                       // 21
                                                                                                             // 22
function toByteArray (b64) {                                                                                 // 23
  var i, j, l, tmp, placeHolders, arr                                                                        // 24
  var len = b64.length                                                                                       // 25
                                                                                                             // 26
  if (len % 4 > 0) {                                                                                         // 27
    throw new Error('Invalid string. Length must be a multiple of 4')                                        // 28
  }                                                                                                          // 29
                                                                                                             // 30
  // the number of equal signs (place holders)                                                               // 31
  // if there are two placeholders, than the two characters before it                                        // 32
  // represent one byte                                                                                      // 33
  // if there is only one, then the three characters before it represent 2 bytes                             // 34
  // this is just a cheap hack to not do indexOf twice                                                       // 35
  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0                                     // 36
                                                                                                             // 37
  // base64 is 4/3 + up to two characters of the original data                                               // 38
  arr = new Arr(len * 3 / 4 - placeHolders)                                                                  // 39
                                                                                                             // 40
  // if there are placeholders, only get up to the last complete 4 chars                                     // 41
  l = placeHolders > 0 ? len - 4 : len                                                                       // 42
                                                                                                             // 43
  var L = 0                                                                                                  // 44
                                                                                                             // 45
  for (i = 0, j = 0; i < l; i += 4, j += 3) {                                                                // 46
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF                                                                            // 48
    arr[L++] = (tmp >> 8) & 0xFF                                                                             // 49
    arr[L++] = tmp & 0xFF                                                                                    // 50
  }                                                                                                          // 51
                                                                                                             // 52
  if (placeHolders === 2) {                                                                                  // 53
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)                      // 54
    arr[L++] = tmp & 0xFF                                                                                    // 55
  } else if (placeHolders === 1) {                                                                           // 56
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF                                                                             // 58
    arr[L++] = tmp & 0xFF                                                                                    // 59
  }                                                                                                          // 60
                                                                                                             // 61
  return arr                                                                                                 // 62
}                                                                                                            // 63
                                                                                                             // 64
function tripletToBase64 (num) {                                                                             // 65
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]  // 66
}                                                                                                            // 67
                                                                                                             // 68
function encodeChunk (uint8, start, end) {                                                                   // 69
  var tmp                                                                                                    // 70
  var output = []                                                                                            // 71
  for (var i = start; i < end; i += 3) {                                                                     // 72
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])                                            // 73
    output.push(tripletToBase64(tmp))                                                                        // 74
  }                                                                                                          // 75
  return output.join('')                                                                                     // 76
}                                                                                                            // 77
                                                                                                             // 78
function fromByteArray (uint8) {                                                                             // 79
  var tmp                                                                                                    // 80
  var len = uint8.length                                                                                     // 81
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes                                            // 82
  var output = ''                                                                                            // 83
  var parts = []                                                                                             // 84
  var maxChunkLength = 16383 // must be multiple of 3                                                        // 85
                                                                                                             // 86
  // go through the array every three bytes, we'll deal with trailing stuff later                            // 87
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {                                  // 88
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))             // 89
  }                                                                                                          // 90
                                                                                                             // 91
  // pad the end with zeros, but make sure to not forget the extra bytes                                     // 92
  if (extraBytes === 1) {                                                                                    // 93
    tmp = uint8[len - 1]                                                                                     // 94
    output += lookup[tmp >> 2]                                                                               // 95
    output += lookup[(tmp << 4) & 0x3F]                                                                      // 96
    output += '=='                                                                                           // 97
  } else if (extraBytes === 2) {                                                                             // 98
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])                                                           // 99
    output += lookup[tmp >> 10]                                                                              // 100
    output += lookup[(tmp >> 4) & 0x3F]                                                                      // 101
    output += lookup[(tmp << 2) & 0x3F]                                                                      // 102
    output += '='                                                                                            // 103
  }                                                                                                          // 104
                                                                                                             // 105
  parts.push(output)                                                                                         // 106
                                                                                                             // 107
  return parts.join('')                                                                                      // 108
}                                                                                                            // 109
                                                                                                             // 110
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"ieee754":{"package.json":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/node_modules/buffer/node_modules/ieee754/package.json                      //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
exports.name = "ieee754";                                                                                    // 1
exports.version = "1.1.6";                                                                                   // 2
exports.main = "index.js";                                                                                   // 3
                                                                                                             // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/node_modules/buffer/node_modules/ieee754/index.js                          //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
exports.read = function (buffer, offset, isLE, mLen, nBytes) {                                               // 1
  var e, m                                                                                                   // 2
  var eLen = nBytes * 8 - mLen - 1                                                                           // 3
  var eMax = (1 << eLen) - 1                                                                                 // 4
  var eBias = eMax >> 1                                                                                      // 5
  var nBits = -7                                                                                             // 6
  var i = isLE ? (nBytes - 1) : 0                                                                            // 7
  var d = isLE ? -1 : 1                                                                                      // 8
  var s = buffer[offset + i]                                                                                 // 9
                                                                                                             // 10
  i += d                                                                                                     // 11
                                                                                                             // 12
  e = s & ((1 << (-nBits)) - 1)                                                                              // 13
  s >>= (-nBits)                                                                                             // 14
  nBits += eLen                                                                                              // 15
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}                                 // 16
                                                                                                             // 17
  m = e & ((1 << (-nBits)) - 1)                                                                              // 18
  e >>= (-nBits)                                                                                             // 19
  nBits += mLen                                                                                              // 20
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}                                 // 21
                                                                                                             // 22
  if (e === 0) {                                                                                             // 23
    e = 1 - eBias                                                                                            // 24
  } else if (e === eMax) {                                                                                   // 25
    return m ? NaN : ((s ? -1 : 1) * Infinity)                                                               // 26
  } else {                                                                                                   // 27
    m = m + Math.pow(2, mLen)                                                                                // 28
    e = e - eBias                                                                                            // 29
  }                                                                                                          // 30
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)                                                            // 31
}                                                                                                            // 32
                                                                                                             // 33
exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {                                       // 34
  var e, m, c                                                                                                // 35
  var eLen = nBytes * 8 - mLen - 1                                                                           // 36
  var eMax = (1 << eLen) - 1                                                                                 // 37
  var eBias = eMax >> 1                                                                                      // 38
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)                                           // 39
  var i = isLE ? 0 : (nBytes - 1)                                                                            // 40
  var d = isLE ? 1 : -1                                                                                      // 41
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0                                                // 42
                                                                                                             // 43
  value = Math.abs(value)                                                                                    // 44
                                                                                                             // 45
  if (isNaN(value) || value === Infinity) {                                                                  // 46
    m = isNaN(value) ? 1 : 0                                                                                 // 47
    e = eMax                                                                                                 // 48
  } else {                                                                                                   // 49
    e = Math.floor(Math.log(value) / Math.LN2)                                                               // 50
    if (value * (c = Math.pow(2, -e)) < 1) {                                                                 // 51
      e--                                                                                                    // 52
      c *= 2                                                                                                 // 53
    }                                                                                                        // 54
    if (e + eBias >= 1) {                                                                                    // 55
      value += rt / c                                                                                        // 56
    } else {                                                                                                 // 57
      value += rt * Math.pow(2, 1 - eBias)                                                                   // 58
    }                                                                                                        // 59
    if (value * c >= 2) {                                                                                    // 60
      e++                                                                                                    // 61
      c /= 2                                                                                                 // 62
    }                                                                                                        // 63
                                                                                                             // 64
    if (e + eBias >= eMax) {                                                                                 // 65
      m = 0                                                                                                  // 66
      e = eMax                                                                                               // 67
    } else if (e + eBias >= 1) {                                                                             // 68
      m = (value * c - 1) * Math.pow(2, mLen)                                                                // 69
      e = e + eBias                                                                                          // 70
    } else {                                                                                                 // 71
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)                                                 // 72
      e = 0                                                                                                  // 73
    }                                                                                                        // 74
  }                                                                                                          // 75
                                                                                                             // 76
  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}                           // 77
                                                                                                             // 78
  e = (e << mLen) | m                                                                                        // 79
  eLen += mLen                                                                                               // 80
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}                            // 81
                                                                                                             // 82
  buffer[offset + i - d] |= s * 128                                                                          // 83
}                                                                                                            // 84
                                                                                                             // 85
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"isarray":{"package.json":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/node_modules/buffer/node_modules/isarray/package.json                      //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
exports.name = "isarray";                                                                                    // 1
exports.version = "1.0.0";                                                                                   // 2
exports.main = "index.js";                                                                                   // 3
                                                                                                             // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/node_modules/buffer/node_modules/isarray/index.js                          //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var toString = {}.toString;                                                                                  // 1
                                                                                                             // 2
module.exports = Array.isArray || function (arr) {                                                           // 3
  return toString.call(arr) == '[object Array]';                                                             // 4
};                                                                                                           // 5
                                                                                                             // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},"process":{"browser.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/node_modules/process/browser.js                                            //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
// shim for using process in browser                                                                         // 1
                                                                                                             // 2
var process = module.exports = {};                                                                           // 3
var queue = [];                                                                                              // 4
var draining = false;                                                                                        // 5
var currentQueue;                                                                                            // 6
var queueIndex = -1;                                                                                         // 7
                                                                                                             // 8
function cleanUpNextTick() {                                                                                 // 9
    draining = false;                                                                                        // 10
    if (currentQueue.length) {                                                                               // 11
        queue = currentQueue.concat(queue);                                                                  // 12
    } else {                                                                                                 // 13
        queueIndex = -1;                                                                                     // 14
    }                                                                                                        // 15
    if (queue.length) {                                                                                      // 16
        drainQueue();                                                                                        // 17
    }                                                                                                        // 18
}                                                                                                            // 19
                                                                                                             // 20
function drainQueue() {                                                                                      // 21
    if (draining) {                                                                                          // 22
        return;                                                                                              // 23
    }                                                                                                        // 24
    var timeout = setTimeout(cleanUpNextTick);                                                               // 25
    draining = true;                                                                                         // 26
                                                                                                             // 27
    var len = queue.length;                                                                                  // 28
    while(len) {                                                                                             // 29
        currentQueue = queue;                                                                                // 30
        queue = [];                                                                                          // 31
        while (++queueIndex < len) {                                                                         // 32
            if (currentQueue) {                                                                              // 33
                currentQueue[queueIndex].run();                                                              // 34
            }                                                                                                // 35
        }                                                                                                    // 36
        queueIndex = -1;                                                                                     // 37
        len = queue.length;                                                                                  // 38
    }                                                                                                        // 39
    currentQueue = null;                                                                                     // 40
    draining = false;                                                                                        // 41
    clearTimeout(timeout);                                                                                   // 42
}                                                                                                            // 43
                                                                                                             // 44
process.nextTick = function (fun) {                                                                          // 45
    var args = new Array(arguments.length - 1);                                                              // 46
    if (arguments.length > 1) {                                                                              // 47
        for (var i = 1; i < arguments.length; i++) {                                                         // 48
            args[i - 1] = arguments[i];                                                                      // 49
        }                                                                                                    // 50
    }                                                                                                        // 51
    queue.push(new Item(fun, args));                                                                         // 52
    if (queue.length === 1 && !draining) {                                                                   // 53
        setTimeout(drainQueue, 0);                                                                           // 54
    }                                                                                                        // 55
};                                                                                                           // 56
                                                                                                             // 57
// v8 likes predictible objects                                                                              // 58
function Item(fun, array) {                                                                                  // 59
    this.fun = fun;                                                                                          // 60
    this.array = array;                                                                                      // 61
}                                                                                                            // 62
Item.prototype.run = function () {                                                                           // 63
    this.fun.apply(null, this.array);                                                                        // 64
};                                                                                                           // 65
process.title = 'browser';                                                                                   // 66
process.browser = true;                                                                                      // 67
process.env = {};                                                                                            // 68
process.argv = [];                                                                                           // 69
process.version = ''; // empty string to avoid regexp issues                                                 // 70
process.versions = {};                                                                                       // 71
                                                                                                             // 72
function noop() {}                                                                                           // 73
                                                                                                             // 74
process.on = noop;                                                                                           // 75
process.addListener = noop;                                                                                  // 76
process.once = noop;                                                                                         // 77
process.off = noop;                                                                                          // 78
process.removeListener = noop;                                                                               // 79
process.removeAllListeners = noop;                                                                           // 80
process.emit = noop;                                                                                         // 81
                                                                                                             // 82
process.binding = function (name) {                                                                          // 83
    throw new Error('process.binding is not supported');                                                     // 84
};                                                                                                           // 85
                                                                                                             // 86
process.cwd = function () { return '/' };                                                                    // 87
process.chdir = function (dir) {                                                                             // 88
    throw new Error('process.chdir is not supported');                                                       // 89
};                                                                                                           // 90
process.umask = function() { return 0; };                                                                    // 91
                                                                                                             // 92
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"domain-browser":{"package.json":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/node_modules/domain-browser/package.json                                   //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
exports.name = "domain-browser";                                                                             // 1
exports.version = "1.1.7";                                                                                   // 2
exports.main = "./index.js";                                                                                 // 3
                                                                                                             // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":["events",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/node_modules/domain-browser/index.js                                       //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
// This file should be ES5 compatible                                                                        // 1
/* eslint prefer-spread:0, no-var:0, prefer-reflect:0, no-magic-numbers:0 */                                 // 2
'use strict'                                                                                                 // 3
module.exports = (function () {                                                                              // 4
	// Import Events                                                                                            // 5
	var events = require('events')                                                                              // 6
                                                                                                             // 7
	// Export Domain                                                                                            // 8
	var domain = {}                                                                                             // 9
	domain.createDomain = domain.create = function () {                                                         // 10
		var d = new events.EventEmitter()                                                                          // 11
                                                                                                             // 12
		function emitError (e) {                                                                                   // 13
			d.emit('error', e)                                                                                        // 14
		}                                                                                                          // 15
                                                                                                             // 16
		d.add = function (emitter) {                                                                               // 17
			emitter.on('error', emitError)                                                                            // 18
		}                                                                                                          // 19
		d.remove = function (emitter) {                                                                            // 20
			emitter.removeListener('error', emitError)                                                                // 21
		}                                                                                                          // 22
		d.bind = function (fn) {                                                                                   // 23
			return function () {                                                                                      // 24
				var args = Array.prototype.slice.call(arguments)                                                         // 25
				try {                                                                                                    // 26
					fn.apply(null, args)                                                                                    // 27
				}                                                                                                        // 28
				catch (err) {                                                                                            // 29
					emitError(err)                                                                                          // 30
				}                                                                                                        // 31
			}                                                                                                         // 32
		}                                                                                                          // 33
		d.intercept = function (fn) {                                                                              // 34
			return function (err) {                                                                                   // 35
				if ( err ) {                                                                                             // 36
					emitError(err)                                                                                          // 37
				}                                                                                                        // 38
				else {                                                                                                   // 39
					var args = Array.prototype.slice.call(arguments, 1)                                                     // 40
					try {                                                                                                   // 41
						fn.apply(null, args)                                                                                   // 42
					}                                                                                                       // 43
					catch (err) {                                                                                           // 44
						emitError(err)                                                                                         // 45
					}                                                                                                       // 46
				}                                                                                                        // 47
			}                                                                                                         // 48
		}                                                                                                          // 49
		d.run = function (fn) {                                                                                    // 50
			try {                                                                                                     // 51
				fn()                                                                                                     // 52
			}                                                                                                         // 53
			catch (err) {                                                                                             // 54
				emitError(err)                                                                                           // 55
			}                                                                                                         // 56
			return this                                                                                               // 57
		}                                                                                                          // 58
		d.dispose = function () {                                                                                  // 59
			this.removeAllListeners()                                                                                 // 60
			return this                                                                                               // 61
		}                                                                                                          // 62
		d.enter = d.exit = function () {                                                                           // 63
			return this                                                                                               // 64
		}                                                                                                          // 65
		return d                                                                                                   // 66
	}                                                                                                           // 67
	return domain                                                                                               // 68
}).call(this)                                                                                                // 69
                                                                                                             // 70
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"events":{"package.json":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/node_modules/events/package.json                                           //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
exports.name = "events";                                                                                     // 1
exports.version = "1.1.0";                                                                                   // 2
exports.main = "./events.js";                                                                                // 3
                                                                                                             // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"events.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/node_modules/events/events.js                                              //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
// Copyright Joyent, Inc. and other Node contributors.                                                       // 1
//                                                                                                           // 2
// Permission is hereby granted, free of charge, to any person obtaining a                                   // 3
// copy of this software and associated documentation files (the                                             // 4
// "Software"), to deal in the Software without restriction, including                                       // 5
// without limitation the rights to use, copy, modify, merge, publish,                                       // 6
// distribute, sublicense, and/or sell copies of the Software, and to permit                                 // 7
// persons to whom the Software is furnished to do so, subject to the                                        // 8
// following conditions:                                                                                     // 9
//                                                                                                           // 10
// The above copyright notice and this permission notice shall be included                                   // 11
// in all copies or substantial portions of the Software.                                                    // 12
//                                                                                                           // 13
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS                                   // 14
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF                                                // 15
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN                                 // 16
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,                                  // 17
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR                                     // 18
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE                                 // 19
// USE OR OTHER DEALINGS IN THE SOFTWARE.                                                                    // 20
                                                                                                             // 21
function EventEmitter() {                                                                                    // 22
  this._events = this._events || {};                                                                         // 23
  this._maxListeners = this._maxListeners || undefined;                                                      // 24
}                                                                                                            // 25
module.exports = EventEmitter;                                                                               // 26
                                                                                                             // 27
// Backwards-compat with node 0.10.x                                                                         // 28
EventEmitter.EventEmitter = EventEmitter;                                                                    // 29
                                                                                                             // 30
EventEmitter.prototype._events = undefined;                                                                  // 31
EventEmitter.prototype._maxListeners = undefined;                                                            // 32
                                                                                                             // 33
// By default EventEmitters will print a warning if more than 10 listeners are                               // 34
// added to it. This is a useful default which helps finding memory leaks.                                   // 35
EventEmitter.defaultMaxListeners = 10;                                                                       // 36
                                                                                                             // 37
// Obviously not all Emitters should be limited to 10. This function allows                                  // 38
// that to be increased. Set to zero for unlimited.                                                          // 39
EventEmitter.prototype.setMaxListeners = function(n) {                                                       // 40
  if (!isNumber(n) || n < 0 || isNaN(n))                                                                     // 41
    throw TypeError('n must be a positive number');                                                          // 42
  this._maxListeners = n;                                                                                    // 43
  return this;                                                                                               // 44
};                                                                                                           // 45
                                                                                                             // 46
EventEmitter.prototype.emit = function(type) {                                                               // 47
  var er, handler, len, args, i, listeners;                                                                  // 48
                                                                                                             // 49
  if (!this._events)                                                                                         // 50
    this._events = {};                                                                                       // 51
                                                                                                             // 52
  // If there is no 'error' event listener then throw.                                                       // 53
  if (type === 'error') {                                                                                    // 54
    if (!this._events.error ||                                                                               // 55
        (isObject(this._events.error) && !this._events.error.length)) {                                      // 56
      er = arguments[1];                                                                                     // 57
      if (er instanceof Error) {                                                                             // 58
        throw er; // Unhandled 'error' event                                                                 // 59
      }                                                                                                      // 60
      throw TypeError('Uncaught, unspecified "error" event.');                                               // 61
    }                                                                                                        // 62
  }                                                                                                          // 63
                                                                                                             // 64
  handler = this._events[type];                                                                              // 65
                                                                                                             // 66
  if (isUndefined(handler))                                                                                  // 67
    return false;                                                                                            // 68
                                                                                                             // 69
  if (isFunction(handler)) {                                                                                 // 70
    switch (arguments.length) {                                                                              // 71
      // fast cases                                                                                          // 72
      case 1:                                                                                                // 73
        handler.call(this);                                                                                  // 74
        break;                                                                                               // 75
      case 2:                                                                                                // 76
        handler.call(this, arguments[1]);                                                                    // 77
        break;                                                                                               // 78
      case 3:                                                                                                // 79
        handler.call(this, arguments[1], arguments[2]);                                                      // 80
        break;                                                                                               // 81
      // slower                                                                                              // 82
      default:                                                                                               // 83
        args = Array.prototype.slice.call(arguments, 1);                                                     // 84
        handler.apply(this, args);                                                                           // 85
    }                                                                                                        // 86
  } else if (isObject(handler)) {                                                                            // 87
    args = Array.prototype.slice.call(arguments, 1);                                                         // 88
    listeners = handler.slice();                                                                             // 89
    len = listeners.length;                                                                                  // 90
    for (i = 0; i < len; i++)                                                                                // 91
      listeners[i].apply(this, args);                                                                        // 92
  }                                                                                                          // 93
                                                                                                             // 94
  return true;                                                                                               // 95
};                                                                                                           // 96
                                                                                                             // 97
EventEmitter.prototype.addListener = function(type, listener) {                                              // 98
  var m;                                                                                                     // 99
                                                                                                             // 100
  if (!isFunction(listener))                                                                                 // 101
    throw TypeError('listener must be a function');                                                          // 102
                                                                                                             // 103
  if (!this._events)                                                                                         // 104
    this._events = {};                                                                                       // 105
                                                                                                             // 106
  // To avoid recursion in the case that type === "newListener"! Before                                      // 107
  // adding it to the listeners, first emit "newListener".                                                   // 108
  if (this._events.newListener)                                                                              // 109
    this.emit('newListener', type,                                                                           // 110
              isFunction(listener.listener) ?                                                                // 111
              listener.listener : listener);                                                                 // 112
                                                                                                             // 113
  if (!this._events[type])                                                                                   // 114
    // Optimize the case of one listener. Don't need the extra array object.                                 // 115
    this._events[type] = listener;                                                                           // 116
  else if (isObject(this._events[type]))                                                                     // 117
    // If we've already got an array, just append.                                                           // 118
    this._events[type].push(listener);                                                                       // 119
  else                                                                                                       // 120
    // Adding the second element, need to change to array.                                                   // 121
    this._events[type] = [this._events[type], listener];                                                     // 122
                                                                                                             // 123
  // Check for listener leak                                                                                 // 124
  if (isObject(this._events[type]) && !this._events[type].warned) {                                          // 125
    if (!isUndefined(this._maxListeners)) {                                                                  // 126
      m = this._maxListeners;                                                                                // 127
    } else {                                                                                                 // 128
      m = EventEmitter.defaultMaxListeners;                                                                  // 129
    }                                                                                                        // 130
                                                                                                             // 131
    if (m && m > 0 && this._events[type].length > m) {                                                       // 132
      this._events[type].warned = true;                                                                      // 133
      console.error('(node) warning: possible EventEmitter memory ' +                                        // 134
                    'leak detected. %d listeners added. ' +                                                  // 135
                    'Use emitter.setMaxListeners() to increase limit.',                                      // 136
                    this._events[type].length);                                                              // 137
      if (typeof console.trace === 'function') {                                                             // 138
        // not supported in IE 10                                                                            // 139
        console.trace();                                                                                     // 140
      }                                                                                                      // 141
    }                                                                                                        // 142
  }                                                                                                          // 143
                                                                                                             // 144
  return this;                                                                                               // 145
};                                                                                                           // 146
                                                                                                             // 147
EventEmitter.prototype.on = EventEmitter.prototype.addListener;                                              // 148
                                                                                                             // 149
EventEmitter.prototype.once = function(type, listener) {                                                     // 150
  if (!isFunction(listener))                                                                                 // 151
    throw TypeError('listener must be a function');                                                          // 152
                                                                                                             // 153
  var fired = false;                                                                                         // 154
                                                                                                             // 155
  function g() {                                                                                             // 156
    this.removeListener(type, g);                                                                            // 157
                                                                                                             // 158
    if (!fired) {                                                                                            // 159
      fired = true;                                                                                          // 160
      listener.apply(this, arguments);                                                                       // 161
    }                                                                                                        // 162
  }                                                                                                          // 163
                                                                                                             // 164
  g.listener = listener;                                                                                     // 165
  this.on(type, g);                                                                                          // 166
                                                                                                             // 167
  return this;                                                                                               // 168
};                                                                                                           // 169
                                                                                                             // 170
// emits a 'removeListener' event iff the listener was removed                                               // 171
EventEmitter.prototype.removeListener = function(type, listener) {                                           // 172
  var list, position, length, i;                                                                             // 173
                                                                                                             // 174
  if (!isFunction(listener))                                                                                 // 175
    throw TypeError('listener must be a function');                                                          // 176
                                                                                                             // 177
  if (!this._events || !this._events[type])                                                                  // 178
    return this;                                                                                             // 179
                                                                                                             // 180
  list = this._events[type];                                                                                 // 181
  length = list.length;                                                                                      // 182
  position = -1;                                                                                             // 183
                                                                                                             // 184
  if (list === listener ||                                                                                   // 185
      (isFunction(list.listener) && list.listener === listener)) {                                           // 186
    delete this._events[type];                                                                               // 187
    if (this._events.removeListener)                                                                         // 188
      this.emit('removeListener', type, listener);                                                           // 189
                                                                                                             // 190
  } else if (isObject(list)) {                                                                               // 191
    for (i = length; i-- > 0;) {                                                                             // 192
      if (list[i] === listener ||                                                                            // 193
          (list[i].listener && list[i].listener === listener)) {                                             // 194
        position = i;                                                                                        // 195
        break;                                                                                               // 196
      }                                                                                                      // 197
    }                                                                                                        // 198
                                                                                                             // 199
    if (position < 0)                                                                                        // 200
      return this;                                                                                           // 201
                                                                                                             // 202
    if (list.length === 1) {                                                                                 // 203
      list.length = 0;                                                                                       // 204
      delete this._events[type];                                                                             // 205
    } else {                                                                                                 // 206
      list.splice(position, 1);                                                                              // 207
    }                                                                                                        // 208
                                                                                                             // 209
    if (this._events.removeListener)                                                                         // 210
      this.emit('removeListener', type, listener);                                                           // 211
  }                                                                                                          // 212
                                                                                                             // 213
  return this;                                                                                               // 214
};                                                                                                           // 215
                                                                                                             // 216
EventEmitter.prototype.removeAllListeners = function(type) {                                                 // 217
  var key, listeners;                                                                                        // 218
                                                                                                             // 219
  if (!this._events)                                                                                         // 220
    return this;                                                                                             // 221
                                                                                                             // 222
  // not listening for removeListener, no need to emit                                                       // 223
  if (!this._events.removeListener) {                                                                        // 224
    if (arguments.length === 0)                                                                              // 225
      this._events = {};                                                                                     // 226
    else if (this._events[type])                                                                             // 227
      delete this._events[type];                                                                             // 228
    return this;                                                                                             // 229
  }                                                                                                          // 230
                                                                                                             // 231
  // emit removeListener for all listeners on all events                                                     // 232
  if (arguments.length === 0) {                                                                              // 233
    for (key in this._events) {                                                                              // 234
      if (key === 'removeListener') continue;                                                                // 235
      this.removeAllListeners(key);                                                                          // 236
    }                                                                                                        // 237
    this.removeAllListeners('removeListener');                                                               // 238
    this._events = {};                                                                                       // 239
    return this;                                                                                             // 240
  }                                                                                                          // 241
                                                                                                             // 242
  listeners = this._events[type];                                                                            // 243
                                                                                                             // 244
  if (isFunction(listeners)) {                                                                               // 245
    this.removeListener(type, listeners);                                                                    // 246
  } else if (listeners) {                                                                                    // 247
    // LIFO order                                                                                            // 248
    while (listeners.length)                                                                                 // 249
      this.removeListener(type, listeners[listeners.length - 1]);                                            // 250
  }                                                                                                          // 251
  delete this._events[type];                                                                                 // 252
                                                                                                             // 253
  return this;                                                                                               // 254
};                                                                                                           // 255
                                                                                                             // 256
EventEmitter.prototype.listeners = function(type) {                                                          // 257
  var ret;                                                                                                   // 258
  if (!this._events || !this._events[type])                                                                  // 259
    ret = [];                                                                                                // 260
  else if (isFunction(this._events[type]))                                                                   // 261
    ret = [this._events[type]];                                                                              // 262
  else                                                                                                       // 263
    ret = this._events[type].slice();                                                                        // 264
  return ret;                                                                                                // 265
};                                                                                                           // 266
                                                                                                             // 267
EventEmitter.prototype.listenerCount = function(type) {                                                      // 268
  if (this._events) {                                                                                        // 269
    var evlistener = this._events[type];                                                                     // 270
                                                                                                             // 271
    if (isFunction(evlistener))                                                                              // 272
      return 1;                                                                                              // 273
    else if (evlistener)                                                                                     // 274
      return evlistener.length;                                                                              // 275
  }                                                                                                          // 276
  return 0;                                                                                                  // 277
};                                                                                                           // 278
                                                                                                             // 279
EventEmitter.listenerCount = function(emitter, type) {                                                       // 280
  return emitter.listenerCount(type);                                                                        // 281
};                                                                                                           // 282
                                                                                                             // 283
function isFunction(arg) {                                                                                   // 284
  return typeof arg === 'function';                                                                          // 285
}                                                                                                            // 286
                                                                                                             // 287
function isNumber(arg) {                                                                                     // 288
  return typeof arg === 'number';                                                                            // 289
}                                                                                                            // 290
                                                                                                             // 291
function isObject(arg) {                                                                                     // 292
  return typeof arg === 'object' && arg !== null;                                                            // 293
}                                                                                                            // 294
                                                                                                             // 295
function isUndefined(arg) {                                                                                  // 296
  return arg === void 0;                                                                                     // 297
}                                                                                                            // 298
                                                                                                             // 299
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{"extensions":[".js",".json"]});
var exports = require("./node_modules/meteor/modules/client.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package.modules = exports, {
  meteorInstall: meteorInstall,
  Buffer: Buffer,
  process: process
});

})();
