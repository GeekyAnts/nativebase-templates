
const path = require('path');
const { templates, executeShellCommand } = require('./utils');



publishPackagesToNpm();


function publishPackagesToNpm() {

    templates.forEach(template => {

        const { name, version, publishable } = template;
        if (publishable) {
            const repoPath = path.resolve(name);
            const command = `cd ${repoPath} && yarn publish --new-version=${version}`
            executeShellCommand(command, `published ${name}!`);
        }

    });
}





