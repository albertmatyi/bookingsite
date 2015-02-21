'use strict';

Template.album.events({
	'click .album': function() {
		console.log('handle');
		alert('hey');
	}
});
