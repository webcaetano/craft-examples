'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

module.exports = function(options) {
	gulp.task('watch', gulp.series('html',gulp.parallel('scripts:watch'), function watch(done) {
		gulp.watch(['src/index.html','./package.json'], gulp.series('html', function watch(){
			browserSync.reload();
		}));
		done();
	}));
};
