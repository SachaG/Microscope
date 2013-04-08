postsHandle = Meteor.subscribeWithPagination('newPosts', 10);

Meteor.autorun(function() {
  Meteor.subscribe('singlePost', Session.get('currentPostId'));
  
  Meteor.subscribe('comments', Session.get('currentPostId'));
})

Meteor.subscribe('notifications');
