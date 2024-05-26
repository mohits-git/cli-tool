const { cosmiconfigSync } = require('cosmiconfig');
const configLoader = cosmiconfigSync('tool');

module.exports = function getConfig() {
    const result = configLoader.search(process.cwd());
    if (result) {
        console.log("Found Configuration: ", result.config);
        return result.config;
    } else {
        console.log("Could not find configuration, using default.");
        return { port: 1234 };
    }
}
