App.FeedsNewRoute = Ember.Route.extend({

  model: function() {
    return App.Feed.createRecord();
  }

});