// express server
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const port = process.env.PORT || 2311;

app.get("/", (req, res) => res.send("Hello World!"));
app.use(express.json());

app.use("/coupon", require("./routes/coupon"));
app.use("/course", require("./routes/course"));

server.listen(port, () => {
  console.log(`App is running on the port ${port}`);
});
