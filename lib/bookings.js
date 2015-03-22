'use strict';

var collection = new Meteor.Collection('bookings');

App.component('bookings').expose({
	collection: collection
});

App.auth.collections.allow(App.bookings.collection, {
	update: function(userId, doc, fields) {
		return fields.length === 1 && fields[0] === 'discount';
	}
});
