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
var AccountsTemplates = Package['useraccounts:core'].AccountsTemplates;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var Accounts = Package['accounts-base'].Accounts;
var T9n = Package['softwarerero:accounts-t9n'].T9n;
var HTML = Package.htmljs.HTML;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/template.at_error.js                                                    //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("atError");                                                                                 // 2
Template["atError"] = new Template("Template.atError", (function() {                                             // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    "class": "at-error ui large icon error message"                                                              // 6
  }, HTML.Raw('\n    <i class="warning icon"></i>\n    '), HTML.DIV({                                            // 7
    "class": "content"                                                                                           // 8
  }, "\n      ", Blaze.If(function() {                                                                           // 9
    return Spacebars.call(view.lookup("singleError"));                                                           // 10
  }, function() {                                                                                                // 11
    return [ "\n        ", Blaze.Each(function() {                                                               // 12
      return Spacebars.call(view.lookup("error"));                                                               // 13
    }, function() {                                                                                              // 14
      return [ "\n          ", HTML.P(HTML.STRONG(Blaze.View("lookup:errorText", function() {                    // 15
        return Spacebars.mustache(view.lookup("errorText"));                                                     // 16
      }))), "\n        " ];                                                                                      // 17
    }), "\n      " ];                                                                                            // 18
  }, function() {                                                                                                // 19
    return [ "\n        ", HTML.UL({                                                                             // 20
      "class": "list"                                                                                            // 21
    }, "\n          ", Blaze.Each(function() {                                                                   // 22
      return Spacebars.call(view.lookup("error"));                                                               // 23
    }, function() {                                                                                              // 24
      return [ "\n            ", HTML.LI(HTML.STRONG(Blaze.View("lookup:errorText", function() {                 // 25
        return Spacebars.mustache(view.lookup("errorText"));                                                     // 26
      }))), "\n          " ];                                                                                    // 27
    }), "\n        "), "\n      " ];                                                                             // 28
  }), "\n    "), "\n  ");                                                                                        // 29
}));                                                                                                             // 30
                                                                                                                 // 31
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/at_error.js                                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// Simply 'inherites' helpers from AccountsTemplates                                                             // 1
Template.atError.helpers(AccountsTemplates.atErrorHelpers);                                                      // 2
                                                                                                                 // 3
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/template.at_form.js                                                     //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("atForm");                                                                                  // 2
Template["atForm"] = new Template("Template.atForm", (function() {                                               // 3
  var view = this;                                                                                               // 4
  return Blaze.Unless(function() {                                                                               // 5
    return Spacebars.call(view.lookup("hide"));                                                                  // 6
  }, function() {                                                                                                // 7
    return [ "\n    ", Blaze.If(function() {                                                                     // 8
      return Spacebars.call(view.lookup("showTitle"));                                                           // 9
    }, function() {                                                                                              // 10
      return [ "\n      ", Spacebars.include(view.lookupTemplate("atTitle")), "\n      ", Blaze.If(function() {  // 11
        return Spacebars.call(view.lookup("showOauthServices"));                                                 // 12
      }, function() {                                                                                            // 13
        return [ "\n        ", HTML.DIV({                                                                        // 14
          "class": "ui divider"                                                                                  // 15
        }), "\n      " ];                                                                                        // 16
      }), "\n    " ];                                                                                            // 17
    }), "\n    ", Blaze.If(function() {                                                                          // 18
      return Spacebars.call(view.lookup("showOauthServices"));                                                   // 19
    }, function() {                                                                                              // 20
      return [ "\n      ", Spacebars.include(view.lookupTemplate("atOauth")), "\n    " ];                        // 21
    }), "\n    ", Blaze.If(function() {                                                                          // 22
      return Spacebars.call(view.lookup("showServicesSeparator"));                                               // 23
    }, function() {                                                                                              // 24
      return [ "\n      ", Spacebars.include(view.lookupTemplate("atSep")), "\n    " ];                          // 25
    }), "\n    ", Blaze.If(function() {                                                                          // 26
      return Spacebars.call(view.lookup("showPwdForm"));                                                         // 27
    }, function() {                                                                                              // 28
      return [ "\n      ", Spacebars.include(view.lookupTemplate("atPwdForm")), "\n    " ];                      // 29
    }), "\n    ", Blaze.If(function() {                                                                          // 30
      return Spacebars.call(view.lookup("showError"));                                                           // 31
    }, function() {                                                                                              // 32
      return [ "\n      ", Spacebars.include(view.lookupTemplate("atError")), "\n    " ];                        // 33
    }), "\n    ", Blaze.If(function() {                                                                          // 34
      return Spacebars.call(view.lookup("showResult"));                                                          // 35
    }, function() {                                                                                              // 36
      return [ "\n      ", Spacebars.include(view.lookupTemplate("atResult")), "\n    " ];                       // 37
    }), "\n    ", Blaze.If(function() {                                                                          // 38
      return Spacebars.call(view.lookup("showMessage"));                                                         // 39
    }, function() {                                                                                              // 40
      return [ "\n      ", Spacebars.include(view.lookupTemplate("atMessage")), "\n    " ];                      // 41
    }), "\n    ", Blaze.If(function() {                                                                          // 42
      return Spacebars.dataMustache(view.lookup("any"), view.lookup("showTermsLink"), view.lookup("showSignInLink"), view.lookup("showSignUpLink"), view.lookup("showResendVerificationEmailLink"));
    }, function() {                                                                                              // 44
      return [ "\n      ", HTML.DIV({                                                                            // 45
        "class": "ui large message"                                                                              // 46
      }, "\n        ", Blaze.If(function() {                                                                     // 47
        return Spacebars.call(view.lookup("showTermsLink"));                                                     // 48
      }, function() {                                                                                            // 49
        return [ "\n          ", Spacebars.include(view.lookupTemplate("atTermsLink")), "\n        " ];          // 50
      }), "\n        ", Blaze.If(function() {                                                                    // 51
        return Spacebars.call(view.lookup("showSignInLink"));                                                    // 52
      }, function() {                                                                                            // 53
        return [ "\n          ", Spacebars.include(view.lookupTemplate("atSigninLink")), "\n        " ];         // 54
      }), "\n        ", Blaze.If(function() {                                                                    // 55
        return Spacebars.call(view.lookup("showSignUpLink"));                                                    // 56
      }, function() {                                                                                            // 57
        return [ "\n          ", Spacebars.include(view.lookupTemplate("atSignupLink")), "\n        " ];         // 58
      }), "\n        ", Blaze.If(function() {                                                                    // 59
        return Spacebars.call(view.lookup("showResendVerificationEmailLink"));                                   // 60
      }, function() {                                                                                            // 61
        return [ "\n          ", Spacebars.include(view.lookupTemplate("atResendVerificationEmailLink")), "\n        " ];
      }), "\n      "), "\n    " ];                                                                               // 63
    }), "\n  " ];                                                                                                // 64
  });                                                                                                            // 65
}));                                                                                                             // 66
                                                                                                                 // 67
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/at_form.js                                                              //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// Simply 'inherites' helpers from AccountsTemplates                                                             // 1
Template.atForm.helpers(AccountsTemplates.atFormHelpers);                                                        // 2
                                                                                                                 // 3
