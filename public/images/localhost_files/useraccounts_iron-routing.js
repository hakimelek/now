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
var check = Package.check.check;
var Match = Package.check.Match;
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
var _ = Package.underscore._;
var AccountsTemplates = Package['useraccounts:core'].AccountsTemplates;
var Iron = Package['iron:core'].Iron;
var Accounts = Package['accounts-base'].Accounts;
var T9n = Package['softwarerero:accounts-t9n'].T9n;
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_iron-routing/lib/core.js                                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
/* global                                                                                                        // 1
  AccountsTemplates: false                                                                                       // 2
*/                                                                                                               // 3
'use strict';                                                                                                    // 4
                                                                                                                 // 5
// ---------------------------------------------------------------------------------                             // 6
                                                                                                                 // 7
// Patterns for methods" parameters                                                                              // 8
                                                                                                                 // 9
// ---------------------------------------------------------------------------------                             // 10
                                                                                                                 // 11
// Route configuration pattern to be checked with check                                                          // 12
var ROUTE_PAT = {                                                                                                // 13
  name: Match.Optional(String),                                                                                  // 14
  path: Match.Optional(String),                                                                                  // 15
  template: Match.Optional(String),                                                                              // 16
  layoutTemplate: Match.Optional(String),                                                                        // 17
  redirect: Match.Optional(Match.OneOf(String, Match.Where(_.isFunction))),                                      // 18
};                                                                                                               // 19
                                                                                                                 // 20
/*                                                                                                               // 21
  Routes configuration can be done by calling AccountsTemplates.configureRoute with the route name and the       // 22
  following options in a separate object. E.g. AccountsTemplates.configureRoute("gingIn", option);               // 23
    name:           String (optional). A unique route"s name to be passed to iron-router                         // 24
    path:           String (optional). A unique route"s path to be passed to iron-router                         // 25
    template:       String (optional). The name of the template to be rendered                                   // 26
    layoutTemplate: String (optional). The name of the layout to be used                                         // 27
    redirect:       String (optional). The name of the route (or its path) where to redirect after form submit   // 28
*/                                                                                                               // 29
                                                                                                                 // 30
                                                                                                                 // 31
// Allowed routes along with theirs default configuration values                                                 // 32
AccountsTemplates.ROUTE_DEFAULT = {                                                                              // 33
  changePwd:      { name: "atChangePwd",      path: "/change-password"},                                         // 34
  enrollAccount:  { name: "atEnrollAccount",  path: "/enroll-account"},                                          // 35
  ensureSignedIn: { name: "atEnsureSignedIn", path: null},                                                       // 36
  forgotPwd:      { name: "atForgotPwd",      path: "/forgot-password"},                                         // 37
  resetPwd:       { name: "atResetPwd",       path: "/reset-password"},                                          // 38
  signIn:         { name: "atSignIn",         path: "/sign-in"},                                                 // 39
  signUp:         { name: "atSignUp",         path: "/sign-up"},                                                 // 40
  verifyEmail:    { name: "atVerifyEmail",    path: "/verify-email"},                                            // 41
  resendVerificationEmail: { name: "atResendVerificationEmail", path: "/send-again"},                            // 42
};                                                                                                               // 43
                                                                                                                 // 44
                                                                                                                 // 45
// Current configuration values                                                                                  // 46
// Redirects                                                                                                     // 47
AccountsTemplates.options.homeRoutePath = "/";                                                                   // 48
AccountsTemplates.options.redirectTimeout = 2000; // 2 seconds                                                   // 49
                                                                                                                 // 50
// Known routes used to filter out previous path for redirects...                                                // 51
AccountsTemplates.knownRoutes = [];                                                                              // 52
                                                                                                                 // 53
// Configured routes                                                                                             // 54
AccountsTemplates.routes = {};                                                                                   // 55
                                                                                                                 // 56
