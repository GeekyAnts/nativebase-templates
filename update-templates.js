const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');


const version = process.argv[2].trim();


// updateExpoTemplate();
// updateExpoTemplateTypescipt();
// updateReactNativeTemplate();
// updateReactNativeTemplateTypeScript();
// updateNextJsTemplate();
//updateNextJsTemplateTypeScript();
// updateCraTemplate();
// updateCraTemplateTypeScript();
// updateUniversalAppTemplate();
// updateUniversalAppTypeScriptTemplate();

function updateUniversalAppTypeScriptTemplate() {
    const templateName = "universal-app-template-nativebase-typescript";
    const basePath = templateName;
    updateUniversalTemplatesPackageJson(basePath, templateName);
}


function updateUniversalAppTemplate() {
    const templateName = "universal-app-template-nativebase";
    const basePath = templateName;
    updateUniversalTemplatesPackageJson(basePath, templateName);
}


function updateUniversalTemplatesPackageJson(basePath, templateName) {

    const folders = ['components', 'mobile', 'web'];
    for (let i = 0; i < folders.length; i++) {
        const packageJSONFilePath = path.resolve(`${basePath}/apps/${folders[i]}`, "package.json");
        updateNBVersionInJsonFile(packageJSONFilePath, "universal-templates", templateName);
    }
    executeShellCommand(`cd ${basePath} && yarn install`, `yarn install done in ${templateName}`)
}



function updateCraTemplate() {
    const templateName = "cra-template-nativebase";
    const basePath = path.resolve(templateName);
    const templateJSONFilePath = `${basePath}/template.json`;
    updateNBVersionInJsonFile(templateJSONFilePath, "cra-templates", templateName);
    // bumpVersion(basePath, templateName);
}

function updateCraTemplateTypeScript() {
    const templateName = "cra-template-nativebase-typescript";
    const basePath = path.resolve(templateName);
    const templateJSONFilePath = `${basePath}/template.json`;
    updateNBVersionInJsonFile(templateJSONFilePath, "cra-templates", templateName);
    // bumpVersion(basePath, templateName);
}



function updateNextJsTemplate() {
    const templateName = "nextjs-with-native-base";
    const dirPath = path.resolve(templateName);
    updateNBVersion(dirPath, version, "nextjs-template");
}

function updateNextJsTemplateTypeScript() {
    const templateName = "nextjs-with-native-base-typescript";
    const dirPath = path.resolve(templateName);
    updateNBVersion(dirPath, version, "nextjs-typescript-template");
}

function updateReactNativeTemplateTypeScript() {
    const templateName = "react-native-template-nativebase-typescript";
    const basePath = path.resolve(templateName);
    const dirPath = `${basePath}/template`;
    updateNBVersion(dirPath, version, "react-native-typescript-template");
    // bumpVersion(basePath, templateName);
}

function updateReactNativeTemplate() {
    const templateName = "react-native-template-nativebase-typescript";
    const basePath = path.resolve(templateName);
    const dirPath = `${basePath}/template`;
    updateNBVersion(dirPath, version, "react-native-template");
    // bumpVersion(basePath, templateName);
}


function updateExpoTemplate() {
    const templateName = "expo-nativebase";
    const basePath = path.resolve(templateName);
    updateNBVersion(basePath, version, "expo-template");
    // bumpVersion(basePath, templateName);
}

function updateExpoTemplateTypescipt() {
    const templateName = "expo-nativebase-typescript";
    const basePath = path.resolve(templateName);
    updateNBVersion(basePath, version, "expo-typescript-template");
    // bumpVersion(basePath, templateName);
}



//utiltiy functions

function executeShellCommand(command, msg) {
    const child = spawn(command, {
        shell: true
    });
    child.stdout.on("data", function (data) {
        console.log(`${data}`);
    });
    child.stderr.on("data", data => {
        console.log(`stderr: ${data} `);
    });
    child.on("error", error => {
        console.log(`error: ${error.message} `);
    });
    child.on("close", () => {
        console.log('\x1b[32m%s\x1b[0m', msg);
    });
}

//updates nb version using yarn
function updateNBVersion(path, version, templateName) {
    const command = `cd ${path} && yarn upgrade native-base@${version}`;
    executeShellCommand(command, `${templateName} nb version changed`);
}


//update native base version in json file by writing the file
function updateNBVersionInJsonFile(filePath, templateType, templateName) {

    jsonReader(filePath, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        if (templateType === "cra-templates")
            data.package.dependencies['native-base'] = version;
        else if (templateType === "universal-templates")
            data.dependencies['native-base'] = version;
        console.log('\x1b[32m%s\x1b[0m', 'calling')
        writeJSONFile(filePath, data, templateName);
    });
}

function writeJSONFile(filePath, data, templateName) {
    fs.writeFile(filePath, JSON.stringify(data, null, 2), err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('\x1b[32m%s\x1b[0m', 'Successfully updated nb version in', templateName);
        }
    })
}


function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err);
        }
        try {
            const object = JSON.parse(fileData);
            return cb && cb(null, object);
        } catch (err) {
            return cb && cb(err);
        }
    });
}

//bump template version
function bumpVersion(path, templateName) {
    executeShellCommand(`cd ${path} && yarn version --patch`, `updated ${templateName} version`);
}