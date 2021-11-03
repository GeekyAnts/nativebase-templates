const { spawn } = require('child_process');
const path = require('path');
const expoTemplatePackageJsonVersion = require('./expo-nativebase/package.json').version;
const expoTypeScriptTemplatePackageJsonVersion = require('./expo-nativebase-typescript/package.json').version;
const craTemplatePackageJsonVersion = require('./cra-template-nativebase/package.json').version;
const craTypeScriptTemplatePackageJsonVersion = require('./cra-template-nativebase-typescript/package.json').version;
const reactNativeTemplatePackageJsonVersion = require('./react-native-template-nativebase/package.json').version;
const reactNativeTypeScriptTemplatePackageJsonVersion = require('./react-native-template-nativebase/package.json').version;






const templates = [
    {
        name: "expo-nativebase",
        version: expoTemplatePackageJsonVersion
    },
    {
        name: "expo-nativebase-typescript",
        version: expoTypeScriptTemplatePackageJsonVersion
    },
    {
        name: "cra-template-nativebase",
        version: craTemplatePackageJsonVersion
    },
    {
        name: "cra-template-nativebase-typescript",
        version: craTypeScriptTemplatePackageJsonVersion
    },
    {
        name: "react-native-template-nativebase",
        version: reactNativeTemplatePackageJsonVersion
    },
    {
        name: "react-native-template-nativebase-typescript",
        version: reactNativeTypeScriptTemplatePackageJsonVersion
    }
];



templates.forEach(template => {
    console.log(template);
    const { name, version } = template;
    const basePath = path.resolve(name);
    console.log(basePath, version);
    executeShellCommand(basePath, version);
});




function executeShellCommand(path, version) {

    const child = spawn(`cd ${path} && yarn publish --new-version=${version}`, {
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
    child.on("close", (exitCode) => {
        console.log(`child exited with code ${exitCode} `);
    });
}








