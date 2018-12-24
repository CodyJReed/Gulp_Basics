"use strict";

const gulp = require("gulp"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  rename = require("gulp-rename"),
  sass = require("gulp-sass"),
  maps = require("gulp-sourcemaps");

// Concat js files in js folder, and create new app.js, and ...map file. place into js folder
function concatScripts() {
  return gulp
    .src(["js/jquery.js", "js/sticky/jquery.sticky.js", "js/main.js"])
    .pipe(maps.init())
    .pipe(concat("app.js"))
    .pipe(maps.write("./"))
    .pipe(gulp.dest("js"));
}

// Take app.js files and create new minified app.min.js file. place into js folder
function minifyScripts() {
  return gulp
    .src("js/app.js")
    .pipe(uglify())
    .pipe(rename("app.min.js"))
    .pipe(gulp.dest("js"));
}

// Take application.scss and compile with gulp-sass/sourcemaps.
// Create both a application.css and ...map file(s) and place in css folder
function compileSass() {
  return gulp
    .src("scss/application.scss")
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write("./"))
    .pipe(gulp.dest("css"));
}

exports.default = gulp.series(
  gulp.parallel(concatScripts, compileSass),
  minifyScripts
);
exports.concat = concatScripts;
exports.minify = minifyScripts;
exports.compile = compileSass;
