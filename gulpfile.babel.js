'use strict';

// import plugins
import gulp from 'gulp';
import HubRegistry from 'gulp-hub';
import browserSync from 'browser-sync';
let hub = new HubRegistry(['./_tasks/*.js']);
gulp.registry(hub);


gulp.task('create', () => {
	browserSync.init({
		server: {
			baseDir: './dist'
		},
		port: 8000,
	})
	gulp.watch([
		'./templates/**/*.pug',
		'./_components/**/*.pug'
	], gulp.series('html'))
	gulp.watch(['./_components/**/*.sass'], gulp.series('css_dev'))
	gulp.watch(['./_components/**/*.js', './scripts/*.js'], gulp.series('script_dev'))
	gulp.watch('./img', gulp.series('del_img', 'copy_img'))
	gulp.watch('./plugins.json', gulp.series('concat_css', 'concat_js'))
	gulp.watch('./_plugins/*.js', gulp.series('concat_js'))
	gulp.watch('./_plugins/*.css', gulp.series('concat_css'))
	gulp.watch('./dist').on('change', browserSync.reload)
})


gulp.task('default',
	gulp.series(
		'del',
		'copy_img',
		'copy_fonts_1',
		'copy_fonts_2',
		'concat_css',
		'concat_js',
		'html',
		'css_dev',
		"script_dev",
		"create",
	)
)