'use strict';

Meteor.publish('feedbacks.public', function() {
	return App.feedbacks.collection.find({approved: true});
});
Meteor.publish('feedbacks.all', function(userId) {
	if (userId) {
		return App.feedbacks.collection.find();
	} else {
		return [];
	}
});