// Helper for checking if you should hide message div under atPwdForm                                            // 4
// if there is nothing to display in it                                                                          // 5
Template.atForm.helpers({                                                                                        // 6
  any: function (a, b, c) {                                                                                      // 7
    return a || b || c ? true : false;                                                                           // 8
  }                                                                                                              // 9
});                                                                                                              // 10
                                                                                                                 // 11
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/template.at_input.js                                                    //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("atInput");                                                                                 // 2
Template["atInput"] = new Template("Template.atInput", (function() {                                             // 3
  var view = this;                                                                                               // 4
  return Blaze._TemplateWith(function() {                                                                        // 5
    return {                                                                                                     // 6
      template: Spacebars.call(view.lookup("templateName"))                                                      // 7
    };                                                                                                           // 8
  }, function() {                                                                                                // 9
    return Spacebars.include(function() {                                                                        // 10
      return Spacebars.call(Template.__dynamic);                                                                 // 11
    });                                                                                                          // 12
  });                                                                                                            // 13
}));                                                                                                             // 14
                                                                                                                 // 15
Template.__checkName("atTextInput");                                                                             // 16
Template["atTextInput"] = new Template("Template.atTextInput", (function() {                                     // 17
  var view = this;                                                                                               // 18
  return HTML.DIV({                                                                                              // 19
    "class": function() {                                                                                        // 20
      return [ "at-input ", Blaze.If(function() {                                                                // 21
        return Spacebars.call(view.lookup("required"));                                                          // 22
      }, function() {                                                                                            // 23
        return " required ";                                                                                     // 24
      }), " ", Blaze.If(function() {                                                                             // 25
        return Spacebars.call(view.lookup("isValidating"));                                                      // 26
      }, function() {                                                                                            // 27
        return " validating ";                                                                                   // 28
      }), " ", Blaze.If(function() {                                                                             // 29
        return Spacebars.call(view.lookup("hasError"));                                                          // 30
      }, function() {                                                                                            // 31
        return " error ";                                                                                        // 32
      }), " field" ];                                                                                            // 33
    }                                                                                                            // 34
  }, "\n    ", Blaze.If(function() {                                                                             // 35
    return Spacebars.call(view.lookup("showLabels"));                                                            // 36
  }, function() {                                                                                                // 37
    return [ "\n      ", HTML.LABEL("\n        ", Blaze.View("lookup:displayName", function() {                  // 38
      return Spacebars.mustache(view.lookup("displayName"));                                                     // 39
    }), "\n      "), "\n    " ];                                                                                 // 40
  }), "\n    ", HTML.DIV({                                                                                       // 41
    "class": function() {                                                                                        // 42
      return [ "ui fluid input icon ", Blaze.If(function() {                                                     // 43
        return Spacebars.call(view.lookup("isValidating"));                                                      // 44
      }, function() {                                                                                            // 45
        return " loading ";                                                                                      // 46
      }) ];                                                                                                      // 47
    }                                                                                                            // 48
  }, "\n      ", HTML.INPUT(HTML.Attrs({                                                                         // 49
    type: function() {                                                                                           // 50
      return Spacebars.mustache(view.lookup("type"));                                                            // 51
    },                                                                                                           // 52
    id: function() {                                                                                             // 53
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                            // 54
    },                                                                                                           // 55
    name: function() {                                                                                           // 56
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                            // 57
    },                                                                                                           // 58
    placeholder: function() {                                                                                    // 59
      return Spacebars.mustache(view.lookup("placeholder"));                                                     // 60
    },                                                                                                           // 61
    autocapitalize: "none",                                                                                      // 62
    autocorrect: "off"                                                                                           // 63
  }, function() {                                                                                                // 64
    return Spacebars.attrMustache(view.lookup("disabled"));                                                      // 65
  })), "\n      ", Blaze.If(function() {                                                                         // 66
    return Spacebars.call(view.lookup("hasIcon"));                                                               // 67
  }, function() {                                                                                                // 68
    return [ "\n        ", HTML.I({                                                                              // 69
      "class": function() {                                                                                      // 70
        return [ Spacebars.mustache(view.lookup("iconClass")), " icon" ];                                        // 71
      }                                                                                                          // 72
    }), "\n      " ];                                                                                            // 73
  }), "\n    "), "\n    ", Blaze.If(function() {                                                                 // 74
    return Spacebars.call(view.lookup("hasError"));                                                              // 75
  }, function() {                                                                                                // 76
    return [ "\n      ", HTML.DIV({                                                                              // 77
      "class": "ui red pointing label"                                                                           // 78
    }, Blaze.View("lookup:errorText", function() {                                                               // 79
      return Spacebars.mustache(view.lookup("errorText"));                                                       // 80
    })), "\n    " ];                                                                                             // 81
  }), "\n  ");                                                                                                   // 82
}));                                                                                                             // 83
                                                                                                                 // 84
