Template.MasterLayout.helpers({

});

Template.MasterLayout.events({
  'click .settings': function(){
    $('.ui.settings_modal')
        .modal({
          blurring: true
        })
        .modal('show')
      ;
  },
});

