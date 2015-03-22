'use strict';

var STATE_ICONS = {
	'new': 'asterisk',
	accepted: 'check-circle',
	denied: 'minus-circle'
};

var getState = function(booking) {
	return booking.state || 'new';
};
Template.adminBookingsRow.helpers({
	guest: function() {
		return App.guests.collection.findOne(this.guestId);
	},
	room: function() {
		return App.rooms.collection.findOne(this.roomId);
	},
	state: function() {
		var state = getState(this);
		return App.i18n.translate('admin.state.' + state);
	},
	stateIcon: function() {
		return STATE_ICONS[getState(this)];
	}
});

App.component('admin.booking').expose({
	getState: getState,
	STATE_ICONS: STATE_ICONS
});
