var gulp = require('gulp'), del = require('del');
var exec = require('child_process').exec;

gulp.task('default', ['pack-static', 'start-node']);


gulp.task('pack-static', function() {
  
  var child = exec( 'bower-installer --remove', {}, function (err, stdout, stderr) {
      gulp.src('./client/system.js/css/system-polyfills.js.map').pipe(gulp.dest('./client/system.js/js/'));
      del(['./client/system.js/css']);
  });
  child.stdout.on('data', function(data) {
        console.log('stdout: ' + data);
  });
  child.stderr.on('data', function(data) {
        console.log('stderr: ' + data);
  });
});

gulp.task('start-node', function() {
   var child =  exec('node server/server.js', { env: {'PORT' : '3000', 'NODE_CONFIG_DIR' : './server/config'} },  function (err, stdout, stderr) {
    });
child.stdout.on('data', function(data) {
    console.log('stdout: ' + data);
});
child.stderr.on('data', function(data) {
    console.log('stderr: ' + data);
});

});