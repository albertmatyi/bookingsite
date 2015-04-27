'use strict';

Template.feedbacksNewForm.events({
	'submit .feedback-form': function(e) {
		e.preventDefault();
		var data = $(e.currentTarget).serializeObject();
		App.call('feedbacks.new', data, function() {

		});
	},
	'click .cancel.btn': function(e) {
		e.preventDefault();
		Session.set('feedbacks.showForm', false);
	},
	'click .form-toggler': function() {
		Session.set('feedbacks.showForm', true);
	}
});
