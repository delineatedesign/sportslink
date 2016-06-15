var gulp = require("gulp");
var concat = require("gulp-concat");
var notify = require("gulp-notify");
var sourcemaps = require("gulp-sourcemaps");
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;
var stylelint = require("stylelint");
var reporter = require("postcss-reporter");
var postcss = require("gulp-postcss");
var postcssImport = require("postcss-easy-import");
var postcssAssets = require("postcss-assets");
var simplevars = require("postcss-simple-vars");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
var nestedcss = require("postcss-nested");
var mixins = require("postcss-mixins");
var postcssColorFunction = require("postcss-color-function");
var ts = require("gulp-typescript");
var fileinclude = require('gulp-file-include');

// Static server
gulp.task("browser-sync", ["styles"], function() {
    browserSync.init({
        open: true,
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("preCSS/**/*.css", ["styles"]);
});

gulp.task("lint-styles", function() {
    return gulp.src("preCSS/**/*.css")
    .pipe(postcss([
        stylelint("./.stylelintrc"),
        reporter({
            clearMessages: true
        }),
    ]));
});


gulp.task("styles", ["lint-styles"], function() {
    var processors = [
        postcssImport({glob: true}),
        mixins,
        simplevars,
        nestedcss,
        postcssAssets,
        postcssColorFunction(),
        autoprefixer({browsers: ["iOS >= 6", "ie_mob >= 8", "android >= 2.3"]})
    ];
    return gulp.src("preCSS/styles.css")
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("css/"))
    .pipe(reload({stream: true}));
});

// Markup
gulp.task('fileinclude', function() {
  gulp.src(['./index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: './'
    }))
    //.pipe(gulp.dest('./who.html'));
});

// TypeScript
gulp.task("ts", function() {
    return gulp.src("preTS/**/*.ts")
    .pipe(sourcemaps.init())
    .pipe(ts({
        noImplicitAny: true,
        out: "output.js"
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("js/"))
    .pipe(notify("Spiffing! Take a glance in the browser."))
    .pipe(reload({stream:true}));
});
// Concatenate & Minify JS
gulp.task("scripts", function() {
    return gulp.src("preJS/*.js")
    .pipe(concat("sportslink.js"))
    .pipe(gulp.dest("js/"))
    .pipe(notify("Spiffing! Take a glance in the browser."))
    .pipe(reload({stream:true}));
});

// Watch
gulp.task("watch", function() {
    // Watch .js files
    gulp.watch(["preJS/**/*.js"], ["scripts", browserSync.reload]);

});

// Watch TS
gulp.task("watch", function() {
    // Watch .ts files
    gulp.watch(["preTS/**/*.ts"], ["ts", browserSync.reload]);

});

gulp.task("default", ["scripts", "browser-sync", "watch"]);
