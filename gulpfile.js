const gulp = require('gulp');
const zip = require('gulp-zip');
const builder = require('./helpers/builder');

gulp.task('zip', () => {
    return gulp.src('gen-apps/**/*')
        .pipe(zip('gen.apps.zip'))
        .pipe(gulp.dest('gen-apps/'));
});

gulp.task('watch', () => {
    return gulp
        .watch(sources, () => {
            console.log('changed. do something.');
        })
        .on('change', (event) => {
            console.log('*** File ' + event.path + ' was ' + event.type + ', running tasks...');
        })
});
