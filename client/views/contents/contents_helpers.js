'use strict';

Template.content.helpers({
	albumSize: function() {
		var size = '';
		if (this.album) {
			if (App.i18n.translate(this, 'description')) {
				size = 'col-xs-12 col-md-6';
			} else {
				size = 'col-xs-12';
			}
		} else {
			size = 'hidden';
		}
		return size;
	},
	descriptionSize: function() {
		var size = '';
		if (App.i18n.translate(this, 'description')) {
			if (this.album) {
				size = 'col-xs-12 col-md-6';
			} else {
				size = 'col-xs-12 col-lg-8 col-lg-offset-2';
			}
		} else {
			size = 'hidden';
		}
		return size;
	}
});

