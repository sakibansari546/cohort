// // Let's create our own Polyfills

// let arr = [1, 2, 3, 4, 5, 6];

// // .Map----
// if (!Array.prototype.myMap) {
//   Array.prototype.myMap = function (callback) {
//     if (this == null) {
//       throw new TypeError("Array.prototype.myMap called on null or undefined");
//     }

//     let O = Object(this);
//     let len = O.length >>> 0;

//     if (typeof callback !== "function") {
//       throw new TypeError(callback + " is not a function");
//     }

//     let result = [];

//     for (let i = 0; i < len; i++) {
//       if (i in O) {
//         let value = callback(O[i], i, O);
//         result.push(value);
//       }
//     }
//     return result;
//   };
// }

// // let myMapResult = arr.myMap((val) => val * 2);
// // console.log(myMapResult);

// // .Filter----
// if (!Array.prototype.myFilter) {
//   Array.prototype.myFilter = function (callback) {
//     if (this == null) {
//       throw new TypeError(
//         "Array.prototype.myFilter called on null or undefined"
//       );
//     }

//     if (typeof callback !== "function") {
//       throw new TypeError(callback + " is not a function");
//     }

//     let O = Object(this);
//     let len = O.length >>> 0;

//     let result = [];

//     for (let i = 0; i < len; i++) {
//       if (i in O && callback(O[i], i, O)) {
//         result.push(O[i]);
//       }
//     }
//     return result;
//   };
// }

// let myFilterresult = arr.myFilter((val, i) => val % 2 == 0);
// console.log(myFilterresult);

// // .Reduce-------
// if (!Array.prototype.myReduce) {
//   Array.prototype.myReduce = function (callback, currValue) {
//     for (let i = 0; i < this.length; i++) {
//       currValue = callback(currValue, this[i], i);
//     }
//     return currValue;
//   };
// }

// let sum = arr.myReduce((acc, val) => (acc = acc + val), 0);
// console.log(sum);

// // .Push---------
// // if (!Array.prototype.myPush) {
// //   Array.prototype.myPush = function (elem) {
// //     return (this[this.length] = elem);
// //   };
// // }

// // let rr = arr.myPush("Sakib", "Ansari");
// // console.log(arr);

// // if (!Array.prototype.myPush) {
// //   Array.prototype.myPush = function () {
// //     let O = Object(this);
// //     let len = O.length >>> 0;

// //     for (let i = 0; i < arguments.length; i++) {
// //       O[len] = arguments[i];
// //       len++;
// //     }
// //     O.length = len;
// //     return len;
// //   };
// // }

// // arr.myPush(5,6,7,8,9);
// // console.log(arr);

// // .Pop-------
// // if (!Array.prototype.myPop) {
// //   Array.prototype.myPop = function () {
// //     let O = Object(this);
// //     let len = O.length >>> 0;

// //     if (len === 0) {
// //       return undefined;
// //     }

// //     let lastIndex = len - 1;
// //     let elem = O[lastIndex];

// //     delete O[lastIndex];
// //     O.length = lastIndex;

// //     return elem;
// //   };
// // }

// // arr.myPop();
// // console.log(arr);

// // .Some-----
// // if (!Array.prototype.mySome) {
// //   Array.prototype.mySome = function (callback) {
// //     if (typeof callback !== "function") {
// //       throw new TypeError("callback function is not provided");
// //     }

// //     let O = Object(this);
// //     let len = O.length >>> 0;

// //     if (len <= 0) {
// //       return false;
// //     }

// //     for (let i = 0; i < len; i++) {
// //       if (i in O && callback(O[i], i)) {
// //         return true;
// //       }
// //     }

// //     return false;
// //   };
// // }

// // let ddd = arr.mySome((val, idx) => val === idx * 2);
// // console.log(ddd);

// // Every-----------
// // if (!Array.prototype.myEvery) {
// //   Array.prototype.myEvery = function (callback) {
// //     let O = Object(this);
// //     let len = O.length >>> 0;

// //     if (typeof callback !== "function") {
// //       throw new TypeError("Error callback fn -----");
// //     }

// //     for (let i = 0; i < len; i++) {
// //       if (i in O && !callback(O[i], i, O)) {
// //         return false;
// //       }
// //     }
// //     return true;
// //   };
// // }

// // let ever = arr.myEvery((val, idx, arrr) => val > 0);
// // console.log(ever);

// // Find--------------
// // if (!Array.prototype.myFind) {
// //   Array.prototype.myFind = function (callback) {
// //     let O = Object(this);
// //     let len = O.length >>> 0;

// //     if (typeof callback !== "function") {
// //       throw new TypeError("Error callback fn -----");
// //     }

// //     for (let i = 0; i < len; i++) {
// //       if(i in O && callback(O[i],i,O)){
// //         return O[i];
// //       }
// //     }
// //     return undefined;
// //   };
// // }

// // let findElem = arr.myFind((val, idx, arrr) => val > 1);
// // console.log(findElem);

// // Includes--------
// // if(!Array.prototype.myIncludes){
// //   Array.prototype.myIncludes = function(){
// //     let O = Object(this);
// //     let len = O.length >>> 0;

// //     for (let i = 0; i < len; i++) {
// //       if(i in O && O[i] === arguments[0]){
// //         return true;
// //       }
// //     }
// //     return false;
// //   }
// // }
// // let includ = arr.myIncludes(3);
// // console.log(includ);

// // Join ------------
// // if (!Array.prototype.myJoin) {
// //   Array.prototype.myJoin = function (separator) {
// //     let O = Object(this);
// //     let len = O.length >>> 0;

// //     if (len === 0) {
// //       return "";
// //     }

// //     let result = "";
// //     let sep = separator !== undefined && separator !== null ? separator : ",";

// //     for (let i = 0; i < len; i++) {
// //       if (i > 0) {
// //         result += sep;
// //       }
// //       if (i in O) {
// //         result += O[i] !== undefined && O[i] !== null ? String(O[i]) : "";
// //       } else {
// //         result += "";
// //       }
// //     }
// //     return result;
// //   };
// // }

// // let str = arr.myJoin("-"); // "1,2,3,4"  (default comma)
// // // let str2 = arr.join("-"); // "1-2-3-4"
// // // let str3 = arr.join(""); // "1234"
// // console.log(str);



let arr = [1,2,3];
arr.push(...[4,5,6])
console.log(arr);
