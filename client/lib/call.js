'use strict';

App.call = function() {
	var callback;
	if (arguments.length > 0 &&
		typeof arguments[arguments.length - 1] === 'function') {
		callback = arguments[arguments.length - 1];
	}
	var argArr = Array.prototype.splice.call(arguments, 0);
	if (callback) {
		argArr.pop();
		argArr.push(function(err) {
			if (err) {
				App.error.handle(err);
			} else {
				callback.call(null, Array.prototype.splice.call(arguments, 1));
			}
		});
	}
	return Meteor.call.apply(Meteor, argArr);
};
