Meteor.publish('UserNow', function (userId) {
 return Nows.find({userId: userId}, {sort: {createdAt: -1}, limit: 1})
});

Meteor.publish('myNow', function (username) {
	if (username) {
		var user = Meteor.users.findOne({username: username});
		if (user) {
			return Nows.find({userId: user._id}, {sort: {createdAt: -1}, limit: 1})
		}
	}
	return;
});

Meteor.publish('now', function (id) {
 var now = Nows.findOne({_id: id},);
 return [
   Meteor.users.find({_id: now.userId}, {fields: {profile: 1, username:1}}),
   Nows.find({_id: id})
 ];
});

Meteor.publish('user', function (username) {
  return Meteor.users.find({username: username}, {fields: {profile: 1, username: 1}});
});

Meteor.publish('userById', function (userId) {
  return Meteor.users.find({_id: userId}, {fields: {profile: 1, username: 1, createdAt: 1}});
});
