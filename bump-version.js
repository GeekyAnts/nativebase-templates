
const { templates } = require('./utils');


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