var gulp = require('gulp');
var sass = require('gulp-sass');
var frontnote = require("gulp-frontnote");
var plumber = require("gulp-plumber");
var uglify = require("gulp-uglify");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("js", function() {
    gulp.src(["./js/**/*.js","!js/min/**/*.js"])
        .pipe(plumber())
        .pipe(frontnote({
            css: './css/style.css'
          }))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("./css"))
});
 
gulp.task("sass", function() {
    gulp.src("./sass/**/*scss")
        .pipe(plumber())
        .pipe(frontnote())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("./css"))
});
 
gulp.task("default", function() {
    gulp.watch(["./js/**/*.js","!js/min/**/*.js"],["js"]);
    gulp.watch("./sass/**/*.scss",["sass"]);
});
