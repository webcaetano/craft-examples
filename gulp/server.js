'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var util = require('util');

module.exports = function(options) {
	function browserSyncInit(baseDir, browser='default', done) {
		browserSync.instance = browserSync.init({
			startPath: '/',
			server: {
				baseDir: baseDir
			},
			browser: browser,
			notify: false,
			open: false
		});

		done();
	}

	gulp.task('serve', gulp.series('watch', browserSyncInit.bind(null,[
		options.tmp,
		'.',
		'./../craft/build',
		'src'
	],null)));

	// gulp.task('serve:dist', gulp.series('build', browserSyncInit.bind(null,[
	// 	'build:examples'
	// ],null)));
};
