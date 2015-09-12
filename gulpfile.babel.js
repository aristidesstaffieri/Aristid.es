const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const watchify = require('watchify');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint')

gulp.task('babs', function () {
    return gulp.src(['index.js', './src/**/*.js', './src/**/*.jsx', './src/*.js', './src/*.jsx'])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('dist'));
})

gulp.task('lint', function () {
    return gulp.src(['index.js', 'tests/index.spec.js', 'src/*.js', 'src/**/jsx'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
})
