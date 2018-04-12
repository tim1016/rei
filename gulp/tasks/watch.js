var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create(),
    Project = require('../settings');   
    
gulp.task('watch', function() {
   
   browserSync.init({
      server: {
      baseDir: Project.projectDir}
   });

  watch(Project.indexFile, function() {
    browserSync.reload();
  });

  watch(Project.cssLocation + '**/*.css', function() {
    gulp.start('cssInject');
  });
  
  watch(Project.scripts + '**/*.js', function() {
    gulp.start('scriptsRefresh');
  });
  
  

}); 

gulp.task('cssInject', function(){
   console.log(Project.finalStyles);
   return gulp.src(Project.finalStyles)
   .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'],function(){
  browserSync.reload();
})