Template.__checkName("atCheckboxInput");                                                                         // 85
Template["atCheckboxInput"] = new Template("Template.atCheckboxInput", (function() {                             // 86
  var view = this;                                                                                               // 87
  return HTML.DIV({                                                                                              // 88
    "class": "at-input inline field"                                                                             // 89
  }, "\n    ", HTML.DIV({                                                                                        // 90
    "class": "ui toggle checkbox"                                                                                // 91
  }, "\n      ", HTML.INPUT(HTML.Attrs({                                                                         // 92
    type: function() {                                                                                           // 93
      return Spacebars.mustache(view.lookup("type"));                                                            // 94
    },                                                                                                           // 95
    id: function() {                                                                                             // 96
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                            // 97
    },                                                                                                           // 98
    name: function() {                                                                                           // 99
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                            // 100
    },                                                                                                           // 101
    tabindex: "0",                                                                                               // 102
    "class": "hidden"                                                                                            // 103
  }, function() {                                                                                                // 104
    return Spacebars.attrMustache(view.lookup("disabled"));                                                      // 105
  })), "\n      ", HTML.LABEL({                                                                                  // 106
    "for": function() {                                                                                          // 107
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                            // 108
    }                                                                                                            // 109
  }, Blaze.View("lookup:displayName", function() {                                                               // 110
    return Spacebars.mustache(view.lookup("displayName"));                                                       // 111
  })), "\n    "), "\n  ");                                                                                       // 112
}));                                                                                                             // 113
                                                                                                                 // 114
Template.__checkName("atSelectInput");                                                                           // 115
Template["atSelectInput"] = new Template("Template.atSelectInput", (function() {                                 // 116
  var view = this;                                                                                               // 117
  return HTML.DIV({                                                                                              // 118
    "class": function() {                                                                                        // 119
      return [ "at-input ", Blaze.If(function() {                                                                // 120
        return Spacebars.call(view.lookup("required"));                                                          // 121
      }, function() {                                                                                            // 122
        return " required ";                                                                                     // 123
      }), " ", Blaze.If(function() {                                                                             // 124
        return Spacebars.call(view.lookup("hasError"));                                                          // 125
      }, function() {                                                                                            // 126
        return " error ";                                                                                        // 127
      }), " field" ];                                                                                            // 128
    }                                                                                                            // 129
  }, "\n    ", HTML.LABEL(Blaze.View("lookup:displayName", function() {                                          // 130
    return Spacebars.mustache(view.lookup("displayName"));                                                       // 131
  })), "\n    ", HTML.DIV({                                                                                      // 132
    "class": "ui fluid selection dropdown"                                                                       // 133
  }, "\n      ", HTML.INPUT({                                                                                    // 134
    type: "hidden",                                                                                              // 135
    id: function() {                                                                                             // 136
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                            // 137
    },                                                                                                           // 138
    name: function() {                                                                                           // 139
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                            // 140
    }                                                                                                            // 141
  }), "\n      ", HTML.DIV({                                                                                     // 142
    "class": "default text"                                                                                      // 143
  }, Blaze.View("lookup:displayName", function() {                                                               // 144
    return Spacebars.mustache(view.lookup("displayName"));                                                       // 145
  })), "\n      ", HTML.Raw('<i class="dropdown icon"></i>'), "\n      ", HTML.DIV({                             // 146
    "class": "menu"                                                                                              // 147
  }, "\n        ", Blaze.Each(function() {                                                                       // 148
    return Spacebars.call(view.lookup("values"));                                                                // 149
  }, function() {                                                                                                // 150
    return [ "\n          ", HTML.DIV({                                                                          // 151
      "class": "item",                                                                                           // 152
      "data-value": function() {                                                                                 // 153
        return Spacebars.mustache(view.lookup("value"));                                                         // 154
      }                                                                                                          // 155
    }, Blaze.View("lookup:text", function() {                                                                    // 156
      return Spacebars.mustache(view.lookup("text"));                                                            // 157
    })), "\n        " ];                                                                                         // 158
  }), "\n      "), "\n    "), "\n    ", Blaze.If(function() {                                                    // 159
    return Spacebars.call(view.lookup("hasError"));                                                              // 160
  }, function() {                                                                                                // 161
    return [ "\n      ", HTML.DIV({                                                                              // 162
      "class": "at-wrap"                                                                                         // 163
    }, "\n        ", HTML.DIV({                                                                                  // 164
      "class": "ui large red pointing label"                                                                     // 165
    }, Blaze.View("lookup:errorText", function() {                                                               // 166
      return Spacebars.mustache(view.lookup("errorText"));                                                       // 167
    })), "\n      "), "\n    " ];                                                                                // 168
  }), "\n  ");                                                                                                   // 169
}));                                                                                                             // 170
                                                                                                                 // 171
