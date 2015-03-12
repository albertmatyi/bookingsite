'use strict';

var collection = new Meteor.Collection('contents');

App.component('contents').expose({
	collection: collection
});

