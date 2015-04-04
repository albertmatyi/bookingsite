'use strict';

Meteor.publish('feedbacks.public', function () {
	return App.feedbacks.collection.find({approved: true});
});