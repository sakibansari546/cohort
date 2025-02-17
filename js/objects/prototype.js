// // Ek object jisme humne "hasOwnProperty" ko custom property bana diya
// const obj = {
//   hasOwnProperty: "I am not a function",
//   name: "Sakib",
//   toString: "string",
// };

// // Ab agar hum aise call karenge:
// // console.log(obj.hasOwnProperty("name"));
// // Yeh error dega ya unexpected result dega, kyunki ab "hasOwnProperty" ek function nahi hai.

// //
// // Sahi tarika:
// // console.log(Object.prototype.hasOwnProperty.call(obj, "name"));
// // Yeh hamesha Object.prototype ka asli method use karega, aur output dega: true

// // Object bina kisi prototype ke
// const objNull = Object.create(null);
// objNull.name = "Sakib";

// // Agar hum aise call karne ki koshish karein:
// // console.log(objNull.hasOwnProperty("name"));
// // Yeh error dega kyunki objNull ke paas "hasOwnProperty" method hi nahi hai.

// // Toh static method use karo:
// // console.log(Object.prototype.hasOwnProperty.call(objNull, "name"));
// // Output: true

// console.log(obj);

// -------------Objects--------------------
// ----Objects declaration---
// let user = new Object(); // "object constructor" syntax
// let user2 = {
//   name: "Sakib", // by key "name" store value "Sakib"
//   age: 18, // by key "age" store value 18
//   "likes birds": true  // multiword property name must be quoted
// };  // "object literal" syntax

// get property values of the object:
// console.log(user2.name); // return "Sakib"
// console.log(user2.age); // return 18

// The value can be of any type. Let’s add a boolean one:
// user2.isAdmin = true;

// To remove a property, we can use the delete operator:
// delete user2.age;
// console.log(user2); //  { name: 'Sakib', isAdmin: true }

// For multiword properties, the dot access doesn’t work:
// this would give a syntax error
// user.likes birds = true

// There’s an alternative “square bracket notation” that works with any string:
// get
// console.log(user2["likes birds"]); // true

// delete
// delete user2["likes birds"];

// The dot notation cannot be used in a similar way:
// let key = "name";
// console.log(user2.key); // undefined

// We can use square brackets in an object literal,

// let key = "apple";
// let bag = {
//   [key] : 5,
// }

// console.log(bag[key]); // 5

// We can use more complex expressions inside square brackets:
// bag[key + "Computer"] = 5;
// console.log(bag.appleComputer); // 5

// -----------instance---------------
// Function Instance---
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

// Shorthand property
// function makeUser(name, age) {
//   return {
//     name, // same as name: name
//     age,  // same as age: age
//     // ...
//   };
// }

// let user = makeUser("sakib", 18);
// console.log(user); // { name: 'sakib', age: 18 }

// Property names limitations
// As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.

// But for an object property, there’s no such restriction:
// let obj = {
//   for: 3,
//   let: 4,
//   return: 23,
//   0: 0,
//   undefined,
// };
// console.log( obj.for + obj.let + obj.return );  // 30
// Other types are automatically converted to strings.

// both alerts access the same property (the number 0 is converted to string "0")
// console.log(obj[0]) // 0
// console.log(obj["0"]) // same property : 0

// There’s a minor gotcha with a special property named __proto__. We can’t set it to a non-object value:
// let obj = {};
// obj.__proto__ = 5; // assign a number
// console.log(obj.__proto__); // [Object: null prototype] {} - the value is an object, didn't work as intended

// Property existence test, “in” operator
// console.log("name" in obj); // false
// console.log("let" in obj); // true
// let key = "for";
// console.log( undefined in obj ); // true

// -------The "for..in" loop
// syntax
// for(key in object){
//    // executes the body for each key among object properties
// }

// let user = {
//   name: "Sakib",
//   age: 18,
//   isAdmin: true,
// };

// for (let key in user) {
//   console.log(key); // name, age, isAdmin
//   // values for the keys
//   console.log(user[key]); // Sakib 18 true
// }

// As an example, let’s consider an object with the phone codes:
// let codes = {
//   91: "India",
//   49: "Germany",
//   41: "Switzerland",
//   44: "Great Britain",
//   // ..,
//   1: "USA",
// };

// for (let code in codes) {
//   console.log(code); // 91, 1, 41, 44, 49
// }

// Task-----------
// 1st
// let user = {};
// user.name = "Sakib";
// user.surname = "Ansari";
// console.log(user);
// user["name"] = "Shakib";
// console.log(user);
// delete user.name;
// console.log(user);

// // 2nd
// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }
// let schedule = {};

// console.log(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// console.log(isEmpty(schedule)); // false

// 3rd
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sum = 0;
// for(let key in salaries){
//   sum += salaries[key];
// }
// console.log(sum);

// 4th
// before the call
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

console.log(menu);

multiplyNumeric(menu);

// console.log(typeof 9);
console.log(menu);

// after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
