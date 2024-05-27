const logger = require('../logger')('config:mgr');
const { cosmiconfigSync } = require('cosmiconfig');
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
            logger.warning('Invalid configuration');
            console.log('');
            console.log(betterAjvErrors(schema, result.config, ajv.errors));
            process.exit(1);
        }
        logger.debug('Found Configuration: ', result.config);
        return result.config;
    } else {
        logger.warning('Could not find configuration, using default.');
        return { port: 1234 };
    }
}
