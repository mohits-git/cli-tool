#!/usr/bin/env node

const arg = require('arg');
const chalk = require('chalk');
const path = require('path');
const { packageUpSync } = require('package-up');

try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean,
    });

    if (args['--build']) {
        console.log(chalk.bgCyanBright("Building the app"));
    }
    if (args['--start']) {
        const pkgPath = packageUpSync();
        const pkg = require(pkgPath);
        if (pkg.tool) {
            console.log("Found Configuration: ", pkg.tool);
        } else {
            console.log("Could not find configuration, using default.");
        }
        // TODO do something
        console.log(chalk.bgCyanBright("Starting the app"));
    }
} catch (e) {
    console.log(chalk.yellow(e.message));
    console.log();
    usage();
}

function usage() {
    console.log(`${chalk.whiteBright('tool [CMD]')}
    ${chalk.greenBright('--start')}\tStarts the app
    ${chalk.greenBright('--build')}\tBuilds the app`
    );
}
