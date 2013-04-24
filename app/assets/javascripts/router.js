App.Router.map(function() {
  this.resource('feeds', {path: '/'}, function() {
    this.route('new');
    this.resource('feed', {path: '/feeds/:feed_id'}, function() {
      this.route('index');
    });
  });
});