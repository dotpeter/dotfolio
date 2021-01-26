const mix = require('laravel-mix');

mix
  .js("assets/js/app.js", "build")
  .postCss('assets/src/sass/main.sass', 'css', [
    require('tailwindcss'),
    require('postcss-nested')
  ])
  .setPublicPath("assets/build")
  .setResourceRoot("./")
  .browserSync({
    proxy: "localhost/dotfolio",
    files: ["./**/*.php", "./assets/build/*.js", "./assets/build/*.css"]
  });

.options({
	processCssUrls: false
});