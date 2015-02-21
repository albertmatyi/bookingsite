'use strict';

Template.pageHead.events({
	'click .pageHead': function() {
		console.log('handle');
		alert('hey');
	}
});
