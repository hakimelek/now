if (Meteor.isClient) {
  Router.configure({
    layoutTemplate: 'MasterLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound'
  });

  Router.route('/', {
    name: 'home',
    controller: 'HomeController',
    where: 'client',
    onBeforeAction: function(){
      if (Meteor.userId()) {
        Router.go('user', {username: Meteor.user().username});
      }
      else {
        this.next();
      }
    }
  });

  Router.route('/:username', {
    name: 'user',
    controller: 'UserController',
    action: 'detail',
    where: 'client',
    onBeforeAction: function(){
      this.render('loader');

      var profileUserExists = Meteor.users.find({ username :
      Router.current().params.username}).count();

        if (profileUserExists == 0) {
          this.render('notfound');
        }
        else {
          this.next();
        }
    }
  });

  Router.route('/settings', {
    name: 'settings',
    controller: 'UserController',
    action: 'edit',
    where: 'client'
  });

  Router.route('/:username/:_id', {
    name: 'user.nowhistory',
    controller: 'NowController',
    action: 'nowhistory',
    where: 'client'
  });



}
