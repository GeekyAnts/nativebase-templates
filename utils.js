const { spawn } = require('child_process');
const path = require('path');
const { promises: fs } = require("fs");
const expoTemplatePackageJsonVersion = require('./expo-nativebase/package.json').version;
const expoTypeScriptTemplatePackageJsonVersion = require('./expo-nativebase-typescript/package.json').version;
const craTemplatePackageJsonVersion = require('./cra-template-nativebase/package.json').version;
const craTypeScriptTemplatePackageJsonVersion = require('./cra-template-nativebase-typescript/package.json').version;
const reactNativeTemplatePackageJsonVersion = require('./react-native-template-nativebase/package.json').version;
const reactNativeTypeScriptTemplatePackageJsonVersion = require('./react-native-template-nativebase-typescript/package.json').version;
const nextjsTemplatePackageJsonVersion = require('./nextjs-with-native-base/package.json').version;
const nextjsTypeScriptTemplatePackageJsonVersion = require('./nextjs-with-native-base-typescript/package.json').version;
const universalTemplatePackageJsonVersion = require('./universal-app-template-nativebase/package.json');
const universalTypeScriptTemplatePackageJsonVersion = require('./universal-app-template-nativebase-typescript/package.json');

var self = {
    templates: [
        {
            name: "expo-nativebase",
            version: expoTemplatePackageJsonVersion,
            path: path.resolve("expo-nativebase"),
            publishable: true,
            nested: false
        },
        {
            name: "expo-nativebase-typescript",
            version: expoTypeScriptTemplatePackageJsonVersion,
            path: path.resolve("expo-nativebase-typescript"),
            publishable: true,
            nested: false
        },
        {
            name: "nextjs-with-native-base",
            version: nextjsTemplatePackageJsonVersion,
            path: path.resolve("nextjs-with-native-base"),
            publishable: false,
            nested: false
        },
        {
            name: "nextjs-with-native-base-typescript",
            version: nextjsTypeScriptTemplatePackageJsonVersion,
            path: path.resolve("nextjs-with-native-base-typescript"),
            publishable: false,
            nested: false
        },
        {
            name: "react-native-template-nativebase",
            version: reactNativeTemplatePackageJsonVersion,
            path: path.resolve("react-native-template-nativebase/template"),
            publishable: true,
            nested: false
        },
        {
            name: "react-native-template-nativebase-typescript",
            version: reactNativeTypeScriptTemplatePackageJsonVersion,
            path: path.resolve("react-native-template-nativebase-typescript/template"),
            publishable: true,
            nested: false
        },
        {
            name: "cra-template-nativebase",
            version: craTemplatePackageJsonVersion,
            path: [
                path.resolve("cra-template-nativebase", "template.json")
            ],
            publishable: true,
            nested: true
        },
        {
            name: "cra-template-nativebase-typescript",
            version: craTypeScriptTemplatePackageJsonVersion,
            path: [
                path.resolve("cra-template-nativebase-typescript", "template.json")
            ],
            publishable: true,
            nested: true
        },
        {
            name: "universal-app-template-nativebase",
            version: universalTemplatePackageJsonVersion,
            path: [
                path.resolve("universal-app-template-nativebase/apps/components", "package.json"),
                path.resolve("universal-app-template-nativebase/apps/mobile", "package.json"),
                path.resolve("universal-app-template-nativebase/apps/web", "package.json")
            ],
            publishable: false,
            nested: true
        },
        {
            name: "universal-app-template-nativebase-typescript",
            version: universalTypeScriptTemplatePackageJsonVersion,
            path: [
                path.resolve("universal-app-template-nativebase-typescript/apps/components", "package.json"),
                path.resolve("universal-app-template-nativebase-typescript/apps/mobile", "package.json"),
                path.resolve("universal-app-template-nativebase-typescript/apps/web", "package.json")
            ],
            publishable: false,
            nested: true
        }
    ],
    executeShellCommand: function (command, msg) {
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
            console.log(`error: ${error.message}`);
        });
        child.on("close", () => {
            console.log('\x1b[32m%s\x1b[0m', msg);
        });
    },
    //bump template version
    bumpVersion: function (path, templateName) {
        self.executeShellCommand(`cd ${path} && yarn version --patch`, `updated ${templateName} version`);
    },
    //update native base version in json file by writing the file
    updateNBVersionInJsonFile: async function (filePath, templateType, templateName, version) {

        try {
            const fileData = await fs.readFile(filePath, "utf-8");
            const data = await JSON.parse(fileData);
            if (templateType === "cra-templates")
                data.package.dependencies['native-base'] = version;
            else if (templateType === "universal-templates")
                data.dependencies['native-base'] = version;
            await fs.writeFile(filePath, JSON.stringify(data, null, 2));
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = self;