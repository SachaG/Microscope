Meteor.subscribeWithPagination('posts', 10);

Meteor.autorun(function() {
  Meteor.subscribe('comments', Session.get('currentPostId'));
})

Meteor.subscribe('notifications');
