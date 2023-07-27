// webpack.mix.js

const mix = require('laravel-mix');
mix.disableNotifications();


mix.js('resources/js/app.js', 'public/js')
.extract()
.vue(3)
.postCss('resources/css/app.css', 'public/css', [
    //
])
.version();
