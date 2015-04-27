'use strict';

App.component('login').expose({
	userCheck: function() {
		if (Meteor.userId()) {
			this.next();
		} else {
			Router.go('login');
		}
	}
});
