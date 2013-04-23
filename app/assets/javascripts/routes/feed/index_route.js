App.FeedIndexRoute = Ember.Route.extend({

  model: function() {
    return this.modelFor('feed');
  },

  setupController: function(controller, feed) {
    feed.refresh();
  }

});