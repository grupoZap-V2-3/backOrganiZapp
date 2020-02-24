const env = process.env.NODE_ENV || 'development';
const configuration = require(`./${env}.js`);

module.exports = configuration;