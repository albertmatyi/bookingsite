'use strict';

Template.contacts.events({
	'click .contact': function() {
		console.log('handle');
		alert('hey');
	}
});
