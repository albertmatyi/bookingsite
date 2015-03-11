'use strict';

App.component('error').expose({
	handle: function(err) {
		console.log(err);
		var msg = err.reason || 'Error';
		if (err.details) {
			msg += '\n' + err.details;
		}
		Alerts.add(msg, 'danger', {autoHide: false});
	}
});
