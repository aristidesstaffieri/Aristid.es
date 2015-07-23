var gulp = require('gulp')
var babel = require('gulp-babel')
var server = require('gulp-develop-server')
var tape = require('gulp-tape')

gulp.task( 'server:start', function() {
    server.listen( { path: 'dist/index.js' } )
})

gulp.task( 'test', function() {
    return gulp.src('tests/*.js')
    .pipe(tape())
})

gulp.task( 'server:restart', function() {
    gulp.watch( [ 'index.js' ], ['transpile', server.restart] )
})
 
gulp.task('transpile', function () {
    return gulp.src('index.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'))
})

gulp.task('default', ['transpile', 'server:start', 'server:restart'])