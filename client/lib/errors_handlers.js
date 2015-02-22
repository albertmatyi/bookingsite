'use strict';

App.component('error').expose({
	handle: function(err) {
		console.log(err);
		Alerts.add(err.reason + '\n' + err.details,
			'danger', {autoHide: false});
	}
});
