'use strict';

Template.adminHeader.events({
	'click .logout.btn': function() {
		Meteor.logout();
		Router.go('/');
	}
});
