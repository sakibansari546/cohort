// // Import the http module
// const http = require("http");

// // create a server
// const server = http.createServer((rq, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Welcome to the Node.js");
// });

// // Listen on port 3000
// server.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });

const crypto = require("crypto");

function ss() {
  const bb = crypto.randomBytes(32).toString("hex");
  console.log(bb);
}
ss();

const fs = require("fs");

setTimeout(() => {
  console.log("Set Time out");
}, 0);
