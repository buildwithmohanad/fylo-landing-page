const gulp = require("gulp");
const { src, dest } = require("vinyl-fs");
const { parallel } = require("gulp");
const htmlmin = require("gulp-htmlmin");

function uglifyHTML() {
  return src("src/index.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("dist"));
  // I moved the file to the root to deploy it easily
}

exports.uglifyHTML = uglifyHTML;

exports.default = uglifyHTML;
