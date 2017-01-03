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

Template.Home.helpers({
  HTMLsnippet () {
    var code = '<script src="https://goo.gl/95v9xT"></script><div id="now" data-username="chuck"></div>';
    Session.set('copyboard', code);
    var result = Prism.highlight(code, Prism.languages.markup);
    return result;
  }
});

