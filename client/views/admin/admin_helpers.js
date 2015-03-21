'use strict';

Template.admins.helpers({
	admins: function() {
		return ['wow', 'doge'];
	},
	adminData: function() {
		console.log('help');
		return 'hawaii';
	}
});

