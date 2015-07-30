var gulp = require('gulp')
var babel = require('gulp-babel')
var server = require('gulp-develop-server')
var tape = require('gulp-tape')
var eslint = require('gulp-eslint')

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

gulp.task('transpileSrc', function () {
    return gulp.src('src/**/*.jsx')
        .pipe(babel())
        .pipe(gulp.dest('dist'))
})

gulp.task('transpileBrowser', function () {
    return gulp.src('src/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'))
})

gulp.task('lint', function () {
    return gulp.src(['index.js', 'tests/index.spec.js', 'src/*.js', 'src/**/jsx'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError())
})

gulp.task('default', ['transpile', 'transpileSrc', 'transpileBrowser', 'server:start', 'server:restart', 'lint'])