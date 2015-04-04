'use strict';

var throwNotAllowedErr = function() {
	throw new Meteor.Error('NOT_ALLOWED',
		'The user is either not logged in ' +
		'or coming from a wrong domain',
		'Please log in or make  sure you are a ' +
		'@geniuxde / @geniuxconsulting.de user');
};

App.component('auth').expose({
	isAllowed: function(userId) {
		return App.auth.isAdmin(userId);
	}, 
	isAdmin: function(userId) {
		var user = Meteor.users.findOne(userId);
		var allowed = user && user.username === 'admin';
		return allowed;
	},
	throwNotAllowed: throwNotAllowedErr
});
var authWrapMethod = function(method) {
	return function() {
		if (!App.auth.isAllowed(Meteor.userId())) {
			throwNotAllowedErr();
		} else {
			return method.apply(this, arguments);
		}
	};
};

var authWrapPublish = function(method) {
	return function() {
		if (!App.auth.isAllowed(this.userId)) {
			return [];
		} else {
			return method.apply(this, arguments);
		}
	};
};

var authWrapCollectionAllow = function(method) {
	return function(userId) {
		// console.log(userId);
		if (!App.auth.isAllowed(userId)) {
			throwNotAllowedErr();
		} else {
			return method.apply(this, arguments);
		}
	};
};

App.component('auth.collections').expose({
	allow: function(collection, allowMeths) {
		_.each(allowMeths, function(meth, key) {
			allowMeths[key] = authWrapCollectionAllow(meth);
		});
		collection.allow(allowMeths);
	}
});

App.component('auth.meteor').expose({
	methods: function(methObj) {
		_.each(methObj, function(meth, key) {
			methObj[key] = authWrapMethod(meth);
		});
		Meteor.methods(methObj);
	},
	publish: function(publishName, meth) {
		Meteor.publish(publishName, authWrapPublish(meth));
	}
});
