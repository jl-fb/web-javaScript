const gulp = require('gulp')
const util = require('gulp-util')
//const sequence = require('run-sequence')

require('./gulpTasks/app')
require('./gulpTasks/server')
require('./gulpTasks/deps')

gulp.task('default', () =>{
    if(util.env.production){
       // sequence('deps', 'app')
       gulp.start('deps', 'app')
    }else {
        //sequence('deps', 'app', 'server')
        gulp.start('deps', 'app', 'server')
    }
}) 