Template.__checkName("atRadioInput");                                                                            // 172
Template["atRadioInput"] = new Template("Template.atRadioInput", (function() {                                   // 173
  var view = this;                                                                                               // 174
  return HTML.DIV({                                                                                              // 175
    "class": "grouped fields"                                                                                    // 176
  }, "\n    ", HTML.LABEL(Blaze.View("lookup:displayName", function() {                                          // 177
    return Spacebars.mustache(view.lookup("displayName"));                                                       // 178
  })), "\n    ", Blaze.Each(function() {                                                                         // 179
    return Spacebars.call(view.lookup("values"));                                                                // 180
  }, function() {                                                                                                // 181
    return [ "\n      ", HTML.DIV({                                                                              // 182
      "class": "at-input field"                                                                                  // 183
    }, "\n        ", HTML.DIV({                                                                                  // 184
      "class": "ui radio checkbox"                                                                               // 185
    }, "\n          ", HTML.INPUT({                                                                              // 186
      id: function() {                                                                                           // 187
        return [ "at-field-", Spacebars.mustache(view.lookup("id")), "-choice-", Spacebars.mustache(view.lookup("value")) ];
      },                                                                                                         // 189
      type: "radio",                                                                                             // 190
      name: function() {                                                                                         // 191
        return [ "at-field-", Spacebars.mustache(view.lookup("id")) ];                                           // 192
      },                                                                                                         // 193
      value: function() {                                                                                        // 194
        return Spacebars.mustache(view.lookup("value"));                                                         // 195
      },                                                                                                         // 196
      tabindex: "0",                                                                                             // 197
      "class": "hidden"                                                                                          // 198
    }), "\n          ", HTML.LABEL({                                                                             // 199
      "for": function() {                                                                                        // 200
        return [ "at-field-", Spacebars.mustache(view.lookup("id")), "-choice-", Spacebars.mustache(view.lookup("value")) ];
      }                                                                                                          // 202
    }, Blaze.View("lookup:text", function() {                                                                    // 203
      return Spacebars.mustache(view.lookup("text"));                                                            // 204
    })), "\n        "), "\n      "), "\n    " ];                                                                 // 205
  }), "\n  ");                                                                                                   // 206
}));                                                                                                             // 207
                                                                                                                 // 208
Template.__checkName("atHiddenInput");                                                                           // 209
Template["atHiddenInput"] = new Template("Template.atHiddenInput", (function() {                                 // 210
  var view = this;                                                                                               // 211
  return HTML.INPUT({                                                                                            // 212
    type: "hidden",                                                                                              // 213
    id: function() {                                                                                             // 214
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                            // 215
    },                                                                                                           // 216
    name: function() {                                                                                           // 217
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                            // 218
    }                                                                                                            // 219
  });                                                                                                            // 220
}));                                                                                                             // 221
                                                                                                                 // 222
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/at_input.js                                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
_.each(AccountsTemplates.atInputRendered, function(callback){                                                    // 1
  Template.atInput.onRendered(callback);                                                                         // 2
  Template.atHiddenInput.onRendered(callback);                                                                   // 3
});                                                                                                              // 4
                                                                                                                 // 5
// Simply 'inherites' helpers from AccountsTemplates                                                             // 6
Template.atInput.helpers(AccountsTemplates.atInputHelpers);                                                      // 7
                                                                                                                 // 8
// Simply 'inherites' events from AccountsTemplates                                                              // 9
Template.atInput.events(AccountsTemplates.atInputEvents);                                                        // 10
                                                                                                                 // 11
// Simply 'inherites' helpers from AccountsTemplates                                                             // 12
Template.atTextInput.helpers(AccountsTemplates.atInputHelpers);                                                  // 13
                                                                                                                 // 14
// Simply 'inherites' helpers from AccountsTemplates                                                             // 15
Template.atCheckboxInput.helpers(AccountsTemplates.atInputHelpers);                                              // 16
                                                                                                                 // 17
// Fixes focused toggle checkbox after click (does not change color to blue)                                     // 18
Template.atCheckboxInput.events({                                                                                // 19
  'click .toggle.checkbox > input': function (event) {                                                           // 20
    $(event.currentTarget).blur();                                                                               // 21
  }                                                                                                              // 22
});                                                                                                              // 23
                                                                                                                 // 24
Template.atSelectInput.onRendered(function () {                                                                  // 25
  $('.ui.dropdown').dropdown();                                                                                  // 26
});                                                                                                              // 27
                                                                                                                 // 28
// Simply 'inherites' helpers from AccountsTemplates                                                             // 29
Template.atSelectInput.helpers(AccountsTemplates.atInputHelpers);                                                // 30
                                                                                                                 // 31
// Simply 'inherites' helpers from AccountsTemplates                                                             // 32
Template.atRadioInput.helpers(AccountsTemplates.atInputHelpers);                                                 // 33
                                                                                                                 // 34
// Simply 'inherites' helpers from AccountsTemplates                                                             // 35
Template.atHiddenInput.helpers(AccountsTemplates.atInputHelpers);                                                // 36
                                                                                                                 // 37
