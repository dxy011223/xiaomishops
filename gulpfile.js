const gulp = require('gulp')
// console.log(123)
var sass = require('gulp-sass')
// sass.compiler = require('node-sass')

//定义任务   参数：任务名     回调函数
// 执行任务    终端输入gulp+任务名
gulp.task('sass', function (cb) {
    //任务代码  
    console.log('sass 的处理人物 代码')
    gulp.src('src/scss/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError)) //管道函数

        .pipe(gulp.dest('dist/css'))
        .pipe(gulp.dest('src/css'))
    cb() //任务完成
})

gulp.task('sass:watch', function () {
    gulp.watch('./src/scss/**/*.scss', gulp.series('sass'))
})

const babel = require('gulp-babel')
var uglify = require('gulp-uglify')
gulp.task('js', function (cb) {
    //任务代码
    console.log('js 的处理人物 代码')
    gulp.src('./src/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env'],
            plugins: ["@babel/plugin-transform-runtime"]
        }))
        // .pipe(babel({
        //     plugins: ['@babel/transform-runtime']
        // }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
    cb() //任务完成
})
gulp.task('js:watch', function () {
    gulp.watch('./src/js/**/*.js', gulp.series('js'))
})
var concat = require('gulp-concat')
gulp.task('scripts', function () {
    return gulp.src('./src/js/login/*.js')
        .pipe(concat('login.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(gulp.dest('./src/js'))
})

const htmlmin = require('gulp-htmlmin')
gulp.task('minify', () => {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'))
})

var connect = require('gulp-connect')
gulp.task('connect', function (cb) {
    gulp.src('./src/**/*.html')
        .pipe(connect.reload())
    cb()
})
gulp.task('server', function () {
    connect.server({
        livereload: true,
    })
    gulp.watch('./src/js/**/*.js', gulp.series("connect"))
    gulp.watch('./src/css/*.css', gulp.series("connect"))
    gulp.watch('./src/scss/*.scss', gulp.series("sass"))
    gulp.watch('src/**/*.html', gulp.series("connect"))
})

// const imagemin = require('gulp-imagemin')
// gulp.task('imagemin', function (cb) {
//     gulp.src('src/images/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('dist/images'))
//     cb()
// })

gulp.task('build', gulp.series(['js', 'sass', 'minify']), function () {
    console.log('项目的构件压缩完毕')
})