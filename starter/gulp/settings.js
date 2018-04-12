var path = require('path');
var projectName = 'starter',
    docRoot = path.resolve(__dirname, '..');

var Project = {
      rootFolder   :   path.resolve(__dirname, '..'),
      projectDir   :   `${docRoot}`,
}

Project.cssLocation = `${docRoot}/css`;
Project.indexFile = `${docRoot}/index.html`;
Project.styleModules = `${Project.cssLocation}/modules`;
Project.baseStyles = `${Project.cssLocation}/base`;
Project.scripts = `${Project.projectDir}/js`;
Project.images = `${Project.projectDir}/img`;
Project.icons = `${Project.images}/icons/**/*.svg`;
Project.sprites = `${Project.images}/sprites`;
Project.finalStyles = `${Project.cssLocation}/style.css`;



module.exports = Project;

