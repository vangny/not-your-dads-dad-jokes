const app = require('./app');
const { createServer } = require('http');
require('dotenv').config();

const PORT = process.env.PORT || 3030;
const server = createServer(app);

server.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`listening to port ${PORT}`);
})