'use strict';

var gulp = require('gulp');
var _ = require('lodash');
var $ = require('gulp-load-plugins')();

module.exports = function(options) {
	gulp.task('html', gulp.series('scripts', function html() {

		return gulp.src('src/*.html')
			.pipe(gulp.dest(options.tmp));
	}));
};


