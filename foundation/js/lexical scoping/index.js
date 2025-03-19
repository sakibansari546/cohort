// // let name = "sakib";

// // function sayName() {
// //   function innerSayName() {
// //     console.log("In sayName : ", name);
// //   }
// //   innerSayName();
// // }
// // sayName();
// // console.log("The value of name : ", name);

// function increment() {
//   let count = [0];
//   return function () {
//     count[0]++;
//     return count;
//   };
// }

// console.log(increment()()); // 1
// console.log(increment()()); // 1
// console.log(increment()()); // 1
// console.log(increment()()); // 1

// // let x = increment();
// // let y = increment();

// // console.log(x()); // 1
// // console.log(x()); // 2
// // console.log(y()); // 1
// // console.log(y()); // 2

// const colorInput = document.querySelector("#colorValue");
// const createBtn = document.querySelector("#createBtn");
// const allColorBtns = document.querySelector("#allColorBtns");

// createBtn.addEventListener("click", () => {
//   if (colorInput.value) createBtnFn();
// });

// const createBtnFn = () => {
//   const colorBtn = document.createElement("button");
//   colorBtn.classList.add(
//     "bg-white",
//     "text-black",
//     "py-2",
//     "px-5",
//     "cursor-pointer"
//   );
//   colorBtn.style.background = colorInput.value;
//   colorBtn.innerText = colorInput.value;

//   allColorBtns.appendChild(colorBtn);
//   colorInput.value = "";
//   colorBtn.addEventListener("click", (e) => {
//     changeBodyBg(e.target);
//   });
// };

// const changeBodyBg = (colorBtn) => {
//   document.body.style.background = colorBtn.innerText;
// };

function createBackgroundChanger(color) {
  // Ye function ek closure return karta hai,
  // jo "color" variable ko capture karta hai.
  return function () {
    document.body.style.background = color;
  };
}

// DOM elements
// const colorInput = document.querySelector("#colorValue");
// const createBtn = document.querySelector("#createBtn");
// const allColorBtns = document.querySelector("#allColorBtns");

// Event listener for create button
// createBtn.addEventListener("click", () => {
//   const color = colorInput.value.trim();
//   if (color !== "") {
//     createColorButton(color);
//     colorInput.value = "";
//   }
// });

// function createColorButton(color) {
//   const colorBtn = document.createElement("button");
//   colorBtn.classList.add("bg-white", "text-black", "py-2", "px-5", "cursor-pointer");
//   colorBtn.style.background = color;
//   colorBtn.innerText = color;

//   // Yahan hum ek closure ke through background change ka function assign kar rahe hain.
//   colorBtn.addEventListener("click", createBackgroundChanger(color));

//   allColorBtns.appendChild(colorBtn);
// }

// Clouser Questions

// Challenge 1: Counter Factory with Closure
// Task:
// Implement a function createCounter() that returns an object with two methods:

// increment(): Increases the counter by 1.
// getValue(): Returns the current counter value.
// Requirements:

// Use closures to encapsulate the counter variable so that it isn’t directly accessible from outside.
// Test by creating two separate counters and ensuring they maintain independent states.

function createCounter() {
  let cuont = 0;
  return {
    increment() {
      cuont++;
      return cuont;
    },
    getValue() {
      return cuont;
    },
  };
}

let count1 = createCounter();
let count2 = createCounter();

// console.log(count1.increment());
// console.log(count1.increment());
// console.log(count1.increment());
// console.log(count1.getValue());
// console.log(count2.increment());
// console.log(count2.increment());
// console.log(count2.getValue());

// Challenge 2: Multiplier Function using Closures
// Task:
// Write a function createMultiplier(factor) that returns a new function. The returned function takes a number as an argument and returns that number multiplied by the given factor.

// Example:

// javascript
// Copy
// Edit
// const double = createMultiplier(2);
// console.log(double(5)); // Output: 10

// const triple = createMultiplier(3);
// console.log(triple(5)); // Output: 15

function createMultiplier(factor) {
  return function (n) {
    return n * factor;
  };
}

// const multiplier1 = createMultiplier(5);
// console.log(multiplier1(4));

// const multiplier2 = createMultiplier(15);
// console.log(multiplier2(4));

// Challenge 3: Custom Implementation of Array.filter
// Task:
// Implement your own version of the Array.prototype.filter() method as myFilter. It should:

// Accept a callback function.
// Return a new array containing only the elements for which the callback returns a truthy value.
// Handle sparse arrays correctly (i.e., skip non-existent elements).
// Hints:

// Use closures if needed.
// Test it on various arrays.

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (cb) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let even = arr.myFilter((value, i) => {
  return value % 2 == 0;
});
// console.log(arr);
// console.log(even);

// Challenge 4: Private Variables Using Closures
// Task:
// Create a function createUser(name, age) that returns an object with two methods:

// getInfo(): Returns a string "Name: <name>, Age: <age>".
// setAge(newAge): Updates the age.
// Requirement:

// The variables name and age should remain private (i.e., not accessible directly from the returned object).

function createUser(name, age) {
  return {
    getInfo() {
      return `Name: ${name}, Age: ${age}`;
    },
    setAge(newAge) {
      age = newAge;
    },
  };
}

const user1 = createUser("Sakib", 18);
const user2 = createUser("Ansari", 20);

// console.log(user1.getInfo());
// user1.setAge(19);
// console.log(user1.getInfo());

// console.log(user2.getInfo());
// user2.setAge(199);
// console.log(user2.getInfo());

// Challenge 5: Prototypal Inheritance with Constructor Functions
// Task:

// Create a constructor function Person(name) that sets the name property. Add a method sayHello() on Person.prototype that logs "Hello, my name is <name>".
// Create another constructor function Student(name, major) that inherits from Person and adds a major property. Also add a method study() on Student.prototype that logs "<name> is studying <major>".
// Ensure that an instance of Student can call both sayHello() and study().
// Hints:

// Use Object.setPrototypeOf() or Object.create() to set up the prototype chain correctly.
// Don’t forget to set the constructor property appropriately.

function Person(name) {
  this.name = name;
  Person.prototype.sayHello = function () {
    console.log(`Hello my name is ${this.name}`);
  };
}

function Student(name, major) {
  this.major = major;
  this.name = name;
  Student.prototype.study = function () {
    console.log(`${this.name} is studying ${this.major}`);
  };
}
Object.setPrototypeOf(Student.prototype, Person.prototype);

const p1 = new Person("Sakib");
const s1 = new Student("Ansari", p1);

s1.study()



// Challenge 6: Memoization using Closures
// Task:
// Implement a function memoize(fn) that takes a function fn as an argument and returns a memoized version of that function. The memoized function should cache results for given arguments so that repeated calls with the same arguments return the cached result instead of recalculating.

// Example:

// javascript

// function slowSquare(n) {
//   // simulate heavy computation
//   for (let i = 0; i < 1e7; i++) {}
//   return n * n;
// }

// const fastSquare = memoize(slowSquare);

// console.time("First call");
// console.log(fastSquare(5)); // 25
// console.timeEnd("First call");

// console.time("Second call");
// console.log(fastSquare(5)); // 25 (should be faster, using cache)
// console.timeEnd("Second call");


function memoize(fn){

}