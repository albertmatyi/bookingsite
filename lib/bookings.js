'use strict';

var collection = new Meteor.Collection('bookings');

App.component('bookings').expose({
	collection: collection
});

