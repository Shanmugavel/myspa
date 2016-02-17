var gulp = require('gulp'), webserver = require('gulp-webserver');
var exec = require('child_process').exec;
gulp.task('default', ['pack-static', 'start-node']);

gulp.task('webserver', function () {
    gulp.src('.')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('pack-static', function() {
  gulp.src('./node_modules/bootstrap/dist/css/*.min.css').pipe(gulp.dest('./client/css/'));
  gulp.src('./node_modules/bootstrap/dist/css/*.map').pipe(gulp.dest('./client/css/'));
  gulp.src('./node_modules/bootstrap/dist/js/*.min.js').pipe(gulp.dest('./client/js/'));
  gulp.src('./node_modules/bootstrap/dist/js/*.map').pipe(gulp.dest('./client/js/'));
  gulp.src('./node_modules/bootstrap/dist/fonts/*').pipe(gulp.dest('./client/fonts/'));
  gulp.src('./node_modules/es6-shim/*.min.js').pipe(gulp.dest('./client/js/'));
  gulp.src('./node_modules/es6-shim/*.map').pipe(gulp.dest('./client/js/'));
  gulp.src('./node_modules/systemjs/dist/*.js').pipe(gulp.dest('./client/js/'));
  gulp.src('./node_modules/systemjs/dist/*.map').pipe(gulp.dest('./client/js/'));
  gulp.src('./node_modules/angular2/bundles/*.js').pipe(gulp.dest('./client/js/'));
  gulp.src('./node_modules/rxjs/bundles/*.js').pipe(gulp.dest('./client/js/'));
  gulp.src('./node_modules/jquery/dist/*.min.js').pipe(gulp.dest('./client/js/'));
});

gulp.task('start-node', function() {
   var child =  exec('node server/server.js', { env: {'PORT' : '3000', 'NODE_CONFIG_DIR' : './server/config'} },  function (err, stdout, stderr) {
        //console.log(stdout);
        //console.log(stderr);
    });
child.stdout.on('data', function(data) {
    console.log('stdout: ' + data);
});
child.stderr.on('data', function(data) {
    console.log('stderr: ' + data);
});

});