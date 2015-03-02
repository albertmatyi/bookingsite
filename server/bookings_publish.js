'use strict';

App.auth.meteor.publish('future-bookings', function() {
	// TODO return future bookings
	return App.bookings.collection.find();
});
