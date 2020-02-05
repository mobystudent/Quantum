'use strict';

const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

gulp.task('view', () => {
    return gulp.src('view/*.pug')
        .pipe(sourcemaps.init())
        .pipe(pug({
            pretty: true
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.stream());
});

gulp.task('style', () => {
    return gulp.src('style/build.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(
            {outputStyle: 'compressed'}
        ).on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['> 0.5%, last 4 versions, Firefox ESR, ios_saf 4, Firefox >= 20, ie 6-11, iOS >=7']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/css'))
});

gulp.task('watch', () => {
    browserSync.init({
        server: "./build"
    });

    gulp.watch('style/**/*.scss', gulp.series('style'));
    gulp.watch('view/*.pug', gulp.series('view'));
});
