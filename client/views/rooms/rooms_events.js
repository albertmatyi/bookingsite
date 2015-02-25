'use strict';

Template.room.events({
	'click .book.btn': function() {
		Router.go('booking', this);
	}
});
