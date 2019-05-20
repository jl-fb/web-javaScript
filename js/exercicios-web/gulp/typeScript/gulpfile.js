const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')
const concat = require('gulp-concat')
const uglify = require ('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('default', ()=>{
    return tsProject.src() /* caminho do arquivo config ja declarado na constante */
    .pipe(tsProject())/* acontece a compilação de typescript p/ JS */
    /* .pipe(babel({
        comments: false,
        presets: ["env"]
    }))
    .pipe(uglify()).on('error', function (err) { console.log(err)})
    .pipe(concat('codigo.min.js')) */
    .pipe(gulp.dest('build2'))
})