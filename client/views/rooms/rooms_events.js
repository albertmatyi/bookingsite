'use strict';

Template.rooms.events({
	'click .rooms': function() {
		console.log('handle');
		alert('hey');
	}
});
