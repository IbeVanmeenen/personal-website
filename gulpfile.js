'use strict';

/* ==========================================================================
   Gulpfile

   Development-tasks:
   - gulp (build + watch)
   - gulp build
   - gulp watch
   ========================================================================== */


/* Setup Gulp
   ========================================================================== */
// Require Gulp
var gulp = require('gulp');

// Load Gulp plugins
var plugins = require('gulp-load-plugins')();

// Load the notifier.
var Notifier = require('node-notifier');

// Set to false if you don't want notifications when an error happens.
// (Errors will still be logged in Terminal)
var showErrorNotifications = true;

/* Config
   ========================================================================== */
var resourcesPath = './app';
var distPath = './dist';
var bowerComponentsPath = './bower_components';

var websiteIbe = {
    dist: {
        css: distPath + '/css',
        js: distPath + '/js',
        img: distPath + '/img',
        video: distPath + '/video',
        fonts: distPath + '/fonts'
    },

    img: resourcesPath + '/img/**/*.{png,jpg,jpeg,gif,svg,webp}',
    fonts: resourcesPath + '/fonts/**/*.{eot,woff,ttf,svg}',
    video: resourcesPath + '/video/**/*.{webm,mp4}',
    scss: [resourcesPath + '/scss/**/*.scss', 'pages/lab/css-shapes/demo/scss/magazine.scss'],

    js: {},

    liveReloadFiles: [
        distPath + '/css/style.min.css',
        distPath + '/css/magazine.min.css'
    ],
};


/* Errorhandling
   ========================================================================== */

var errorLogger = function(headerMessage,errorMessage){
    var header = headerLines(headerMessage);
        header += '\n             '+ headerMessage +'\n           ';
        header += headerLines(headerMessage);
        header += '\r\n \r\n';
    plugins.util.log(plugins.util.colors.red(header) + '             ' + errorMessage + '\r\n')

    if(showErrorNotifications){
        var notifier = new Notifier();
        notifier.notify({
            'title': headerMessage,
            'message': errorMessage,
            'contentImage':  __dirname + "/gulp_error.jpg"
        });
    }
}

var headerLines = function(message){
    var lines = '';
    for(var i = 0; i< (message.length + 4); i++){
        lines += '-';
    }
    return lines;
}

/* Tasks
   ========================================================================== */
// Styles
gulp.task('styles', function() {
    return gulp.src(websiteIbe.scss)
        // Scss -> Css
        .pipe(plugins.sass())
        .on('error', function (err){
            errorLogger('SASS Compilation Error', err.message);
        })

        // Combine Media Queries
        .pipe(plugins.combineMq())

        // Prefix where needed
        .pipe(plugins.autoprefixer('last 2 versions'))

        // Remove all comments
        .pipe(plugins.stripCssComments())

        // Minify output
        .pipe(plugins.minifyCss())

        // Rename the file to respect naming covention.
        .pipe(plugins.rename(function(path){
            path.basename += '.min';
        }))

        // Write to output
        .pipe(gulp.dest(websiteIbe.dist.css))

        // Show total size of css
        .pipe(plugins.size({
            title: 'css'
        }));
});


// Images
gulp.task('images', function () {
    return gulp.src(websiteIbe.img)
        // Only optimize changed images
        .pipe(plugins.changed(websiteIbe.dist.img))

        // Imagemin
        .pipe(plugins.imagemin({
            optimizationLevel: 3,
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }]
        }))

        // Set desitination
        .pipe(gulp.dest(websiteIbe.dist.img))

        // Show total size of images
        .pipe(plugins.size({
            title: 'images'
        }));
});


// Fonts
gulp.task('fonts', function () {
    return gulp.src(websiteIbe.fonts)
        // Set desitination
        .pipe(gulp.dest(websiteIbe.dist.fonts))

        // Show total size of files
        .pipe(plugins.size({
            title: 'fonts'
        }));
});


// Watch
gulp.task('watch', function () {
    // Livereload
    plugins.livereload.listen();
    gulp.watch(websiteIbe.liveReloadFiles).on('change', function(file) {
        plugins.livereload.changed(file.path);
        plugins.connect.reload();
    });

    // Styles
    gulp.watch(websiteIbe.scss, ['styles']);

    // Images
    gulp.watch(websiteIbe.img, ['images']);
});


// Perf budget
// gulp.task('perfBudget', function() {
//     var WebPageTest = require('webpagetest');
//     var wpt = new WebPageTest('www.webpagetest.org');

//     wpt.runTest('http://twitter.com/marcelduran', function(err, data) {
//       console.log(err || data);
//     });
// });


// Connect
gulp.task('connect', function() {
    plugins.connect.server({
        root: '.',
        livereload: true
    });
});


// Build
gulp.task('build', ['styles', 'images', 'fonts'], function() {
});


// Default
gulp.task('default', ['build'], function () {
    gulp.start(['connect', 'watch']);
});
