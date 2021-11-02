const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');


const version = process.argv[2].trim();
const releaseBranch = 'release/' + version;



//updateExpoTemplate();
//updateExpoTemplateTypescipt();
//updateReactNativeTemplate();
//updateReactNativeTemplateTypeScript();
//updateNextJsTemplate();
//updateNextJsTemplateTypeScript();
//updateCraTemplate();
//updateCraTemplateTypeScript();
updateUniversalAppTemplate();




function updateUniversalAppTemplate() {
    const basePath = "universal-app-template-nativebase";
    const componentFilePath = path.resolve(`${basePath}/apps/components`, "package.json");
    const mobileFilePath = path.resolve(`${basePath}/apps/mobile`, "package.json");
    const webFilePath = path.resolve(`${basePath}/apps/web`, "package.json");
    readJSONFile(componentFilePath, "universal-templates");
    readJSONFile(mobileFilePath, "universal-templates");
    readJSONFile(webFilePath, "universal-templates");
    const child = spawn(`cd ${basePath} && yarn install`, {
        shell: true
    });

    child.stdout.on("data", function (data) {
        console.log(`${data} `);
    });
    child.stderr.on("data", data => {
        console.log(`stderr: ${data} `);
    });
    child.on("error", error => {
        console.log(`error: ${error.message} `);
    });
    child.on("close", () => {
        console.log(`Universal App templates Finished`);
    });
}


function updateCraTemplate() {
    const filePath = path.resolve("cra-template-nativebase", "template.json");
    readJSONFile(filePath, "cra-templates");

}

function updateCraTemplateTypeScript() {
    const filePath = path.resolve("cra-template-nativebase-typescript", "template.json");
    readJSONFile(filePath, "cra-templates");
}



function updateNextJsTemplate() {
    const dirPath = path.resolve("nextjs-with-native-base");
    updateTemplate(dirPath, version, "nextjs-template");
}

function updateNextJsTemplateTypeScript() {
    const dirPath = path.resolve("nextjs-with-native-base-typescript");
    console.log(dirPath);
    updateTemplate(dirPath, version, "nextjs-typescript-template");
}

function updateReactNativeTemplateTypeScript() {
    const dirPath = path.resolve("react-native-template-nativebase-typescript/template");
    updateTemplate(dirPath, version, "react-native-typescript-template");
}



function updateReactNativeTemplate() {
    const dirPath = path.resolve("react-native-template-nativebase/template");
    updateTemplate(dirPath, version, "react-native-template");
}


function updateExpoTemplate() {
    const dirPath = path.resolve("expo-nativebase");
    updateTemplate(dirPath, version, "expo-template");
}

function updateExpoTemplateTypescipt() {
    const dirPath = path.resolve("expo-nativebase-typescript-template");
    updateTemplate(dirPath, version, "expo-typescript-template");
}



//utiltiy

function updateTemplate(path, version, templateName) {
    const child = spawn(`cd ${path} && yarn upgrade native-base@${version} `, {
        shell: true
    });

    child.stdout.on("data", function (data) {
        console.log(`${data} `);
    });
    child.stderr.on("data", data => {
        console.log(`stderr: ${data} `);
    });
    child.on("error", error => {
        console.log(`error: ${error.message} `);
    });
    child.on("close", () => {
        console.log(`Finished ${templateName}`);
    });
}


function readJSONFile(filePath, templateName) {
    return jsonReader(filePath, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        if (templateName === "cra-template")
            data.package.dependencies['native-base'] = version;
        else
            data.dependencies['native-base'] = version;
        writeJSONFile(filePath, data);
    });
}

function writeJSONFile(filePath, data) {
    fs.writeFile(filePath, JSON.stringify(data, null, 2), err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file');
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
