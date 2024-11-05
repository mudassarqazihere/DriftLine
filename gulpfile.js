const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

// Task to minify CSS
gulp.task('minify-css', function() {
    return gulp.src('css/*.css') // Adjust to the correct path for your CSS files
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css')); // Output directory
});
