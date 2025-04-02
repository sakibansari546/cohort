const fs = require("fs");
// const fsv2 = require("fs/promises");

function readFileWithPromise(filepath, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, encoding, (err, data) => {
      if (err) {
        reject(err);
      } else resolve(data);
    });
  });
}

function writeFileWithPromise(filepath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filepath, content, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

function deleteFileWithPromise(filepath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filepath, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

console.log("Start Program");

// const res = readFileWithPromise("backup.txt", "utf-8");
// res
//   .then((data) => writeFileWithPromise("js.txt", data))
//   .then((data) => deleteFileWithPromise("backup.txt"))
//   .catch((err) => console.log(err));

// const content = fs.readFileSync("js.txt", "utf-8");
// console.log(content);

// ----------------------------------------------------------- //
async function doTasks() {
  console.log("Start reading");
  const fileCon = await readFileWithPromise("backup.txt", "utf-8");
  console.log("End reading");

  console.log("satrt writing");
  await writeFileWithPromise("js.txt", fileCon);
  console.log("end writing");

  console.log("satrt deleting");
  await deleteFileWithPromise("backup.txt");
  console.log("end deleting");

  console.log("All done");
}

doTasks().then();
// ----------------------------------------------------------- //

// const contents = fsv2.readFile("backup.txt", "utf-8");

// ----------------------------------------------------------- //

// contents
//   .then((con) => {
//     console.log("reading file success");
//     fsv2.writeFile("js.txt", con).then((data) => {
//       console.log("writing file success");
//       fsv2.unlink("backup.txt");
//     });
//   })
//   .catch((err) => console.log(err));

// ----------------------------------------------------------- //

// contents
//   .then((con) => {
//     console.log("File reading success");
//     fsv2.writeFile("js.txt", con);
//   })
//   .then((data) => {
//     console.log("writing file success");
//     fsv2.unlink("backup.txt");
//   })
//   .then((data) => {
//     console.log("deleting file success");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ----------------------------------------------------------- //

// fs.readFile("js.txt", "utf-8", function (err, data) {
//   if (err) console.log("Error in reading file");
//   else {
//     console.log("File reading success ", data);
//     fs.writeFile("backup.txt", data, (err, data) => {
//       if (err) console.log("error while wring backup file");
//       else {
//         console.log("Writing backup file success");
//         fs.unlink("./js.txt", (err, data) => {
//           if (err) console.log("error deleting backup file");
//           else {
//             console.log("backup file delte success");
//           }
//         });
//       }
//     });
//   }
// });

sum(2, 2, (s) => console.log(s));

function sum(a, b, cb) {
  setTimeout(() => {
    cb(a + b);
  }, 2 * 1000);
}
console.log("End Program");
