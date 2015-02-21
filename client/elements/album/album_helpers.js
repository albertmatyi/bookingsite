'use strict';

Template.album.helpers({
	images: function() {
		return App.picasa.images(this.user, this.id);
	}
});
