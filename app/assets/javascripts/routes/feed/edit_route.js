App.FeedEditRoute = Ember.Route.extend({

  model: function() {
    return this.modelFor('feed');
  },

  exit: function() {
    this._super();
    var model = this.currentModel;
    if(!model.get('isSaving')) {
      model.get('transaction').rollback();
    }
  }

});