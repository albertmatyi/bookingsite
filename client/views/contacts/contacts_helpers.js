'use strict';

Template.contacts.helpers({
	contacts: function() {
		return ['wow', 'doge'];
	},
	contactData: function() {
		console.log('help');
		return 'hawaii';
	}
});

