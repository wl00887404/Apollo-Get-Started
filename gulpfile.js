let gulp = require('gulp')
let connect = require('gulp-connect')
let sass = require('gulp-sass')
let opn = require('opn')

gulp.task('connect', () => {
    connect.server({
        root: './',
        livereload: true,
        port:3000
    })
})

gulp.task('jpg', () => {
    gulp.src('./src/**/*.jpg')
        .pipe(gulp.dest('./'))
})
gulp.task('svg', () => {
    gulp.src('./src/**/*.svg')
        .pipe(gulp.dest('./'))
})

gulp.task('html', () => {
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./'))
        .pipe(connect.reload())
})

gulp.task('css', () => {
    gulp.src('./src/**/*.css')
        .pipe(gulp.dest('./'))
        .pipe(connect.reload())
})

gulp.task('sass', () => {
    gulp.src('./src/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./'))
        .pipe(connect.reload())
})

gulp.task('watch', () => {
    gulp.watch(['./src/**/*.html'], ['html'])
    gulp.watch('./src/**/*.css', ['css'])

    gulp.watch('./src/**/*.scss', ['sass'])

})

// gulp.task('opn', () => {
//     opn("http://localhost:8080/index.html")
// })

gulp.task('default', ['connect', 'html', 'css', 'sass', 'jpg', 'svg', 'watch'])