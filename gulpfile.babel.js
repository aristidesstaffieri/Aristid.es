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

gulp.task('babsServer', () => {
    return gulp.src('index.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write("../maps"))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({stream:true}));
})

gulp.task('babsComponents', () => {
    return gulp.src('./src/components/*.jsx')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write("../maps"))
        .pipe(gulp.dest('dist/components'))
        .pipe(browserSync.reload({stream:true}));
})

gulp.task('babsBrowser', () => {
    return gulp.src('./src/browser.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write("../maps"))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({stream:true}));
})

gulp.task('babsRoutes', () => {
    return gulp.src('./src/routes.jsx')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write("../maps"))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({stream:true}));
})


gulp.task('lint', () => {
    return gulp.src(['index.js', 'tests/index.spec.js', 'src/*.js', 'src/**/jsx'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
})

gulp.task('default', ['babsBrowser', 'babsComponents', 'babsServer', 'babsRoutes', 'browser-sync'], () => {
    gulp.watch(['index.js', './src/**/*.jsx'], ['babsServer', 'babsBrowser'])
})