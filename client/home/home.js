Template.Home.events({
  'click .createNow': function () {
  	if (!Meteor.user()) {
	    Session.set('signinModal', false);
	    $('.ui.login_modal')
	        .modal({
	          inverted: true,
	          closable  : false
	        })
	        .modal('show');
	}
  }
});