AccountsTemplates.configureRoute = function(route, options) {                                                    // 57
  check(route, String);                                                                                          // 58
  check(options, Match.OneOf(undefined, Match.ObjectIncluding(ROUTE_PAT)));                                      // 59
  options = _.clone(options);                                                                                    // 60
  // Route Configuration can be done only before initialization                                                  // 61
  if (this._initialized) {                                                                                       // 62
    throw new Error("Route Configuration can be done only before AccountsTemplates.init!");                      // 63
  }                                                                                                              // 64
  // Only allowed routes can be configured                                                                       // 65
  if (!(route in this.ROUTE_DEFAULT)) {                                                                          // 66
    throw new Error("Unknown Route!");                                                                           // 67
  }                                                                                                              // 68
  // Allow route configuration only once                                                                         // 69
  if (route in this.routes) {                                                                                    // 70
    throw new Error("Route already configured!");                                                                // 71
  }                                                                                                              // 72
                                                                                                                 // 73
  // Possibly adds a initial / to the provided path                                                              // 74
  if (options && options.path && options.path[0] !== "/") {                                                      // 75
    options.path = "/" + options.path;                                                                           // 76
  }                                                                                                              // 77
  // Updates the current configuration                                                                           // 78
  options = _.defaults(options || {}, this.ROUTE_DEFAULT[route]);                                                // 79
                                                                                                                 // 80
  this.routes[route] = options;                                                                                  // 81
  // Known routes are used to filter out previous path for redirects...                                          // 82
  AccountsTemplates.knownRoutes.push(options.path);                                                              // 83
                                                                                                                 // 84
  if (Meteor.isServer){                                                                                          // 85
    // Configures "reset password" email link                                                                    // 86
    if (route === "resetPwd"){                                                                                   // 87
      var resetPwdPath = options.path.substr(1);                                                                 // 88
      Accounts.urls.resetPassword = function(token){                                                             // 89
        return Meteor.absoluteUrl(resetPwdPath + "/" + token);                                                   // 90
      };                                                                                                         // 91
    }                                                                                                            // 92
    // Configures "enroll account" email link                                                                    // 93
    if (route === "enrollAccount"){                                                                              // 94
      var enrollAccountPath = options.path.substr(1);                                                            // 95
      Accounts.urls.enrollAccount = function(token){                                                             // 96
        return Meteor.absoluteUrl(enrollAccountPath + "/" + token);                                              // 97
      };                                                                                                         // 98
    }                                                                                                            // 99
    // Configures "verify email" email link                                                                      // 100
    if (route === "verifyEmail"){                                                                                // 101
      var verifyEmailPath = options.path.substr(1);                                                              // 102
      Accounts.urls.verifyEmail = function(token){                                                               // 103
        return Meteor.absoluteUrl(verifyEmailPath + "/" + token);                                                // 104
      };                                                                                                         // 105
    }                                                                                                            // 106
  }                                                                                                              // 107
                                                                                                                 // 108
  if (route === "ensureSignedIn") {                                                                              // 109
    return;                                                                                                      // 110
  }                                                                                                              // 111
  if (route === "changePwd" && !AccountsTemplates.options.enablePasswordChange) {                                // 112
    throw new Error("changePwd route configured but enablePasswordChange set to false!");                        // 113
  }                                                                                                              // 114
  if (route === "forgotPwd" && !AccountsTemplates.options.showForgotPasswordLink) {                              // 115
    throw new Error("forgotPwd route configured but showForgotPasswordLink set to false!");                      // 116
  }                                                                                                              // 117
  if (route === "signUp" && AccountsTemplates.options.forbidClientAccountCreation) {                             // 118
    throw new Error("signUp route configured but forbidClientAccountCreation set to true!");                     // 119
  }                                                                                                              // 120
                                                                                                                 // 121
  // Determines the default layout to be used in case no specific one is specified for single routes             // 122
  var defaultLayout = AccountsTemplates.options.defaultLayout || Router.options.layoutTemplate;                  // 123
                                                                                                                 // 124
  var name = options.name; // Default provided...                                                                // 125
  var path = options.path; // Default provided...                                                                // 126
  var template = options.template || "fullPageAtForm";                                                           // 127
  var layoutTemplate = options.layoutTemplate || defaultLayout;                                                  // 128
  var additionalOptions = _.omit(options, [                                                                      // 129
    "layoutTemplate", "name", "path", "redirect", "template"                                                     // 130
  ]);                                                                                                            // 131
                                                                                                                 // 132
  // Possibly adds token parameter                                                                               // 133
  if (_.contains(["enrollAccount", "resetPwd", "verifyEmail"], route)){                                          // 134
    path += "/:paramToken";                                                                                      // 135
    if (route === "verifyEmail") {                                                                               // 136
      Router.route(path, _.extend(additionalOptions, {                                                           // 137
        name: name,                                                                                              // 138
        template: template,                                                                                      // 139
        layoutTemplate: layoutTemplate,                                                                          // 140
        onRun: function() {                                                                                      // 141
          AccountsTemplates.setState(route);                                                                     // 142
          AccountsTemplates.setDisabled(true);                                                                   // 143
          var token = this.params.paramToken;                                                                    // 144
          Accounts.verifyEmail(token, function(error){                                                           // 145
            AccountsTemplates.setDisabled(false);                                                                // 146
            AccountsTemplates.submitCallback(error, route, function(){                                           // 147
              AccountsTemplates.state.form.set("result", AccountsTemplates.texts.info.emailVerified);            // 148
            });                                                                                                  // 149
          });                                                                                                    // 150
                                                                                                                 // 151
          this.next();                                                                                           // 152
        },                                                                                                       // 153
        onStop: function() {                                                                                     // 154
          AccountsTemplates.clearState();                                                                        // 155
        },                                                                                                       // 156
      }));                                                                                                       // 157
    }                                                                                                            // 158
    else {                                                                                                       // 159
      Router.route(path, _.extend(additionalOptions, {                                                           // 160
        name: name,                                                                                              // 161
        template: template,                                                                                      // 162
        layoutTemplate: layoutTemplate,                                                                          // 163
        onBeforeAction: function() {                                                                             // 164
          AccountsTemplates.paramToken = this.params.paramToken;                                                 // 165
          AccountsTemplates.setState(route);                                                                     // 166
          this.next();                                                                                           // 167
        },                                                                                                       // 168
        onStop: function() {                                                                                     // 169
          AccountsTemplates.clearState();                                                                        // 170
          AccountsTemplates.paramToken = null;                                                                   // 171
        }                                                                                                        // 172
      }));                                                                                                       // 173
    }                                                                                                            // 174
  }                                                                                                              // 175
  else {                                                                                                         // 176
    Router.route(path, _.extend(additionalOptions, {                                                             // 177
      name: name,                                                                                                // 178
      template: template,                                                                                        // 179
      layoutTemplate: layoutTemplate,                                                                            // 180
      onBeforeAction: function() {                                                                               // 181
        var redirect = false;                                                                                    // 182
        if (route === 'changePwd') {                                                                             // 183
          if (!Meteor.loggingIn() && !Meteor.userId()) {                                                         // 184
            redirect = true;                                                                                     // 185
          }                                                                                                      // 186
        }                                                                                                        // 187
        else if (Meteor.userId()) {                                                                              // 188
          redirect = true;                                                                                       // 189
        }                                                                                                        // 190
        if (redirect) {                                                                                          // 191
          AccountsTemplates.postSubmitRedirect(route);                                                           // 192
          this.stop();                                                                                           // 193
        }                                                                                                        // 194
        else {                                                                                                   // 195
          AccountsTemplates.setState(route);                                                                     // 196
          this.next();                                                                                           // 197
        }                                                                                                        // 198
      },                                                                                                         // 199
      onStop: function() {                                                                                       // 200
        AccountsTemplates.clearState();                                                                          // 201
      }                                                                                                          // 202
    }));                                                                                                         // 203
  }                                                                                                              // 204
};                                                                                                               // 205
                                                                                                                 // 206
                                                                                                                 // 207
