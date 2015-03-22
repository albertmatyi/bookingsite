'use strict';

Router.route('/login', {
	name: 'login',
	onBeforeAction: function() {
		if (Meteor.userId()) {
			Router.go('admin');
		} else {
			this.next();
		}
	}
});

Template.login.events({
	'submit form': function(e) {
		e.preventDefault();
		var data = $(e.currentTarget).serializeObject();
		Meteor.loginWithPassword(data.username, data.password, function(e) {
			if (e) {
				App.error.handle(e);
			} else {
				Router.go('admin');
			}
		});
	}
});
