// const fs = require("fs");
// const crypto = require("crypto");
// const os = require("os");

// const cpus = os.cpus();
// console.log(cpus.length);

// setTimeout(() => {
//   console.log("Set Timeout");
// }, 0);

// setImmediate(() => {
//   console.log("set Immediate");
// });

// fs.readFile("package.json", "utf-8", (err, data) => {
//   setTimeout(() => {
//     console.log("Set Timeout inside FS1");
//   }, 0);

//   setImmediate(() => {
//     console.log("set Immediate inside FS1");
//   });

//   let start = Date.now();
//   crypto.pbkdf2("password", "salt1", 1000000, 1024, "sha512", (err, data) => {
//     console.log(`[${Date.now() - start}ms] Password 1 hashed`);
//   });
//   crypto.pbkdf2("password", "salt1", 1000000, 1024, "sha512", (err, data) => {
//     console.log(`[${Date.now() - start}ms] Password 2 hashed`);
//   });
//   crypto.pbkdf2("password", "salt1", 1000000, 1024, "sha512", (err, data) => {
//     console.log(`[${Date.now() - start}ms] Password 3 hashed`);
//   });
//   crypto.pbkdf2("password", "salt1", 1000000, 1024, "sha512", (err, data) => {
//     console.log(`[${Date.now() - start}ms] Password 4 hashed`);
//   });
//   crypto.pbkdf2("password", "salt1", 1000000, 1024, "sha512", (err, data) => {
//     console.log(`[${Date.now() - start}ms] Password 5 hashed`);
//   });
// });

// console.log("console");

// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.method == "GET") {
//     console.log("Get req from", req.url);
//     res.end();
//   }
// });

// server.listen(3000, () => {
//   console.log("server is runnning on port 3000");
// });

// console.log("Start commanjs");

// const { greetMe } = require("./express");

// console.log(greetMe());

// console.log("End commanjs");

// console.log("Start module");
// // import { greetMe } from "./express.js"; // static import

// import("./express.js").then((val) => console.log(val));
// setTimeout(() => console.log("Timeout called after 1 sec", 1000));
// // console.log(greetMe());
// console.log("End module");

// console.log(module.exports === exports);

// // module.exports.gret = "Hello";
// // module.exports = { greet: "heelo", sdfsf: "sdfdf" };
// module.exports = "Heelo";
// console.log(exports);

// console.log(module.exports === exports);

// console.log("Before Exports ", exports);
// console.log("Before Module", module);

// // module.exports = { greet: "Hello" };
// // exports = { greet: "heelo" };
// // exports.greet = "Heelo";

// console.log("After Exports ", exports);
// console.log("After Module", module);

// const fs = require("fs/promises");
// console.log("Hello => number 1"); // Hello => number 1 , Running at next tick => number 2, Promise number 3, Running before the timeout => number 4, Reading file number number 5 ,The timeout running last => number 6

// setImmediate(() => {
//   console.log("Running before the timeout => number 4");
// });

// setTimeout(() => {
//   console.log("The timeout running last => number 6");
// }, 0 * 1000);

// process.nextTick(() => {
//   console.log("Running at next tick => number 2");
// });
// Promise.resolve().then(() => console.log("Promise number 3"));

// fs.readFile("./exprsess.js", "utf-8").then(() =>
//   console.log("Reading file number 5")
// );
// console.log(process);

// const { Worker, isMainThread, parentPort } = require('worker_threads');

// if (isMainThread) {
//   console.log('Main thread: Starting heavy computation using Worker thread');

//   // Worker thread create karna.
//   const worker = new Worker(__filename);

//   worker.on('message', (result) => {
//     console.log('Result from worker:', result);
//   });

//   worker.on('error', (err) => console.error('Worker error:', err));
//   worker.on('exit', (code) => console.log('Worker exited with code:', code));

//   console.log('Main thread continues to do other tasks...');
// } else {
//   // Worker thread: Ye heavy CPU computation perform karta hai.
//   let result = 0;
//   for (let i = 0; i < 1e9    ; i++) {
//     result += i;
//   }
//   // Computation complete hone par, result main thread ko bhejte hain.
//   parentPort.postMessage(result);
// }

// console.log(global.setTimeout);

// setTimeout(() => console.log("Set Timeout"), 0);
// setImmediate(() => console.log("Set Immediate"));

console.error(Error("Error", {}));
