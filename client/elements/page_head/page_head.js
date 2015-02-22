'use strict';

var getPageInfoHelper = function(key) {
	var pageInfo = App.pages[this.type];
	if (pageInfo) {
		return pageInfo[key];
	}
};

var getterFor = function(key) {
	return function() {
		var helper = getPageInfoHelper.call(this, key);
		if (helper) {
			return helper.call(Template.parentData(3));
		}
	};
};

Template.pageHead.helpers({
	'title': getterFor('title'),
	'description': getterFor('description'),
	'icon': getterFor('icon')
});
