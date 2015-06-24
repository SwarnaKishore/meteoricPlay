if (Meteor.isClient) {
  // counter starts at 0
  Template.lists.helpers({
  times: function () {
    var times = [];
    _(20).times(function(n){
      times.push(n);
    });
    return times;
  }
});

  this.route('lists');
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
