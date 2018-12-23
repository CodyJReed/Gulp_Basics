"use strict";

const gulp = require("gulp"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  rename = require("gulp-rename"),
  sass = require("gulp-sass"),
  maps = require("gulp-sourcemaps");

// Concat js files in js folder, and create new app.js file. place into js folder
function concatScripts(cb) {
  gulp
    .src(["js/jquery.js", "js/sticky/jquery.sticky.js", "js/main.js"])
    .pipe(concat("app.js"))
    .pipe(gulp.dest("js"));
  cb();
}

// Take app.js files and create new minified app.min.js file. place into js folder
function minifyScripts(cb) {
  gulp
    .src("js/app.js")
    .pipe(uglify())
    .pipe(rename("app.min.js"))
    .pipe(gulp.dest("js"));
  cb();
}

// Take application.scss and compile with gulp-sass/sourcemaps.
// Create both a application.css and ...map file(s) and place in css folder
function compileSass(cb) {
  gulp
    .src("scss/application.scss")
    .pipe(maps.init())
    .pipe(sass())
    .pipe(write("./"))
    .pipe(gulp.dest("css"));
  cb();
}

function goodbye(cb) {
  console.log("");
  cb();
}

exports.default = goodbye;
exports.concat = concatScripts;
exports.minify = minifyScripts;
exports.compile = compileSass;
