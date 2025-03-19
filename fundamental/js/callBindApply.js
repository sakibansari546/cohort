// // Bind

// const car = {
//   brand: "BMW",
// };

// const printDetail = function (model, topSpeed) {
//   console.log(`${this.brand} ${model} has a
//         top speed of ${topSpeed} mph`);
// };

// // printDetail("Diablo Coatl", 239);

// const lamboPrintDetail = printDetail.bind(car);
// // lamboPrintDetail("A4", 300);

// const reventonPrintDetail = printDetail.bind(car, "Reventon", 221);
// // reventonPrintDetail();

// Eg 2
const nameObj = {
  name: "Ansari",
};

let printName = {
  name: "Sakib",
  sayHi: function () {
    console.log(this.name);
  },
};

let hiiFun = printName.sayHi.bind(nameObj);
hiiFun()

Object.prototype.MyBind = function (bindObj) {
  bindObj.myMethod = this;
  console.log(bindObj);
  return function () {
    bindObj.myMethod();
  };
};

let hiFun = printName.sayHi.MyBind(nameObj);
hiFun();

// // Eg 3

// let nameObj = {
//   name: "Sakib",
// };
// let nameObj2 = {
//   name: "Ansari",
// };

// let printName = {
//   name: "Ansari",
//   sayHi: function (age) {
//     console.log(this.name + " age is " + age);
//   },
// };

// Object.prototype.MyBind = function (bindObj, ...args) {
//   bindObj.myMethod = this;
//   return function () {
//     bindObj.myMethod(...args);
//   };
// };

// let hiFun = printName.sayHi.MyBind(nameObj2, 12);
// hiFun();

// Call()

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }

// function Vehicle(name, price) {
//   console.log(this);

//   Product.call(this, name, price);
//   this.category = "vehicle";
// }

// function Restaurant(name, price) {
//   Product.call(this, name, price);
//   this.category = "restaurant";
// }

// const car = new Vehicle("Suzuki", 100000);
// const restaurant = new Restaurant("KFC", 1000);

// console.log(car);
// console.log(restaurant);

// let nameObj = {
//   name: "Sakib",
// };

// let printName = {
//   name: "Ansari",
//   sayHi: function (age) {
//     console.log(this.name + " age is " + age);
//   },
// };

// // printName.sayHi.call(nameObj, 18);

// // call() PloyFill
// Object.prototype.MyCall = function (bindObj, ...args) {
//   bindObj.myMethod = this;
//   bindObj.myMethod(...args);
// };

// printName.sayHi.MyCall(nameObj, 18);

// Apply

// let student = {
//   details: function () {
//     return this.name + this.class;
//   },
// };

// let stud1 = {
//     name: "Sakib",
//     class: '12th'
// }
// let stud2 = {
//     name: "Ansari",
//     class: '12th'
// }
// let stud3 = {
//     name: "Gari",
//     class: '12th'
// }

// let x = student.details.apply(stud1);
// console.log(x);

// let student = {
//   details: function (section, rollnum) {
//     return this.name + this.class + " " + section + rollnum;
//   },
// };

// let stud1 = {
//   name: "Sakib",
//   class: "12th",
// };
// let stud2 = {
//   name: "Ansari",
//   class: "12th",
// };
// let stud3 = {
//   name: "Gari",
//   class: "12th",
// };

// let x = student.details.apply(stud1,['f',12]);
// console.log(x);

// let nameObj = {
//   name: "Sakib",
// };

// let printDetail = {
//   name: "Ansari",
//   sayHi: function (...age) {
//     console.log(this.name + " age is " + age);
//   },
// };

// Object.prototype.MyApply = function (bindObj, args) {
//   bindObj.myMethod = this;
//   console.log(args);
//   bindObj.myMethod(...args);
// };

// printDetail.sayHi.MyApply(nameObj, [42, 12]);

// Question of Call

// function greeting(greeting, punctuation) {
//   console.log(`${greeting}, ${this.name}${punctuation}`);
// }

// const person = {
//   name: "Sakib",
// };

// greeting.call(person, "Hello", "!");

// // Question of Bind
// const boundGreet = greeting.bind(person);
// boundGreet("Hi", "!!!");

// // Question of Apply
// const numbers = [1, 23, 4, 4, 5, 6];
// const maxNum = Math.max.apply(null, numbers);
// console.log(maxNum);

console.log("Start of the script 2");

setTimeout(() => {
  console.log("settime out");
}, 0);

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("End of script");
console.log("Bye Bye");


// Question 1:
// "Can you explain how the JavaScript Event Loop works? Describe the roles of the call stack, web APIs, task (macro-task) queue, and microtask queue. Provide an example scenario (e.g., using setTimeout and Promise) to illustrate how tasks and microtasks are executed in order."

console.log("Start of the script ");

setTimeout(() => {
  console.log("settime out");
}, 0);

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("End of script");
console.log("Bye Bye");


// so let sapose ye humara code he 
// sabse phele humra pura code call stack me jayga global exec context ke sath pr isme koi varibale wagera nhi he to ise normaly bhi execute kr sakte he 

// so call stack me sabse phele console.log("Start of the script "); ye line execute hogi to first line me  Start of the script ye print ho jayga

// then 
// setTimeout(() => {
//   console.log("settime out");
// }, 0); 
// settime out execute hoga to jese ki settime out js ka part nhi he ye webapi ka part he to call stack ise web api me puch kr kr dega 
// then webapi me iska timer start ho jayga isme 0sec he to ye sath ke sath execute ho jayga () => {
//   console.log("settime out");
// } phir ye call back direct call stack me nhi jayga webapi ise task queue me dale gi 
// phir event loop dekhegi task queue me kuch he lekin call stack khali nhi he to wo use pick nhi kregi 

// or phir Promise.resolve().then(() => {
//   console.log("promise");
// });
// ye promise execute hogi jaise settime out js ka part nhi he usi tarah promises bhi js ka part nhi he jo bhi asyncronus cheej h to js ka part hi nhi he to phit promise ko bhi call stack webapi me push kr degi jaise isme promise direct hi resolve ho ja rhi he to ye micro task queue me jaygi () => {
//   console.log("promise");
// }
// then ye part micro task queue me jayga phir event loop dekhegi micro task queue me kuch he lekin call stack khali nhi he to wo usse pick nhi kregi


// the console.log("End of script");
// console.log("Bye Bye"); call stcak in dono lines ko run krega to out put hoga 
// Start of the script 
// End of script
// Bye Bye

// ab call stack khali ho chuka he to ab event loop sabse phele micro task queue me se execute krma start kregi kyuki microtask queue ki prioerty jada hoti he () => {
//   console.log("promise");
// }
// phir ye line run hogi to output hoga
// Start of the script 
// End of script
// Bye Bye
// promise

// ab call stack bhi khali he or micro task queue bhi 
// () => {
//   console.log("settime out");
// }
// ab ye run hoga to final output hoga 
// Start of the script 
// End of script
// Bye Bye
// promise
// settime out