const functions = require('firebase-functions');
const server = require('./server/index');
const firebaseFunctionConfig = {
  memory: '1GB',
  timeoutSeconds: 120
};
const api = functions.runWith(firebaseFunctionConfig).https.onRequest(server);

module.exports.api = {
  api
};
