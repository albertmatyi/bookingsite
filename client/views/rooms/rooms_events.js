'use strict';

Template.room.events({
	'click .book.btn': function() {
		Router.go('book', this);
	}
});
