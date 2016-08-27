Template.Now.events({
  'click .saveNewNow': function (e, tmpl) {
    e.preventDefault();
    var body = tmpl.$('div.froala-reactive-meteorized').froalaEditor('html.get', true);
    Session.set('NowBody', body);
    if(Meteor.userId()) {
      Meteor.call('saveNow', {
        body: body
      }, function(error, response) {
        if (error) {
          console.log('error: ', error);
        } else {
          tmpl.$('div.froala-reactive-meteorized').froalaEditor();
        }
      });
    } else {
      $('.ui.login_modal')
        .modal({
          blurring: true
        })
        .modal('show');
    }
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

  now(){
      var currentNow = Nows.findOne({},{sort: {createdAt: -1}, limit:1});
      if(currentNow)
         return currentNow.body;
      else
         return 'loading';
  },

  now: function(){
    return Nows.findOne({},{sort: {createdAt: -1}, limit:1});
  },

  isMe: function () {
    return this._id === Meteor.userId();
  },

  disableEdit: function () {
    var controller = Router.current();
    if(controller.params.username && !Meteor.userId()){
      return true;
    }
  },

  username: function(){
    return Router.current().params.username;
  },

  HTMLsnippet(){
    var code = '<script src="https://goo.gl/WqhYHa"></script><div id="now" data-username="'+Router.current().params.username+'"></div>';
      Session.set('copyboard', code);
    var result = Prism.highlight(code, Prism.languages.markup);
    return result;
  }
});



Template.Now.onCreated(function(){
  var self = this;
  self.autorun(function(){
    var controller = Router.current();
    var user = Meteor.users.findOne({"username":controller.params.username});

    if(user)
      var userId = user._id;

    self.subscribe('UserNow', userId);
  });
});