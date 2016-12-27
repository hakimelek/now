if (Meteor.isServer) {
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

    'setUsername': function(username) {
      if (username)
        Accounts.setUsername(Meteor.userId(), username);
    },

    'saveInfo': function(userInfo) {
      if (Meteor.userId()) {
        Meteor.users.update({_id: Meteor.userId()},
                          {$set: {
                            'profile.fullName': userInfo.fullName,
                            'profile.bio': userInfo.bio
                          }
        });
      }
    }
  });
}
