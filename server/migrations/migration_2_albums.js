'use strict';

Migrations.add({
	name: 'Parse album urls & int values',
	version: 2,

	up: function() {
		App.rooms.collection.find({}).forEach(function(room) {
			var match = room.album_url.match(/\/(\d{8,})\/(.+)$/);// jshint ignore:line
			var user = match[1];
			var albumId = match[2];
			console.log('Updating room album user/album', user, albumId);
			App.rooms.collection.update(room._id,
				{
					$set: {
						places: parseInt(room.places),
						quantity: parseInt(room.quantity),
						weight: parseInt(room.weight),
						'album': {
							user: user,
							id: albumId
						}
					}
				});
		});
	},

	down: function() {
	}
});

//Migrations.migrateTo('2,rerun');
