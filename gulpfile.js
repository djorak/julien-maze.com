var gulp = require('gulp'),
    del = require('del'),
    bower = require('gulp-bower');

gulp.task('bower', function () {
    return bower()
        .pipe(gulp.dest('lib/'));
});

gulp.task('copy:vendors', ['clean'], function () {
    return gulp.src('bower_components/**/*')
        .pipe(gulp.dest('dist/vendors'));
});

gulp.task('copy:assets', ['clean'], function () {
    var index = gulp.src([
            'webapp/index.html',
            'webapp/css/**/*',
            'webapp/downloads/**/*',
            'webapp/images/**/*',
        ], {
            "base": "webapp"
        })
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
    return del(['dist']);
})
gulp.task('default', ['bower', 'dist']);
gulp.task('dist', ['copy:vendors', 'copy:assets']);
