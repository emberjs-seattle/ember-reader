App.FeedsRoute = Ember.Route.extend({

  model: function() {
    return App.Feed.find();
  }

});