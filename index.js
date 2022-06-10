// express server
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const port = process.env.PORT || 2311;

app.get("/", (req, res) => res.send("Hello World!"));

server.listen(port, () => {
  console.log(`App is running on the port ${port}`);
});
