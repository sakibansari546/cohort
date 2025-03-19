// Array Methods---------------


// forEach()

// Array ke har element par ek function execute karta hai.
// Example: arr.forEach((item, index) => { ... });

// map()

// Har element par ek function apply karta hai aur transformed values ka naya array return karta hai.
// Example: let squares = arr.map(num => num * num);

// filter()

// Array ke un elements ko nikalta hai jo specified condition satisfy karte hain.
// Example: let evens = arr.filter(num => num % 2 === 0);

// reduce()

// Array ke elements ko combine karke ek single value (jaise sum, product, etc.) me convert karta hai.
// Example: let sum = arr.reduce((acc, val) => acc + val, 0);
// reduceRight()

// Same as reduce(), lekin array ko right-to-left process karta hai.
// Example: let result = arr.reduceRight((acc, val) => acc + val);
// find()

// Pehla element return karta hai jo callback function ke condition ko satisfy karta hai.
// Example: let found = arr.find(item => item > 10);
// findIndex()

// Pehla element ka index return karta hai jo condition satisfy karta hai, agar nahi milta to -1.
// Example: let idx = arr.findIndex(item => item === target);
// some()

// Check karta hai ki kya array ka koi element condition satisfy karta hai; agar haan to true, warna false.
// Example: let hasEven = arr.some(num => num % 2 === 0);
// every()

// Check karta hai ki kya array ke saare elements condition satisfy karte hain; agar haan to true, warna false.
// Example: let allPositive = arr.every(num => num > 0);
// sort()

// Array ke elements ko sort karta hai (default lexicographical order, ya custom compare function ke saath).
// Example: arr.sort((a, b) => a - b);
// push()

// Array ke end me ek ya zyada elements add karta hai aur updated length return karta hai.
// Example: let newLength = arr.push(newElement);
// pop()

// Array ke end se last element remove karta hai aur us element ko return karta hai.
// Example: let lastItem = arr.pop();
// shift()

// Array ke beginning se pehla element remove karta hai aur us element ko return karta hai.
// Example: let firstItem = arr.shift();
// unshift()

// Array ke beginning me ek ya zyada elements add karta hai aur updated length return karta hai.
// Example: let newLength = arr.unshift(newElement);
// splice()

// Array me se elements ko remove, replace ya insert karta hai.
// Example: arr.splice(startIndex, deleteCount, item1, item2, ...);
// slice()

// Array ka ek shallow copy return karta hai, specified portion se.
// Example: let subArray = arr.slice(start, end);
// concat()

// Do ya zyada arrays (ya values) ko merge karke ek naya array return karta hai.
// Example: let combined = arr1.concat(arr2);
// join()

// Array ke elements ko ek string me join karta hai, separator ke saath.
// Example: let str = arr.join(", ");
// indexOf()

// Pehla occurrence ka index return karta hai agar element milta hai, otherwise -1.
// Example: let idx = arr.indexOf(item);
// lastIndexOf()

// Array me se last occurrence ka index return karta hai, ya -1 agar na mile.
// Example: let idx = arr.lastIndexOf(item);
// includes()

// Check karta hai ki array me koi specific value present hai ya nahi; returns true/false.
// Example: let exists = arr.includes(item);

// flat()

// Nested arrays ko flatten karta hai ek specified depth tak.
// Example: let flattened = arr.flat(depth);

// flatMap()

// Har element par mapping function apply karta hai, phir result ko flatten karta hai ek level tak.
// Example: let result = arr.flatMap(item => [item, item * 2]);





// let tasks = [
// 	{ description: "Write report", completed: false, priority: 2},
// 	{ description: "Send email", completed: true, priority: 3},
// 	{ description: "Prepare presentation", completed: false, priority: 1},
// ];


// let pendingTasks = tasks.filter((task,idx)=>{
//     return !task.completed
// }).sort(pendingTasks);

let movieRatings = [
    { title: "Movie A", ratings: [4, 5, 3] },
    { title: "Movie B", ratings: [5, 5, 4] },
    { title: "Movie C", ratings: [3, 4, 2] },
  ];

  
  let ratingArr = movieRatings.map((ratingObj)=>{
    ratingObj.ratings.reduce((acc,rating)=> {
        return acc = rating
    })
  })