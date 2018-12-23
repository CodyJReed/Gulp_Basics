"use strict";

const gulp = require("gulp"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  rename = require("gulp-rename");

function concatScripts(cb) {
  gulp
    .src(["js/jquery.js", "js/sticky/jquery.sticky.js", "js/main.js"])
    .pipe(concat("app.js"))
    .pipe(gulp.dest("js"));
  cb();
}

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
