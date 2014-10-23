var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('compress',function() {
	gulp.src('lib/tiny-bind.js')
	.pipe(uglify())
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('lib'))
});

gulp.task('democopy',function() {
	gulp.src('lib/tiny-bind.min.js')
	.pipe(gulp.dest('demo/js'));
	gulp.src('lib/tiny-bind.js')
	.pipe(gulp.dest('demo/js'));
});

gulp.task('watch',function() {
	gulp.watch('lib/tiny-bind.js',['compress','democopy']);
});

