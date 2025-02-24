module.exports = () => {
  $.gulp.task('watch', () => {
    $.gulp.watch('./dev/markup/**/*.html', $.gulp.series('markup'));
    $.gulp.watch('./dev/styles/**/*.{sass,scss}', $.gulp.series('styles'));
    $.gulp.watch('./dev/scripts/**/*.js', $.gulp.series('scripts'));
    $.gulp.watch('./dev/images/**/*.{jpg,png,svg,gif,ico}', $.gulp.series('images'));
    $.gulp.watch('./dev/icons/**/*.svg', $.gulp.series('vectors'));
    $.gulp.watch('./dev/fonts/**/*.{woff,woff2,eot,ttf}', $.gulp.series('fonts'));
    $.gulp.watch('./dev/libraries/**/*.{css}', $.gulp.series('libraries-styles'));
    $.gulp.watch('./dev/libraries/**/*.{js}', $.gulp.series('libraries-scripts'));
  });
};
