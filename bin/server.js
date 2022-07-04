const http = require('http');
const app = require('../index');

const server = http.createServer(app);

server.listen(process.env.PORT || 5000, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});
