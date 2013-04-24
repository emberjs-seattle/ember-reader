App.FeedItem = DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  content: DS.attr('string'),
  contentSnippet: DS.attr('string'),
  link: DS.attr('string'),
  publishedDate: DS.attr('date'),

  feed: DS.belongsTo('App.Feed')
});

App.FeedItem.FIXTURES = []; 