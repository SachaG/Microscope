Meteor.subscribe('posts');

Meteor.autorun(function() {
  Meteor.subscribe('comments', Session.get('currentPostId'));
})

Meteor.subscribe('notifications');
