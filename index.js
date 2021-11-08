const path = require('path');
const version = process.argv[2].trim();

const { templates, updateNBVersionInJsonFile, isUniversalTemplate, executeShellCommand } = require('./utils');


updateTemplates();



function updateTemplates() {

    templates.forEach(template => {
        const { name, paths: templatePaths, nested } = template;
        const repoPath = path.resolve(name);
        if (!nested) {
            //updates expo, next and react-native templates
            templatePaths.forEach(templatePath => {
                const command = `cd ${templatePath} && yarn upgrade native-base@${version}`;
                executeShellCommand(command, `${name} nb version changed`);
                // bumpVersion(repoPath, name);
            });
        } else {
            //updates cra and universal templates
            updateNestedTemplates(templatePaths, name, version).then(() => {
                if (isUniversalTemplate(name))
                    executeShellCommand(`cd ${repoPath} && yarn`, `yarn install done in ${name}`)
                // bumpVersion(repoPath, name);
            });
        }
    });
}


async function updateNestedTemplates(templatePaths, name, version) {

    for (let i = 0; i < templatePaths.length; i++) {
        const templatePath = templatePaths[i];
        const jsonFileName = isUniversalTemplate(name) ? "package.json" : "template.json";
        await updateNBVersionInJsonFile(`${templatePath}/${jsonFileName}`, name, version);
    }
}
