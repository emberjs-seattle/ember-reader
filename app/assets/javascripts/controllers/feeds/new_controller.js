App.FeedsNewController = Ember.ObjectController.extend({

  save: function() {
    var model = this.get('model');
    this.store.commit();
    this.target.transitionTo('feeds.index');
  }

});