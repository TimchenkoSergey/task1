"use strict";

const gulp       = require("gulp"),
	  minify     = require("gulp-minify-css"),
	  prefix     = require("gulp-autoprefixer"),
	  sass       = require("gulp-sass"),
	  rename     = require("gulp-rename"),
	  concat     = require("gulp-concat"),
      sourceMaps = require("gulp-sourcemaps"),
      uglify     = require("gulp-uglify"),
      babel      = require("gulp-babel"),
      imageOptim = require("gulp-imagemin");

gulp.task("css", function() {
	gulp.src([
			"node_modules/normalize/normalize.css",
			"scss/main.scss"
		])
		.pipe(sass())
		.pipe(concat("main.min.css"))
		.pipe(prefix("last 5 versions","> 1%","ie 9"))
		.pipe(minify())
		.pipe(gulp.dest("app/css/"));
});

gulp.task("js", function () {
	gulp.src(["js/*.js"])
		.pipe(sourceMaps.init())
		//.pipe(babel({
		//	presets: ["es2015"]
		//}))
		.pipe(concat("app.js"))
		//.pipe(uglify())
		.pipe(rename("main.min.js"))
		.pipe(sourceMaps.write())
		.pipe(gulp.dest("app/js/"));
});

gulp.task("images", function(cb) {
    gulp.src([
    		"img/*.png",
    		"img/*.jpg"
    	]).
	    pipe(imageOptim())
	    .pipe(gulp.dest("app/img/"));
});

gulp.task("watch", function() {
	gulp.watch("scss/*.scss", ["css"]);
});

gulp.task("default", ["css", "js"]);