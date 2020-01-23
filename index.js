const server = require('./api/sever');
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`\n Server Listening on http://localhost:${PORT}`);
});
