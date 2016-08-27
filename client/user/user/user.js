Template.User.events({
});

Template.User.helpers({
  isMe: function () {
    return this._id === Meteor.userId();
  },

  timestamp: function () {
    var comment = this;
    return moment(comment.createdAt).fromNow();
  },

  userProfile: function () {
    var controller = Router.current();
    return Meteor.users.findOne({'username': controller.params.username});
  }
});

Template.User.onCreated(function () {
  Session.set('signinModal', false);
  Session.set('setUsername', false);
  Session.set('setThumb', false);
  Session.set('done', false);

  var self = this;
  self.autorun(function () {
    var controller = Router.current();
    self.subscribe('myNow', controller.params.username);
  });
});
