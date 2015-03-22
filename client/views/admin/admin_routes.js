'use strict';
Router.route('/admin', {
	name: 'admin',
	onBeforeAction: function() {
		Router.go('adminBookings');
	}
});
