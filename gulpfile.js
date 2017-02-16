var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber');
	livereload = require('gulp-livereload');


// Scripts Task
// Uglifies

gulp.task('scripts', function() {
	gulp.src('sass/js/*.js')
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest('js'));
});

// Style Task

gulp.task('style', function() {
	gulp.src('sass/scss/style.scss')
	.pipe(plumber())
	.pipe(sass({
		outputStyle: 'expanded'
	}))
	.pipe(gulp.dest(''))
	.pipe(livereload());
});

// Watch Task
// Watches JS

gulp.task('watch', function() {

	 livereload.listen();

	gulp.watch('sass/js/*.js', ['scripts']);
	gulp.watch('sass/scss/style.scss', ['style']);
});

gulp.task('default', ['scripts', 'style', 'watch']);