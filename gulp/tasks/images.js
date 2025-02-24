module.exports = () => {
  $.gulp.task('images', () => {
    return $.gulp.src('./dev/images/**/*.{jpg,png,svg,gif,ico}')
      .pipe($.gulp.dest('./build/assets/images'))
      .pipe($.browserSync.reload({
        stream: true,
      }));
  });

  $.gulp.task('vectors', () => {
    return $.gulp.src('./dev/icons/*.svg')
      .pipe($.gp.svgmin({
        js2svg: {
          pretty: true,
        },
      }))
      .pipe($.gp.cheerio({
        run: ($) => {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: { xmlMode: true },
      }))
      .pipe($.gp.replace('&gt;', '>'))
      .pipe($.gp.svgSprite({
        mode: {
          symbol: {
            sprite: "sprite.svg",
          }
        }
      }))
      .pipe($.gulp.dest('./build/assets/icons/'));
  });
};

