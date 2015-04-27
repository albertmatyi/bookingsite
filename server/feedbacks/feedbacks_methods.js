'use strict';
var MAIL_REGEX =
	/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi; //jshint ignore:line

var validate = function(feedbackData) {
	if (!/[\w -]{3,}/.test(feedbackData.name)) {
		throw new Meteor.Error('FEEDBACK_INVALID_NAME', 'Not a valid name');
	}
	if (!/[\w -]{3,}/.test(feedbackData.message)) {
		throw new Meteor.Error('FEEDBACK_INVALID_MESSAGE',
			'Not a valid message');
	}
	if (!MAIL_REGEX.test(feedbackData.email)) {
		throw new Meteor.Error('FEEDBACK_INVALID_EMAIL',
			'Not a valid email');
	}
};
var notifyAdmin = function(feedback) {
	var mailData = {
		'to': App.mail.getOptions().addresses.admin,
		'from': App.mail.getOptions().addresses.noreply,
		'html': App.mail.renderTemplate('feedbacks/feedbacks_new.html',
			feedback, 'en'),
		'text': App.mail.renderTemplate('feedbacks/feedbacks_new.txt',
			feedback, 'en'),
		'subject': App.mail.renderTemplate('feedbacks/feedbacks_new.subj',
			feedback, 'en'),
		'tags': ['feedback-notification']
	};
	App.mail.send(mailData);
};
Meteor.methods({
	'feedbacks.new': function(feedbackData) {
		validate(feedbackData);
		feedbackData.i18n = {
			en: {message: feedbackData.message},
			ro: {message: feedbackData.message},
			hu: {message: feedbackData.message}
		};
		feedbackData._id = App.feedbacks.collection.insert(feedbackData);
		notifyAdmin(feedbackData);
	}
});
