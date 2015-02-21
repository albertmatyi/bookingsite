'use strict';

Template.pageHead.helpers({
	'data': function() {
		return App.pages[this.type];
	}
});
