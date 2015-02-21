'use strict';

Migrations.add({
	name: 'Add rooms',
	version: 2,

	up: function() {
		App.rooms.collection.find({}).forEach(function(room) {
			var match = room.album_url.match(/\/(\d{8,})\/(.+)$/);// jshint ignore:line
			var user = match[1];
			var album = match[2];
			console.log('Updating room album user/album', user, album);
			App.rooms.collection.update(room._id,
				{
					$set: {
						'album': {
							user: user,
							albumId: album
						}
					}
				});
		});
	},

	down: function() {
	}
});

//Migrations.migrateTo('2,rerun');
