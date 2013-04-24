App.Router.map(function() {
  this.resource('feeds', {path: '/'}, function() {
    this.route('new');
    this.resource('feed', {path: '/feeds/:feed_id'}, function() {
      this.route('index');
      this.route('edit');
      this.resource('feed_item', {path: '/feed_item/:feed_item_id'});
    });
  });
});