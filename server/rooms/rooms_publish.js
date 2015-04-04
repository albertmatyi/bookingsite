'use strict';

Meteor.publish('rooms', function() {
	return App.rooms.collection.find();
});

Meteor.publish('room', function(id) {
	return App.rooms.collection.find(id);
});
