'use strict';

Template.home.events({
	'click .home': function() {
		console.log('handle');
		alert('hey');
	}
});
