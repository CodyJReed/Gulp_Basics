"use strict";

const gulp = require("gulp"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  rename = require("gulp-rename");

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

function goodbye(cb) {
  console.log("");
  cb();
}

exports.default = goodbye;
exports.concat = concatScripts;
exports.minify = minifyScripts;
