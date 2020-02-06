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

// // Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
