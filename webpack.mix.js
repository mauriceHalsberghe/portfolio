let mix = require('laravel-mix');

mix
    .js('src/scripts/app.js', 'dist')
    .setPublicPath('dist')
    .postCss('src/style/main.css', 'dist', [require('postcss-for')])
    .setPublicPath('dist');