var copyToClipboard;

Template.Now.events({
  'click .saveNewNow': function (e, tmpl) {
    e.preventDefault();
    var body = tmpl.$('div.froala-reactive-meteorized').froalaEditor('html.get', true);
    Session.set('NowBody', body);
    if (Meteor.userId()) {
      $('.saveNewNow').addClass('loading');
      Meteor.call('saveNow', {
        body: body
      }, function (error, response) {
        if (error) throw error;
        $('.saveNewNow').removeClass('loading');
        $('.saveNewNow').removeClass('grey').addClass('green');
        $('.saveNewNow').addClass('icon');
        $('.saveNewNow').html('<i class="checkmark icon"></i>');
        setTimeout(function () {
          $('.saveNewNow').removeClass('green').removeClass('icon').addClass('grey');
          $('.saveNewNow').html('Save');
        }, 2500);

        tmpl.$('div.froala-reactive-meteorized').froalaEditor();
      });
    } else {
      $('.ui.login_modal')
        .modal({
          blurring: true
        })
        .modal('show');
    }
  },

  'click .copybutton': function (e, tmpl) {
    copyToClipboard(Session.get('copyboard'));
  }
});

Template.Now.helpers({
  getContext: function () {
    var currentNow = Nows.findOne({},{sort: {createdAt: -1}, limit:1});
    if(currentNow)
       var value = currentNow.body

    return {
      // Set html content
      _value: value,
      inlineMode: false,
      placeholder: 'I am currently working on...',

      // Set Input Box height
      heightMin: 400,

      // _value: self.note,
      _keepMarkers: true,
      toolbarInline: true,
      initOnClick: false,
      tabSpaces: false,

      // FE save.before event handler function:
      "_onsave.before": function (e, editor) {
        var newHTML = editor.html.get(true /* keep_markers */);
        // Do something to update the edited value
        // if (!_.isEqual(newHTML, self.note.body)) {
        //   Meteor.call('saveNote', { body: newHTML })
        // }
        return false; // Stop Froala Editor from POSTing to the Save URL
      },
    }
  },

  now: function () {
    return Nows.findOne({});
  },

  isMe: function () {
    return this._id === Meteor.userId();
  },

  disableEdit: function () {
    var controller = Router.current();
    var userOnPage = Meteor.users.findOne({username: controller.params.username});
    if (userOnPage)
      return userOnPage._id !== Meteor.userId();
    return false;
  },

  username: function () {
    return Router.current().params.username;
  },

  HTMLsnippet () {
    var code = '<script src="https://goo.gl/95v9xT"></script><div id="now" data-username="' + Router.current().params.username + '"></div>';
    Session.set('copyboard', code);
    var result = Prism.highlight(code, Prism.languages.markup);
    return result;
  }
});



Template.Now.onCreated(function(){
  var self = this;
  self.autorun(function(){
    var controller = Router.current();
    var user = Meteor.users.findOne({"username": controller.params.username});

    if(user)
      var userId = user._id;

    self.subscribe('UserNow', userId);
  });
});

// Some stolen code from http://stackoverflow.com/a/33928558
// Copy to Clipload
copyToClipboard = function (text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text); 

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}
