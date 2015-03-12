/**
 * Created by albertmatyi on 2/25/15.
 */
'use strict';

Template.currencySelector.helpers({
	currencies: App.currency.currencies,
	selected: function() {
		return this._id === App.currency.selected() ? 'selected' : '';
	}
});

Template.currencySelector.events({
	'change .currency': function(e) {
		var $select = $(e.currentTarget);
		App.currency.select($select.val());
	}
});

Blaze.registerHelper('currency', App.currency.selected);
