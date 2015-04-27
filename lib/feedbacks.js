'use strict';

var collection = new Meteor.Collection('feedbacks');

App.component('feedbacks').expose({
	collection: collection
});

App.feedbacks.collection.allow({
	insert: function(userId, doc) {
		return doc.email && doc.name && doc.message;
	}
});

App.auth.collections.allow(App.feedbacks.collection, {
	update: function(userId, doc, fields) {
		return fields.length === 1 && fields[0] === 'discount';
	},
	remove: function() {
		// auth done by the auth component
		return true;
	}
});
