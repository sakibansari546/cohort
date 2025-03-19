// Map
// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

// Methods and properties are:

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the element (the key/value pair) by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.

let map = new Map();

map.set("1", "String"); // a string key
map.set(1, "Number"); // a numeric key
map.set(true, "Boolean"); // a boolean key

// Every map.set call returns the map itself, so we can “chain” the calls:
map.set("1", "str1").set(1, "num1").set(true, "bool1");

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
// console.log(map.get(1)); // 'num1'
// console.log(map.get("1")); // 'str1'

// console.log(map.size); // 3
// console.log(map);

// Map can also use objects as keys.
let jhon = { name: "jhon" };

// for every user, let's store their visits count
let visitCountMap = new Map();

// Jhon is the key for the map
visitCountMap.set(jhon, 123);

// console.log(visitCountMap.get(jhon.name));
visitCountMap.set(jhon.name, "jhon name in obj");
// console.log(visitCountMap.get("jhon"));

// Using objects as keys is one of the most notable and important Map features. The same does not count for Object. String as a key in Object is fine, but we can’t use another Object as a key in Object.

let name = { name: "name" };
let name2 = { name2: "name2" };

let visitsCountObj = {}; // try to use an object

visitsCountObj[name] = 234; // try to use ben object as the key
visitsCountObj[name2] = 123; // try to use john object as the key, ben object will get replaced

// console.log(visitsCountObj["[object Object]"]);

// Iteration over Map
// For looping over a map, there are 3 methods:

// map.keys() – returns an iterable for keys,
// map.values() – returns an iterable for values,
// map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

// console.log(recipeMap.get("onion"));

for (let vegitable of recipeMap.keys()) {
  //   console.log(vegitable);
}

for (let amount of recipeMap.values()) {
  //   console.log(amount);
}

// iterate over [key, value] entries
for (let entry of recipeMap) {
  //   console.log(entry);
}

// Besides that, Map has a built-in forEach method, similar to Array:
recipeMap.forEach((value, key, map) => {
  //   console.log(`${key}: ${value}`);
});

// Object.entries: Map from Object
// When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization, like this:

// array of [key, value] pairs
let map2 = new Map([
  ["1", "str1"],
  [1, "num1"],
  [true, "bool1"],
]);

// console.log(map2);

// If we have a plain object, and we’d like to create a Map from it, then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.

// So we can create a map from an object like this:

let obj = {
  name: "John",
  age: 30,
};
let map3 = new Map(Object.entries(obj));
// console.log(map3.get("name"));

// Object.fromEntries: Object from Map
// We’ve just seen how to create Map from a plain object with Object.entries(obj).

// There’s Object.fromEntries method that does the reverse: given an array of [key, value] pairs, it creates an object from them:

let prices = Object.fromEntries([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);

// console.log(prices);

// We can use Object.fromEntries to get a plain object from Map.

// E.g. we store the data in a Map, but we need to pass it to a 3rd-party code that expects a plain object.

// Here we go:

let map4 = new Map();
map4.set("banana", 1);
map4.set("orange", 2);
map4.set("meat", 4);
// console.log(map4);

let obj2 = Object.fromEntries(map4.entries()); // make a plain object (*)
// console.log(obj2);

// Set
// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

// Its main methods are:

// new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.

// let set = new Set([1, 1, 2, 3, 4, 5, 6]);
// console.log(set);

// set.add(7);
// set.add(8);
// set.add(9);
// console.log(set);

// The main feature is that repeated calls of set.add(value) with the same value don’t do anything. That’s the reason why each value appears in a Set only once.

// For example, we have visitors coming, and we’d like to remember everyone. But repeated visits should not lead to duplicates. A visitor must be “counted” only once.

// Set is just the right thing for that:
let set = new Set();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// / visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
// console.log(set.size); // 3

for (let user of set) {
  //   console.log(user);
}

// Iteration over Set
// We can loop over a set either with for..of or using forEach:
let set2 = new Set(["oranges", "apples", "bananas"]);
for (let value of set) {
  // console.log(value);
}

// the same with forEach:
set2.forEach((value, valueAgain, set) => {
  //   console.log(value, valueAgain);
});

// Note the funny thing. The callback function passed in forEach has 3 arguments: a value, then the same value valueAgain, and then the target object. Indeed, the same value appears in the arguments twice.

// That’s for compatibility with Map where the callback passed forEach has three arguments. Looks a bit strange, for sure. But this may help to replace Map with Set in certain cases with ease, and vice versa.

// The same methods Map has for iterators are also supported:

// set.keys() – returns an iterable object for values,
// set.values() – same as set.keys(), for compatibility with Map,
// set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.

// Questions
function unique(arr) {
  /* your code */
  let set = new Set(arr);
  let uniqueArr = [];
  set.forEach((value) => {
    uniqueArr.push(value);
  });
  return uniqueArr;
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

// console.log(unique(values)); // Hare, Krishna, :-O

// Question 2nd

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let sortedWord = word.toLowerCase().split("").sort().join("");
    // ------------>NAP  -> nap -> ['n','a', 'p'] -> ['a','n','p'] - 'anp'
    map.set(sortedWord, word);
  }
  return Array.from(map.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

function acleanWithObj(arr) {
  let obj = {};
  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    obj[sorted] = word;
  }
  return Object.values(obj);
}

// console.log(acleanWithObj(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"


// Question 3rd
// We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.

// But that doesn’t work:
// Why? How can we fix the code to make keys.push work?
let map5 = new Map();

map5.set("name", "John");

let keys = Array.from(map5.keys());
// console.log(map5.keys());

// Error: keys.push is not a function
keys.push("more");
// console.log(keys);

