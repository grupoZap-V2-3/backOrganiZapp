const server = require('./server/index');

const port = process.env.PORT || 9001;

server.listen(port, () => {
  console.log(`Server listening in port ${port}`);
});
