Template.NowHistory.helpers({
  timestamp: function () {
    var now = this;
    return moment(now.createdAt).format('MMMM Do YYYY, h:mm:ss a');
  }
});

Template.NowHistory.events({
  "click .followingNow": function(){

  },

  "click .previousNow": function(){

  }
});

Template.NowHistory.onCreated(function(){
});