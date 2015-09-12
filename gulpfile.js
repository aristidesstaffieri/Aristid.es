var gulp = require('gulp')
var babel = require('gulp-babel')
var babelify = require('babelify')
var server = require('gulp-develop-server')
var eslint = require('gulp-eslint')
var browserify = require('browserify')
var source = require('vinyl-source-stream')

gulp.task( 'server:start', function() {
	server.listen( { path: 'dist/index.js' } )
})

gulp.task( 'server:restart', function() {
	gulp.watch( [ 'index.js' ], ['transpile', server.restart] )
})

gulp.task('transpile', function () {
	return gulp.src(['index.js', 'src/**/*.jsx', 'src/*.js', 'src/*.jsx'])
	.pipe(babel())
	.pipe(gulp.dest('dist'))
})

gulp.task('lint', function () {
	return gulp.src(['index.js', 'tests/index.spec.js', 'src/*.js', 'src/**/jsx'])
	.pipe(eslint())
	.pipe(eslint.format())
	.pipe(eslint.failOnError())
})

gulp.task('browserify', function() {
    return browserify('./dist/browser.js')
        .bundle()
        .pipe(source('browser.js'))
        .pipe(gulp.dest('./dist/'))
})

gulp.task('default', ['transpile', 'browserify', 'server:start', 'lint'])