// Sets up default Semantic-UI icon classes for social button icons                                              // 38
AccountsTemplates.configure({                                                                                    // 39
  texts: {                                                                                                       // 40
    inputIcons: {                                                                                                // 41
      isValidating: 'loading',                                                                                   // 42
      hasError: 'remove',                                                                                        // 43
      hasSuccess: 'green checkmark',                                                                             // 44
    }                                                                                                            // 45
  },                                                                                                             // 46
});                                                                                                              // 47
                                                                                                                 // 48
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/template.at_message.js                                                  //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("atMessage");                                                                               // 2
Template["atMessage"] = new Template("Template.atMessage", (function() {                                         // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    "class": "at-message ui large icon info message"                                                             // 6
  }, HTML.Raw('\n    <i class="info icon"></i>\n    '), HTML.DIV({                                               // 7
    "class": "content"                                                                                           // 8
  }, "\n      ", HTML.P(HTML.STRONG(Blaze.View("lookup:message", function() {                                    // 9
    return Spacebars.mustache(view.lookup("message"));                                                           // 10
  }))), "\n    "), "\n  ");                                                                                      // 11
}));                                                                                                             // 12
                                                                                                                 // 13
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/at_message.js                                                           //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// Simply 'inherites' helpers from AccountsTemplates                                                             // 1
Template.atMessage.helpers(AccountsTemplates.atMessageHelpers);                                                  // 2
                                                                                                                 // 3
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/template.at_nav_button.js                                               //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("atNavButton");                                                                             // 2
Template["atNavButton"] = new Template("Template.atNavButton", (function() {                                     // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    "class": "item"                                                                                              // 6
  }, "\n    ", HTML.DIV({                                                                                        // 7
    "class": "ui button",                                                                                        // 8
    id: "at-nav-button"                                                                                          // 9
  }, Blaze.View("lookup:text", function() {                                                                      // 10
    return Spacebars.mustache(view.lookup("text"));                                                              // 11
  })), "\n  ");                                                                                                  // 12
}));                                                                                                             // 13
                                                                                                                 // 14
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/at_nav_button.js                                                        //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// Simply 'inherites' helpers from AccountsTemplates                                                             // 1
Template.atNavButton.helpers(AccountsTemplates.atNavButtonHelpers);                                              // 2
                                                                                                                 // 3
// Simply 'inherites' events from AccountsTemplates                                                              // 4
Template.atNavButton.events(AccountsTemplates.atNavButtonEvents);                                                // 5
                                                                                                                 // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/template.at_oauth.js                                                    //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("atOauth");                                                                                 // 2
Template["atOauth"] = new Template("Template.atOauth", (function() {                                             // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    "class": "at-oauth"                                                                                          // 6
  }, "\n    ", Blaze.Each(function() {                                                                           // 7
    return Spacebars.call(view.lookup("oauthService"));                                                          // 8
  }, function() {                                                                                                // 9
    return [ "\n      ", Spacebars.include(view.lookupTemplate("atSocial")), "\n    " ];                         // 10
  }), "\n  ");                                                                                                   // 11
}));                                                                                                             // 12
                                                                                                                 // 13
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/at_oauth.js                                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// Simply 'inherites' helpers from AccountsTemplates                                                             // 1
Template.atOauth.helpers(AccountsTemplates.atOauthHelpers);                                                      // 2
                                                                                                                 // 3
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/template.at_pwd_form.js                                                 //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("atPwdForm");                                                                               // 2
Template["atPwdForm"] = new Template("Template.atPwdForm", (function() {                                         // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    "class": "at-pwd-form"                                                                                       // 6
  }, "\n    ", HTML.FORM({                                                                                       // 7
    id: "at-pwd-form",                                                                                           // 8
    action: "#",                                                                                                 // 9
    method: "POST",                                                                                              // 10
    novalidate: "",                                                                                              // 11
    "class": "ui large form"                                                                                     // 12
  }, "\n      ", HTML.DIV({                                                                                      // 13
    "class": "ui stacked segment"                                                                                // 14
  }, "\n        ", Blaze.Each(function() {                                                                       // 15
    return Spacebars.call(view.lookup("fields"));                                                                // 16
  }, function() {                                                                                                // 17
    return [ "\n          ", Spacebars.include(view.lookupTemplate("atInput")), "\n        " ];                  // 18
  }), "\n        ", Blaze.If(function() {                                                                        // 19
    return Spacebars.call(view.lookup("showReCaptcha"));                                                         // 20
  }, function() {                                                                                                // 21
    return [ "\n          ", Spacebars.include(view.lookupTemplate("atReCaptcha")), "\n        " ];              // 22
  }), "\n        ", Blaze.If(function() {                                                                        // 23
    return Spacebars.call(view.lookup("showForgotPasswordLink"));                                                // 24
  }, function() {                                                                                                // 25
    return [ "\n          ", Spacebars.include(view.lookupTemplate("atPwdLink")), "\n        " ];                // 26
  }), "\n        ", Spacebars.include(view.lookupTemplate("atPwdFormBtn")), "\n      "), "\n    "), "\n  ");     // 27
}));                                                                                                             // 28
                                                                                                                 // 29
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/at_pwd_form.js                                                          //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// Simply 'inherites' helpers from AccountsTemplates                                                             // 1
Template.atPwdForm.helpers(AccountsTemplates.atPwdFormHelpers);                                                  // 2
                                                                                                                 // 3
// Simply 'inherites' events from AccountsTemplates                                                              // 4
Template.atPwdForm.events(AccountsTemplates.atPwdFormEvents);                                                    // 5
                                                                                                                 // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/template.at_pwd_form_btn.js                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("atPwdFormBtn");                                                                            // 2
