Template.accountSetup.onCreated(function () {
  this.lastError = new ReactiveVar(null);
});

Template.accountSetup.helpers({
  'toggleLogin': function() {
    return Session.get('signinModal');
  },

  'showUsername': function() {
    return Session.get('setUsername');
  },

  'showThumb': function() {
    return Session.get('setThumb');
  },

  'showDone': function() {
    return Session.get('done');
  },

  errorMessage: function () {
    return Template.instance().lastError.get();
  }
});

Template.accountSetup.events({
  'submit .signup': function(e, template) {
    e.preventDefault();
    var email = event.target.email.value;
    var password = event.target.password.value;

    var user = {
      'email': email,
      'password': password,
    }

    // Meteor.call('signUpUser', user, function(error, username){
    //   if(error) throw console.log(error.reason);
    //   Router.go('user', {username: username});
    // });
    Accounts.createUser(user, function(error){
          if (error) template.lastError.set(error.reason);
          else Session.set('setUsername', true);
    });

  },

  'click .toggleLogin': function(e){
    e.preventDefault();
    Session.set('signinModal', !Session.get('signinModal'));
  },

  'submit .signin': function (event, template) {
    event.preventDefault();
    var email = event.target.email.value;
    var password = event.target.password.value;

    Meteor.loginWithPassword(email,password,function(error, response){
        if(error)             template.lastError.set(error.reason);
        $('.ui.login_modal')
          .modal()
          .modal('hide')
        ;
        Router.go('user', {username:Meteor.user().username});
    });
  },

  'submit .setUsername': function (event, template) {
    event.preventDefault();
    var username = event.target.username.value;

    Meteor.call('setUsername', username, function(error){
      if(error) return template.lastError.set(error.reason);
      if(Meteor.userId()){
        Router.go('user', { username: username });
        Meteor.call('saveNow', {
          body: Session.get('NowBody')
        }, function(error, response) {
          if (error) console.log('error: ', error.reason);
          else {
            tmpl.$('div.froala-reactive-meteorized').froalaEditor();
          }
        });
      }
      Session.set('setThumb', true);
    });
  },

  'click .confirmThumb': function (event, template) {
    event.preventDefault();
    // Handle photo upload

    Session.set('done', true);
  },

  'click .toggleLogin': function(e){
    e.preventDefault();
    Session.set('signinModal', !Session.get('signinModal'));
  },

  'click .facebook': function(event) {
    Meteor.loginWithFacebook({}, function(err){
          if (err) throw new Meteor.Error("Facebook login failed");
    });
  },

  'click .twitter': function(event) {
    Meteor.loginWithTwitter({}, function(err){
          if (err) throw new Meteor.Error("Twitter login failed");
    });
  },

});

Template.done.onCreated(function () {
  setTimeout(function() {
    $('.ui.login_modal')
          .modal()
          .modal('hide');
  }, 5000);
});







