const gulp = require('gulp')
const babel = require('gulp-babel')
const del = require('del')

function clean() {
  return del('./cjs/**')
}

function buildCJS() {
  return gulp
    .src(['es/**/*.js'])
    .pipe(
      babel({
        'plugins': ['@babel/plugin-transform-modules-commonjs'],
      })
    )
    .pipe(gulp.dest('cjs/'))
}

exports.default = gulp.series(
  clean,
  buildCJS,
)