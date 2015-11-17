// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var browserSync = require('browser-sync');
var changed = require('gulp-changed');

var reload = browserSync.reload;
var onError = function(err) {
	console.log(err);
	this.emit('end');
};

// BrowserSync
gulp.task('browser-sync', function() {
	browserSync.init({
		host: "192.168.1.50",
		xip: true,
		server: {
			index: "index.html"
		}
	});

	gulp.watch('./sass/{,**/}*.scss', ['sass']);
	gulp.watch('js/plugins/*', ['plugins']);
	gulp.watch(['js/vendors/*', 'js/plugins.concat.js', 'js/order/*', 'js/main/*', 'js/global/*'], ['scripts']);
	gulp.watch('./img/icons/*.svg', ['icon-generate']);
	gulp.watch('./*.html').on('change', reload);
});

// Compile Our SASS
gulp.task('sass', function() {
	return gulp.src('./sass/*.scss')
		.pipe(plumber({
			errorHandler: onError
		}))
		.pipe(changed('./css'))
		.pipe(sourcemaps.init())
		.pipe(sass({
			errLogToConsole: true
		}))
		.pipe(autoprefixer({
			browsers: ['last 3 versions'],
			cascade: false
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./css'))
		.pipe(notify("sass compiled, look at your styles"))
		.pipe(browserSync.stream());
});

// Minify CSS
gulp.task('sass-build', function() {
	return gulp.src('./sass/*.scss')
		.pipe(sass())
		.pipe(minifyCSS())
		.pipe(gulp.dest('./css'))
		.pipe(notify("sass-build completed"));
});

// Concat Plugins
gulp.task('plugins', function() {
	return gulp.src('js/plugins/*')
		.pipe(concat('plugins.concat.js'))
		.pipe(gulp.dest('./js/'))
		.pipe(notify("plugins done"));
});

// Concat Main JS
gulp.task('scripts', ['plugins'], function() {
	return gulp.src([
			'js/vendors/jquery-1.11.1.min.js',
			'js/order/before_plugins.js',
			'js/plugins.concat.js',
			'js/global/*',
			'js/order/init.js',
			'js/order/common.js',
			'js/main/*'
		])
		.pipe(concat('main.concat.js'))
		.pipe(plumber({
			errorHandler: onError
		}))
		.pipe(gulp.dest('./js/'))
		.pipe(rename('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./js/'))
		.pipe(notify("[ main scripts ] are ready, rock on!"));
});

// Generate iconfont
gulp.task('icon-generate', function() {
	var fontName = 'icon';

	return gulp.src('img/icons/*.svg')
		.pipe(iconfont({
			fontName: fontName,
			normalize: true,
			fontHeight: 1001
		}))
		.on('glyphs', function(glyphs, options) {
			var font_options = {
				className: fontName,
				fontName: fontName,
				fontPath: '../fonts/',
				glyphs: glyphs,
			};

			// CSS
			gulp.src('img/icons/template.css')
				.pipe(consolidate('lodash', font_options))
				.pipe(rename({
					basename: fontName
				}))
				.pipe(gulp.dest('css'));

			// HTML
			gulp.src('img/icons/template.html')
				.pipe(consolidate('lodash', font_options))
				.pipe(rename({
					basename: 'icon-sample'
				}))
				.pipe(gulp.dest('css'));
		})
		.pipe(gulp.dest('fonts'));
});


// Tasks
gulp.task('default', ['browser-sync']);
gulp.task('build', ['sass-build', 'plugins', 'scripts', 'icon-generate']);