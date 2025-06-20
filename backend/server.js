const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // 그냥 상대 경로로
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 4001;

server.use(middlewares);
server.use("/api", router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
