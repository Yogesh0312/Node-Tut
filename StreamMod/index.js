const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  // fs.readFile('index.txt',(err,data)=>{
  //     res.end(data.toString())
  // })
  const rStream = fs.createReadStream("index.txt");
  rStream.pipe(res);
  //   rStream.on("data", (chunkData) => {
  //     res.write(chunkData);
  //   });
  //   rStream.on("end", () => {
  //     res.end();
  //   });
  //   rStream.on("error", (err) => {
  //     console.log(err);
  //     res.end("File Not Found");
  //   });
});

server.listen(8000, "127.0.0.1");
