'use strict';

Template.feedbacks.events({
	'click .feedback': function() {
		console.log('handle');
		alert('hey');
	}
});
