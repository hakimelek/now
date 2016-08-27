Template.settings.events({
  'click .logout': function (e, tmpl) {
    Meteor.logout(function(error){
      Router.go('home');
      $('.ui.settings_modal')
        .modal()
        .modal('hide')
      ;
    });
  },
})
