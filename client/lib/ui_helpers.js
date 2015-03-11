'use strict';

Blaze.registerHelper('session', function(name) {
	return Session.get(name);
});
