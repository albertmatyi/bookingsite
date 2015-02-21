'use strict';

App.auth.meteor.publish('rooms', function() {
	return App.rooms.collection.find();
});
