if (Meteor.isClient) {

  Router.configure({
    layoutTemplate: 'MasterLayout',
    loadingTemplate: 'Loading',
    NotFoundTemplate: 'NotFound'
  });

  Router.route('/', {
    name: 'home',
    controller: 'HomeController',
    where: 'client'
  });

  Router.route('/settings', {
    name: 'settings',
    controller: 'UserController',
    action: 'edit',
    where: 'client'
  });

  Router.route('/404', {
    name: 'notfound',
    where: 'client',
    template: 'NotFound'
  });

  Router.route('/:username/', {
    name: 'user',
    controller: 'UserController',
    action: 'detail',
    where: 'client'
  });

  Router.route('/:username/:edit', {
    name: 'user.edit',
    controller: 'UserController',
    action: 'detail',
    where: 'client'
  });

  Router.route('/:username/:_id', {
    name: 'user.nowhistory',
    controller: 'NowController',
    action: 'nowhistory',
    where: 'client'
  });
}
