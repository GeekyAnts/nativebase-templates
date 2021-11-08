
const path = require('path');
const { templates, bumpVersion } = require('./utils');


init();


function init() {

    templates.forEach(template => {

        const { name, publishable } = template;
        const repoPath = path.resolve(name);
        if (publishable) {
            bumpVersion(repoPath, name);
        }
    });
}