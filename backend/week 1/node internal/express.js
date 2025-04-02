// const http = require("http");
// function express() {
//   function reqHandler(req, res) {
//     if(req.method === "GET"){

//     }
//   }

//   http.createServer(reqHandler);
// }

// export default express;

console.log("Start");

function greetMe() {
  return "Welcome";
}

const start = Date.now();

while (Date.now() - start < 5000) {}

console.log("End");

export { greetMe };
