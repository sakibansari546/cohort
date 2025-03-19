// // Assign Method

// const target = { a: 8 };
// const source1 = { b: 3, c: 4 };
// const source2 = { a: 5 };

// console.log(target);
// Object.assign(target, source1, source2);
// console.log(target);

// // Create Method

const person = {
  name: "Ansari",
  greet() {
    console.log("Hello!");
  },
};

const newPerson = Object.create(person);
newPerson.greet();
person.greet();
person.name = "Garima";
newPerson.name = "John";
console.log(newPerson.name);
console.log(person.name);

const newPerson = Object.create(person, {
  name: {
    value: "Sakib",
    enumerable: true,
  },
  age: {
    value: 18,
    enumerable: true,
  },
});

console.log(newPerson.name);

// // Entries
const user = {
  name: "Sakib",
  age: 18,
  city: "Chandigarh",
};

// const entries = Object.entries(user);
// console.log(entries);

// for (let [key, value] of entries) {
//   console.log(`${key}: ${value}`);
// }

// // Object.fromEntries
// const entries = [
//   ["name", "John"],
//   ["age", 30],
//   ["city", "New York"],
// ];

// entries[0][1] = "Sakib";
// let person = Object.fromEntries(entries);
// person.name = "Ansari";
// console.log(person);
// console.log(entries);


// // Object.freeze
// const person = {
//     name: "John",
//     details: {
//       age: 30,
//       city: "New York"
//     }
//   };
  
//   Object.freeze(person);
  
//   // Trying to change the top-level property
//   person.name = "Doe";
//   console.log(person.name); // Output: "John" (change nahi hui)
  
//   // Trying to add a new property
//   person.gender = "Male";
//   console.log(person.gender); // Output: undefined (property add nahi hui)
  
//   // Trying to delete a property
//   delete person.name;
//   console.log(person.name); // Output: "John" (property delete nahi hui)
  
//   // Nested object is not frozen (shallow freeze)
//   person.details.age = 40;
//   console.log(person.details.age); // Output: 40 (nested object modify ho sakta hai)
  
//   // To completely freeze nested objects, aapko recursively freeze karna padega:
//   Object.freeze(person.details);
//   person.details.city = "Los Angeles";
//   console.log(person.details.city); // Output: "New York"
  