Template["atPwdFormBtn"] = new Template("Template.atPwdFormBtn", (function() {                                   // 3
  var view = this;                                                                                               // 4
  return HTML.INPUT({                                                                                            // 5
    type: "submit",                                                                                              // 6
    "class": function() {                                                                                        // 7
      return [ "at-btn ui fluid ", Spacebars.mustache(view.lookup("submitDisabled")), " ", Spacebars.mustache(view.lookup("disabled")), " large primary button" ];
    },                                                                                                           // 9
    id: "at-btn",                                                                                                // 10
    value: function() {                                                                                          // 11
      return Spacebars.mustache(view.lookup("buttonText"));                                                      // 12
    }                                                                                                            // 13
  });                                                                                                            // 14
}));                                                                                                             // 15
                                                                                                                 // 16
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/at_pwd_form_btn.js                                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// Simply 'inherites' helpers from AccountsTemplates                                                             // 1
Template.atPwdFormBtn.helpers(AccountsTemplates.atPwdFormBtnHelpers);                                            // 2
                                                                                                                 // 3
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/template.at_pwd_link.js                                                 //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("atPwdLink");                                                                               // 2
Template["atPwdLink"] = new Template("Template.atPwdLink", (function() {                                         // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    "class": "at-pwd-link"                                                                                       // 6
  }, "\n    ", HTML.P("\n      ", Blaze.View("lookup:preText", function() {                                      // 7
    return Spacebars.mustache(view.lookup("preText"));                                                           // 8
  }), "\n      ", HTML.A({                                                                                       // 9
    href: function() {                                                                                           // 10
      return Spacebars.mustache(view.lookup("forgotPwdLink"));                                                   // 11
    },                                                                                                           // 12
    id: "at-forgotPwd",                                                                                          // 13
    "class": function() {                                                                                        // 14
      return [ "at-link at-pwd ", Spacebars.mustache(view.lookup("disabled")) ];                                 // 15
    }                                                                                                            // 16
  }, Blaze.View("lookup:linkText", function() {                                                                  // 17
    return Spacebars.mustache(view.lookup("linkText"));                                                          // 18
  })), "\n      ", Blaze.View("lookup:suffText", function() {                                                    // 19
    return Spacebars.mustache(view.lookup("suffText"));                                                          // 20
  }), "\n    "), "\n  ");                                                                                        // 21
}));                                                                                                             // 22
                                                                                                                 // 23
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/at_pwd_link.js                                                          //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// Simply 'inherites' helpers from AccountsTemplates                                                             // 1
Template.atPwdLink.helpers(AccountsTemplates.atPwdLinkHelpers);                                                  // 2
                                                                                                                 // 3
// Simply 'inherites' events from AccountsTemplates                                                              // 4
Template.atPwdLink.events(AccountsTemplates.atPwdLinkEvents);                                                    // 5
                                                                                                                 // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/template.at_reCaptcha.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("atReCaptcha");                                                                             // 2
Template["atReCaptcha"] = new Template("Template.atReCaptcha", (function() {                                     // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    "class": "g-recaptcha",                                                                                      // 6
    "data-sitekey": function() {                                                                                 // 7
      return Spacebars.mustache(view.lookup("key"));                                                             // 8
    },                                                                                                           // 9
    "data-theme": function() {                                                                                   // 10
      return Spacebars.mustache(view.lookup("theme"));                                                           // 11
    },                                                                                                           // 12
    "data-type": function() {                                                                                    // 13
      return Spacebars.mustache(view.lookup("data_type"));                                                       // 14
    }                                                                                                            // 15
  });                                                                                                            // 16
}));                                                                                                             // 17
                                                                                                                 // 18
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/at_reCaptcha.js                                                         //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// Simply 'inherites' rendered callback from AccountsTemplates                                                   // 1
Template.atReCaptcha.rendered = AccountsTemplates.atReCaptchaRendered;                                           // 2
                                                                                                                 // 3
// Simply 'inherites' helpers from AccountsTemplates                                                             // 4
Template.atReCaptcha.helpers(AccountsTemplates.atReCaptchaHelpers);                                              // 5
                                                                                                                 // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/template.at_result.js                                                   //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("atResult");                                                                                // 2
Template["atResult"] = new Template("Template.atResult", (function() {                                           // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    "class": "at-result ui large icon success message"                                                           // 6
  }, HTML.Raw('\n    <i class="checkmark icon"></i>\n    '), HTML.DIV({                                          // 7
    "class": "content"                                                                                           // 8
  }, "\n      ", HTML.P(HTML.STRONG(Blaze.View("lookup:result", function() {                                     // 9
    return Spacebars.mustache(view.lookup("result"));                                                            // 10
  }))), "\n    "), "\n  ");                                                                                      // 11
}));                                                                                                             // 12
                                                                                                                 // 13
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/at_result.js                                                            //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// Simply 'inherites' helpers from AccountsTemplates                                                             // 1
Template.atResult.helpers(AccountsTemplates.atResultHelpers);                                                    // 2
                                                                                                                 // 3
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/template.at_sep.js                                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("atSep");                                                                                   // 2
Template["atSep"] = new Template("Template.atSep", (function() {                                                 // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    "class": "at-sep ui horizontal divider"                                                                      // 6
  }, "\n    ", Blaze.View("lookup:sepText", function() {                                                         // 7
    return Spacebars.mustache(view.lookup("sepText"));                                                           // 8
  }), "\n  ");                                                                                                   // 9
}));                                                                                                             // 10
                                                                                                                 // 11
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/at_sep.js                                                               //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// Simply 'inherites' helpers from AccountsTemplates                                                             // 1
Template.atSep.helpers(AccountsTemplates.atSepHelpers);                                                          // 2
                                                                                                                 // 3
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/template.at_signin_link.js                                              //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("atSigninLink");                                                                            // 2
Template["atSigninLink"] = new Template("Template.atSigninLink", (function() {                                   // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    "class": "at-signin-link at-wrap"                                                                            // 6
  }, "\n    ", HTML.P("\n      ", Blaze.View("lookup:preText", function() {                                      // 7
    return Spacebars.mustache(view.lookup("preText"));                                                           // 8
  }), "\n      ", HTML.A({                                                                                       // 9
    href: function() {                                                                                           // 10
      return Spacebars.mustache(view.lookup("signInLink"));                                                      // 11
    },                                                                                                           // 12
    id: "at-signIn",                                                                                             // 13
    "class": function() {                                                                                        // 14
      return [ "at-link at-signin ", Spacebars.mustache(view.lookup("disabled")) ];                              // 15
    }                                                                                                            // 16
  }, Blaze.View("lookup:linkText", function() {                                                                  // 17
    return Spacebars.mustache(view.lookup("linkText"));                                                          // 18
  })), "\n      ", Blaze.View("lookup:suffText", function() {                                                    // 19
    return Spacebars.mustache(view.lookup("suffText"));                                                          // 20
  }), "\n    "), "\n  ");                                                                                        // 21
}));                                                                                                             // 22
                                                                                                                 // 23
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/at_signin_link.js                                                       //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// Simply 'inherites' helpers from AccountsTemplates                                                             // 1
Template.atSigninLink.helpers(AccountsTemplates.atSigninLinkHelpers);                                            // 2
                                                                                                                 // 3
