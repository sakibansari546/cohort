// console.log(
//   global
//     .fetch("http://localhost:3000")
//     .then((res) => console.log(res))
//     .catch((error) => console.log("error"))
// );

// global.mySum = function (a, b) {
//   return a + b;
// };

// console.log(mySum(12, 3));
// console.log(global.mySum);

// console.log(process);
// console.log("Process ID:", process.pid);
// console.log("Node.js Version:", process.version);

// console.log(global.Buffer);
// const buffer = Buffer.from("Sakib is a bad boy");

// console.log(buffer);
// console.log(buffer.toString());

// console.log(__dirname);
// console.log(__filename);

// console.log(URL);
// console.log(URLSearchParams);
// const url = new URL(
//   "https://sakibdev-swart.vercel.app/projects/be15afd6-65ca-4e26-b2aa-6cc8622e6eb8"
// );
// console.log(url.searchParams.get("projects"));

const encoder = new TextEncoder();
const encoded = encoder.encode("Hello, Node.js!");
// const decoded = 
console.log(encoded); // Outputs a Uint8Array of encoded text
