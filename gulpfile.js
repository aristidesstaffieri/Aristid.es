var gulp = require('gulp')
var babel = require('gulp-babel')
var server = require('gulp-develop-server')

gulp.task( 'server:start', function() {
    server.listen( { path: 'dist/index.js' } );
})

gulp.task( 'server:restart', function() {
    gulp.watch( [ 'index.js' ], ['transpile', server.restart] );
})
 
gulp.task('transpile', function () {
    return gulp.src('index.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'))
})

gulp.task('default', ['transpile', 'server:start', 'server:restart'])