const server = require('./server/index');
const mongoose = require('mongoose');
const config = require('./configuration');

mongoose.connect(config.db);

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.db}`)
});
mongoose.connection.once('connected', () => {
  console.log(`Successfully connected to ${config.db}`)
});
mongoose.connection.once('disconnected', () => {
  console.log(`Successfully disconnected from ${config.db}`)
});


const port = process.env.PORT || 9001;

server.listen(port, () => {
  console.log(`Server listening in port ${port}`);
});
