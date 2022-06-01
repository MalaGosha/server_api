/*
This uses json-server, but with the module approach: https://github.com/typicode/json-server#module
*/

const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults({
  // Display json-server's built in homepage when json-server starts.
  static: "node_modules/json-server/public",
});

server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.post("/courses", (req, res, next) => {
  next();
});

server.use(router);
const port = 3002;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
