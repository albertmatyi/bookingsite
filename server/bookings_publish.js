'use strict';

App.auth.meteor.publish('bookings', function() {
	// TODO return future bookings
	return App.bookings.collection.find();
});
