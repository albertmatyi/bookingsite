'use strict';

Template.feedbacksNewForm.helpers({
	showForm: function() {
		return Session.get('feedbacks.showForm') ? '' : 'hidden';
	}, showFormToggler: function() {
		return !Session.get('feedbacks.showForm') ? '' : 'hidden';
	}
});
Template.feedbacks.helpers({
	feedbackSent: function() {
		return Session.get('feedbacks.sent');
	}
});


