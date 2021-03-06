var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */


elixir.config.sourcemaps = false;

elixir(function(mix) {

    mix.less('app.less','public/assets/admin/css');
    mix.scripts('app.js', 'public/assets/admin/js');

  //   mix.browserSync({
  //   	proxy: 'public/index.php',
  //   	ui: {
		//     port: 8000
		// }
  //   });

});
