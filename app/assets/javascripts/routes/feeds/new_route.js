App.FeedsNewRoute = Ember.Route.extend({

  model: function() {
    return App.Feed.createRecord();
  },

  exit: function() {
    this._super();
    var model = this.currentModel;
    if(!model.get('isSaving')) {
      model.get('transaction').rollback();
    }
  }

});