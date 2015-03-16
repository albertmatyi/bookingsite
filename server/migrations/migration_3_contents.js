'use strict';
var idToRoot = {
	660001: 'presso',
	64022: 'location',
	68001: 'about',
//	104002: 'partners',
	64035: 'guestbook'
};
var ALBUM_REGEX = /<div.*username="(\w+)".*albumid="(\w+)"[^>]*>.*<\/div>/gi;
var ALBUM_REGEX_ALT =
	/<div.*albumid="(\w+)".*username="(\w+)"[^>]*>.*<\/div>/gi;
var processAlbumInfo = function(content) {
	_.each(content.i18n, function(local) {
		local.description = local.description.replace(ALBUM_REGEX, function() {
			content.album = {
				user: arguments[1],
				id: arguments[2]
			};
			return '';
		}).replace(ALBUM_REGEX_ALT, function() {
			content.album = {
				user: arguments[2],
				id: arguments[1]
			};
			return '';
		});
	});
};
var trimDescriptions = function(content) {
	_.each(content.i18n, function(local) {
		local.description = local.description
			.replace(/&nbsp;/g, '')
			.replace(/^(?:\s*<[^>]+>\s*)+$/, '')
			.trim();
	});
};
Migrations.add({
	name: 'Import site content data',
	version: 3,

	up: function() {
		App.contents.collection.remove({});
		_.each(App.migrations.data.all.categories, function(cat) {
			var parentId = idToRoot[cat.id];
			if (!parentId) {
				console.warn('Not migrating contents for', cat.id);
				return;
			}
			_.each(cat.contents, function(content, idx) {
				content = _.pick(content, 'i18n', 'weight');
				content.weight = parseInt(content.weight);
				content.weight = content.weight ? content.weight + 1 : idx + 1;
				processAlbumInfo(content);
				trimDescriptions(content);
				content.parentId = parentId;
				App.contents.collection.insert(content);
			});
		});
	},
	down: function() {
	}
});

//Migrations.migrateTo('3,rerun');
