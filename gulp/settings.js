var path = require('path');
var projectName = 'starter',
    docRoot = path.resolve(__dirname, '..');

var Project = {
      rootFolder   :   path.resolve(__dirname, '..'),
      projectDir   :   `${docRoot}`,
}

Project.cssLocation = `${docRoot}/css`;
Project.sassLocation = `${docRoot}/sass`;
Project.indexFile = `${docRoot}/index.html`;
Project.styleModules = `${Project.sassLocation}/components`;
Project.baseStyles = `${Project.cssLocation}/base`;
Project.scripts = `${Project.projectDir}/js`;
Project.images = `${Project.projectDir}/img`;
Project.icons = `${Project.images}/icons/**/*.svg`;
Project.sprites = `${Project.images}/sprites`;
Project.finalStyles = `${Project.cssLocation}/style.css`;



module.exports = Project;

