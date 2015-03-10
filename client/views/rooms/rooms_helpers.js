'use strict';

Template.room.helpers({
	cheapestPrice: function() {
		return this.prices.values[0];
	}
});

