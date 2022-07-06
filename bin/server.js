const http = require('http');
const app = require('../index');
const fs = require('fs');

// const options = {
//   key: fs.readFileSync('key.pem'),
//   cert: fs.readFileSync('cert.pem'),
// };

// const server = https.createServer(options, app);
const server = http.createServer(app);

server.listen(process.env.PORT || 5000, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});
