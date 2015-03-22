'use strict';

var getPageInfoHelper = function(key) {
	var pageInfo = App.pages;
	var parts = this.type.split('.');
	_.each(parts, function(part) {
		if (typeof pageInfo[part] === 'undefined') {
			pageInfo[part] = {};
		}
		pageInfo = pageInfo[part];
	});
	if (pageInfo) {
		return pageInfo[key];
	}
};

var getterFor = function(key) {
	return function() {
		var helper = getPageInfoHelper.call(this, key);
		if (helper) {
			return helper.call(Template.parentData(1));
		}
	};
};

Template.pageHead.helpers({
	'title': getterFor('title'),
	'description': getterFor('description'),
	'icon': getterFor('icon')
});
