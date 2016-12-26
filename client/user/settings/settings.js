Template.settings.events({
   'click .logout': function (e, tmpl) {
	    Meteor.logout(function(error){
			Router.go('home');
			$('.ui.settings_modal').modal().modal('hide');
	    });
    },

    'click .saveInfo': function (e, tmpl) {
        e.preventDefault();
	    if (Meteor.userId()) {
	      	$('.saveInfo').addClass('loading');
	      	var userInfo = {
	    		fullName: tmpl.find('.full-name').value,
	        	bio: tmpl.find('.textarea-bio').value,
	        }

			Meteor.call('saveInfo', userInfo, function (error, response) {
				if (error) throw error;
				$('.saveInfo').removeClass('loading');
				$('.saveInfo').removeClass('grey').addClass('green');
				$('.saveInfo').html('<i class="checkmark icon"></i>');
				setTimeout(function () {
				  $('.saveInfo').removeClass('green');
				  $('.saveInfo').html('save');
				}, 1500);	
	      	});
			$('.ui.settings_modal').modal().modal('hide');
	    }
    }
});

Template.settings.helpers({
	userProfile: function () {
		return Meteor.users.findOne({_id: Meteor.userId()});
	},

  	timestamp: function () {
	    return moment(this.createdAt).fromNow();
	}
});

Template.settings.onCreated(function () {
	var self = this;
	self.autorun(function () {
	    self.subscribe('userById', Meteor.userId(), function (error, response) {
	    	if (error) throw error;
	    });
	});
});
