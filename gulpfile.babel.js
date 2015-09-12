import gulp from 'gulp'
import sourcemaps from 'gulp-sourcemaps'
import browserSync from 'browser-sync'
import babel from 'gulp-babel'
import eslint from 'gulp-eslint'

gulp.task('browser-sync', function() {
    browserSync({
        proxy: "localhost:80/"
    })
})

gulp.task('babs', () => {
    return gulp.src(['index.js', './src/**/*.js', './src/**/*.jsx', './src/*.js', './src/*.jsx'])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write("../maps"))
        .pipe(gulp.dest('dist')
        .pipe(browserSync.reload({stream:true})));
})

gulp.task('lint', () => {
    return gulp.src(['index.js', 'tests/index.spec.js', 'src/*.js', 'src/**/jsx'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
})

gulp.task('default', ['babs', 'browser-sync'], () => {
    gulp.watch(['index.js', './src/**/*.jsx'], ['babs'])
})