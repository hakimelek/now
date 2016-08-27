Meteor.methods({
  'saveNow': function (item) {
    item.userId = Meteor.userId();
    item.createdAt = new Date;

    if (Meteor.userId()) {
      return Nows.insert(item, function(error, response) {
        if (error) throw error;
      });
    }
  },

  'setUsername': function(username){
    Accounts.setUsername(Meteor.userId(), username);
  }


});
