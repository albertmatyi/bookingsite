'use strict';

var albumData = {};

var getId = function() {
	return this.user + '.' + this.id;
};

var preloadImage = function($container, data, next) {
	var img = data.images[(data.idx - 1 + 2 * next + data.images.length) % data.images.length];
	$container.find('.album-image-preloader-' + next).css({
		'background-image': 'url(' + img.url + ')'
	});
};
var preloadImages = function($container, data) {
	preloadImage($container, data, 0);
	preloadImage($container, data, 1);
};
var setImage = function(id) {
	var data = albumData[id];
	var $container = $('.album-' + id.replace('.', '\\.'));
	if (!$container.length) {
		setTimeout(function() {
			setImage(id);
		}, 500);
	}
	var $nextImage = $container.find('.album-image-' + data.target);
	var $prevImage = $container.find('.album-image-' + (1 - data.target));

	$nextImage.css({
		'background-image': 'url(' + data.images[data.idx].url + ')'
	}).removeClass('fadeOutLeft fadeOutRight')
		.addClass(data.dir > 0 ? 'fadeInRight' : 'fadeInLeft');
	$prevImage
		.removeClass('fadeInLeft fadeInRight')
		.addClass(data.dir < 0 ? 'fadeOutRight' : 'fadeOutLeft');

	preloadImages($container, data);
};

var changeImage = function(dir) {
	var id = getId.call(this);
	var data = albumData[id];
	data.idx = (data.idx + dir + data.images.length) % data.images.length;
	data.target = 1 - data.target;
	data.dir = dir;
	setImage(id);
};

Template.album.events({
	'click .next': function() {
		changeImage.call(this, 1);
	},
	'click .prev': function() {
		changeImage.call(this, -1);
	}
});

Template.album.rendered = function() {
	var $container = $(this.firstNode);
	var id = getId.call(this.data);
	App.picasa.images(this.data.user, this.data.id, function(images) {
		albumData[id] = {images: images, target: 0, idx: 0};
		setImage(id);
	});
};

Template.album.helpers({
	albumId: getId
});
