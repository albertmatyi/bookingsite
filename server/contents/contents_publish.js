'use strict';

App.auth.meteor.publish('contents', function(parentId) {
	return App.contents.collection.find({
		parentId: parentId
	});
});
