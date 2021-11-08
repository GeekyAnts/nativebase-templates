
const path = require('path');
const { spawn } = require('child_process');
const { templates, bumpVersion } = require('./utils');


init();


async function init() {

    for (let i = 0; i < templates.length; i++) {

        const { name, publishable } = templates[i];
        const repoPath = path.resolve(name);
        if (publishable) {
            await new Promise((resolve, reject) => {
                const child = spawn(`cd ${repoPath} && yarn version --patch`, {
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
                    console.log('\x1b[32m%s\x1b[0m',);
                    resolve();
                });
            })
        }
    };
}