AccountsTemplates.getRouteName = function(route) {                                                               // 208
  if (route in this.routes) {                                                                                    // 209
    return this.routes[route].name;                                                                              // 210
  }                                                                                                              // 211
  return null;                                                                                                   // 212
};                                                                                                               // 213
                                                                                                                 // 214
AccountsTemplates.getRoutePath = function(route) {                                                               // 215
  if (route in this.routes) {                                                                                    // 216
    return this.routes[route].path;                                                                              // 217
  }                                                                                                              // 218
  return "#";                                                                                                    // 219
};                                                                                                               // 220
                                                                                                                 // 221
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_iron-routing/lib/client.js                                                              //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
/* global                                                                                                        // 1
  AccountsTemplates: false,                                                                                      // 2
  grecaptcha: false,                                                                                             // 3
  Iron: false,                                                                                                   // 4
  Router: false                                                                                                  // 5
*/                                                                                                               // 6
'use strict';                                                                                                    // 7
                                                                                                                 // 8
                                                                                                                 // 9
// Previous path used for redirect after form submit                                                             // 10
AccountsTemplates._prevPath = null;                                                                              // 11
                                                                                                                 // 12
// Possibly keeps reference to the handle for the timed out redirect                                             // 13
// set on some routes                                                                                            // 14
AccountsTemplates.timedOutRedirect = null;                                                                       // 15
                                                                                                                 // 16
                                                                                                                 // 17
