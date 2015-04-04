'use strict';

Meteor.publish('contents', function(parentId) {
	return App.contents.collection.find({
		parentId: parentId
	});
});
