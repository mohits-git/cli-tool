const { cosmiconfigSync } = require('cosmiconfig');
const chalk = require('chalk');
const schema = require('./schema.json');
const Ajv = require('ajv').default;
const betterAjvErrors = require('better-ajv-errors').default;

const ajv = new Ajv();

const configLoader = cosmiconfigSync('tool');

module.exports = function getConfig() {
    const result = configLoader.search(process.cwd());
    if (result) {
        const isValid = ajv.validate(schema, result.config);
        if(!isValid) {
            console.log(chalk.yellow('Invalid configuration'));
            console.log('');
            console.log(betterAjvErrors(schema, result.config, ajv.errors));
            process.exit(1);
        }
        console.log("Found Configuration: ", result.config);
        return result.config;
    } else {
        console.log("Could not find configuration, using default.");
        return { port: 1234 };
    }
}
