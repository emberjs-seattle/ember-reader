Ember.Handlebars.registerBoundHelper('fromNow', function(date) {
  return moment(date).fromNow();
});