var require = meteorInstall({"client":{"layouts":{"loader":{"template.loader.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/layouts/loader/template.loader.js                                                                   //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("loader");                                                                               // 2
Template["loader"] = new Template("Template.loader", (function() {                                            // 3
  var view = this;                                                                                            // 4
  return HTML.SVG({                                                                                           // 5
    "class": "loader",                                                                                        // 6
    version: "1.1",                                                                                           // 7
    id: "loader-1",                                                                                           // 8
    xmlns: "http://www.w3.org/2000/svg",                                                                      // 9
    "xmlns:xlink": "http://www.w3.org/1999/xlink",                                                            // 10
    x: "0px",                                                                                                 // 11
    y: "0px",                                                                                                 // 12
    width: "40px",                                                                                            // 13
    height: "40px",                                                                                           // 14
    viewBox: "0 0 50 50",                                                                                     // 15
    style: "enable-background:new 0 0 50 50;",                                                                // 16
    "xml:space": "preserve"                                                                                   // 17
  }, "\n  ", HTML.PATH({                                                                                      // 18
    fill: "#000",                                                                                             // 19
    d: "M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
  }, "\n    ", HTML.ANIMATETRANSFORM({                                                                        // 21
    attributeType: "xml",                                                                                     // 22
    attributeName: "transform",                                                                               // 23
    type: "rotate",                                                                                           // 24
    from: "0 25 25",                                                                                          // 25
    to: "360 25 25",                                                                                          // 26
    dur: "0.6s",                                                                                              // 27
    repeatCount: "indefinite"                                                                                 // 28
  }), "\n    "), "\n  ");                                                                                     // 29
}));                                                                                                          // 30
                                                                                                              // 31
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"master_layout":{"template.master_layout.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/layouts/master_layout/template.master_layout.js                                                     //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("MasterLayout");                                                                         // 2
Template["MasterLayout"] = new Template("Template.MasterLayout", (function() {                                // 3
  var view = this;                                                                                            // 4
  return [ HTML.DIV({                                                                                         // 5
    "class": "ui secondary menu"                                                                              // 6
  }, "\n    ", HTML.DIV({                                                                                     // 7
    "class": "ui container"                                                                                   // 8
  }, "\n      ", HTML.DIV({                                                                                   // 9
    "class": "right menu"                                                                                     // 10
  }, "\n        ", Blaze.If(function() {                                                                      // 11
    return Spacebars.call(view.lookup("currentUser"));                                                        // 12
  }, function() {                                                                                             // 13
    return [ "\n          ", Blaze._TemplateWith(function() {                                                 // 14
      return {                                                                                                // 15
        route: Spacebars.call("settings")                                                                     // 16
      };                                                                                                      // 17
    }, function() {                                                                                           // 18
      return Spacebars.include(view.lookupTemplate("linkTo"), function() {                                    // 19
        return [ "\n            ", HTML.I({                                                                   // 20
          "class": "ui icon black settings"                                                                   // 21
        }), "\n          " ];                                                                                 // 22
      });                                                                                                     // 23
    }), "\n        " ];                                                                                       // 24
  }, function() {                                                                                             // 25
    return [ "\n          ", Blaze.If(function() {                                                            // 26
      return Spacebars.call(view.lookup("loggingIn"));                                                        // 27
    }, function() {                                                                                           // 28
      return "\n            Logging in...\n          ";                                                       // 29
    }), "\n        " ];                                                                                       // 30
  }), "\n      "), "\n    "), "\n  "), "\n  ", HTML.DIV({                                                     // 31
    "class": "ui main container",                                                                             // 32
    style: "margin-top: 1em"                                                                                  // 33
  }, "\n    ", Spacebars.include(view.lookupTemplate("yield")), "\n  ") ];                                    // 34
}));                                                                                                          // 35
                                                                                                              // 36
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"master_layout.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/layouts/master_layout/master_layout.js                                                              //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
Template.MasterLayout.helpers({});                                                                            // 1
                                                                                                              //
Template.MasterLayout.events({                                                                                // 5
  'click [data-logout]': function () {                                                                        // 6
    function clickDataLogout(e, tmpl) {                                                                       // 6
      Meteor.logout();                                                                                        // 7
    }                                                                                                         // 8
                                                                                                              //
    return clickDataLogout;                                                                                   // 6
  }(),                                                                                                        // 6
                                                                                                              //
  'click [data-login]': function () {                                                                         // 10
    function clickDataLogin(e, tmpl) {                                                                        // 10
      Meteor.loginWithMeteorDeveloperAccount();                                                               // 11
    }                                                                                                         // 12
                                                                                                              //
    return clickDataLogin;                                                                                    // 10
  }()                                                                                                         // 10
});                                                                                                           // 5
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"now":{"now":{"template.now.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/now/now/template.now.js                                                                             //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("Now");                                                                                  // 2
Template["Now"] = new Template("Template.Now", (function() {                                                  // 3
  var view = this;                                                                                            // 4
  return [ HTML.DIV({                                                                                         // 5
    "class": "ui now piled segment"                                                                           // 6
  }, "\n\n      ", HTML.FORM({                                                                                // 7
    id: "edit-now",                                                                                           // 8
    "class": "form edit-now"                                                                                  // 9
  }, "\n        ", Blaze._TemplateWith(function() {                                                           // 10
    return Spacebars.call(view.lookup("getContext"));                                                         // 11
  }, function() {                                                                                             // 12
    return Spacebars.include(view.lookupTemplate("froalaReactive"));                                          // 13
  }), "\n      "), "\n", HTML.Raw("<!--         {{{now.body}}}\n -->"), "\n  "), "\n  ", HTML.DIV({           // 14
    "class": "ui grid centered"                                                                               // 15
  }, "\n\n  ", HTML.Raw('<div class="row">\n    <button class="ui saveNewNow huge secondary button">\n      Save\n    </button>\n  </div>'), "\n\n  ", HTML.DIV({
    "class": "row"                                                                                            // 17
  }, "\n\n     ", Blaze.If(function() {                                                                       // 18
    return Spacebars.call(view.lookup("isMe"));                                                               // 19
  }, function() {                                                                                             // 20
    return [ "\n     ", HTML.H4("Embed this now in your website"), "\n\n     ", HTML.DIV({                    // 21
      "class": "ui segment codesnippet"                                                                       // 22
    }, "\n        ", HTML.DIV({                                                                               // 23
      "class": "ui bottom right attached label nospacelabel copylabel"                                        // 24
    }, "\n           ", HTML.BUTTON({                                                                         // 25
      "class": "ui icon copybutton button"                                                                    // 26
    }, "\n             ", HTML.I({                                                                            // 27
      "class": "copy icon"                                                                                    // 28
    }), "\n           "), "\n       "), "\n          ", Blaze.View("lookup:HTMLsnippet", function() {         // 29
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("HTMLsnippet")));                               // 30
    }), "\n      "), "\n     " ];                                                                             // 31
  }), "\n    "), "\n  ") ];                                                                                   // 32
}));                                                                                                          // 33
                                                                                                              // 34
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"now.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/now/now/now.js                                                                                      //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
Template.Now.events({                                                                                         // 1
  'click .saveNewNow': function () {                                                                          // 2
    function clickSaveNewNow(e, tmpl) {                                                                       // 2
      e.preventDefault();                                                                                     // 3
      var body = tmpl.$('div.froala-reactive-meteorized').froalaEditor('html.get', true);                     // 4
      Session.set('NowBody', body);                                                                           // 5
      if (Meteor.userId()) {                                                                                  // 6
        Meteor.call('saveNow', {                                                                              // 7
          body: body                                                                                          // 8
        }, function (error, response) {                                                                       // 7
          if (error) {                                                                                        // 10
            console.log('error: ', error);                                                                    // 11
          } else {                                                                                            // 12
            tmpl.$('div.froala-reactive-meteorized').froalaEditor();                                          // 13
          }                                                                                                   // 14
        });                                                                                                   // 15
      } else {                                                                                                // 16
        $('.ui.modal').modal({                                                                                // 17
          blurring: true                                                                                      // 19
        }).modal('show');                                                                                     // 18
      }                                                                                                       // 23
    }                                                                                                         // 24
                                                                                                              //
    return clickSaveNewNow;                                                                                   // 2
  }()                                                                                                         // 2
});                                                                                                           // 1
                                                                                                              //
Template.Now.helpers({                                                                                        // 27
  getContext: function () {                                                                                   // 28
    function getContext() {                                                                                   // 28
      var currentNow = Nows.findOne({}, { sort: { createdAt: -1 }, limit: 1 });                               // 29
      if (currentNow) var value = currentNow.body;                                                            // 30
                                                                                                              //
      return {                                                                                                // 33
        // Set html content                                                                                   //
        _value: value,                                                                                        // 35
        inlineMode: false,                                                                                    // 36
        placeholder: 'I am currently working on...',                                                          // 37
                                                                                                              //
        // Set Input Box height                                                                               //
        heightMin: 400,                                                                                       // 40
                                                                                                              //
        // _value: self.note,                                                                                 //
        _keepMarkers: true,                                                                                   // 43
        toolbarInline: true,                                                                                  // 44
        initOnClick: false,                                                                                   // 45
        tabSpaces: false,                                                                                     // 46
                                                                                                              //
        // FE save.before event handler function:                                                             //
        "_onsave.before": function () {                                                                       // 49
          function _onsaveBefore(e, editor) {                                                                 // 49
            var newHTML = editor.html.get(true /* keep_markers */);                                           // 50
            // Do something to update the edited value                                                        //
            // if (!_.isEqual(newHTML, self.note.body)) {                                                     //
            //   Meteor.call('saveNote', { body: newHTML })                                                   //
            // }                                                                                              //
            return false; // Stop Froala Editor from POSTing to the Save URL                                  // 55
          }                                                                                                   // 56
                                                                                                              //
          return _onsaveBefore;                                                                               // 49
        }()                                                                                                   // 49
      };                                                                                                      // 33
    }                                                                                                         // 58
                                                                                                              //
    return getContext;                                                                                        // 28
  }(),                                                                                                        // 28
                                                                                                              //
  now: function () {                                                                                          // 60
    function now() {                                                                                          // 27
      var currentNow = Nows.findOne({}, { sort: { createdAt: -1 }, limit: 1 });                               // 61
      if (currentNow) return currentNow.body;else return 'loading';                                           // 62
    }                                                                                                         // 66
                                                                                                              //
    return now;                                                                                               // 27
  }(),                                                                                                        // 27
                                                                                                              //
                                                                                                              //
  now: function () {                                                                                          // 68
    function now() {                                                                                          // 68
      return Nows.findOne({}, { sort: { createdAt: -1 }, limit: 1 });                                         // 69
    }                                                                                                         // 70
                                                                                                              //
    return now;                                                                                               // 68
  }(),                                                                                                        // 68
                                                                                                              //
  isMe: function () {                                                                                         // 72
    function isMe() {                                                                                         // 72
      return this._id === Meteor.userId();                                                                    // 73
    }                                                                                                         // 74
                                                                                                              //
    return isMe;                                                                                              // 72
  }(),                                                                                                        // 72
                                                                                                              //
  username: function () {                                                                                     // 76
    function username() {                                                                                     // 76
      return Router.current().params.username;                                                                // 77
    }                                                                                                         // 78
                                                                                                              //
    return username;                                                                                          // 76
  }(),                                                                                                        // 76
                                                                                                              //
  HTMLsnippet: function () {                                                                                  // 80
    function HTMLsnippet() {                                                                                  // 27
      var code = '<script src="https://goo.gl/WqhYHa"></script><div id="now" data-username="' + Router.current().params.username + '"></div>';
      Session.set('copyboard', code);                                                                         // 82
      var result = Prism.highlight(code, Prism.languages.markup);                                             // 83
      return result;                                                                                          // 84
    }                                                                                                         // 85
                                                                                                              //
    return HTMLsnippet;                                                                                       // 27
  }()                                                                                                         // 27
});                                                                                                           // 27
                                                                                                              //
Template.Now.onCreated(function () {                                                                          // 90
  var self = this;                                                                                            // 91
  self.autorun(function () {                                                                                  // 92
    var controller = Router.current();                                                                        // 93
    var user = Meteor.users.findOne({ "username": controller.params.username });                              // 94
                                                                                                              //
    if (user) var userId = user._id;                                                                          // 96
                                                                                                              //
    self.subscribe('UserNow', userId);                                                                        // 99
  });                                                                                                         // 100
});                                                                                                           // 101
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"now_history":{"template.now_history.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/now/now_history/template.now_history.js                                                             //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("NowHistory");                                                                           // 2
Template["NowHistory"] = new Template("Template.NowHistory", (function() {                                    // 3
  var view = this;                                                                                            // 4
  return [ HTML.DIV(Blaze.View("lookup:timestamp", function() {                                               // 5
    return Spacebars.mustache(view.lookup("timestamp"));                                                      // 6
  })), HTML.Raw('\n\n  <div class="ui two top attached buttons">\n    <div class="ui previousNow button">Back</div>\n    <div class="ui followingNow button">Forward</div>\n  </div>\n  '), HTML.DIV({
    "class": "ui attached segment"                                                                            // 8
  }, "\n      ", HTML.DIV({                                                                                   // 9
    "class": "ui items"                                                                                       // 10
  }, "\n        ", HTML.DIV({                                                                                 // 11
    "class": "now item"                                                                                       // 12
  }, "\n          ", HTML.DIV({                                                                               // 13
    "class": "content"                                                                                        // 14
  }, "\n            ", HTML.DIV("\n\n                ", HTML.P("\n                  ", Blaze.View("lookup:body", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("body")));                                        // 16
  }), "\n                "), "\n\n\n            "), "\n          "), "\n        "), "\n      "), "\n\n  ") ];
}));                                                                                                          // 18
                                                                                                              // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"now_history.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/now/now_history/now_history.js                                                                      //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
Template.NowHistory.helpers({                                                                                 // 1
  timestamp: function () {                                                                                    // 2
    function timestamp() {                                                                                    // 2
      var now = this;                                                                                         // 3
      return moment(now.createdAt).format('MMMM Do YYYY, h:mm:ss a');                                         // 4
    }                                                                                                         // 5
                                                                                                              //
    return timestamp;                                                                                         // 2
  }()                                                                                                         // 2
});                                                                                                           // 1
                                                                                                              //
Template.NowHistory.events({                                                                                  // 8
  "click .followingNow": function () {                                                                        // 9
    function clickFollowingNow() {}                                                                           // 9
                                                                                                              //
    return clickFollowingNow;                                                                                 // 9
  }(),                                                                                                        // 9
                                                                                                              //
  "click .previousNow": function () {                                                                         // 13
    function clickPreviousNow() {}                                                                            // 13
                                                                                                              //
    return clickPreviousNow;                                                                                  // 13
  }()                                                                                                         // 13
});                                                                                                           // 8
                                                                                                              //
Template.NowHistory.onCreated(function () {});                                                                // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"user":{"user":{"template.user.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/user/user/template.user.js                                                                          //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("User");                                                                                 // 2
Template["User"] = new Template("Template.User", (function() {                                                // 3
  var view = this;                                                                                            // 4
  return HTML.DIV({                                                                                           // 5
    "class": "ui text container"                                                                              // 6
  }, "\n\n      ", Spacebars.With(function() {                                                                // 7
    return Spacebars.call(view.lookup("userProfile"));                                                        // 8
  }, function() {                                                                                             // 9
    return [ "\n      ", HTML.DIV({                                                                           // 10
      "class": "ui items"                                                                                     // 11
    }, "\n        ", HTML.DIV({                                                                               // 12
      "class": "item"                                                                                         // 13
    }, "\n          ", HTML.DIV({                                                                             // 14
      "class": "ui tiny circular image"                                                                       // 15
    }, "\n           ", HTML.IMG({                                                                            // 16
      src: "http://photon.hypb.st/hypetrak.com/images/2012/06/kool-ad-300x300.jpg"                            // 17
    }), "\n          "), "\n        "), "\n        ", HTML.DIV({                                              // 18
      "class": "item"                                                                                         // 19
    }, "\n          ", HTML.DIV({                                                                             // 20
      "class": "content"                                                                                      // 21
    }, "\n            ", HTML.H1({                                                                            // 22
      "class": "header"                                                                                       // 23
    }, "\n              ", Blaze.View("lookup:profile.firstName", function() {                                // 24
      return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "firstName"));                          // 25
    }), "\n            "), "\n            ", HTML.DIV({                                                       // 26
      "class": "description"                                                                                  // 27
    }, "\n              ", HTML.P("\n              ", Blaze._TemplateWith(function() {                        // 28
      return {                                                                                                // 29
        route: Spacebars.call("user")                                                                         // 30
      };                                                                                                      // 31
    }, function() {                                                                                           // 32
      return Spacebars.include(view.lookupTemplate("linkTo"), function() {                                    // 33
        return [ "\n                  @", Blaze.View("lookup:username", function() {                          // 34
          return Spacebars.mustache(view.lookup("username"));                                                 // 35
        }), "\n              " ];                                                                             // 36
      });                                                                                                     // 37
    }), "\n              ", Blaze.If(function() {                                                             // 38
      return Spacebars.call(view.lookup("isMe"));                                                             // 39
    }, function() {                                                                                           // 40
      return [ "\n                ", Blaze._TemplateWith(function() {                                         // 41
        return {                                                                                              // 42
          route: Spacebars.call("user.edit")                                                                  // 43
        };                                                                                                    // 44
      }, function() {                                                                                         // 45
        return Spacebars.include(view.lookupTemplate("linkTo"), function() {                                  // 46
          return [ "\n                  ", HTML.I({                                                           // 47
            "class": "write square icon"                                                                      // 48
          }), "\n                " ];                                                                         // 49
        });                                                                                                   // 50
      }), "\n              " ];                                                                               // 51
    }), "\n              "), "\n            "), "\n          "), "\n        "), "\n      "), "\n      " ];    // 52
  }), "\n\n\n        ", Spacebars.include(view.lookupTemplate("Now")), "\n      ");                           // 53
}));                                                                                                          // 54
                                                                                                              // 55
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"user.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/user/user/user.js                                                                                   //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
Template.User.events({});                                                                                     // 1
                                                                                                              //
Template.User.helpers({                                                                                       // 4
  isMe: function () {                                                                                         // 5
    function isMe() {                                                                                         // 5
      return this._id === Meteor.userId();                                                                    // 6
    }                                                                                                         // 7
                                                                                                              //
    return isMe;                                                                                              // 5
  }(),                                                                                                        // 5
                                                                                                              //
  timestamp: function () {                                                                                    // 9
    function timestamp() {                                                                                    // 9
      var comment = this;                                                                                     // 10
      return moment(comment.createdAt).fromNow();                                                             // 11
    }                                                                                                         // 12
                                                                                                              //
    return timestamp;                                                                                         // 9
  }(),                                                                                                        // 9
                                                                                                              //
  userProfile: function () {                                                                                  // 14
    function userProfile() {                                                                                  // 14
      var controller = Router.current();                                                                      // 15
      return Meteor.users.findOne({ 'username': controller.params.username });                                // 16
    }                                                                                                         // 17
                                                                                                              //
    return userProfile;                                                                                       // 14
  }()                                                                                                         // 14
});                                                                                                           // 4
                                                                                                              //
Template.User.onCreated(function () {                                                                         // 20
  var self = this;                                                                                            // 21
  self.autorun(function () {});                                                                               // 22
});                                                                                                           // 24
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"settings":{"settings.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/user/settings/settings.js                                                                           //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"accounts":{"template.account.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/accounts/template.account.js                                                                        //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("account");                                                                              // 2
Template["account"] = new Template("Template.account", (function() {                                          // 3
  var view = this;                                                                                            // 4
  return HTML.DIV({                                                                                           // 5
    "class": "signup_container"                                                                               // 6
  }, "\n    ", Spacebars.include(view.lookupTemplate("signup")), "\n	");                                      // 7
}));                                                                                                          // 8
                                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.signin.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/accounts/template.signin.js                                                                         //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("signin");                                                                               // 2
Template["signin"] = new Template("Template.signin", (function() {                                            // 3
  var view = this;                                                                                            // 4
  return HTML.Raw('<div class="ui stacked segment">\n       <div class="ui two column middle aligned very relaxed stackable grid">\n      <div class="column">\n        <div class="ui form">\n         <form class="signin">\n            <div class="field">\n              <label>Email</label>\n              <div class="ui left icon input">\n                <input type="text" placeholder="Email" name="email">\n                <i class="user icon"></i>\n              </div>\n            </div>\n            <div class="field">\n              <label>Password</label>\n              <div class="ui left icon input">\n                <input type="password" placeholder="Password" name="password">\n                <i class="lock icon"></i>\n              </div>\n            </div>\n            <div class="ui buttons">\n               <button type="submit" class="ui blue submit button">Login</button>\n               <button type="button" class="ui button green signup">Create an Account</button>\n            </div>\n        </form>\n        </div>\n      </div>\n      <div class="ui vertical divider">\n        Or\n      </div>\n      <div class="center aligned column">\n        <button type="button" class="ui button facebook"><i class="icon facebook"></i> Sign in with Facebook</button>\n\n      </div>\n    </div>\n  </div>');
}));                                                                                                          // 6
                                                                                                              // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.signup.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/accounts/template.signup.js                                                                         //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("signup");                                                                               // 2
Template["signup"] = new Template("Template.signup", (function() {                                            // 3
  var view = this;                                                                                            // 4
  return HTML.Raw('<div class="ui stacked segment">\n           <div class="ui form">\n            <div class="field">\n              <div class="ui left icon input">\n                <input type="text" placeholder="Username" name="username">\n                <i class="user icon"></i>\n              </div>\n            </div>\n            <div class="field">\n              <div class="ui left icon input">\n                <input type="email" placeholder="Email" name="email">\n                <i class="mail icon"></i>\n              </div>\n            </div>\n            <div class="field">\n              <div class="ui left icon input">\n                <input type="password" placeholder="Password" name="password">\n                <i class="lock icon"></i>\n              </div>\n            </div>\n            <button type="submit" class="ui green submit button">Generate your Now Page</button>\n          </div>\n\n          <div class="ui  horizontal divider">\n           Or\n          </div>\n          <div class="center aligned column">\n              <button class="ui left attached facebook button"><i class="icon facebook"></i> Facebook</button>\n              <button class="right attached ui twitter button"><i class="icon twitter"></i> Twitter</button>\n          </div>\n  </div>');
}));                                                                                                          // 6
                                                                                                              // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"account.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/accounts/account.js                                                                                 //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
AccountsTemplates.addField({                                                                                  // 1
  _id: 'username',                                                                                            // 2
  type: 'text',                                                                                               // 3
  required: true,                                                                                             // 4
  displayName: 'Username',                                                                                    // 5
  func: function () {                                                                                         // 6
    function func(value) {                                                                                    // 6
      if (Meteor.isClient) {                                                                                  // 7
        var self = this;                                                                                      // 8
                                                                                                              //
        Meteor.call('userExists', value, function (error, userExists) {                                       // 10
          if (error) throw error;                                                                             // 11
          if (!userExists) return self.setSuccess();                                                          // 12
          self.setError(userExists);                                                                          // 13
          self.setValidating(false);                                                                          // 14
        });                                                                                                   // 15
                                                                                                              //
        return;                                                                                               // 17
      }                                                                                                       // 18
                                                                                                              //
      // Server                                                                                               //
      return Meteor.call('userExists', value);                                                                // 21
    }                                                                                                         // 22
                                                                                                              //
    return func;                                                                                              // 6
  }()                                                                                                         // 6
});                                                                                                           // 1
                                                                                                              //
AccountsTemplates.removeField('password');                                                                    // 25
AccountsTemplates.addField({                                                                                  // 26
  _id: 'password',                                                                                            // 27
  type: 'password',                                                                                           // 28
  placeholder: {                                                                                              // 29
    signUp: "At least six characters"                                                                         // 30
  },                                                                                                          // 29
  required: true,                                                                                             // 32
  minLength: 6,                                                                                               // 33
  re: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,                                                                  // 34
  errStr: 'At least 1 digit, 1 lowercase and 1 uppercase'                                                     // 35
});                                                                                                           // 26
                                                                                                              //
AccountsTemplates.configure({                                                                                 // 38
  confirmPassword: false,                                                                                     // 39
  enablePasswordChange: true                                                                                  // 40
});                                                                                                           // 38
                                                                                                              //
Template.signup.events({                                                                                      // 44
  'submit .signup': function () {                                                                             // 45
    function submitSignup(e) {                                                                                // 45
      e.preventDefault();                                                                                     // 46
      var email = event.target.email.value;                                                                   // 47
      var password = event.target.password.value;                                                             // 48
      var username = event.target.username.value;                                                             // 49
                                                                                                              //
      var user = {                                                                                            // 51
        'email': email,                                                                                       // 52
        'password': password,                                                                                 // 53
        'username': username                                                                                  // 54
      };                                                                                                      // 51
                                                                                                              //
      Accounts.createUser(user, function (error, response) {                                                  // 57
        if (error) {                                                                                          // 58
          toastr.error(error.reason, error);                                                                  // 59
        } else {                                                                                              // 61
          Router.go('/' + response);                                                                          // 63
        }                                                                                                     // 64
      });                                                                                                     // 65
    }                                                                                                         // 66
                                                                                                              //
    return submitSignup;                                                                                      // 45
  }()                                                                                                         // 45
});                                                                                                           // 44
                                                                                                              //
Template.signin.events({                                                                                      // 70
  'submit .signin': function () {                                                                             // 71
    function submitSignin(event) {                                                                            // 71
      event.preventDefault();                                                                                 // 72
      var email = event.target.email.value;                                                                   // 73
      var password = event.target.password.value;                                                             // 74
                                                                                                              //
      Meteor.loginWithPassword(email, password, function (error) {                                            // 76
        if (error) {                                                                                          // 77
          toastr.error(error.reason, error);                                                                  // 78
        }                                                                                                     // 79
        if (!error) {                                                                                         // 80
          Router.go('/dashboard');                                                                            // 81
        }                                                                                                     // 82
      });                                                                                                     // 83
    }                                                                                                         // 84
                                                                                                              //
    return submitSignin;                                                                                      // 71
  }(),                                                                                                        // 71
                                                                                                              //
  'click .signup': function () {                                                                              // 86
    function clickSignup(event) {                                                                             // 86
      event.preventDefault();                                                                                 // 87
      Router.go('/signup');                                                                                   // 88
    }                                                                                                         // 89
                                                                                                              //
    return clickSignup;                                                                                       // 86
  }(),                                                                                                        // 86
                                                                                                              //
  'click .facebook': function () {                                                                            // 91
    function clickFacebook(event) {                                                                           // 91
      Meteor.loginWithFacebook({}, function (err) {                                                           // 92
        if (err) {                                                                                            // 93
          throw new Meteor.Error("Facebook login failed");                                                    // 94
        }                                                                                                     // 95
      });                                                                                                     // 96
    }                                                                                                         // 97
                                                                                                              //
    return clickFacebook;                                                                                     // 91
  }()                                                                                                         // 91
                                                                                                              //
});                                                                                                           // 70
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"home":{"template.home.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/home/template.home.js                                                                               //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("Home");                                                                                 // 2
Template["Home"] = new Template("Template.Home", (function() {                                                // 3
  var view = this;                                                                                            // 4
  return [ HTML.DIV({                                                                                         // 5
    "class": "ui text container"                                                                              // 6
  }, "\n    ", Spacebars.include(view.lookupTemplate("Now")), "\n  "), "\n\n  ", HTML.DIV({                   // 7
    "class": "ui small modal"                                                                                 // 8
  }, "\n      ", Spacebars.include(view.lookupTemplate("account")), "\n  ") ];                                // 9
}));                                                                                                          // 10
                                                                                                              // 11
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"home.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/home/home.js                                                                                        //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"lib":{"collections":{"nows.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// lib/collections/nows.js                                                                                    //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
Nows = new Mongo.Collection('nows');                                                                          // 1
                                                                                                              //
var Schemas = {};                                                                                             // 3
                                                                                                              //
Schemas.Now = new SimpleSchema({                                                                              // 5
  _id: {                                                                                                      // 6
    type: String                                                                                              // 7
  },                                                                                                          // 6
  body: {                                                                                                     // 9
    type: String,                                                                                             // 10
    optional: true                                                                                            // 11
  },                                                                                                          // 9
  userId: {                                                                                                   // 13
    type: String,                                                                                             // 14
    optional: true                                                                                            // 15
  },                                                                                                          // 13
  createdAt: {                                                                                                // 17
    type: Date                                                                                                // 18
  }                                                                                                           // 17
});                                                                                                           // 5
                                                                                                              //
Nows.attachSchema(Schemas.Now);                                                                               // 22
                                                                                                              //
if (Meteor.isServer) {                                                                                        // 25
  Nows.allow({                                                                                                // 26
    insert: function () {                                                                                     // 27
      function insert(userId, doc) {                                                                          // 27
        return userId === doc.userId;                                                                         // 28
      }                                                                                                       // 29
                                                                                                              //
      return insert;                                                                                          // 27
    }(),                                                                                                      // 27
                                                                                                              //
    update: function () {                                                                                     // 31
      function update(userId, doc, fieldNames, modifier) {                                                    // 31
        return userId === doc.userId;                                                                         // 32
      }                                                                                                       // 33
                                                                                                              //
      return update;                                                                                          // 31
    }(),                                                                                                      // 31
                                                                                                              //
    remove: function () {                                                                                     // 35
      function remove(userId, doc) {                                                                          // 35
        return userId === doc.userId;                                                                         // 36
      }                                                                                                       // 37
                                                                                                              //
      return remove;                                                                                          // 35
    }()                                                                                                       // 35
  });                                                                                                         // 26
}                                                                                                             // 39
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"users.js":function(require){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// lib/collections/users.js                                                                                   //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
Schema = {};                                                                                                  // 1
                                                                                                              //
Schema.UserProfile = new SimpleSchema({                                                                       // 3
    firstName: {                                                                                              // 4
        type: String,                                                                                         // 5
        optional: true                                                                                        // 6
    },                                                                                                        // 4
    lastName: {                                                                                               // 8
        type: String,                                                                                         // 9
        optional: true                                                                                        // 10
    }                                                                                                         // 8
});                                                                                                           // 3
                                                                                                              //
Schema.User = new SimpleSchema({                                                                              // 14
    username: {                                                                                               // 15
        type: String,                                                                                         // 16
        // For accounts-password, either emails or username is required, but not both. It is OK to make this  //
        // optional here because the accounts-password package does its own validation.                       //
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true                                                                                        // 20
    },                                                                                                        // 15
    emails: {                                                                                                 // 22
        type: Array,                                                                                          // 23
        // For accounts-password, either emails or username is required, but not both. It is OK to make this  //
        // optional here because the accounts-password package does its own validation.                       //
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true                                                                                        // 27
    },                                                                                                        // 22
    "emails.$": {                                                                                             // 29
        type: Object                                                                                          // 30
    },                                                                                                        // 29
    "emails.$.address": {                                                                                     // 32
        type: String,                                                                                         // 33
        regEx: SimpleSchema.RegEx.Email                                                                       // 34
    },                                                                                                        // 32
    "emails.$.verified": {                                                                                    // 36
        type: Boolean                                                                                         // 37
    },                                                                                                        // 36
    // Use this registered_emails field if you are using splendido:meteor-accounts-emails-field / splendido:meteor-accounts-meld
    registered_emails: {                                                                                      // 40
        type: [Object],                                                                                       // 41
        optional: true,                                                                                       // 42
        blackbox: true                                                                                        // 43
    },                                                                                                        // 40
    createdAt: {                                                                                              // 45
        type: Date                                                                                            // 46
    },                                                                                                        // 45
    profile: {                                                                                                // 48
        type: Schema.UserProfile,                                                                             // 49
        optional: true                                                                                        // 50
    },                                                                                                        // 48
    // Make sure this services field is in your schema if you're using any of the accounts packages           //
    services: {                                                                                               // 53
        type: Object,                                                                                         // 54
        optional: true,                                                                                       // 55
        blackbox: true                                                                                        // 56
    },                                                                                                        // 53
    // Add `roles` to your schema if you use the meteor-roles package.                                        //
    // Option 1: Object type                                                                                  //
    // If you specify that type as Object, you must also specify the                                          //
    // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.                                          //
    // Example:                                                                                               //
    // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);                                          //
    // You can't mix and match adding with and without a group since                                          //
    // you will fail validation in some cases.                                                                //
    roles: {                                                                                                  // 66
        type: Object,                                                                                         // 67
        optional: true,                                                                                       // 68
        blackbox: true                                                                                        // 69
    },                                                                                                        // 66
    // Option 2: [String] type                                                                                //
    // If you are sure you will never need to use role groups, then                                           //
    // you can specify [String] as the type                                                                   //
    roles: {                                                                                                  // 74
        type: [String],                                                                                       // 75
        optional: true                                                                                        // 76
    },                                                                                                        // 74
    // In order to avoid an 'Exception in setInterval callback' from Meteor                                   //
    heartbeat: {                                                                                              // 79
        type: Date,                                                                                           // 80
        optional: true                                                                                        // 81
    }                                                                                                         // 79
});                                                                                                           // 14
                                                                                                              //
Meteor.users.attachSchema(Schema.User);                                                                       // 85
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"controller":{"home_controller.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// lib/controller/home_controller.js                                                                          //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
HomeController = RouteController.extend({                                                                     // 1
  subscriptions: function () {                                                                                // 2
    function subscriptions() {}                                                                               // 2
                                                                                                              //
    return subscriptions;                                                                                     // 2
  }(),                                                                                                        // 2
                                                                                                              //
  data: function () {                                                                                         // 5
    function data() {}                                                                                        // 5
                                                                                                              //
    return data;                                                                                              // 5
  }(),                                                                                                        // 5
                                                                                                              //
  detail: function () {                                                                                       // 8
    function detail() {                                                                                       // 8
      this.render('Home', {/* data: {} */});                                                                  // 9
    }                                                                                                         // 10
                                                                                                              //
    return detail;                                                                                            // 8
  }()                                                                                                         // 8
});                                                                                                           // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"now_controller.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// lib/controller/now_controller.js                                                                           //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
NowController = RouteController.extend({                                                                      // 1
  subscriptions: function () {                                                                                // 2
    function subscriptions() {                                                                                // 2
      this.subscribe('now', this.params._id);                                                                 // 3
    }                                                                                                         // 4
                                                                                                              //
    return subscriptions;                                                                                     // 2
  }(),                                                                                                        // 2
                                                                                                              //
  data: function () {                                                                                         // 6
    function data() {                                                                                         // 6
      return Nows.findOne({ _id: this.params._id });                                                          // 7
    }                                                                                                         // 8
                                                                                                              //
    return data;                                                                                              // 6
  }(),                                                                                                        // 6
                                                                                                              //
  detail: function () {                                                                                       // 10
    function detail() {                                                                                       // 10
      this.render('Now', {/* data: {} */});                                                                   // 11
    }                                                                                                         // 12
                                                                                                              //
    return detail;                                                                                            // 10
  }()                                                                                                         // 10
});                                                                                                           // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"user_controller.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// lib/controller/user_controller.js                                                                          //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
UserController = RouteController.extend({                                                                     // 1
  subscriptions: function () {                                                                                // 2
    function subscriptions() {                                                                                // 2
      this.subscribe('user', this.params.username);                                                           // 3
    }                                                                                                         // 4
                                                                                                              //
    return subscriptions;                                                                                     // 2
  }(),                                                                                                        // 2
                                                                                                              //
  data: function () {                                                                                         // 6
    function data() {                                                                                         // 6
      return Meteor.users.findOne({ username: this.params.username });                                        // 7
    }                                                                                                         // 8
                                                                                                              //
    return data;                                                                                              // 6
  }(),                                                                                                        // 6
                                                                                                              //
  detail: function () {                                                                                       // 10
    function detail() {                                                                                       // 10
      this.render('User', {/* data: {} */});                                                                  // 11
    }                                                                                                         // 12
                                                                                                              //
    return detail;                                                                                            // 10
  }()                                                                                                         // 10
});                                                                                                           // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"methods.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// lib/methods.js                                                                                             //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
Meteor.methods({                                                                                              // 1
  'saveNow': function () {                                                                                    // 2
    function saveNow(item) {                                                                                  // 2
      item.userId = Meteor.userId();                                                                          // 3
      item.createdAt = new Date();                                                                            // 4
                                                                                                              //
      if (item.userId) {                                                                                      // 6
        return Nows.insert(item, function (error, response) {                                                 // 7
          if (error) throw error;                                                                             // 8
        });                                                                                                   // 9
      }                                                                                                       // 10
    }                                                                                                         // 11
                                                                                                              //
    return saveNow;                                                                                           // 2
  }(),                                                                                                        // 2
                                                                                                              //
  'userExists': function () {                                                                                 // 13
    function userExists(username) {                                                                           // 13
      return !!Meteor.users.findOne({ username: username });                                                  // 14
    }                                                                                                         // 15
                                                                                                              //
    return userExists;                                                                                        // 13
  }()                                                                                                         // 13
});                                                                                                           // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"routes.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// lib/routes.js                                                                                              //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
if (Meteor.isClient) {                                                                                        // 1
  Router.configure({                                                                                          // 2
    layoutTemplate: 'MasterLayout',                                                                           // 3
    loadingTemplate: 'Loading',                                                                               // 4
    notFoundTemplate: 'NotFound'                                                                              // 5
  });                                                                                                         // 2
                                                                                                              //
  Router.route('/', {                                                                                         // 8
    name: 'home',                                                                                             // 9
    controller: 'HomeController',                                                                             // 10
    where: 'client'                                                                                           // 11
  });                                                                                                         // 8
                                                                                                              //
  AccountsTemplates.configureRoute('signIn', {                                                                // 14
    name: 'signin',                                                                                           // 15
    path: '/signin'                                                                                           // 16
  });                                                                                                         // 14
                                                                                                              //
  AccountsTemplates.configureRoute('signUp', {                                                                // 19
    name: 'signup',                                                                                           // 20
    path: '/signup'                                                                                           // 21
  });                                                                                                         // 19
                                                                                                              //
  Router.route('/:username', {                                                                                // 24
    name: 'user',                                                                                             // 25
    controller: 'UserController',                                                                             // 26
    action: 'detail',                                                                                         // 27
    where: 'client'                                                                                           // 28
  });                                                                                                         // 24
                                                                                                              //
  Router.route('/settings', {                                                                                 // 31
    name: 'settings',                                                                                         // 32
    controller: 'UserController',                                                                             // 33
    action: 'edit',                                                                                           // 34
    where: 'client'                                                                                           // 35
  });                                                                                                         // 31
                                                                                                              //
  Router.route('/:username/:_id', {                                                                           // 38
    name: 'user.nowhistory',                                                                                  // 39
    controller: 'NowController',                                                                              // 40
    action: 'nowhistory',                                                                                     // 41
    where: 'client'                                                                                           // 42
  });                                                                                                         // 38
}                                                                                                             // 47
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/layouts/loader/template.loader.js");
require("./client/layouts/master_layout/template.master_layout.js");
require("./client/now/now/template.now.js");
require("./client/now/now_history/template.now_history.js");
require("./client/user/user/template.user.js");
require("./client/accounts/template.account.js");
require("./client/accounts/template.signin.js");
require("./client/accounts/template.signup.js");
require("./client/home/template.home.js");
require("./lib/collections/nows.js");
require("./lib/collections/users.js");
require("./lib/controller/home_controller.js");
require("./lib/controller/now_controller.js");
require("./lib/controller/user_controller.js");
require("./lib/methods.js");
require("./lib/routes.js");
require("./client/layouts/master_layout/master_layout.js");
require("./client/now/now/now.js");
require("./client/now/now_history/now_history.js");
require("./client/user/settings/settings.js");
require("./client/user/user/user.js");
require("./client/accounts/account.js");
require("./client/home/home.js");