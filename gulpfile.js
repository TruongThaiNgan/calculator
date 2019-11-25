var gulp = require("gulp");
const files = {
    htmlPath : 'src/*.html',
    scssPath : 'src/scss/**/*.scss',
    imgPath : 'src/img/*.+(png|jpg|jpeg|gif|svg)',
    jsPath : 'src/js/*.js',
    sass_cssPath: 'src/scss/*.scss'
};

var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src(files.scssPath)
        .pipe(browserSync.reload({
            stream:true
        }));
});

gulp.task('scss', function(){
    return gulp.src(files.sass_cssPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(browserSync.reload({
            stream : true
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('html', function(){
    return gulp.src(files.htmlPath)
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir : 'dist'
        }
    });
});

gulp.task('js', function(){
    return gulp.src(files.jsPath)
        .pipe(browserSync.reload({
            stream : true
        }))
        .pipe(gulp.dest('dist/js'));
});

var imagemin = require('gulp-imagemin');

gulp.task('images', function(){
    return gulp.src(files.imgPath)
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function(){
    gulp.watch(files.scssPath, gulp.series(['sass','scss']));
    gulp.watch(files.htmlPath, gulp.series(['html']));
    gulp.watch(files.jsPath, gulp.series(['js']));
});

gulp.task('default', gulp.parallel(['browserSync', 'sass', 'scss', 'html', 'images','js'], 'watch', function(callback){
    callback;
}));