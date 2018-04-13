var gulp = require('gulp'),
    Project = require("../settings");


gulp.task('printPaths', function(){
    console.log("Root Directory: " + Project.rootFolder)  ;
    console.log("Project Directory: " + Project.projectDir);
//    console.log(Project.wpContent) ;
//    console.log(Project.themeLocation) ;
    console.log("Index File: " + Project.indexFile) ;
    console.log("CSS location: " + Project.cssLocation);
    console.log("Style Modules: " + Project.styleModules  );
    console.log("Base Styles: " + Project.baseStyles   );
    console.log("Image Directory: " + Project.images  );
    console.log("Icons Directory: " + Project.icons );
//    console.log(Project.finalStyleSheet);
});
