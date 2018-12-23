"use strict";

const { series } = require("gulp");

function hello(cb) {
  console.log("Hello!");
  cb();
}

function goodbye(cb) {
  console.log("Goodbye!");
  cb();
}

exports.default = series(hello, goodbye);
