
const path = require('path');



const version = process.argv[2].trim();

const { templates, updateNBVersionInJsonFile, executeShellCommand } = require('./utils');




updateTemplates();



function updateTemplates() {
    //updates expo, next and react-native templates
    templates.forEach(template => {
        const { name, path: jsonFilePath, nested } = template;
        if (!nested) {
            const command = `cd ${jsonFilePath} && yarn upgrade native-base@${version}`;
            executeShellCommand(command, `${name} nb version changed`);
            // bumpVersion(path, name);
        } else {
            updateNestedTemplates(jsonFilePath, name, version).then(() => {
                const repoPath = path.resolve(name);
                executeShellCommand(`cd ${repoPath} && yarn`, `yarn install done in ${name}`)
                // bumpVersion(foo, name);
            });
        }
    });
}


async function updateNestedTemplates(jsonFilePath, name, version) {

    for (let i = 0; i < jsonFilePath.length; i++) {
        const foo = jsonFilePath[i];
        if (name === "universal-app-template-nativebase" ||
            name === "universal-app-template-nativebase-typescript") {
            await updateNBVersionInJsonFile(foo, "universal-templates", name, version);
        } else {
            await updateNBVersionInJsonFile(foo, "cra-templates", name, version);
        }
    }
}