AccountsTemplates.clearState = function() {                                                                      // 18
  _.each(this._fields, function(field){                                                                          // 19
    field.clearStatus();                                                                                         // 20
  });                                                                                                            // 21
  var form = this.state.form;                                                                                    // 22
  form.set('error', null);                                                                                       // 23
  form.set('result', null);                                                                                      // 24
  form.set('message', null);                                                                                     // 25
                                                                                                                 // 26
  AccountsTemplates.setDisabled(false);                                                                          // 27
                                                                                                                 // 28
  // Possibly clears timed out redirects                                                                         // 29
  if (AccountsTemplates.timedOutRedirect !== null) {                                                             // 30
    Meteor.clearTimeout(AccountsTemplates.timedOutRedirect);                                                     // 31
    AccountsTemplates.timedOutRedirect = null;                                                                   // 32
  }                                                                                                              // 33
};                                                                                                               // 34
                                                                                                                 // 35
// Getter for previous route's path                                                                              // 36
AccountsTemplates.getPrevPath = function() {                                                                     // 37
    return this._prevPath;                                                                                       // 38
};                                                                                                               // 39
                                                                                                                 // 40
// Setter for previous route's path                                                                              // 41
AccountsTemplates.setPrevPath = function(newPath) {                                                              // 42
    check(newPath, String);                                                                                      // 43
    this._prevPath = newPath;                                                                                    // 44
};                                                                                                               // 45
                                                                                                                 // 46
var ensureSignedIn = function() {                                                                                // 47
  if (!Meteor.userId()) {                                                                                        // 48
    Tracker.nonreactive(function () {                                                                            // 49
      AccountsTemplates.setPrevPath(Router.current().url);                                                       // 50
    });                                                                                                          // 51
    AccountsTemplates.setState(AccountsTemplates.options.defaultState, function(){                               // 52
      var err = AccountsTemplates.texts.errors.mustBeLoggedIn;                                                   // 53
      AccountsTemplates.state.form.set('error', [err]);                                                          // 54
    });                                                                                                          // 55
    AccountsTemplates.avoidRedirect = true;                                                                      // 56
    // render the login template but keep the url in the browser the same                                        // 57
                                                                                                                 // 58
    var options = AccountsTemplates.routes.ensureSignedIn;                                                       // 59
                                                                                                                 // 60
    // Determines the template to be rendered in case no specific one was configured for ensureSignedIn          // 61
    var signInRouteTemplate = AccountsTemplates.routes.signIn && AccountsTemplates.routes.signIn.template;       // 62
    var template = (options && options.template) || signInRouteTemplate || 'fullPageAtForm';                     // 63
                                                                                                                 // 64
    // Determines the layout to be used in case no specific one was configured for ensureSignedIn                // 65
    var defaultLayout = AccountsTemplates.options.defaultLayout || Router.options.layoutTemplate;                // 66
    var layoutTemplate = (options && options.layoutTemplate) || defaultLayout;                                   // 67
                                                                                                                 // 68
    this.layout(layoutTemplate);                                                                                 // 69
    this.render(template);                                                                                       // 70
    this.renderRegions();                                                                                        // 71
  } else {                                                                                                       // 72
    AccountsTemplates.clearError();                                                                              // 73
    this.next();                                                                                                 // 74
  }                                                                                                              // 75
};                                                                                                               // 76
                                                                                                                 // 77
AccountsTemplates.ensureSignedIn = function() {                                                                  // 78
  console.warn(                                                                                                  // 79
    '[UserAccounts] AccountsTemplates.ensureSignedIn will be deprecated soon, please use the plugin version\n' +
    '               see https://github.com/meteor-useraccounts/core/blob/master/Guide.md#content-protection'     // 81
  );                                                                                                             // 82
  ensureSignedIn.call(this);                                                                                     // 83
};                                                                                                               // 84
                                                                                                                 // 85
                                                                                                                 // 86