// Simply 'inherites' events from AccountsTemplates                                                              // 4
Template.atSigninLink.events(AccountsTemplates.atSigninLinkEvents);                                              // 5
                                                                                                                 // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/template.at_signup_link.js                                              //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("atSignupLink");                                                                            // 2
Template["atSignupLink"] = new Template("Template.atSignupLink", (function() {                                   // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    "class": "at-signup-link at-wrap"                                                                            // 6
  }, "\n    ", HTML.P("\n      ", Blaze.View("lookup:preText", function() {                                      // 7
    return Spacebars.mustache(view.lookup("preText"));                                                           // 8
  }), "\n      ", HTML.A({                                                                                       // 9
    href: function() {                                                                                           // 10
      return Spacebars.mustache(view.lookup("signUpLink"));                                                      // 11
    },                                                                                                           // 12
    id: "at-signUp",                                                                                             // 13
    "class": function() {                                                                                        // 14
      return [ "at-link at-signup ", Spacebars.mustache(view.lookup("disabled")) ];                              // 15
    }                                                                                                            // 16
  }, Blaze.View("lookup:linkText", function() {                                                                  // 17
    return Spacebars.mustache(view.lookup("linkText"));                                                          // 18
  })), "\n      ", Blaze.View("lookup:suffText", function() {                                                    // 19
    return Spacebars.mustache(view.lookup("suffText"));                                                          // 20
  }), "\n    "), "\n  ");                                                                                        // 21
}));                                                                                                             // 22
                                                                                                                 // 23
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/at_signup_link.js                                                       //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// Simply 'inherites' helpers from AccountsTemplates                                                             // 1
Template.atSignupLink.helpers(AccountsTemplates.atSignupLinkHelpers);                                            // 2
                                                                                                                 // 3
// Simply 'inherites' events from AccountsTemplates                                                              // 4
Template.atSignupLink.events(AccountsTemplates.atSignupLinkEvents);                                              // 5
                                                                                                                 // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/template.at_social.js                                                   //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("atSocial");                                                                                // 2
Template["atSocial"] = new Template("Template.atSocial", (function() {                                           // 3
  var view = this;                                                                                               // 4
  return HTML.BUTTON({                                                                                           // 5
    "class": function() {                                                                                        // 6
      return [ "at-social-btn ui fluid labeled icon ", Spacebars.mustache(view.lookup("disabled")), " ", Spacebars.mustache(view.lookup("serviceName")), " large button" ];
    },                                                                                                           // 8
    id: function() {                                                                                             // 9
      return [ "at-", Spacebars.mustache(view.lookup("name")) ];                                                 // 10
    },                                                                                                           // 11
    name: function() {                                                                                           // 12
      return Spacebars.mustache(view.lookup("name"));                                                            // 13
    }                                                                                                            // 14
  }, "\n    ", HTML.I({                                                                                          // 15
    "class": function() {                                                                                        // 16
      return [ Spacebars.mustache(view.lookup("iconClass")), " icon" ];                                          // 17
    }                                                                                                            // 18
  }), " ", Blaze.View("lookup:buttonText", function() {                                                          // 19
    return Spacebars.mustache(view.lookup("buttonText"));                                                        // 20
  }), "\n  ");                                                                                                   // 21
}));                                                                                                             // 22
                                                                                                                 // 23
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/at_social.js                                                            //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// Simply 'inherites' helpers from AccountsTemplates                                                             // 1
Template.atSocial.helpers(AccountsTemplates.atSocialHelpers);                                                    // 2
// Overrides Font Awesome icon class name with simple service name                                               // 3
Template.atSocial.helpers({                                                                                      // 4
  serviceName: function () {                                                                                     // 5
    var serviceStr = this._id;                                                                                   // 6
    if (serviceStr === 'google')                                                                                 // 7
      serviceStr += ' plus';                                                                                     // 8
    return serviceStr;                                                                                           // 9
  },                                                                                                             // 10
  iconClass: function () {                                                                                       // 11
    var classStr = this._id;                                                                                     // 12
    if (classStr === 'google')                                                                                   // 13
      classStr += ' plus';                                                                                       // 14
    return classStr;                                                                                             // 15
  },                                                                                                             // 16
});                                                                                                              // 17
// Simply 'inherites' events from AccountsTemplates                                                              // 18
Template.atSocial.events(AccountsTemplates.atSocialEvents);                                                      // 19
                                                                                                                 // 20
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/template.at_terms_link.js                                               //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("atTermsLink");                                                                             // 2
Template["atTermsLink"] = new Template("Template.atTermsLink", (function() {                                     // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    "class": "at-terms-link at-wrap"                                                                             // 6
  }, "\n    ", HTML.P("\n      ", Blaze.View("lookup:text", function() {                                         // 7
    return Spacebars.mustache(view.lookup("text"));                                                              // 8
  }), "\n      ", HTML.Raw("<br>"), "\n      ", Blaze.If(function() {                                            // 9
    return Spacebars.call(view.lookup("privacyUrl"));                                                            // 10
  }, function() {                                                                                                // 11
    return [ "\n        ", HTML.A({                                                                              // 12
      href: function() {                                                                                         // 13
        return Spacebars.mustache(view.lookup("privacyUrl"));                                                    // 14
      },                                                                                                         // 15
      "class": function() {                                                                                      // 16
        return Spacebars.mustache(view.lookup("disabled"));                                                      // 17
      }                                                                                                          // 18
    }, Blaze.View("lookup:privacyLinkText", function() {                                                         // 19
      return Spacebars.mustache(view.lookup("privacyLinkText"));                                                 // 20
    })), "\n      " ];                                                                                           // 21
  }), "\n      ", Blaze.If(function() {                                                                          // 22
    return Spacebars.call(view.lookup("showTermsAnd"));                                                          // 23
  }, function() {                                                                                                // 24
    return [ "\n        ", Blaze.View("lookup:and", function() {                                                 // 25
      return Spacebars.mustache(view.lookup("and"));                                                             // 26
    }), "\n      " ];                                                                                            // 27
  }), "\n      ", Blaze.If(function() {                                                                          // 28
    return Spacebars.call(view.lookup("termsUrl"));                                                              // 29
  }, function() {                                                                                                // 30
    return [ "\n        ", HTML.A({                                                                              // 31
      href: function() {                                                                                         // 32
        return Spacebars.mustache(view.lookup("termsUrl"));                                                      // 33
      },                                                                                                         // 34
      "class": function() {                                                                                      // 35
        return Spacebars.mustache(view.lookup("disabled"));                                                      // 36
      }                                                                                                          // 37
    }, Blaze.View("lookup:termsLinkText", function() {                                                           // 38
      return Spacebars.mustache(view.lookup("termsLinkText"));                                                   // 39
    })), "\n      " ];                                                                                           // 40
  }), "\n    "), "\n  ");                                                                                        // 41
}));                                                                                                             // 42
                                                                                                                 // 43
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/at_terms_link.js                                                        //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// Simply 'inherites' helpers from AccountsTemplates                                                             // 1
Template.atTermsLink.helpers(AccountsTemplates.atTermsLinkHelpers);                                              // 2
                                                                                                                 // 3
