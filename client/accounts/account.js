Template.accountSetup.onCreated(function () {
  this.lastError = new ReactiveVar(null);
});

Template.accountSetup.helpers({
  'toggleLogin': function () {
    return Session.get('signinModal');
  },

  'showUsername': function () {
    return Session.get('setUsername');
  },

  'showThumb': function () {
    return Session.get('setThumb');
  },

  'showDone': function () {
    return Session.get('done');
  },

  errorMessage: function () {
    return Template.instance().lastError.get();
  }
});

Template.accountSetup.events({
  'submit .signup': function (e, template) {
    e.preventDefault();
    var email = event.target.email.value;
    var password = event.target.password.value;

    var user = {
      'email': email,
      'password': password
    }

    Accounts.createUser(user, function (error) {
      if (error) template.lastError.set(error.reason);
      else {
        Session.set('setUsername', true);
      }
    });
  },

  'submit .signin': function (event, template) {
    event.preventDefault();
    var email = event.target.email.value;
    var password = event.target.password.value;

    Meteor.loginWithPassword(email, password, function (error, response) {
      if (error) template.lastError.set(error.reason);
      else {
        $('.ui.login_modal')
        .modal()
        .modal('hide');
        Router.go('user', {username: Meteor.user().username});
      }
    });
  },

  'submit .setUsername': function (event, template) {
    event.preventDefault();
    var username = event.target.username.value;
    if (username) {
      Meteor.call('setUsername', username, function (error) {
        if (error) return template.lastError.set(error.reason);
        else {
          if (Meteor.userId()) {
            Session.set('done', true);
          }
        }    
      });
    }
  },

  'click .toggleLogin': function (e) {
    e.preventDefault();
    Session.set('signinModal', !Session.get('signinModal'));
  },

  'click .connect_facebook': function (event, template) {
    Meteor.loginWithFacebook({}, function (error) {
      if (error) template.lastError.set(error.reason);
      else Session.set('setUsername', true);
    });
  },

  'click .connect_twitter': function (event, template) {
    Meteor.loginWithTwitter({}, function (error) {
      if (error) template.lastError.set(error.reason);
      else Session.set('setUsername', true);
    });
  }
});

Template.done.onCreated(function () {
  setTimeout(function () {
    Router.go('user', {username: Meteor.user().username});
    $('.ui.login_modal')
          .modal()
          .modal('hide');
  }, 5000);
});