Iron.Router.plugins.ensureSignedIn = function (router, options) {                                                // 87
  // this loading plugin just creates an onBeforeAction hook                                                     // 88
  router.onRun(function(){                                                                                       // 89
    if (Meteor.loggingIn()) {                                                                                    // 90
        this.renderRegions();                                                                                    // 91
    } else {                                                                                                     // 92
        this.next();                                                                                             // 93
    }                                                                                                            // 94
  }, options);                                                                                                   // 95
                                                                                                                 // 96
  router.onBeforeAction(                                                                                         // 97
    ensureSignedIn,                                                                                              // 98
    options                                                                                                      // 99
  );                                                                                                             // 100
                                                                                                                 // 101
  router.onStop(function(){                                                                                      // 102
    AccountsTemplates.clearError();                                                                              // 103
  });                                                                                                            // 104
};                                                                                                               // 105
                                                                                                                 // 106
                                                                                                                 // 107
                                                                                                                 // 108
// Stores previous path on path change...                                                                        // 109
Router.onStop(function() {                                                                                       // 110
  Tracker.nonreactive(function () {                                                                              // 111
    var currentPath = Router.current().url;                                                                      // 112
    var currentPathClean = currentPath.replace(/^\/+|\/+$/gm,'');                                                // 113
    var isKnownRoute = _.map(AccountsTemplates.knownRoutes, function(path){                                      // 114
      if (!path) {                                                                                               // 115
        return false;                                                                                            // 116
      }                                                                                                          // 117
      path = path.replace(/^\/+|\/+$/gm,'');                                                                     // 118
      var known = RegExp(path).test(currentPathClean);                                                           // 119
      return known;                                                                                              // 120
    });                                                                                                          // 121
    if (!_.some(isKnownRoute)) {                                                                                 // 122
      AccountsTemplates.setPrevPath(currentPath);                                                                // 123
    }                                                                                                            // 124
    AccountsTemplates.avoidRedirect = false;                                                                     // 125
  });                                                                                                            // 126
});                                                                                                              // 127
                                                                                                                 // 128
                                                                                                                 // 129
AccountsTemplates.linkClick = function(route){                                                                   // 130
  if (AccountsTemplates.disabled()) {                                                                            // 131
    return;                                                                                                      // 132
  }                                                                                                              // 133
  var path = AccountsTemplates.getRoutePath(route);                                                              // 134
  if (path === '#' || AccountsTemplates.avoidRedirect ||                                                         // 135
     (Router.current().route && path === Router.current().route.path())) {                                       // 136
    AccountsTemplates.setState(route);                                                                           // 137
  }                                                                                                              // 138
  else {                                                                                                         // 139
    Meteor.defer(function(){                                                                                     // 140
      Router.go(path);                                                                                           // 141
    });                                                                                                          // 142
  }                                                                                                              // 143
                                                                                                                 // 144
  var firstVisibleInput = _.find(this.getFields(), function(f){                                                  // 145
    return _.contains(f.visible, route);                                                                         // 146
  });                                                                                                            // 147
  if (firstVisibleInput) {                                                                                       // 148
    $('input#at-field-' + firstVisibleInput._id).focus();                                                        // 149
  }                                                                                                              // 150
};                                                                                                               // 151
                                                                                                                 // 152
AccountsTemplates.logout = function(){                                                                           // 153
  var onLogoutHook = AccountsTemplates.options.onLogoutHook;                                                     // 154
  var homeRoutePath = AccountsTemplates.options.homeRoutePath;                                                   // 155
  Meteor.logout(function(){                                                                                      // 156
    if (onLogoutHook) {                                                                                          // 157
      onLogoutHook();                                                                                            // 158
    }                                                                                                            // 159
    else if (homeRoutePath) {                                                                                    // 160
      Router.go(homeRoutePath);                                                                                  // 161
    }                                                                                                            // 162
  });                                                                                                            // 163
};                                                                                                               // 164
                                                                                                                 // 165
AccountsTemplates.postSubmitRedirect = function(route){                                                          // 166
  if (AccountsTemplates.avoidRedirect) {                                                                         // 167
    AccountsTemplates.avoidRedirect = false;                                                                     // 168
  }                                                                                                              // 169
  else {                                                                                                         // 170
    var nextPath = AccountsTemplates.routes[route] && AccountsTemplates.routes[route].redirect;                  // 171
    if (nextPath){                                                                                               // 172
      if (_.isFunction(nextPath)) {                                                                              // 173
        nextPath();                                                                                              // 174
      }                                                                                                          // 175
      else {                                                                                                     // 176
        Router.go(nextPath);                                                                                     // 177
      }                                                                                                          // 178
    }else{                                                                                                       // 179
      var previousPath = AccountsTemplates.getPrevPath();                                                        // 180
      if (previousPath && Router.current().route.path() !== previousPath) {                                      // 181
        Router.go(previousPath);                                                                                 // 182
      }                                                                                                          // 183
      else{                                                                                                      // 184
        var homeRoutePath = AccountsTemplates.options.homeRoutePath;                                             // 185
        if (homeRoutePath) {                                                                                     // 186
          Router.go(homeRoutePath);                                                                              // 187
        }                                                                                                        // 188
      }                                                                                                          // 189
    }                                                                                                            // 190
  }                                                                                                              // 191
};                                                                                                               // 192
                                                                                                                 // 193
