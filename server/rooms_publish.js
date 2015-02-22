'use strict';

App.auth.meteor.publish('rooms', function() {
	return App.rooms.collection.find();
});

App.auth.meteor.publish('room', function(id) {
	return App.rooms.collection.find(id);
});
