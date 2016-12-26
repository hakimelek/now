Template.MasterLayout.helpers({

});

Template.MasterLayout.events({
  'click .settings': function () {
    $('.ui.settings_modal')
        .modal({
          blurring: true
        })
        .modal('show')
      ;
  },

  'click .signin': function () {
    Session.set('signinModal', true);
    $('.ui.login_modal')
        .modal({
          blurring: true
        })
        .modal('show')
      ;
  },

  'click .signup': function () {
    Session.set('signupModal', true);
    $('.ui.login_modal')
        .modal({
          blurring: true
        })
        .modal('show')
      ;
  }
});

