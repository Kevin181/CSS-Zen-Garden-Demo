// 导入 gulp/gulp-sass/gulp-autoprefixer 三个模块
var gulp = require('gulp');
var sass = require('gulp-sass');
// var autoprefixer = require('gulp-autoprefixer');

// 使用 gulp.task() 方法注册一个任务
// 第一个参数是任务名称
// 第二个参数是任务的执行逻辑
gulp.task('sass-1', function() {
    return gulp.src('001/sass/zengarden-001.scss')
        .pipe(sass())
        // .pipe(autoprefixer())
        .pipe(gulp.dest('001/css'));
});

gulp.task('sass-2', function() {
    return gulp.src('002/sass/zengarden-002.scss')
        .pipe(sass())
        // .pipe(autoprefixer())
        .pipe(gulp.dest('002/css'));
});

gulp.task('sass-3', function() {
    return gulp.src('003/sass/zengarden-003.scss')
        .pipe(sass())
        // .pipe(autoprefixer())
        .pipe(gulp.dest('003/css'));
});


