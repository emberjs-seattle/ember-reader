App.Feed = DS.Model.extend({
  name: DS.attr('string'),
  url: DS.attr('string')
});

App.Feed.FIXTURES = [
  {id: 1, name: 'CodeBrief', url: 'http://codebrief.com/atom.xml'},
  {id: 2, name: 'GroupTalent Blog', url: 'https://grouptalent.com/blog/feed.xml'}
];