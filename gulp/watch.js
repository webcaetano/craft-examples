'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

module.exports = function(options) {
	gulp.task('fullReload',gulp.series('html', function watch(done){
		browserSync.reload();
		done();
	}));


	gulp.task('watch', gulp.series('html',gulp.parallel('scripts:watch'), function watch(done) {
		gulp.watch([
			'src/index.html',
			'./package.json',
		], gulp.series('fullReload'));

		gulp.watch([
			'./../craft/.tmp/*.js',
		], function watch(done){
			browserSync.reload();
			done();
		});

		done();
	}));
};