// Simply 'inherites' events from AccountsTemplates                                                              // 4
Template.atTermsLink.events(AccountsTemplates.atTermsLinkEvents);                                                // 5
                                                                                                                 // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/template.at_resend_verification_email_link.js                           //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("atResendVerificationEmailLink");                                                           // 2
Template["atResendVerificationEmailLink"] = new Template("Template.atResendVerificationEmailLink", (function() {
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    "class": "at-resend-verification-email-link at-wrap"                                                         // 6
  }, "\n    ", HTML.P("\n      ", Blaze.View("lookup:preText", function() {                                      // 7
    return Spacebars.mustache(view.lookup("preText"));                                                           // 8
  }), "\n      ", HTML.A({                                                                                       // 9
    href: function() {                                                                                           // 10
      return Spacebars.mustache(view.lookup("resendVerificationEmailLink"));                                     // 11
    },                                                                                                           // 12
    id: "at-resend-verification-email",                                                                          // 13
    "class": function() {                                                                                        // 14
      return [ "at-link at-resend-verification-email ", Spacebars.mustache(view.lookup("disabled")) ];           // 15
    }                                                                                                            // 16
  }, Blaze.View("lookup:linkText", function() {                                                                  // 17
    return Spacebars.mustache(view.lookup("linkText"));                                                          // 18
  })), "\n      ", Blaze.View("lookup:suffText", function() {                                                    // 19
    return Spacebars.mustache(view.lookup("suffText"));                                                          // 20
  }), "\n    "), "\n  ");                                                                                        // 21
}));                                                                                                             // 22
                                                                                                                 // 23
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/at_resend_verification_email_link.js                                    //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// Simply 'inherites' helpers from AccountsTemplates                                                             // 1
Template.atResendVerificationEmailLink.helpers(AccountsTemplates.atResendVerificationEmailLinkHelpers);          // 2
                                                                                                                 // 3
// Simply 'inherites' events from AccountsTemplates                                                              // 4
Template.atResendVerificationEmailLink.events(AccountsTemplates.atResendVerificationEmailLinkEvents);            // 5
                                                                                                                 // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/template.at_title.js                                                    //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("atTitle");                                                                                 // 2
Template["atTitle"] = new Template("Template.atTitle", (function() {                                             // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    "class": "at-title"                                                                                          // 6
  }, "\n    ", HTML.H2({                                                                                         // 7
    "class": "ui center aligned header"                                                                          // 8
  }, "\n      ", Blaze.View("lookup:title", function() {                                                         // 9
    return Spacebars.mustache(view.lookup("title"));                                                             // 10
  }), "\n    "), "\n  ");                                                                                        // 11
}));                                                                                                             // 12
                                                                                                                 // 13
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/at_title.js                                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// Simply 'inherites' helpers from AccountsTemplates                                                             // 1
Template.atTitle.helpers(AccountsTemplates.atTitleHelpers);                                                      // 2
                                                                                                                 // 3
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/useraccounts_semantic-ui/lib/template.full_page_at_form.js                                           //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("fullPageAtForm");                                                                          // 2
Template["fullPageAtForm"] = new Template("Template.fullPageAtForm", (function() {                               // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    "class": "at-grid ui middle aligned centered grid"                                                           // 6
  }, "\n    ", HTML.DIV({                                                                                        // 7
    "class": "at-column column"                                                                                  // 8
  }, "\n      ", Spacebars.include(view.lookupTemplate("atForm")), "\n    "), "\n  ");                           // 9
}));                                                                                                             // 10
                                                                                                                 // 11
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['useraccounts:semantic-ui'] = {};

})();
