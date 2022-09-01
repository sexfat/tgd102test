const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');


function defaultTask(cb){
    //任務
  console.log('start');
  cb();
}

exports.task = defaultTask;

// 任務A
function taskA(cb){
    console.log('a task');
    cb();
};

//任務B
function taskB(cb){
    console.log('b task');
    cb();
};

//同時執行 A B任務
exports.sync = parallel(taskA , taskB);

//先執行 A 在執行B
exports.async = series(taskA , taskB);


// src dest
function move(){
   return src('*.html').pipe(dest('dist'));
}

exports.m = move


// rename 
const rename = require('gulp-rename');
//js uglify
const uglify = require('gulp-uglify');

function  Jsminify(){
    return src('js/*.js')
    .pipe(uglify())
    .pipe(rename({
        extname: '.min.js' 
    }))
    .pipe(dest('dist/js'))
}

exports.uglify = Jsminify;


// css minify
const cleanCSS = require('gulp-clean-css');

function cssminify(){
  return src('sass/*.css')
  .pipe(cleanCSS())
  .pipe(rename({
    extname: '.min.css' 
}))
  .pipe(dest('dist/css'));
}


exports.css = cssminify 










 