AccountsTemplates.submitCallback = function(error, state, onSuccess){                                            // 194
                                                                                                                 // 195
  var onSubmitHook = AccountsTemplates.options.onSubmitHook;                                                     // 196
  if(onSubmitHook) {                                                                                             // 197
    onSubmitHook(error, state);                                                                                  // 198
  }                                                                                                              // 199
                                                                                                                 // 200
  if (error) {                                                                                                   // 201
    if(_.isObject(error.details)) {                                                                              // 202
      // If error.details is an object, we may try to set fields errors from it                                  // 203
      _.each(error.details, function(error, fieldId){                                                            // 204
          AccountsTemplates.getField(fieldId).setError(error);                                                   // 205
      });                                                                                                        // 206
    }                                                                                                            // 207
    else {                                                                                                       // 208
      var err = 'error.accounts.Unknown error';                                                                  // 209
      if (error.reason) {                                                                                        // 210
        err = error.reason;                                                                                      // 211
      }                                                                                                          // 212
      if (err.substring(0, 15) !== 'error.accounts.') {                                                          // 213
        err = 'error.accounts.' + err;                                                                           // 214
      }                                                                                                          // 215
      AccountsTemplates.state.form.set('error', [err]);                                                          // 216
    }                                                                                                            // 217
    AccountsTemplates.setDisabled(false);                                                                        // 218
    // Possibly resets reCaptcha form                                                                            // 219
    if (state === 'signUp' && AccountsTemplates.options.showReCaptcha) {                                         // 220
      grecaptcha.reset();                                                                                        // 221
    }                                                                                                            // 222
  }                                                                                                              // 223
  else{                                                                                                          // 224
    if (onSuccess) {                                                                                             // 225
      onSuccess();                                                                                               // 226
    }                                                                                                            // 227
                                                                                                                 // 228
    if (_.contains(['enrollAccount', 'forgotPwd', 'resetPwd', 'verifyEmail'], state)){                           // 229
      var redirectTimeout = AccountsTemplates.options.redirectTimeout;                                           // 230
      if (redirectTimeout > 0) {                                                                                 // 231
        AccountsTemplates.timedOutRedirect = Meteor.setTimeout(function(){                                       // 232
          AccountsTemplates.timedOutRedirect = null;                                                             // 233
          AccountsTemplates.setDisabled(false);                                                                  // 234
          AccountsTemplates.postSubmitRedirect(state);                                                           // 235
        }, redirectTimeout);                                                                                     // 236
      }                                                                                                          // 237
    }                                                                                                            // 238
    else if (state){                                                                                             // 239
      AccountsTemplates.setDisabled(false);                                                                      // 240
      AccountsTemplates.postSubmitRedirect(state);                                                               // 241
    }                                                                                                            // 242
  }                                                                                                              // 243
};                                                                                                               // 244
                                                                                                                 // 245
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_iron-routing/lib/templates_helpers/at_input.js                                          //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
/* global                                                                                                        // 1
  AccountsTemplates: false,                                                                                      // 2
  Router: false                                                                                                  // 3
*/                                                                                                               // 4
'use strict';                                                                                                    // 5
                                                                                                                 // 6
AccountsTemplates.atInputRendered.push(function(){                                                               // 7
  var fieldId = this.data._id;                                                                                   // 8
  var queryKey = this.data.options && this.data.options.queryKey || fieldId;                                     // 9
  var currentR = Router.current();                                                                               // 10
  var inputQueryVal = currentR && currentR.params && currentR.params.query && currentR.params.query[queryKey];   // 11
  if (inputQueryVal) {                                                                                           // 12
    this.$("input#at-field-" + fieldId).val(inputQueryVal);                                                      // 13
  }                                                                                                              // 14
});                                                                                                              // 15
                                                                                                                 // 16
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['useraccounts:iron-routing'] = {};

})();
