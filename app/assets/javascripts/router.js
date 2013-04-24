App.Router.map(function() {
  this.resource('feeds', {path: '/'}, function() {
    this.route('new');
  });
});