'use strict';

Meteor.publish('guests', function() {
	return App.guests.collection.find();
});
