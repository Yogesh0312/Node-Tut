// the http.createServer() method includes request and response parameters which is supplied by Node.js

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Hello From The Home Side");
  } else if (req.url == "/about") {
    res.end("Hello From The AboutUS Side");
  } else if (req.url == "/contact") {
    res.end("Hello From The ContactUS Side");
  } else if (req.url == "/userapi") {
    fs.readFile(`${__dirname}/userApi/userApi.json`, "utf-8", (err, data) => {
      console.log(data);
      res.end(data);
    });
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>404 Page Doesn't Exist</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the port 8000");
});
