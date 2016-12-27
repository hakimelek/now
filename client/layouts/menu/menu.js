Template.Menu.events({
  'click .signup': function () {
    Session.set('signinModal', false);
    $('.ui.login_modal')
        .modal({
          	inverted: true,
          	closable  : false
        })
        .modal('show');
  }
});

